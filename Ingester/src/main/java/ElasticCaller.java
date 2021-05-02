import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.glassfish.jersey.client.ClientResponse;

import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import java.lang.reflect.ParameterizedType;
import java.net.URI;
import java.util.Objects;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;

public class ElasticCaller<T> extends Thread{

    private final LinkedBlockingQueue<T> queue;
    private final ObjectMapper mapper = new ObjectMapper();
    private final WebTarget resource;

    public ElasticCaller(LinkedBlockingQueue<T> queue, URI uri) {
        this.queue = queue;
        mapper.setAnnotationIntrospector(Ingester.implicitRecordAI);
        resource = ClientBuilder.newClient().target(uri);
    }



    @Override
    public void run() {
//        var generator = new JsonFactory().createGenerator();
        int i = 0;
        try {
            while (true) {
                var e = queue.poll(1, TimeUnit.MINUTES);
                if (e==null)
                    return;
                try {
                    var jsonString = mapper.writeValueAsString(e);
                    var request = resource.request();
                    var response = request.accept(MediaType.APPLICATION_JSON_TYPE)
                            .post(Entity.json(jsonString));
                    if (response.getStatus()/100 != 2) {
                        synchronized (this) {
                            System.err.println(response.getStatusInfo().getReasonPhrase());
                        }
                    } else {
                        i++;
                    }
                    if (i%5 == 0) {
                        synchronized (this) {
                            System.out.println("indexed " + i + " documents");
                        }
                    }
                } catch (JacksonException ex) {
                    System.err.println("Unable to serialize object " + e.toString());
                }
            }
//        } catch (IOException ex)  {

        } catch (InterruptedException ex) {
            System.err.println("Nothing more in queue " + queue.getClass().getName());
        }
    }
}
