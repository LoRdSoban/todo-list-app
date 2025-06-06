# Todo List App

A full-stack Todo List application built with React (Vite) for the frontend and Node.js/Express for the backend.

## Features

- Add, toggle, and delete tasks
- Responsive UI with scrollable task list
- RESTful API backend

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) (for containerized setup, optional)

---

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app
```

---

### 2. Install Dependencies

#### Backend

```sh
cd backend
npm install
```

#### Frontend

```sh
cd ../frontend
npm install
```

---

### 3. Start the Development Servers

#### Start Backend

```sh
cd backend
node server.js
```
- The backend will start on [http://localhost:5000](http://localhost:5000) (or as configured).

#### Start Frontend

Open a new terminal:

```sh
cd frontend
npm run dev
```
- The frontend will start on [http://localhost:5173](http://localhost:5173) (or as configured).

---

### 4. Running Tests

#### Frontend Tests

```sh
cd frontend
npx vitest
```

#### Backend Tests

```sh
cd backend
npm test
```

---

### 5. Dockerized Setup (Optional)

You can run the entire stack using Docker and Docker Compose:

```sh
docker-compose up --build
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:5000](http://localhost:5000)
- MongoDB: [localhost:27017](mongodb://localhost:27017)

---

## License

MIT