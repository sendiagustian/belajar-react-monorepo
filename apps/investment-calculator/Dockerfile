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
COPY --from=build /app/apps/investment-calculator/dist /app/dist
COPY --from=build /app/apps/investment-calculator/nginx.conf /etc/nginx/nginx.conf
EXPOSE 5513
CMD ["nginx", "-g", "daemon off;"]
