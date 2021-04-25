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

Do this by running these requests from terminal

```curl -X PUT --data "@./author_template.json" -H "Content-Type: application/json" "http://localhost:9200/author_index"```

```curl -X PUT --data "@./book_template.json" -H "Content-Type: application/json" "http://localhost:9200/book_index"```

or do put requests to the same endpoints with Postman

## Indexing files
