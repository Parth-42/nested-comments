import React, { useState } from "react";
import "./Comment.css";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import CommentSection from "../CommentSection/CommentSection";

const Comment = ({ children, text, userName, childrenExist }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="comment-container">
        {childrenExist && (
          <div
            className="flex-center comment-container-expand-action"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? <FiMinus /> : <GoPlus />}
          </div>
        )}

        <div>
          <div>
            <p className="comment-container-username">{userName}</p>
          </div>
          <div className="comment-container-title-container">
            <span style={{ fontSize: "14px" }}>{text}</span>
          </div>

          <div style={{ display: "flex", gap: "4px" }}>
            <div className="flex-center comment-reply-icon">
              <FaRegCommentAlt />
            </div>
            <p className="comment-container-reply-action">Reply</p>
          </div>
        </div>
      </div>
      {expanded && children && children.length > 0 && (
        <div style={{ paddingLeft: "20px" }}>
          <CommentSection comments={children} />
        </div>
      )}
    </div>
  );
};

export default Comment;
