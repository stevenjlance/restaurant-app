import React from "react";
import "./css/App.css";

const Login = () => {
  return (
    <div className="Login">
      <h1 className="loginTitle">🔍 NYC RESTAURANT INSPECTATION 🔍</h1>
      <form action="/stats" className="loginButtons">
        <button className="viewButton">View Scores</button>
        <button className="github">Login with Github</button>
      </form>
    </div>
  );
};

export default Login;
