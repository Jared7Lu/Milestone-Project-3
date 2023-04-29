import supabase from "../supabase";
import { useEffect, useState } from "react";

//Pages
import create_post from "./posts_CRUD/create_post";
import delete_post from "./posts_CRUD/delete_post";
import post from "./posts_CRUD/post-component";
import update_post from "./posts_CRUD/update.post";
import Account from "./account_CRUD/account-page";

const main_page = () => {
    const [post, setPost] = useState(null)

    useEffect(() => {
        const product_reviews = async () =>{
            const { data, error } = await supabase
            .from('product_reviews')
            .select()

            if (error) {
                console.log(error)
            } 
            if (data) {
                setPost(data)
            }
        }
        product_reviews()
    })
}

return (
    <div>
        {product_reviews.map(post => (
            <Post key={post.id}/>
        ))}
    </div>
)

export default main_page;