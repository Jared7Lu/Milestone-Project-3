import { useState, useEffect } from 'react'
import supabase from '../../supabase';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

//    useEffect(() => {
//     const loginUser = async (e)=> {
//         console.log("error")
//    })

   return (
    <div>
    <form >
        <label>Username</label>
        <input 
            type="text" 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
        />
        <labe>Password</labe>
        <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <button type="submit">submit</button>
    </form>
    </div>
)

}

export default Login;