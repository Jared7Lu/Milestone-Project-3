import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
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
    console.log(data);
    setToken(data);
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
    </div>
  );
};

export default Login;
