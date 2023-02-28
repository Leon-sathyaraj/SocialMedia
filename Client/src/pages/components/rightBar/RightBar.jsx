import React from "react";
import "./RightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.imgur.com/pdRqH3S_d.webp?maxwidth=520&shape=thumb&fidelity=high"
                alt="userImage"
              />
              <span>Leon</span>
            </div>
            <div className="buttons">
              <button> follow</button>
              <button> dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
