import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="SignUpPage">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8ulcnx_OBbaLX9SeS_DNPi1ddEx8GqsWpg&usqp=CAU' alt=""/>
      <form>
        <h3>SignUp</h3>

        <div className="Username">
          <label>Username</label>
          <input type="text" placeholder="recipe3" />
        </div>

        <div className="Email">
          <label>Email address</label>
          <input type="email" placeholder="jsx@gmail.com" />
        </div>

        <div className="Password">
          <label>Enter Password</label>
          <input type="password" placeholder="******" />
        </div>

        <Link to="/login">
          <p>Login</p>
        </Link>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}
export default Signup;
