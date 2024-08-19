import React, { useState } from "react";
import Comment from "../Comment/Comment";
import "./CommentSection.css";

const CommentSection = ({ comments, userName }) => {
  const [commentsData, setCommentsData] = useState([...comments]);

  return (
    <div className="comments-container">
      {commentsData.map((item) => {
        return (
          <div
            className={item.topLevel ? "" : "comment-section-container"}
            key={item.id}
          >
            <Comment
              text={item.text}
              userName={item.userName}
              childrenExist={item?.children && item?.children?.length > 0}
              children={item.children}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;
