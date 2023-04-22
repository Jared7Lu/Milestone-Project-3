import { useState } from "react";

const login = () => {
    cost [userName, setUserName] = useState('');

    const loginUsesr = (e) => {
        e.preventDefault();
        console.log('working')
    }
    return (
        <form onSubmit={loginUsesr}>
            <label>Username</label>
        </form>
    )
}

export default login;