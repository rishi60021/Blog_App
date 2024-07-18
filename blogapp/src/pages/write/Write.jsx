import React from "react";
import "./Write.css";
const Write = () => {
  return (
    <div className="write">
        <img src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="writeimg"/>
      <form className="writeform">
        <div className="writeformgroup">
          <label htmlFor="fileinput">
            <i className="addicon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="write..."
            className="writeinput"
            autoFocus={true}
          ></input>
        </div>
        <div className="writeformgroup">
          <textarea placeholder="tell me about yourself.." type="text" className="writeinput writetext"></textarea>
        </div>
        <button className="writesubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
