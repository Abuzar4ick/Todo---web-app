<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>✨ Full-Stack Todo App with Auth & Zustand ✨</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f9fafb;
      color: #111827;
      line-height: 1.6;
      margin: 0;
      padding: 0;
    }
    header {
      background: linear-gradient(90deg, #6366f1, #4f46e5);
      color: white;
      padding: 25px 0;
      text-align: center;
      font-size: 1.8rem;
    }
    .container {
      max-width: 900px;
      margin: 30px auto;
      padding: 0 20px;
    }
    h2 {
      color: #1e293b;
      margin-top: 40px;
      border-bottom: 2px solid #4f46e5;
      padding-bottom: 6px;
    }
    ul {
      list-style: disc;
      margin-left: 20px;
    }
    pre {
      background-color: #e0e7ff;
      padding: 10px;
      border-radius: 6px;
      overflow-x: auto;
    }
    a {
      color: #4f46e5;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    footer {
      text-align: center;
      padding: 20px 0;
      margin-top: 50px;
      color: #64748b;
    }
  </style>
</head>
<body>

<header>✨ Full-Stack Todo App with Auth & Zustand ✨</header>

<div class="container">
  <section>
    <h2>Highlights:</h2>
    <ul>
      <li>🔐 Custom JWT Authentication (no 3rd-party auth)</li>
      <li>⚡ Full CRUD Todo Functionality</li>
      <li>🟢 User-specific Task Management</li>
      <li>📨 Welcome Emails on Signup (if implemented)</li>
      <li>🧰 REST API with Node.js & Express</li>
      <li>🧱 PostgreSQL / SQLite / MongoDB for Data Persistence</li>
      <li>🎨 Beautiful UI with React, Tailwind CSS & Zustand</li>
      <li>🧑‍💻 Git & GitHub Workflow (branches, PRs, merges)</li>
      <li>🚀 Easy Deployment (Vercel + Render free-tier friendly)</li>
    </ul>
  </section>

  <section>
    <h2>Backend (.env Setup)</h2>
    <pre>
PORT=3000
MONGO_URI=your_mongo_uri_here
NODE_ENV=development
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
    </pre>
  </section>

  <section>
    <h2>🔧 Run the Backend</h2>
    <pre>
cd backend
npm install
npm run dev
    </pre>
  </section>

  <section>
    <h2>💻 Run the Frontend</h2>
    <pre>
cd frontend
npm install
npm run dev
    </pre>
  </section>

  <section>
    <h2>Next Steps / Ideas:</h2>
    <ul>
      <li>🟢 Filter & Search for Tasks</li>
      <li>🟢 Pagination</li>
      <li>🟢 Dark Mode Toggle</li>
      <li>🟢 Role-based Access (Admin/User)</li>
      <li>🟢 Deploy full-stack app with free-tier services</li>
    </ul>
  </section>
</div>

<footer>&copy; 2025 Full-Stack Todo App | Developed by Abuzar</footer>

</body>
</html>
