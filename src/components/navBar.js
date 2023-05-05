import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar'>
            <h1 className='mainTitle'>Onyx</h1>
            <div className='navlink'>
            <NavLink className="link" to="/account">Account</NavLink>
            <NavLink className="link" to="/create-post">Create-Post</NavLink>     
            </div>
        </div>
    )
}

export default NavBar;