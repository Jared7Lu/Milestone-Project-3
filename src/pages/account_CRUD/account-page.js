import supabase from "../../supabase"
import { useNavigate, Link } from "react-router-dom"
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

    const Account = ({token}) => {
        let navigate = useNavigate()
        
        function Logout() {
            sessionStorage.removeItem('token')
            navigate('/')
        }
        return (
            <div>
                <Link to='/main-page'><Button>main page</Button></Link>
                {/* <h3>{token.user.user_metadata.username}</h3> */}
                <Button onClick={Logout}>logout</Button>
            </div>
        )
}

export default Account;