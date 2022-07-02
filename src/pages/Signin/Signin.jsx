import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard/home");
  };

  return (
    <div className="container signup">
      <p className="signin">
        Don’t have an account?{" "}
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
            <div className="form_group">
              <input id="em" className="input md" type="text" placeholder=" " />
              <label className="label" htmlFor="em">
                Email address
              </label>
            </div>
            <div className="form_group">
              <input id="fn" className="input md" type="text" placeholder=" " />
              <label className="label" htmlFor="fn">
                Password
              </label>
            </div>
          </div>
          <button className="btn btn_primary btn_md">Next</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
