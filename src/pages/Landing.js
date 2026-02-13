import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Pizza Delivery App</h1>
      <p>Please choose an option below</p>
      <div className="d-flex justify-content-center">
        <Link to="/login" className="btn btn-primary m-2">
          Login
        </Link>
        <Link to="/register" className="btn btn-secondary m-2">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Landing;
