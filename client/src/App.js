import React from "react";
import PostCreate from "./Post/PostCreate";
import PostList from "./Post/PostList";

const App = () => {
  return (
    <div className="container">
      <PostCreate />
      <PostList />
    </div>
  );
};

export default App;
