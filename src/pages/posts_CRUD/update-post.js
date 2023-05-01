import { useParams, useNavigate } from "react-router-dom";
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
    e.preventDefault()

    const {data, error} = await supabase
        .from('product_reviews')
        .update([{ username, url, rating, comment }])
        .eq('id', id)
        .select()

        if (error) {
            console.log(error)
        }
        if (data) {
            navigate('/main-page')
        }
        
  }

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
  }, [id]);

  return (
    <div>
      <form onSubmit={Update}>
        <label>username</label>
        <input
          value={username}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>url</label>
        <textarea value={url} onChange={(e) => setUrl(e.target.value)} />

        <label>rating</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <label>comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">submit </button>
      </form>
    </div>
  );
};

export default UpdatePost;
