import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../../supabase";

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const Update = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("product_reviews")
      .update([{ username, url, rating, comment }])
      .eq("id", id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      navigate("/main-page");
    }
  };

  useEffect(() => {
    const cardInfo = async () => {
      const { data, error } = await supabase
        .from("product_reviews")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.log(error);
      }
      if (data) {
        setUsername(data.username);
        setUrl(data.url);
        setRating(data.rating);
        setComment(data.comment);
      }
    };
    cardInfo();
  }, [id, navigate]);

  return (
    <div className="Main">
      <div className="forumContainer">
        <h1 className="forumHeader">Edit</h1>
        <form onSubmit={Update}>
          <input
            className="usernameEditForum"
            value={username}
            disabled="disabled"
            onChange={(e) => setUsername(username)}
          />

          <input
            type="text"
            placeholder="url to product"
            value={url}
            required
            onChange={(e) => setUrl(e.target.value)}
          />

          <input
            type="number"
            placeholder="Rating 1-10"
            value={rating}
            required
            onChange={(e) => setRating(e.target.value)}
          />

          <textarea
            placeholder="Comment"
            value={comment}
            required
            onChange={(e) => setComment(e.target.value)}
          />

          <div className="routerButtons">
            <button type="submit">submit </button>
          </div>

          <div className="createRouterButton">
            <Link to="/main-page">Home</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
