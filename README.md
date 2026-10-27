# TaskFlow — Task Manager

A full-stack task management application built with the MERN stack. It helps users organize tasks, track progress, set priorities and due dates, and review task statistics from a dashboard.

> Update this README to reflect the features you have personally verified and any changes you make to the project. Review the original repository's license and preserve any required attribution notices.

## Features

- User registration and login
- JWT-based authentication
- Create, view, edit, and delete tasks
- Task statuses: To Do, In Progress, and Completed
- Priority levels: Low, Medium, High, and Urgent
- Task categories and due dates
- Search, filtering, and sorting
- Dashboard statistics and completion rate
- Kanban board and grid views
- REST API with centralized error handling

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite, React Router, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JSON Web Tokens, bcryptjs |
| Styling | CSS |
| API testing | Postman or VS Code REST Client |

## Project Structure

```text
03-task-manager-app/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env.example
│   └── package.json
└── frontend/
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   └── styles/
    ├── index.html
    └── package.json
```

## Prerequisites

- Node.js 18 or newer
- npm
- MongoDB, if using persistent database storage

## Run Locally

Open two terminals in VS Code.

### 1. Start the backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory using `.env.example` as a guide. Configure your database URI and a strong, private JWT secret. Do not commit `.env` or real credentials.

Then start the server:

```bash
npm run dev
```

Check the backend terminal for the port it reports. The default configuration in this project may use port `5002`.

### 2. Start the frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite in the terminal. The configured development port may be `5175`.

## Environment Variables

Refer to `backend/.env.example` for the exact variable names expected by the application. Common settings include:

```env
PORT=5002
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/task_manager_app
JWT_SECRET=replace_with_a_long_random_secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5175
```

Use the variable names expected by your backend code. If your project uses `MONGODB_URI` instead of `MONGO_URI`, update the example accordingly. Never use the sample secret in a public or deployed environment.

## API Overview

The API base URL depends on the backend port and route configuration. If the backend runs on port `5002` and mounts routes under `/api`, the base URL is:

```text
http://localhost:5002/api
```

Typical endpoints in this project include:

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/health` | Check server health |
| POST | `/auth/register` | Register an account |
| POST | `/auth/login` | Log in and receive a token |
| GET | `/auth/me` | Retrieve the current user's profile |
| GET | `/tasks` | List tasks and apply supported filters |
| POST | `/tasks` | Create a task |
| GET | `/tasks/:id` | Retrieve one task |
| PUT | `/tasks/:id` | Update a task |
| PATCH | `/tasks/:id/status` | Update task status |
| DELETE | `/tasks/:id` | Delete a task |

Confirm endpoint paths and supported query parameters in the backend route files before relying on this table.

## Testing

- Register an account and log in.
- Create, update, complete, and delete tasks.
- Test search, filters, sorting, priorities, and due dates.
- Verify that protected API endpoints reject requests without a valid token.
- Test the API using the included HTTP requests file or a Postman collection, if present.

## Future Improvements

- Add automated unit and integration tests.
- Add pagination for large task lists.
- Improve accessibility and mobile responsiveness.
- Add deployment instructions and a live demo link.
- Add task reminders or collaboration features.

## License and Attribution

Check the license supplied with the source project and comply with its terms, including any attribution or notice requirements. Describe your own modifications accurately; do not claim features or work you have not implemented or tested.
