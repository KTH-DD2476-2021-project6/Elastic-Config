import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.ObjectMapper;
import data.Author;
import data.Book;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Path;

public class Parser {
    Ingester ingester;
    public Parser(Ingester ingester) {
        this.ingester = ingester;
    }

    public void parseBooks(Path path) {
        try (var in = new FileInputStream(path.toFile())) {
            var mapper = new ObjectMapper();
            mapper.setAnnotationIntrospector(Ingester.implicitRecordAI);
            var jp = new JsonFactory().createParser(in);
            jp.setCodec(mapper);
            jp.nextToken();
            while (jp.hasCurrentToken()) {
                Book token = jp.readValueAs(Book.class);
                Ingester.books.add(token);
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    public void parseAuthors(Path path) {
        try (var in = new FileInputStream(path.toFile())) {
            var mapper = new ObjectMapper();
            mapper.setAnnotationIntrospector(Ingester.implicitRecordAI);
            var jp = new JsonFactory().createParser(in);
            jp.setCodec(mapper);
            jp.nextToken();
            while (jp.hasCurrentToken()) {
                Author token = jp.readValueAs(Author.class);
                Ingester.authors.add(token);
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
