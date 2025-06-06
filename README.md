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

### 4. Running Tests (Frontend)

```sh
cd frontend
npx vitest
```

---


## License

MIT