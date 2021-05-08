import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyName;
import com.fasterxml.jackson.databind.introspect.Annotated;
import com.fasterxml.jackson.databind.introspect.AnnotatedMember;
import com.fasterxml.jackson.databind.introspect.AnnotatedParameter;
import com.fasterxml.jackson.databind.introspect.JacksonAnnotationIntrospector;
import data.Author;
import data.Book;

import java.io.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Queue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.LinkedTransferQueue;

public class Ingester {
    public static JacksonAnnotationIntrospector implicitRecordAI = new JacksonAnnotationIntrospector() {

        @Override
        public PropertyName findNameForDeserialization(Annotated a) {
            PropertyName nameForDeserialization = super.findNameForDeserialization(a);
            // when @JsonDeserialize is used, USE_DEFAULT is default
            // preventing the implicit constructor to be found
            if (PropertyName.USE_DEFAULT.equals(nameForDeserialization)
                    && a instanceof AnnotatedParameter
                    && ((AnnotatedParameter) a).getDeclaringClass().isRecord()) {
                String str = findImplicitPropertyName((AnnotatedParameter) a);
                if (str != null && !str.isEmpty()) {
                    return PropertyName.construct(str);
                }
            }
            return nameForDeserialization;
        }

        @Override
        public String findImplicitPropertyName(AnnotatedMember m) {
            if (m.getDeclaringClass().isRecord()
                    && m instanceof AnnotatedParameter) {
                return m.getDeclaringClass().getRecordComponents()[((AnnotatedParameter) m).getIndex()].getName();
            }
            return super.findImplicitPropertyName(m);
        }
    };
    public LinkedBlockingQueue<Book> books = new LinkedBlockingQueue<>();
    private InputStream bookStream;
    private static String ELASTIC_PATH = "http://localhost:9200/";
    private static String BOOK_INDEX = "book_index/";

    public Ingester() {
        bookStream = new BufferedInputStream(Objects
                .requireNonNull(getClass()
                        .getResourceAsStream("book_test.json")));
    }

    public Ingester(String bookPath) {
        try {
            bookStream = new BufferedInputStream(new FileInputStream(bookPath));
        } catch (IOException ex) {
            ex.printStackTrace();
            System.err.println("Issues with following path");
            System.exit(1);
        }
    }

    public void run(){
        ElasticCaller<Book> bookIndexer = null;
        try {
            bookIndexer = new ElasticCaller<>(books, new URI(ELASTIC_PATH + BOOK_INDEX));

        } catch (URISyntaxException ex) {
            ex.printStackTrace();
            System.exit(1);
        }
        var bookParser = new Parser(bookStream, books);

        bookParser.start();
        bookIndexer.start();

        while (bookParser.isAlive() ||
                bookIndexer.isAlive()) {
            try {
                synchronized (this) {
                    this.wait(10000);
                }
            } catch (InterruptedException ex) {
                System.err.println("Who dares wake me?");
            }
        }

    }

    public static void main(String[] args) {
        var ingester = parseArgs(args);
        ingester.run();
    }

    private static Ingester parseArgs(String[] args) {
        Ingester ingester;
        if (args.length == 0)
            ingester = new Ingester();
        else {
            String bookPath = null;
            for (int i = 0; i < args.length-1; i++) {
                if ("-b".equals(args[i])) {
                    bookPath = args[i + 1];
                }
            }
            if (bookPath == null)
                throw new InvalidPathException(args.toString(), "invalid input");
            ingester = new Ingester(bookPath);
        }
        return ingester;
    }
}
