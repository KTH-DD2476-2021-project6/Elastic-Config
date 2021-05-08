package data;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.net.URI;
import java.util.HashMap;
import java.util.List;

public record Book(
        @JsonProperty URI url,
        @JsonProperty String title,
        @JsonProperty String author,
        @JsonProperty String num_ratings,
        @JsonProperty String num_reviews,
        @JsonProperty String avg_rating,
        @JsonProperty String num_pages,
        @JsonProperty String language,
        @JsonProperty String publish_date,
        @JsonProperty String original_publish_year,
        @JsonProperty List<String> genres,
        @JsonProperty List<String> awards,
        @JsonProperty List<String> characters,
        @JsonProperty List<String> places,
        @JsonProperty String isbn,
        @JsonProperty String series,
        @JsonProperty String isbn13,
        @JsonProperty String asin,
        @JsonProperty HashMap<Integer, Integer> rating_histogram
) {
}
