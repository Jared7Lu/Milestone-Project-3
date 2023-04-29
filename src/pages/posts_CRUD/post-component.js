import supabase from "../../supabase"
import { useState } from "react"
    const post = ({ post }) => {
        <div>
            <p>{post.username}</p>
            <p>{post.link}</p>
            <p>{post.rating}</p>
            <p>{post.created_at}</p>
        </div>
}

export default post;