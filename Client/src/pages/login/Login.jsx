import { Link } from "react-router-dom";
import { useContext,useState } from "react";
import { AuthContext } from "../context/auth";
import "./Login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.setpreventDefault()
    try {
      await login(inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>
            Welcome to our Friendsbook, where you can connect and share with
            friends and family from around the world!
          </h1>
          <span>Don't you have an account?</span>
          <Link to="/register">

            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
