# 1) Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2) Runtime stage (nginx)
FROM nginx:alpine
# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html
# Healthcheck (optional)
HEALTHCHECK CMD wget -qO- http://localhost:80 || exit 1
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
