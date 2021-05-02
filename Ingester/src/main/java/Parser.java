import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.ObjectMapper;
import data.Author;
import data.Book;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.util.Queue;

public abstract class Parser {
    public static void parseBooks(InputStream stream, Queue<Book> books) throws IOException {
            var mapper = new ObjectMapper();
            mapper.setAnnotationIntrospector(Ingester.implicitRecordAI);
            var jp = new JsonFactory().createParser(stream);
            jp.setCodec(mapper);
//            jp.nextToken();
            while (true) {
                Book token = jp.readValueAs(Book.class);
                books.add(token);
            }
    }

    public static void parseAuthors(InputStream stream, Queue<Author> authors) throws IOException {
        var mapper = new ObjectMapper();
        mapper.setAnnotationIntrospector(Ingester.implicitRecordAI);
        var jp = new JsonFactory().createParser(stream);
        jp.setCodec(mapper);
        while(true) {
            Author token = jp.readValueAs(Author.class);
            authors.add(token);
        }
    }
}
