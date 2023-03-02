import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import "./Login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>
            {" "}
            Welcome to our Friendsbook, where you can connect and share with
            friends and family from around the world!
          </h1>
          <p>{/* Welcome to Friends Book */}</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            {" "}
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
