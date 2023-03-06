import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.scss";
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (error) {
      setError(true);
    }
  };

  console.log(error);

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>
            {" "}
            Welcome to our Friendsbook, where you can connect and share with
            friends and family from around the world!
          </h1>
          <p>{/* Welcome to Friends Book */}</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            {" "}
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            {error && error}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
