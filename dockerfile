FROM node:20-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
FROM nginx:1.17-alpine as public
COPY --from=build /app/public /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]