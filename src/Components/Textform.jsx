import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to uppercase", "success");
  };

  const handleloclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to lowercase", "success");
  };

  const handleclearclick = () => {
    setText(" ");
    props.showAlert("Text cleared", "success");
  };

  const handleReverseClick = () => {
    let newtext = text.split("").reverse().join("");
    setText(newtext);
    props.showAlert("converted to reversetext", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard");
  };

  const handleExtraSpacesClick = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("extra spaces removed", "success");
  };

  const handleonchange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            onChange={handleonchange}
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            className="form-control"
            id="mybox"
            rows="7"
          ></textarea>
        </div>
        <button
          onClick={handleupclick}
          type="button"
          className="btn btn-primary mx-2"
        >
          Convert To Upparcase
        </button>

        <button
          onClick={handleloclick}
          type="button"
          className="btn btn-primary mx-2"
        >
          Convert To Lowercase
        </button>

        <button
          onClick={handleclearclick}
          type="button"
          className="btn btn-primary mx-2"
        >
          Clear text
        </button>

        <button
          onClick={handleReverseClick}
          type="button"
          className="btn btn-primary mx-2"
        >
          Reverse Text
        </button>

        <button
          onClick={handleCopyClick}
          type="button"
          className="btn btn-primary mx-2"
        >
          Copy Text
        </button>

        <button
          onClick={handleExtraSpacesClick}
          type="button"
          className="btn btn-primary mx-2"
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Text summary</h1>
        <p>
          {text.trim() === "" ? 0 : text.split(" ").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {" "}
          {0.008 * (text.trim() === "" ? 0 : text.split(" ").length)} Minutes to
          read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
