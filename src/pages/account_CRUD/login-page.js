import { useState } from "react";
import supabase from "../../supabase";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const navigate = useNavigate();

  const [signForm, setSignForm] = useState({
    email: "",
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

  const login = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: signForm.email,
      password: signForm.password,
    });
    if (error) throw error;
    setToken(data);
    console.log(data);
    navigate("/main-page");
  };

  return (
    <div className="Main">
      <div className="forumContainer">
        <h1 className="forumHeader">Log - In</h1>
        <form onSubmit={login}>

          <input
            name="email"
            type="text"
            placeholder="EMAIL"
            onChange={updateForm}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="PASSWORD"
            onChange={updateForm}
            required
          />
          
          <div className="routerButtons">
            <button type="submit">Submit</button>
          </div>
          
          <div className="bottomLink">
            <Link to="/register">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
