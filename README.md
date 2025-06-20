YouTube Clone - MERN Stack Project
# YouTube Clone - MERN Stack Project

Project Overview

The YouTube Clone is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The objective of this project is to simulate a simplified version of YouTube, offering users the ability to authenticate, upload videos, browse and watch content, and interact via comments. This project was built as a learning exercise to strengthen my understanding of full-stack development and improve problem-solving through hands-on experience.

Key Features

•	- User Authentication (Signup, Login, Logout) using JWT
•	- Video Upload with title and file
•	- Watch Videos via embedded video player
•	- Comment System (Post and View Comments)
•	- Search functionality for videos by title
•	- Toast Notifications for user feedback (React Toastify)
•	- YouTube-inspired responsive UI using Material UI and custom CSS

Technologies & Libraries Used

Backend:
•	- **Node.js** – JavaScript runtime environment
•	- **Express.js** – Web application framework
•	- **MongoDB** – NoSQL database
•	- **Mongoose** – MongoDB object modeling
•	- **Multer** – Middleware for handling multipart/form-data (video upload)
•	- **JWT (jsonwebtoken)** – Authentication and authorization

Frontend:
•	- **React.js (Vite)** – Frontend framework
•	- **Axios** – For HTTP API requests
•	- **Material UI** – For consistent iconography and component styling
•	- **React Toastify** – For displaying toast notifications
•	- **CSS** – Custom styling for responsive layout

Folder Structure

Root Directory
├── controllers/           # Handles route logic (comment.js, user.js, video.js)
├── middleware/
│   └── authentication.js  # Middleware for JWT verification
├── models/
│   ├── comment.js         # Mongoose schema for comments
│   ├── user.js            # Mongoose schema for users
│   └── video.js           # Mongoose schema for videos
├── routes/
│   ├── comment.js         # Comment-related routes
│   ├── user.js            # User auth routes
│   └── video.js           # Video-related routes
├── index.js               # Backend server entry point
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

Running the Project

Backend Setup
npm install       # Install backend dependencies
npm start         # Start backend server on port 4000

Ensure MongoDB is connected (either locally or via MongoDB Atlas).

Frontend Setup
cd Frontend       # Navigate to frontend folder
npm install       # Install frontend dependencies
npm run dev       # Start Vite development server

The frontend will typically run on http://localhost:5173

API Endpoints

Authentication
•	- POST /auth/signup – Register a new user
•	- POST /auth/login – Authenticate a user

Videos
•	- POST /api/video – Upload a new video
•	- GET /api/allvideo – Retrieve all uploaded videos
•	- GET /api/getVideoById/:id/channel – Get video and channel details
•	- GET /api/:id/channel – Retrieve channel info by video ID

Comments
•	- POST /commentApi/comment – Post a comment
•	- GET /commentApi/comment – Retrieve comments for a video

Learning Outcomes

•	- Deepened understanding of full-stack architecture
•	- Experience with JWT-based user authentication
•	- Applied concepts of file upload handling using Multer
•	- Improved skills in building RESTful APIs with Express
•	- Mastery of frontend design using React and component structuring

Author

**Rishabh Sangal**  
B.Tech CSE | IMS Engineering College  
GitHub: @sangal29

Screenshots (Add as needed)

You can optionally insert screenshots of:
•	- Login / Signup Page
•	- Home Page with video listings
•	- Upload Video Page
•	- Watch Page with embedded video and comments

---

This project was developed for academic purposes to demonstrate my understanding of MERN stack and improve logic building through practical implementation.
