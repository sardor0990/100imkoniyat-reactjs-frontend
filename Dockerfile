FROM node:20-alpine as builder
WORKDIR /app
COPY . .
RUN npm install -g npm@10.5.2
RUN npm install
RUN npm run build

# ==== RUN =======
FROM nginx:1.24.0-alpine as production
ENV NODE_ENV production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
