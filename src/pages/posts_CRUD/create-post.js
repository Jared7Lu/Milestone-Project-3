import supabase from "../../supabase"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const CreatePost = ({token}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [url, setUrl] = useState('')
    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')
    const postPost = async (e) => {
    e.preventDefault()
  
    const {data, error } = await supabase
        .from('product_reviews')
        .insert([{ username, url, rating, comment }])
        .select()

        if (error) {
            console.log(error)
        }
        if (data) {
            navigate('/main-page')
        }
    }

return (
    <div className="Main">
        <div className="forumContainer">
        
            <form onSubmit={postPost}>
                <input className="usernameForum"
                    disabled="disabled"
                    value={username} 
                    placeholder= {token.user.user_metadata.username}
                    onChange={(e) => setUsername(token.user.user_metadata.username)}
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
                
                <button type="submit">submit </button>
                <div className="signinButton"> 
                <Link to="/main-page">Home</Link>
                </div>
            </form>
        </div>
    </div>
)
}

export default CreatePost;