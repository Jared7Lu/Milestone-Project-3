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
import PostCard from "../components/post-card";

const MainPage = ({ token }) => {
  const [ postInfo, setPostInfo ] = useState(null)

  useEffect (() => {
    const getData = async () => {
      const {data, error} = await supabase
      .from('product_reviews')
      .select()

      if (error) {
        console.log(error)
        setPostInfo(null)
      }
      if (data) {
        setPostInfo(data)
      }
    }
    getData()
  }, [])

  return (
    <div className="main">
      <div className="sideBar">
        <SideBar>
          <Route path={"/create-post"} element={<CreatePost />} />
          <Route path={"/account"} element={<Account />} />
        </SideBar>
      </div>
      
      <div className="postCard"></div>
          {postInfo && (
            <div>
            {postInfo.map( card => (
              <div>
              <p>{card.username}</p>
              <p>{card.rating}</p>
              </div>
            )        
            )}
            </div>
          )} 
    </div>
  );
};

export default MainPage;
