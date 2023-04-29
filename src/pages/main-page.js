import supabase from "../supabase";
import { useEffect, useState } from "react";

//Pages
import create_post from "./posts_CRUD/create-post";
import delete_post from "./posts_CRUD/delete-post";
import post from "./posts_CRUD/post-component";
import update_post from "./posts_CRUD/update-post";
import Account from "./account_CRUD/account-page";

const mainPage = ({token}) => {
  
    return (
      <div>
        <h3> {token.user.user_metadata.usrname}</h3>
      </div>
    )
  }


export default mainPage;