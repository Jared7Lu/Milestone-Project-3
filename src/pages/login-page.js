import { useState, useEffect } from "react";

const login = () => {
    // const [userName, setUserName] = useState("");

    const loginUsesr = (e) => {
        e.preventDefault();
        console.log('working')
    }
    return (
        
        <form onSubmit={loginUsesr}>
            <label>Username</label>
            <labe>Password</labe>
        </form>
    )
}

export default login;