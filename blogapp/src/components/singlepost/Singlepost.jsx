import React from "react";
import "./Singlepost.css";

const Singlepost = () => {
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        <img
          src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600"
          className="singlepostimg"
        />
        <h1 className="singleposttitle">
          Lorem, ipsum.
          <div className="singlepostedit">
            <i className="singleposticon fa-solid fa-trash"></i>
            <i className="singleposticon fas fa-edit"></i>
          </div>
        </h1>
        <div className="singlepostinfo">
          <span className="singlepostauth">
            Author:<b>Manas</b>
          </span>
          <span className="singlepostdate">1 hr ago</span>
        </div>
        <p className="singlepostdesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, sunt!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, sunt!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, sunt!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, sunt!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, sunt!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, sunt!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, sunt!
        </p>
      </div>
    </div>
  );
};

export default Singlepost;
