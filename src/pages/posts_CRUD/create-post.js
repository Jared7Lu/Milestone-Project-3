import supabase from "../../supabase"
import { useState } from "react"
import { Navigate } from "react-router-dom"

const CreatePost = ({token}) => {
    console.log("create")

return (
    <div>
        <h1>hello</h1>
        <h3>{token.user.id}</h3>
    </div>
)
}
            //username
            //link
            //rating 
            //time 
            //comment 

export default CreatePost;