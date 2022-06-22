import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const body = {
      title,
    };

    const result = await axios.post(`http://posts.com/posts/create`, body);
    if (result.status !== 201) {
      setError("Error creating new Post");
    } else {
      clearStates();
    }
  };

  const clearStates = () => {
    setTitle("");
  };

  const renderedError = error && <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Create Post</h1>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {renderedError}
    </div>
  );
};

export default PostCreate;
