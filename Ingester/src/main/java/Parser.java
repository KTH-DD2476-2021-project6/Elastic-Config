import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.ObjectMapper;
import data.Author;
import data.Book;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.util.Queue;

public class Parser extends Thread {
    Queue<Book> queue;
    InputStream stream;
    public Parser(InputStream stream, Queue<Book> books) {
        this.queue = books;
        this.stream = stream;
    }

    @Override
    public void run() {
        try {
            parseBooks();
        }
        catch (IOException ex) {
            System.err.println("Parsed books");
        }
    }
    public void parseBooks() throws IOException {
            var mapper = new ObjectMapper();
            mapper.setAnnotationIntrospector(Ingester.implicitRecordAI);
            var jp = new JsonFactory().createParser(stream);
            jp.setCodec(mapper);
            while (true) {
                Book token = jp.readValueAs(Book.class);
                queue.add(token);
            }
    }
}
