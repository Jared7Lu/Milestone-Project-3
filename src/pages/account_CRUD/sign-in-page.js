import { useState } from "react";
import supabase from "../../supabase";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import "./forums.css";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

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
    setShow(true);
    console.log("submitted");
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

      {/* Prompt to verify email */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Your are so Close</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please verify you email address, a link was sent to it.
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Register;
