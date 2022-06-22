import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const body = {
      content,
    };

    const res = await axios.post(
      `http://localhost:4001/posts/${postId}/comments`,
      body
    );

    if (res.status !== 201) {
      setError("Error when creating a comment");
    } else {
      setContent("");
    }
  };

  const renderedError = error && <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            type="text"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {renderedError}
    </div>
  );
};

CommentCreate.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default CommentCreate;
