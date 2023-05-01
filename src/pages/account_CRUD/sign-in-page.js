import { useState } from "react";
import supabase from "../../supabase";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./forums.css"

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
      <div className="forum">
        <Form onSubmit={createAccount}>
          <label>Email</label>
          <input
            name="email"
            type="text"
            placeholder="example@email.com"
            onChange={updateForm}
            required
          />

          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="username"
            onChange={updateForm}
            required
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={updateForm}
            required
          />

          <Button type="submit">submit</Button>
        </Form>
        <Link to="/">log in</Link>
      </div>
    </div>
  );
};

export default Register;
