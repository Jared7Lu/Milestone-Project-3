import { NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <div className='navbar'>
            <h1 className='mainTitle'>Onyx</h1>
            <div className='navlink'>
            <NavLink className="link" to="/account"><h1>Account</h1></NavLink>
            <NavLink className="link" to="/create-post"><h1>Create-Post</h1></NavLink>     
            </div>
        </div>
    )
}

export default NavBar;