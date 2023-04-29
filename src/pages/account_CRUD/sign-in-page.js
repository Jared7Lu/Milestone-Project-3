import { useState } from "react";
import supabase from "../../supabase";

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
    if (error) throw error
          console.log(data)
  };

  return (
    <div>
      <form onSubmit={createAccount}>
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

export default Register;
