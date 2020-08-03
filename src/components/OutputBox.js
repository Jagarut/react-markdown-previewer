import React from "react";

const OutputBox = ({ outputText, value }) => {
  return (
    <div className="ui segment" style={{ whiteSpace: "pre-wrap" }}>
      <div value={value} dangerouslySetInnerHTML={{ __html: outputText }} />
    </div>
  );
};

export default OutputBox;
