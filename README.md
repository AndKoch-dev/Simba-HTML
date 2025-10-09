# 🦁 Simba HTML App

A simple multi-container project built with **HTML, CSS, Nginx, Alpine API, and PostgreSQL**, fully Dockerized and managed via **Docker Compose**.  
This project demonstrates how to connect a frontend, backend API, and database within an isolated Docker environment.

---

## 🚀 Project Structure

```
Simba-HTML/
│
├── alpine-server/           # Simple API built on Alpine (httpd)
├── css/                     # Styles
├── images/                  # Static images
├── nginx-proxy/             # Nginx reverse proxy configuration
├── .github/workflows/       # GitHub Actions CI/CD configuration
│   └── docker.yml
│
├── docker-compose.yml       # Main Docker Compose configuration
├── Dockerfile               # Frontend build
├── package.json             # For build/automation tasks (npm)
└── index.html               # Main HTML page
```

---

## ⚙️ Requirements

Before running the project, make sure you have installed:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## 🐳 Run Locally

```bash
git clone https://github.com/AndKoch-dev/Simba-HTML.git
cd Simba-HTML
docker-compose up -d --build
```

Once the containers are up, open in your browser:

👉 [http://localhost:8081](http://localhost:8081)

---

## 🧩 Containers Overview

| Container        | Description                      | Port |
|------------------|----------------------------------|------|
| `nginx-proxy` | Reverse proxy for the app        | 8081 |
| `simba-html`  | Frontend (HTML/CSS)              | 80   |
| `alpine-api`  | Simple backend API (Alpine)      | —    |
| `postgres-db`    | PostgreSQL database              | 5432 |

---

## 🔄 CI/CD Pipeline (GitHub Actions)

The CI/CD pipeline is defined in:
```
.github/workflows/docker.yml
```

It performs:
- Workflow syntax validation  
- Docker image build & test  
- Future deployment support (Docker Hub / VPS server)

---

## 🔗 API Endpoints Example

| Endpoint | Method | Description | Example Response |
|-----------|---------|-------------|------------------|
| `/api` | GET | Check API connection | `API is working` |
| `/api/users` | GET | List of users | `[{"id":1,"name":"Alice","email":"alice@mail.com"},{"id":2,"name":"Bob","email":"bob@mail.com"}]` |

---

## 🧠 Author

**Ando Kocharyan**  
📧 [GitHub: AndKoch-dev](https://github.com/AndKoch-dev)

---

## 🪄 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute it for personal or educational purposes.

