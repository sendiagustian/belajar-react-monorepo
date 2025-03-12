# build environment
FROM node:22-alpine as build
WORKDIR /app

COPY . ./

RUN if ! command -v yarn > /dev/null; then npm install --global yarn; fi
RUN yarn install --force
RUN yarn run build --filter=./apps/web-main

# production environment
FROM nginx:stable-alpine
WORKDIR /app

COPY --from=build /app/apps/web-main/package.json /app/package.json
COPY --from=build /app/apps/web-main/vite.config.ts /app/vite.config.ts

RUN yarn install --force --production

COPY --from=build /app/apps/web-main/dist /app/dist

EXPOSE 5510
CMD ["yarn", "run", "preview"]
