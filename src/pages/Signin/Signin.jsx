import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import InputGroup from "../../components/InputGroup/InputGroup";

const Signin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard/home");
  };

  return (
    <div className="container signup">
      <p className="signin">
        Don’t have an account?
        <span>
          <Link to="/"> Sign Up</Link>
        </span>
      </p>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="header">
            <h2>Welcome back to Prospa</h2>
            <p>
              An account, with powerful, personalised tools all in one place
            </p>
          </div>

          <div className="form_group_wrapper">
            <InputGroup
              id="em"
              type="text"
              label="Email address"
              size="md"
              placeholder=" "
            />
            <InputGroup
              id="fn"
              type="text"
              label="Password"
              size="md"
              placeholder=" "
            />
          </div>
          <Button color="btn_primary" size="btn_md" label="Next" />
        </form>
      </div>
    </div>
  );
};

export default Signin;
