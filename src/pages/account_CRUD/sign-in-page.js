import { useState } from "react";
import supabase from "../../supabase";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./forums.css";

const Register = () => {
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
      options: {
        data: {
          username: signForm.username,
        },
      },
    });
    if (error) throw error;
    console.log(data);
  };

  return (
    <div className="Main">
      <div className="forumContainer">
        <h1>Sign - Up</h1>
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
          <button type="submit">submit</button>

          <div className="signinButton">
            <Link to="/">log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
