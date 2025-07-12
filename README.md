# 🎯 PLP Task Manager

A modern task management application built with React, Node.js, Express, and MongoDB. Features include task creation, completion tracking, filtering, and a beautiful responsive UI with dark mode support.

## 🚀 Features

- ✅ **Task Management**: Create, edit, delete, and mark tasks as complete
- ✅ **Real-time Updates**: Tasks sync with MongoDB database
- ✅ **Filtering**: Filter tasks by All, Active, or Completed
- ✅ **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- ✅ **Dark Mode**: Toggle between light and dark themes
- ✅ **Modern Stack**: Built with React 18, Vite, Tailwind CSS, Node.js, Express, and MongoDB

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (for production)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/David-IT2/Task-manager.git
   cd Task-manager
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   
   Create `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
   
   Create `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/task-manager
   NODE_ENV=development
   ```

4. **Start the development servers**
   ```bash
   npm run dev:full
   ```
   
   This will start both frontend (port 5173) and backend (port 5000)

## 🌐 Deployment

### Option 1: Deploy to Vercel (Frontend) + Render (Backend)

#### Backend Deployment on Render

1. **Create a Render account** at [render.com](https://render.com)

2. **Set up MongoDB Atlas**
   - Create a MongoDB Atlas account
   - Create a new cluster
   - Get your connection string
   - Replace `<password>` with your database password

3. **Deploy Backend to Render**
   - Connect your GitHub repository to Render
   - Create a new Web Service
   - Set the following:
     - **Build Command**: `cd backend && npm install`
     - **Start Command**: `cd backend && npm start`
     - **Environment Variables**:
       - `MONGODB_URI`: Your MongoDB Atlas connection string
       - `NODE_ENV`: `production`

4. **Get your Render backend URL** (e.g., `https://your-app.onrender.com`)

#### Frontend Deployment on Vercel

1. **Create a Vercel account** at [vercel.com](https://vercel.com)

2. **Connect your GitHub repository** to Vercel

3. **Set environment variables** in Vercel:
   - `VITE_API_URL`: Your Render backend URL + `/api` (e.g., `https://your-app.onrender.com/api`)

4. **Deploy** - Vercel will automatically detect the Vite configuration and deploy

### Option 2: Deploy Both to Render

1. **Backend**: Follow the same steps as above

2. **Frontend**: Create a Static Site service on Render
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Environment Variables**: Set `VITE_API_URL` to your backend URL

### Option 3: Deploy Both to Vercel

1. **Create a Vercel account** and connect your repository

2. **Set up environment variables**:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `VITE_API_URL`: Will be set automatically

3. **Deploy** - Vercel will handle both frontend and backend

## 🔧 Environment Variables

### Frontend (.env)
```env
VITE_API_URL=https://task-manager-ebon-eight.vercel.app/
```

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/task-manager
NODE_ENV=development
```

## 📁 Project Structure

```
task-manager/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── contexts/          # React contexts
│   └── main.jsx          # App entry point
├── backend/               # Backend source code
│   ├── server.js         # Express server
│   └── package.json      # Backend dependencies
├── public/               # Static assets
├── package.json          # Frontend dependencies
├── vercel.json          # Vercel configuration
├── render.yaml          # Render configuration
└── README.md           # This file
```

## 🚀 Available Scripts

### Root Directory
- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run backend` - Start backend development server
- `npm run dev:full` - Start both frontend and backend
- `npm run install:all` - Install all dependencies

### Backend Directory
- `npm run dev` - Start backend with nodemon
- `npm start` - Start backend in production mode

## 🔌 API Endpoints

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task
- `PATCH /api/tasks/:id/toggle` - Toggle task completion

## 🎨 Features in Detail

### Task Management
- Create tasks with titles and descriptions
- Mark tasks as complete/incomplete
- Delete tasks
- Filter tasks by status

### User Interface
- Clean, modern design with Tailwind CSS
- Dark mode support
- Fully responsive design
- Loading states and error handling

### Data Persistence
- MongoDB database integration
- Real-time data synchronization
- Optimistic updates for better UX

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**David** - [GitHub](https://github.com/David-IT2)

---

⭐ **Star this repository if you found it helpful!** 
