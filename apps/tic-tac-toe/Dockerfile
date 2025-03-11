# build environment
FROM node:22-alpine as build
WORKDIR /app

COPY . ./

RUN if ! command -v yarn > /dev/null; then npm install --global yarn; fi
RUN yarn install --force
RUN yarn run build --filter=./apps/tic-tac-toe

# production environment
FROM nginx:stable-alpine
WORKDIR /app
COPY --from=build /app/apps/tic-tac-toe/dist /etc/nginx/html/
COPY --from=build /app/apps/tic-tac-toe/nginx.conf /etc/nginx/nginx.conf
EXPOSE 5512
CMD ["nginx", "-g", "daemon off;"]
