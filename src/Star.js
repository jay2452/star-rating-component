import React from "react";

const Star = ({ rating, onMouseEnter, onMouseLeave }) => {
  let starClass = "star-empty";
  if (rating > 0) {
    starClass = "star-filled";
  }
  return (
    <div
      rating={rating}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <svg className={starClass} viewBox="0 0 25 23" height="53px" width="52px">
        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
      </svg>
    </div>
  );
};

export default Star;
