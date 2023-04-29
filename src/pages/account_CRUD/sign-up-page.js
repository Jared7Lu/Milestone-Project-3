import { useState } from "react"

const Register = () => {
    const [signForm, setSignForm] = useState({
        username:'', password:''
    })

    const createAccount  = async (e) => {
        e.preventDefault()
        
    }
    return (
    <div>
        <form onSubmit={createAccount}>
            <label>Username</label>
            <input name="username" type="text" required/>
            <labe>Password</labe>
            <input name="password" type="password" required/>
            <button type="submit">submit</button>
        </form>
    </div>
    )
}

export default Register;