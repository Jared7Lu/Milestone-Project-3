import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Account = ({ token }) => {
  let navigate = useNavigate();
 
  function Logout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div className="mainPage">
      <h1 className="mainTitle">Hello, <h3>{token.user.user_metadata.username}</h3></h1>
      <Link to="/main-page">
        <Button>main page</Button>
      </Link>
      
      <Button onClick={Logout}>logout</Button>
    </div>
  );
};

export default Account;
