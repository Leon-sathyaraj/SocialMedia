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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkr30ssGxNaL_kHQ6q9vPByMqLUxc1XNTEcg&usqp=CAU"
                alt="userImage"
              />
              <span>Count Von</span>
            </div>
            <div className="buttons">
              <button> Add Friend</button>
              <button> Ignore</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4VyHSh1F_u7_ok3A86P3OelrZunYnVGs4A&usqp=CAU"
                alt="userImage"
              />
              <span>Abby</span>
            </div>
            <div className="buttons">
              <button> Add Friend</button>
              <button> Ignore</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Suggestions for You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1l1zKWu9s66DoxadxYCXtJHnPFSBjdI1Mg&usqp=CAU"
                alt="userImage"
              />
              <span>Julie</span>
            </div>
            <div className="">
            12 minutes ago
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvA483j3OEKCeC5Agmj8uHVLrMumGX0kqfNg&usqp=CAU"
                alt="userImage"
              />
              <span>Kermit</span>
            </div>
            <div className="">
3 hours ago
            </div>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.imgur.com/pdRqH3S_d.webp?maxwidth=520&shape=thumb&fidelity=high"
                alt="userImage"
              />
              <span>Leon</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2voWLAZNHRLy-a96hQaeZ7E4LO9F1MO1xaA&usqp=CAU"
                alt="userImage"
              />
              <span>Eernie </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
