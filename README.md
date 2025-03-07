# Greeting App (MERN Stack)

A simple MERN (MongoDB, Express, React, Node.js) application that takes a user's name as input and fetches a personalized greeting message from an API.


## 🌟 Features
- Frontend: Built with React and Tailwind CSS.
- Backend: Uses Node.js & Express.js.
- API Integration: Fetches greeting messages from the backend.
- Error Handling: Displays appropriate error messages if no name is entered.
- Fully Responsive: Works well on mobile and desktop.


## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/tiwariharshitraj14/GreetingUI.git
cd GreetingUI
```

---

## 🚀 Backend Setup (Node.js & Express)

1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```
4. The backend will run on:  
   ```
   http://localhost:5000
   ```


## 🎨 Frontend Setup (React)

1. Navigate to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm run dev
   ```
4. The frontend will run on:  
   ```
   http://localhost:5173
   ```


## 📡 API Endpoint

### GET /api/greet?name=YourName
- Response (Success) 
  ```json
  {
    "message": "Hello, YourName! Welcome to Younglabs."
  }
  ```
- Response (Error)
  ```json
  {
    "error": "Name is required."
  }
  ```
  

## 📂 Folder Structure
```
GreetingUI/
│── backend/           # Node.js & Express Backend
│   ├── index.js      # Express Server Code
│   ├── package.json   # Backend Dependencies
│── frontend/          # React Frontend
│   ├── src/
│   │   ├── App.jsx     # Main React Component
│   ├── package.json   # Frontend Dependencies
│── README.md          # Project Documentation
```


## 🤝 Contributing
Feel free to fork this repository, raise issues, and submit pull requests to improve this project!
