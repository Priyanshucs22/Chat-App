# ✨ Full Stack Realtime Chat App ✨

This is a fully functional real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js), real-time messaging using Socket.io, global state management with Zustand, and styled with TailwindCSS and DaisyUI.

---

## 🧠 Features

🌟 MERN Stack + Socket.io  
🎨 TailwindCSS + DaisyUI  
🔐 JWT-based Authentication & Authorization  
💬 Real-time messaging with typing indicators  
🟢 Online user presence tracking  
📦 Global state management using Zustand  
⚠️ Error handling on both client and server  
🚀 Ready for deployment (free hosting supported)

---

## 🔧 How to Run the App

```bash
# 1. Clone the project
git clone https://github.com/your-username/chat-app.git
cd chat-app

# 2. Navigate into backend and create a .env file with the following:
MONGODB_URI=""
PORT=""
JWT_SECRET=""
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
NODE_ENV="development"

# 3. Install backend & frontend dependencies
cd backend
npm install

cd ../frontend
npm install

# 4. Build the frontend (React app)
npm run build

# 5. Go back to backend and start the server
cd ../backend
npm start