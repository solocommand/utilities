#!/bin/bash
docker-compose run \
  --rm \
  --no-deps \
  --workdir /utilities/services \
  manage \
  $@

# docker run -itv `pwd`:/app -v `pwd`/.yarn-cache:/usr/local/share/.cache/yarn -e YARN_CACHE_FOLDER=/app/.yarn-cache -w=/app/services danlynn/ember-cli:3.13.0 new manage --yarn
