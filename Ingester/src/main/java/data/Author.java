package data;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.net.URI;
import java.util.List;

public record Author (
        @JsonProperty URI url,
        @JsonProperty String name,
        @JsonProperty String birth_date,
        @JsonProperty List<String> genres,
        @JsonProperty float avg_rating,
        @JsonProperty int num_reviews,
        @JsonProperty int num_ratings,
        @JsonProperty String about
) {}