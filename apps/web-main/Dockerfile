# build environment
FROM node:22-alpine as build
WORKDIR /app

COPY . ./

RUN yarn install --force
RUN yarn run build --filter=./apps/web-main

# production environment
FROM node:22-alpine
WORKDIR /app

COPY --from=build /app/apps/web-main/dist /app/apps/web-main/dist
COPY --from=build /app/apps/web-main/node_modules /app/apps/web-main/node_modules
COPY --from=build /app/apps/web-main/package.json /app/apps/web-main/package.json
COPY --from=build /app/apps/web-main/vite.config.ts /app/apps/web-main/vite.config.ts
COPY --from=build /app/libs/ /app/libs

COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/yarn.lock /app/yarn.lock
COPY --from=build /app/turbo.json /app/turbo.json
COPY --from=build /app/package.json /app/package.json


EXPOSE 5510

CMD ["yarn", "run", "start:web-main"]