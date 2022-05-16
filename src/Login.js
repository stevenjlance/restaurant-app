import React from "react";
import "./css/App.css";

const Login = () => {
  return (
    <div className="Login">
      <h1 className="loginTitle">🔍 NYC RESTAURANT INSPECTATION 🔍</h1>
      <form action="/stats" className="store-selector">
        <button type="submit" className="viewButton">
          View Scores
        </button>
      </form>
    </div>
  );
};

export default Login;
