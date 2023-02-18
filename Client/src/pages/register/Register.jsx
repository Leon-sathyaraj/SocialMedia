import './register.scss'

const Register = () => {
  return (
    <div className="register">
    <div className="card">
      <div className="left">
        <h1> Welcome to our Friendsbook,
         where you can connect and share with friends and family from around the world! 
    </h1>
        <p>
        {/* Welcome to Friends Book */}
        </p>
        <span>Do you have an account?</span>
          <button>Login</button>
      </div>
      <div className="right">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Name" />
          <button>Register</button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Register;