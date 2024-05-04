FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY ./conf/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=2s --timeout=5m --start-period=3s CMD curl -sf http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
