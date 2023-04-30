import supabase from "../supabase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import SideBar from "../components/side-nav";
import { Route } from "react-router-dom";

//Pages
import CreatePost from "./posts_CRUD/create-post";
import Account from "./account_CRUD/account-page";

const MainPage = ({ token }) => {
  return (
    <div className="main">
      <div className="sideBar">
        <SideBar>
          <Route path={"/create-post"} element={<CreatePost />} />
          <Route path={"/account"} element={<Account />} />
        </SideBar>
      </div>
      
      <div className="postCard"></div>
    </div>
  );
};

export default MainPage;
