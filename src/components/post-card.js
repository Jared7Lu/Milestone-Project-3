import supabase from "../supabase";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

const PostCard = ({ card, onDelete }) => {
  const Delete = async () => {
    const { data, error } = await supabase
      .from("product_reviews")
      .delete()
      .eq("id", card.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(card.id);
    }
  };

  return (
    <div className="postCard">
      <h4>{card.username}</h4>
      <h3>{card.url}</h3>
      <h4>{card.rating}</h4>
      <p>{card.comment}</p>

      <div className="postCardButtons">
        <Link to={"/" + card.id}>
          <BiEditAlt />
        </Link>
        <BsTrash onClick={Delete} />
      </div>
    </div>
  );
};

export default PostCard;
