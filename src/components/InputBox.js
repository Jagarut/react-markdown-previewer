import React from "react";

const InputBox = ({ inputText, value }) => {
  return (
    <div className="ui centered">
      <div className="ui form">
        <div className="field">
          <label>Editor</label>
          <textarea
            id="editor"
            value={value}
            onChange={(e) => inputText(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
