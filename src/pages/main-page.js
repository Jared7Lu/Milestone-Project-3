import supabase from "../supabase";
import { useState, useEffect } from "react";

//Pages
import create_post from "./posts_CRUD/create_post";
import delete_post from "./posts_CRUD/delete_post";
import post from "./posts_CRUD/post-component";
import update_post from "./posts_CRUD/update.post";
import Account from "./account_CRUD/account-page";

const main_page = () => {
    console.log("main_page")
}

export default main_page;