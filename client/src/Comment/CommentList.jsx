import React from "react";
import PropTypes from "prop-types";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;
    switch (comment.status) {
      case "approved":
        content = comment.content;
        break;
      case "pending":
        content = "This comment is awaiting for moderation";
        break;
      case "rejected":
        content = "This comment has been rejected";
        break;
      default:
    }

    return <li key={comment.id}>{content}</li>;
  });

  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf({}).isRequired,
};

export default CommentList;
