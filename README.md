<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>✨ Full-Stack Todo App Portfolio ✨</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.3/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-50 text-gray-800">

<header class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8 text-center text-2xl font-bold shadow-lg">
  ✨ Full-Stack Todo App with Auth & Zustand ✨
</header>

<main class="container mx-auto p-6">
  <section class="my-8">
    <h2 class="text-xl font-semibold border-b-2 border-indigo-600 pb-2 mb-4">Highlights</h2>
    <ul class="list-disc ml-6 space-y-2">
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

  <section class="my-8">
    <h2 class="text-xl font-semibold border-b-2 border-indigo-600 pb-2 mb-4">Backend (.env Setup)</h2>
    <pre class="bg-indigo-100 p-4 rounded-lg overflow-x-auto">
PORT=3000
MONGO_URI=your_mongo_uri_here
NODE_ENV=development
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
    </pre>
  </section>

  <section class="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <h2 class="text-lg font-semibold mb-3">🔧 Run the Backend</h2>
      <pre>cd backend
npm install
npm run dev</pre>
    </div>
    <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <h2 class="text-lg font-semibold mb-3">💻 Run the Frontend</h2>
      <pre>cd frontend
npm install
npm run dev</pre>
    </div>
  </section>

  <section class="my-8">
    <h2 class="text-xl font-semibold border-b-2 border-indigo-600 pb-2 mb-4">Next Steps / Ideas</h2>
    <ul class="list-disc ml-6 space-y-2">
      <li>🟢 Filter & Search for Tasks</li>
      <li>🟢 Pagination</li>
      <li>🟢 Dark Mode Toggle</li>
      <li>🟢 Role-based Access (Admin/User)</li>
      <li>🟢 Deploy full-stack app with free-tier services</li>
    </ul>
  </section>
</main>

<footer class="text-center py-6 text-gray-500">
  &copy; 2025 Full-Stack Todo App | Developed by Abuzar
</footer>

</body>
</html>
