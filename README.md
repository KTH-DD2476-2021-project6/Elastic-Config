# Elastic-Config
This will be the config files we'll need for our search engine.

## Getting Started

It is recommended that you use Docker to start up Elastic Search. Once you've installed/updated docker, you can follow
run the startDocker.sh script to start your instance. This is just for initial startup when you want to create a new
search engine. If you've already started one, you should be able to see it through `docker ps`. If you're not seeing it
there, look in `docker ps -a`. If it exists there, it's merely stopped and can be started again through `docker start
"container-name"`.

When your container is up and running, you'll want to create the indexes we'll be using. Once an index has been created,
its mappings can only be added to, and not changed later. Now let's create our indexes:

Do this by running this request from terminal

```curl -X PUT --data "@./book_template.json" -H "Content-Type: application/json" "http://localhost:9200/book_index"```

or do put requests to the same endpoints with Postman

## Indexing files

To ingest the books into Elasticsearch, make sure that the data-repository has been cloned, and run the following
command pointing to that repository. 

```java -jar Ingester-1.0.jar -b "$PWD/book_goodversion.jl"```

Please use absolute paths since Java might have issues on some systems to follow relative paths with spaces

It'll parse the data and in parallell start indexing the books. The port 9200 is hardcoded into the code, so please do
not change the docker settings mentioned higher up.  

## Front-end startup

Please go to the front-end folder and follow the instructions in the separate README which is there

