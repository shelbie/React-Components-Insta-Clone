//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";
// import data 

const PostsPage = () => {
  // set up state for your data
  const [data, setData] = useState();
  return (
    <div className="posts-container-wrapper">
      {dummyData.map(post => {
        return post.value;
      })}
    </div>
  );
};

export default PostsPage;
