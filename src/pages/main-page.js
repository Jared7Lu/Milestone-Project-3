import supabase from "../supabase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import { Route } from "react-router-dom";


//Component
import PostCard from "../components/post-card";
import NavBar from "../components/navBar";

const MainPage = ({ token }) => {
  const [postInfo, setPostInfo] = useState(null);

  const Delete = (id) => {
    setPostInfo((prevPostInfo) => {
      return prevPostInfo.filter((dp) => dp.id !== id);
    });
  };

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("product_reviews").select();

      if (error) {
        console.log(error);
        setPostInfo(null);
      }
      if (data) {
        setPostInfo(data);
      }
    };
    getData();
  }, []);

  return (
    <div className="mainPage">
      <div className="navBar">
        <NavBar />
      </div>

      <div className="postCardDisplay"></div>
      {postInfo && (
        <div>
          {postInfo.map((card) => (
            <PostCard key={card.id} card={card} onDelete={Delete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPage;
