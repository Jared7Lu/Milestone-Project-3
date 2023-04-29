import { Fragment, useState } from 'react'

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const loginUsesr = (e) => {
        e.preventDefault();
        console.log('working')
    }
    return (
        <Fragment>
        <form onSubmit={loginUsesr}>
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
        </Fragment>

    )
}

export default Login;