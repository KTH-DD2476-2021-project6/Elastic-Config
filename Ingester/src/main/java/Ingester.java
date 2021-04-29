import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyName;
import com.fasterxml.jackson.databind.introspect.Annotated;
import com.fasterxml.jackson.databind.introspect.AnnotatedMember;
import com.fasterxml.jackson.databind.introspect.AnnotatedParameter;
import com.fasterxml.jackson.databind.introspect.JacksonAnnotationIntrospector;
import data.Author;
import data.Book;

import java.net.URI;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

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

    public static List<Book> books = new ArrayList<>();
    public static List<Author> authors = new ArrayList<>();
    private static final String test = """
            {
                "url": "https://www.goodreads.com/author/show/1476.Doris_Kearns_Goodwin",
                "name": "Doris Kearns Goodwin",
                "birth_date": "1943-01-04 00:00:00",
                "genres": [
                    "Biographies & Memoirs",
                    "History",
                    "Nonfiction"
                ],
                "avg_rating": 4.21,
                "num_reviews": 14071,
                "num_ratings": 254438,
                "about": "test"
            }""";
    private static final String test2 = """
            {
                "url": "https://www.goodreads.com/book/show/2199.Team_of_Rivals",
                "title": "Team of Rivals: The Political Genius of Abraham Lincoln",
                "author": "Doris Kearns Goodwin",
                "num_ratings": 164350,
                "num_reviews": 7315,
                "avg_rating": 4.24,
                "num_pages": 916,
                "language": "English",
                "publish_date": "2006-09-26 00:00:00",
                "original_publish_year": 2005,
                "genres": [
                    "North American Hi...",
                    "American History",
                    "History",
                    "Audiobook",
                    "Historical",
                    "Civil War",
                    "Biography",
                    "Presidents",
                    "Leadership",
                    "Politics",
                    "Military History",
                    "Nonfiction"
                ],
                "awards": [
                    "Benjamin Barondess Award (2006)",
                    "Lincoln Prize (2006)",
                    "National Book Critics Circle Award Nominee for Biography (2005)",
                    "New-York Historical Society American History Book Prize"
                ],
                "characters": [
                    "Abraham Lincoln",
                    "William H. Seward",
                    "Edwin McMasters Stanton",
                    "Salmon P. Chase",
                    "Edward Bates"
                ],
                "places": [
                    "Springfield, Illinois",
                    "Chicago, Illinois",
                    "Illinois"
                ],
                "isbn": "0743270754",
                "isbn13": "9780743270755",
                "rating_histogram": {
                    "5": 89209,
                    "4": 44984,
                    "3": 17493,
                    "2": 6235,
                    "1": 6429
                }
                }""";

    public Ingester() {
        Parser parser = new Parser(this);
        String test = Objects.requireNonNull(getClass().getResource("book_test.json")).getPath();
        String test2 = Objects.requireNonNull(getClass().getResource("author_test.json")).getPath();
        Path bookspath = Paths.get(URI.create(test)).toAbsolutePath();
        Path authspath = Paths.get(URI.create(("./src/main/java/resources/author_test.json"))).toAbsolutePath();
        System.out.println(Paths.get(test).toAbsolutePath());
        parser.parseBooks(bookspath);
        for (var book : books) {
            System.err.println(book);
        }
    }

    public static void main(String[] args) {
        new Ingester();
    }

}
