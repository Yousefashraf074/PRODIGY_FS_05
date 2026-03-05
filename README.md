
# ConnectSphere

Production-grade Social Media Platform

---

## Overview

ConnectSphere is a scalable, production-grade social media platform built with modern full-stack and DevOps best practices. It is designed for startup-level scalability, clean architecture, and production readiness.

---

## Features

- Authentication (JWT), user profiles, posts, social graph (follow/unfollow), notifications, trending, search
- Real-time updates (Socket.io), secure RESTful APIs, scalable and modular architecture
- Centralized error handling, logging, health checks, rate limiting, CORS, Helmet, Zod validation
- File uploads (Multer, Cloudinary/S3), dark/light theme, upload UI
- Monitoring (Prometheus), CI/CD, Docker, Kubernetes

---

## Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- ShadCN UI
- React Query, Axios
- JWT Auth, upload UI, dark/light theme

**Backend:**
- Node.js, Express.js, TypeScript
- PostgreSQL (Prisma ORM)
- Redis
- JWT Auth, bcrypt
- Multer, Cloudinary/S3
- Socket.io

**DevOps:**
- Docker, Docker Compose, Nginx
- CI/CD (GitHub Actions)
- Kubernetes (manifests for deployment, services, ingress, configmaps, secrets, autoscalers)
- Winston logging, Prometheus monitoring

---

## Architecture

- **Clean Architecture:** Modular separation of concerns for scalability and maintainability
- **Multi-stage Docker builds:** Optimized images for frontend and backend
- **Nginx Reverse Proxy:** Routes /api to backend, all else to frontend
- **Kubernetes:** Orchestration, autoscaling, and production deployment
- **Security:** JWT, rate limiting, Helmet, CORS, Zod validation
- **Testing:** Jest, Supertest, mock services

---

## Project Structure

- `/frontend` - Next.js 14 app (UI, pages, components, context)
- `/backend` - Express.js app (API, controllers, routes, models, middleware, services, sockets, config, tests)
- `/docker` - Docker Compose, Nginx config
- `/k8s` - Kubernetes manifests (deployments, services, ingress, configmaps, secrets, autoscalers)
- `/.github/workflows` - CI/CD pipeline (GitHub Actions)
- `/docs` - Documentation (overview, architecture, API)

---

## Getting Started

1. Clone the repo: `git clone https://github.com/Yousefashraf074/PRODIGY_FS_05.git`
2. See `/docs/overview.md` for architecture and API details
3. See `/docker` and `/k8s` for deployment configs
4. See `/frontend/README.md` and `/backend/README.md` for local development

---

## Nginx Reverse Proxy Example

```
upstream frontend {
	server frontend:3000;
}
upstream backend {
	server backend:5000;
}

server {
	listen 80;
	server_name localhost;

	location /api/ {
		proxy_pass http://backend:5000/api/;
		...
	}
	location / {
		proxy_pass http://frontend:3000/;
		...
	}
}
```

---

## Documentation

- `/docs/overview.md` - Full architecture, features, and tech stack
- `/backend/README.md` - Backend folder structure and API
- `/frontend/README.md` - Frontend usage and Next.js info
- `.github/copilot-instructions.md` - Copilot and project automation instructions

---

## License

MIT
