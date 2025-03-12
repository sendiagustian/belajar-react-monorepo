# build environment
FROM node:22-alpine as build
WORKDIR /app

COPY . ./

RUN if ! command -v yarn > /dev/null; then npm install --global yarn; fi
RUN yarn install --force
RUN yarn run build --filter=./apps/web-main

# production environment
FROM node:22-alpine
WORKDIR /app

COPY --from=build /app/apps/web-main/ /app/apps/web-main/
COPY --from=build /app/libs/ /app/libs

COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/yarn.lock /app/yarn.lock
COPY --from=build /app/turbo.json /app/turbo.json
COPY --from=build /app/package.json /app/package.json

RUN cd /app/apps/web-main

EXPOSE 5510
