import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import supabase from './supabase';
import { useEffect, useState } from 'react';
//pages
import Login from "./pages/account_CRUD/login-page";
import Register from "./pages/account_CRUD/sign-in-page";
import Account from './pages/account_CRUD/account-page';
import main_page from './pages/main-page';
import create_post from './pages/posts_CRUD/create-post';
import delete_post from './pages/posts_CRUD/delete-post';
import update_post from './pages/posts_CRUD/update-post';


function App() {

  const [token, setToken] = useState(false)
    if(token){
      sessionStorage.setItem('token', JSON.stringify(token) )
    }

    useEffect(() => {
      if(sessionStorage.getItem('token')) {
        let data = JSON.parse(sessionStorage.getItem('token'))
        setToken(data)
      }
    }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/register"} element={ <Register />}/>
          <Route path={"/"} element={ <Login setToken={setToken}/>}/>
          <Route path={"/account"} element={ <Account />}/>
          <Route path={"/main-page"} element={ <mainPage />}/>
          <Route path={"/create-post"} element={ <createPost />}/>
          <Route path={"/delete-post"} element={ <deletePost />}/>
          <Route path={"/update-post"} element={ <updatePost />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
