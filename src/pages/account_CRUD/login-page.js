import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  let navigate = useNavigate()

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
    navigate('/main-page')
  };

  return (
    <div>
      <form onSubmit={login}>
        <label>Email</label>
        <input
          name="email"
          type="text"
          placeholder="example@email.com"
          onChange={updateForm}
          required
        />

        <labe>Password</labe>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={updateForm}
          required
        />
        <button type="submit">submit</button>
      </form>
      <Link to='/register'>Sign Up</Link> 
    </div>
  );
};

export default Login;
