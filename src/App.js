import './App.css';
import { useState } from "react"
import supabase from './supabase';

//pages
import Login from "./pages/account_CRUD/login-page"
import Register from "./pages/account_CRUD/sign-in-page"

function App() {

  return (
    <div className="App">
        <Login />
        <Register />
    </div>
  );
}

export default App;
