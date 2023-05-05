import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabase";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./forums.css";

const Register = () => {
  const navigate = useNavigate();
  const [signForm, setSignForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  function updateForm(event) {
    setSignForm((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const createAccount = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: signForm.email,
      password: signForm.password,
      disable_signup_verification: true,
      options: {
        data: {
          username: signForm.username,
        },
      },
    });
    if (error) throw error;
    console.log(data);
    navigate("/");
  };

  return (
    <div className="Main">
      <div className="forumContainer">
        <h1 className="forumHeader">Sign - Up</h1>
        <form onSubmit={createAccount}>

          <input
            name="email"
            type="text"
            placeholder="example@email.com"
            onChange={updateForm}
            required
          />

          <input
            name="username"
            type="text"
            placeholder="username"
            onChange={updateForm}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={updateForm}
            required
          />
          
          <div className="routerButtons">
            <button type="submit">submit</button>
          </div>

          <div className="bottomLink">
            <Link to="/">log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
