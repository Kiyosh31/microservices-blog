import React, { useState, useEffect } from "react";
import axios from "axios";

import CommentCreate from "../Comment/CommentCreate";
import CommentList from "../Comment/CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://posts.com/posts`);
      console.log("res", res);
      if (res.status === 200) {
        console.log("aqui", res.data);
        setPosts(res.data);
      } else {
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => (
    <div
      className="card"
      style={{ width: "30%", marginBotton: "20px" }}
      key={post.id}
    >
      <div className="card-body">
        <h3>{post.title}</h3>
      </div>
      <CommentCreate postId={post.id} />
      <CommentList comments={post.comments} />
    </div>
  ));

  const renderedError = error && <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      <div>
        <h1>Posts</h1>
        <div className="d-flex flex-row flex-wrap justify-content-between">
          {renderedPosts}
        </div>
      </div>
      {renderedError}
    </div>
  );
};

export default PostList;
