FROM node:10.15
WORKDIR /utilities
ENV NODE_ENV production
ARG SERVICE

ADD package.json yarn.lock /utilities/
ADD packages /utilities/packages
ADD services/$SERVICE /utilities/services/$SERVICE
RUN yarn --production --pure-lockfile

WORKDIR /utilities/services/$SERVICE
ENTRYPOINT [ "./node_modules/.bin/micro", "-l", "tcp://0.0.0.0:80" ]
