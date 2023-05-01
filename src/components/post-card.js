import supabase from '../supabase'

const PostCard = ({ card  }) => {

    const Delete = async () => {
        const {data, error} = await supabase
        .from('product_reviews')
        .delete()
        .eq('id', card.id)

        if (error) {
            console.log(error)
        }
        if (data) {
            console.lof(error)
        }
    }

  return (
    <div>
        <h4>{card.username}</h4>
        <h4>{card.url}</h4>
        <h4>{card.rating}</h4>
        <h4>{card.comment}</h4>

        <div>
            <button onClick={Delete}>delete</button>
        </div>
    </div>
    
  )
}

export default PostCard