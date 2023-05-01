import supabase from '../supabase'

const PostCard = ({ card  }) => {

  return (
    <div>
        <h4>{card.username}</h4>
        <h4>{card.url}</h4>
        <h4>{card.rating}</h4>
        <h4>{card.comment}</h4>
    </div>
  )
}

export default PostCard