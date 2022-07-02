import React from "react";

import circle from "../../assets/images/Group 4.png";
import "./Box.css";

const Box = ({ onClick, box, title, text, opts }) => {
  return (
    <div onClick={onClick} className={`box ${box && "active"}`}>
      <div className="header">
        <div className={`circle ${box && "active"}`}></div>
        <h4>{title}</h4>
      </div>
      {box && (
        <div className="box_content">
          <p>{text}:</p>
          <div className="box_details_wrapper">
            {opts.map((opt, i) => (
              <div key={i} className="box_details">
                <div className="check">
                  <img src={circle} alt="circle" />
                </div>
                <p>{opt}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Box;
