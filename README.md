<h1 align="center">✨ Full-Stack Todo Web App with Auth & Emails ✨</h1>

<main class="container mx-auto p-6">
  <section class="my-8">
    <h2 class="text-xl font-semibold border-b-2 border-indigo-600 pb-2 mb-4">Highlights</h2>
    <ul class="list-disc ml-6 space-y-2">
      <li>🔐 Custom JWT Authentication</li>
      <li>⚡ Full CRUD Todo Functionality</li>
      <li>🟢 User-specific Task Management</li>
      <li>🧰 REST API with Node.js & Express</li>
      <li>🧱 MongoDB for Data Persistence</li>
      <li>🎨 Beautiful UI with React, Tailwind CSS & Zustand</li>
      <li>🚀 Easy Deployment (Sevalla free-tier friendly)</li>
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
</main>

<footer class="text-center py-6 text-gray-500">
  &copy; 2025 Full-Stack Todo App | Developed by Abuzar
</footer>
