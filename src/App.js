import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

//pages
import login from "./pages/login-page"
import register from "./pages/sign-up-page"

function App() {
  return (
    <div className="App">
      <div className='Nav'>
      <nav>
        <h1>Title</h1>
        <h1>Account-username, image</h1>
      </nav>
      </div>

      <button>take to login page</button>
      <button>take to Sign-Up page</button>
      
    </div>
  );
}

export default App;
