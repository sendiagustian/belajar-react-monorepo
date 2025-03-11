# build environment
FROM node:22-alpine as build
WORKDIR /app

COPY . ./

RUN if ! command -v yarn > /dev/null; then npm install --global yarn; fi
RUN yarn install --force
RUN yarn run build

# production environment
FROM nginx:stable-alpine
WORKDIR /app
COPY --from=build /app/apps/web-main/dist /app/dist
COPY --from=build /app/apps/web-main/nginx.conf /etc/nginx/nginx.conf
EXPOSE 5510
CMD ["nginx", "-g", "daemon off;"]
