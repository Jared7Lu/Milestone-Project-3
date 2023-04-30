import supabase from "../supabase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./main.css"
//Pages 
import Post from "./posts_CRUD/post-component";

const MainPage = ({token}) => {
  
    return (
      <div className="main">
        <div className="nav">
            <nav >
                <Link to="/create-page">Create</Link>
                <Link to="/main-page">title</Link>
                <Link to='/account'><h1>account</h1></Link>
            </nav>
        </div>
        <div className="post">
            <Post />
        </div>
      </div>
    )
  }


export default MainPage;