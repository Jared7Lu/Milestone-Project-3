import { useState } from "react"


const Register = () => {
    const createAccount  = async (e) => {
        e.preventDefault()
    }
    return (
    <div>
        {/* need username and password requirements */}
        <form onSubmit={createAccount}>
            <label>Username</label>
            <input type="text" required/>
            <labe>Password</labe>
            <input type="password" required/>
            <button type="submit">submit</button>
        </form>
    </div>
    )
}

export default Register;