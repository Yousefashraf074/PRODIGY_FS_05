# Production Dockerfile for Express.js backend
# Multi-stage build for optimized image
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install --frozen-lockfile
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app .
EXPOSE 5000
CMD ["npm", "start"]
