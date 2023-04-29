import supabase from "../../supabase"
import { useNavigate } from "react-router-dom"

    const Account = ({token}) => {
        let navigate = useNavigate()

        function Logout() {
            sessionStorage.removeItem('token')
            navigate('/')
        }
        return (
            <div>
                <button onclick={Logout}>logout</button>
            </div>
        )
}

export default Account;