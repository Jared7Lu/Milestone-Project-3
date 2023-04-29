import './App.css';
import { useState } from "react"
import supabase from './supabase';

//pages
import Login from "./pages/account_CRUD/login-page"
import Register from "./pages/account_CRUD/sign-up-page"

function App() {
  const [currentForm, setForm] = useState('login');

  return (
    <div className="App">
      <div className='Nav'>
      </div>
      <div className='login-page'>
        {/* {
          currentForm == "login" ? <Login /> : <Register />
        } */}
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default App;
