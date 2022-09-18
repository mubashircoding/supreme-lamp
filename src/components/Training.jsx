import React from "react";
import "../components/TrainingStyles.css";
import Pod from "../assets/pod.jpg";
import Moon from "../assets/moon.jpg";
import { Link } from "react-router-dom";
//Shift+Alt+DK = Copy down
const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ex
          sed, sequi placeat corporis recusandae nam itaque ipsam, nulla
          asperiores accusantium laboriosam exercitationem modi voluptatem ab,
          praesentium animi dolore. Consectetur?
        </p>
        <Link to='/contact'>
          <button className="btn">
            Contact
          </button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Moon} alt="Moon" className="img"/>
          </div>
          <div className="img-stack bottom">
            <img src={Pod} alt="Pod" className="img"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
