import React from "react";

const InputBox = ({ inputText, keypress, value }) => {
  return (
    <div id="editor" className="ui centered">
      <div className="ui form">
        <div className="field">
          <label>Editor</label>
          <textarea
            value={value}
            onKeyDown={(e) => keypress(e)}
            onChange={(e) => inputText(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
