

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
 
 
</head>
<body>

  <h1>YouTube Clone - MERN Stack Project</h1>

  <p><strong>Author:</strong> Rishabh Sangal</p>
  <p><strong>GitHub Repository:</strong> 
    <a href="https://github.com/sangal29/Youtube_clone" target="_blank">https://github.com/sangal29/Youtube_clone</a>
  </p>

  <h2>Project Overview</h2>
  <p>This is a personal project I built to practice and solidify my MERN stack skills. It's a fully functional YouTube clone that allows users to register, upload and view videos, interact through comments, and explore channels — all designed with a clean, responsive UI inspired by YouTube.</p>
  <p>The goal was to deepen my understanding of backend API development, frontend component design, authentication, media handling, and seamless integration across the full stack.</p>

  <h2>Features</h2>
  <ul>
    <li>🔐 User Authentication (Signup, Login, Logout) with JWT</li>
    <li>📤 Upload Videos with titles and thumbnails using Multer</li>
    <li>🎬 Watch Videos via embedded video player</li>
    <li>👍 Like / 👎 Dislike functionality</li>
    <li>💬 Post and Read Comments</li>
    <li>📺 Channel Creation with video management</li>
    <li>🔎 Search videos by title</li>
    <li>🏷️ Filter videos based on categories</li>
    <li>🔔 Toast Notifications using React Toastify</li>
    <li>📱 Fully Responsive Design using Material UI + CSS</li>
  </ul>

  <h2>Tech Stack</h2>

  <h3>Frontend</h3>
  <ul>
    <li>React.js (Vite)</li>
    <li>React Router</li>
    <li>Axios</li>
    <li>Material UI</li>
    <li>React Toastify</li>
    <li>CSS</li>
  </ul>

  <h3>Backend</h3>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB</li>
    <li>Mongoose</li>
    <li>Multer</li>
    <li>JWT (jsonwebtoken)</li>
  </ul>

  <h2>Folder Structure</h2>
  <pre>
Root Directory
├── controllers/           # comment.js, user.js, video.js
├── middleware/
│   └── authentication.js  # JWT middleware
├── models/
│   ├── comment.js
│   ├── user.js
│   └── video.js
├── routes/
│   ├── comment.js
│   ├── user.js
│   └── video.js
├── index.js               # Entry point
└── Frontend/
    └── src/
        ├── components/
        │   ├── HomePage/
        │   ├── Login/
        │   ├── Navbar/
        │   └── Sidebar/
        ├── pages/
        │   ├── Home/
        │   ├── Profile/
        │   ├── Signup/
        │   └── Video/
        ├── App.js
        └── main.js
  </pre>

  <h2>Getting Started</h2>

  <h3>Backend Setup</h3>
  <pre>
npm install
npm start
  </pre>
  <p>Make sure MongoDB is running locally or connected via Atlas.</p>

  <h3>Frontend Setup</h3>
  <pre>
cd Frontend
npm install
npm run dev
  </pre>
  <p>Frontend runs on: <code>http://localhost:5173</code></p>

  <h2>API Endpoints Overview</h2>

  <h3>Auth</h3>
  <ul>
    <li>POST <code>/auth/signup</code> – Register user</li>
    <li>POST <code>/auth/login</code> – Login</li>
  </ul>

  <h3>Videos</h3>
  <ul>
    <li>POST <code>/api/video</code> – Upload a video</li>
    <li>GET <code>/api/allvideo</code> – Fetch all videos</li>
    <li>GET <code>/api/getVideoById/:id/channel</code> – Fetch video and channel info</li>
    <li>GET <code>/api/:id/channel</code> – Channel by ID</li>
  </ul>

  <h3>Comments</h3>
  <ul>
    <li>POST <code>/commentApi/comment</code> – Add comment</li>
    <li>GET <code>/commentApi/comment</code> – Get comments</li>
  </ul>

  <h2>What I Learned</h2>
  <ul>
    <li>Creating a full-stack project from scratch</li>
    <li>Managing video uploads and file storage</li>
    <li>Securing APIs using JWT</li>
    <li>Using Material UI to build consistent, responsive interfaces</li>
    <li>Handling form data and file uploads with Multer</li>
    <li>Building a clean, modular folder structure</li>
  </ul>

 

  <p><strong>Thanks for reading!</strong> If you'd like to explore the code or try it out, visit the GitHub repo linked at the top.</p>

</body>
</html>
