import React from "react";
import "./Post.css";
const Post = () => {
  return (
    <div className="post">
      <img
        className="postimg"
        src="https://images.pexels.com/photos/5519188/pexels-photo-5519188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <div className="postinfo">
        <div className="postcategory">
          <span className="postcat">Music</span>
          <span className="postcat">life</span>
        </div>
        <span className="posttitle">
          Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span className="postdate">1 hour ago</span>
      </div>
      <p className="postdesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam
        animi saepe numquam quaerat nisi blanditiis explicabo. Aliquam quas
        pariatur dolores neque dolore praesentium accusantium sit odit corporis,
        iure voluptatum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam
        animi saepe numquam quaerat nisi blanditiis explicabo. Aliquam quas
        pariatur dolores neque dolore praesentium accusantium sit odit corporis,
        iure voluptatum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam
        animi saepe numquam quaerat nisi blanditiis explicabo. Aliquam quas
        pariatur dolores neque dolore praesentium accusantium sit odit corporis,
        iure voluptatum?
      </p>
    </div>
  );
};

export default Post;
