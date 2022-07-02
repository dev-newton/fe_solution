import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Box from "../../components/Box/Box";
import backImg from "../../assets/images/Group 11.png";

const Signup2 = () => {
  const [box, setBox] = useState(1);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <div className="container signup">
      <div className="signin_row">
        <img
          onClick={() => navigate("/signup_1")}
          src={backImg}
          alt="backImg"
        />
        <p className="signin">
          Already a member?
          <span>
            <Link to="/signin"> Sign In</Link>
          </span>
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="header">
            <h2>Open a new business account</h2>
            <p>A short description comes here</p>
          </div>

          <div className="form_group_wrapper">
            <Box
              onClick={() => setBox(1)}
              box={box === 1}
              title="I have a registered business / charity with CAC"
              text="As a registered business you’ll get"
              opts={[
                "Account in your business name",
                "Send to and receive transfers from all Nigerian banks",
                "Tools for business management",
              ]}
            />

            <Box
              onClick={() => setBox(2)}
              box={box === 2}
              title="My business is not yet registered, I would like to register"
              text="Everything you need to start your business"
              opts={[
                "Registered business name with the CAC",
                "Tax identification number",
                "Your account will be automatically opened on completion",
              ]}
            />

            <Box
              onClick={() => setBox(3)}
              box={box === 3}
              title="I’m a freelancer I do business in my personal name"
              text="As a freelancer you’ll get"
              opts={[
                "Account in your personal name",
                "Send and receive transfers from all Nigerian banks",
                "Tools for managing your business",
              ]}
            />
          </div>
          <button className="btn btn_primary btn_md">Next</button>
        </form>
      </div>
    </div>
  );
};

export default Signup2;
