import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup1 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signup_2");
  };

  return (
    <div className="container signup">
      <p className="signin">
        Already a member?
        <span>
          <Link to="/signin"> Sign In</Link>
        </span>
      </p>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="header">
            <h2>Create your account</h2>
            <p>A short description about account types</p>
          </div>

          <div className="form_group_wrapper">
            <div className="form_group">
              <input id="fn" className="input md" type="text" placeholder=" " />
              <label className="label" htmlFor="fn">
                First name
              </label>
            </div>
            <div className="form_group">
              <input id="ln" className="input md" type="text" placeholder=" " />
              <label className="label" htmlFor="ln">
                Last name
              </label>
            </div>
            <div className="form_row">
              <div className="form_group">
                <span className="country_text">Country</span>
                <select className="select xs">
                  <option value="">+233</option>
                  <option value="">+234</option>
                  <option value="">+235</option>
                </select>
              </div>
              <div className="form_group">
                <input
                  id="pn"
                  className="input sm"
                  type="text"
                  placeholder=" "
                />
                <label className="label" htmlFor="pn">
                  Mobile number
                </label>
              </div>
            </div>
            <div className="form_group">
              <input id="em" className="input md" type="text" placeholder=" " />
              <label className="label" htmlFor="em">
                Email address
              </label>
            </div>
          </div>

          <button className="btn btn_primary btn_md">Next</button>
        </form>
      </div>
    </div>
  );
};

export default Signup1;
