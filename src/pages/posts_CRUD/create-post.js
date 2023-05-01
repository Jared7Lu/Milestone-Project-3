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
    <div className="container">
        <h1>create</h1>
        <h3>{token.user.id}</h3>
        <div className="forum">
            <form onSubmit={postPost}>
                <label>username</label>
                <input 
                    value= {username} 
                    type="text" 
                    onChange={(e) => setUsername(e.target.value)}
                />
                
                <label>url</label>
                <textarea 
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

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
        <Link to="/account">account</Link>
    </div>
)
}

export default CreatePost;