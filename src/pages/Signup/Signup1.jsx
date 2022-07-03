import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import InputGroup from "../../components/InputGroup/InputGroup";
import SelectGroup from "../../components/InputGroup/SelectGroup";

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
            <InputGroup
              id="fn"
              type="text"
              label="First name"
              size="md"
              placeholder=" "
            />
            <InputGroup
              id="ln"
              type="text"
              label="Last name"
              size="md"
              placeholder=" "
            />
            <div className="form_row">
              <SelectGroup label="Country" size="xs">
                <option>+233</option>
                <option>+234</option>
                <option>+235</option>
              </SelectGroup>
              <InputGroup
                id="pn"
                type="number"
                label="Mobile number"
                size="sm"
                placeholder=" "
              />
            </div>
            <InputGroup
              id="em"
              type="text"
              label="Email address"
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

export default Signup1;
