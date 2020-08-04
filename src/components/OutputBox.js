import React from "react";

const OutputBox = ({ outputText }) => {
  return (
    <div
      dangerouslySetInnerHTML={outputText}
      id="preview"
      className="ui segment"
      style={{ whiteSpace: "pre-wrap" }}
    ></div>
  );
};

export default OutputBox;
