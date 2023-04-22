import { useState, useEffect } from "react";

const register = () => {
    //need authentication params
    return (
        <form>
            <label>Username</label>
            <input 
                type="text"
                required
            />
            <labe>Password</labe>
            <input 
                type="text"
                required
            />
        </form>
    )
}

export default register;