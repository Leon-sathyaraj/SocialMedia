import "./login.scss";

const Login = () => {



  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1> Welcome to our Friendsbook,
           where you can connect and share with friends and family from around the world! 
      </h1>
          <p>
          {/* Welcome to Friends Book */}
          </p>
          <span>Don't you have an account?</span>
            <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;