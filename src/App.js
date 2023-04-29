import './App.css';
import { Routes, Route } from "react-router-dom"
import supabase from './supabase';

//pages
import Login from "./pages/account_CRUD/login-page";
import Register from "./pages/account_CRUD/sign-in-page";
import Account from './pages/account_CRUD/account-page';
import main_page from './pages/main-page';
import create_post from './pages/posts_CRUD/create_post';
import delete_post from './pages/posts_CRUD/delete_post';
import update_post from './pages/posts_CRUD/update.post';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path={"/register"} element={ <Register />}/>
          <Route path={"/"} element={ <Login />}/>
          <Route path={"/account"} element={ <Account />}/>
          <Route path={"/main-page"} element={ <main_page />}/>
          <Route path={"/create-post"} element={ <create_post />}/>
          <Route path={"/delete-post"} element={ <delete_post />}/>
          <Route path={"/update-post"} element={ <update_post />}/>
        </Routes>
    </div>
  );
}

export default App;
