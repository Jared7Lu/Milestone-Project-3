import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useState } from "react"

//pages
import Login from "./pages/login-page"
import Register from "./pages/sign-up-page"

function App() {
  const [currentForm, setForm] = useState('login');

  return (
    <div className="App">
      <div className='Nav'>
      <nav>
        <h1>Title</h1>
        <h1>Account-username, image</h1>
      </nav>
      </div>
      <div className='login-page'>
        {
          currentForm == "login" ? <Login /> : <Register />
        }
      </div>
    </div>
  );
}

export default App;
