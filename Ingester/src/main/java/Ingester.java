import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyName;
import com.fasterxml.jackson.databind.introspect.Annotated;
import com.fasterxml.jackson.databind.introspect.AnnotatedMember;
import com.fasterxml.jackson.databind.introspect.AnnotatedParameter;
import com.fasterxml.jackson.databind.introspect.JacksonAnnotationIntrospector;
import data.Author;

import java.io.IOException;

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
    public static void main(String[] args) {
        System.err.println("Hello world");
        ObjectMapper mapper = new ObjectMapper();
        mapper.setAnnotationIntrospector(Ingester.implicitRecordAI);
        String test = """
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
        try {
            Author auth = mapper.readValue(test, Author.class);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
