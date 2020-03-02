import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Input, Button } from "antd";

function getCodeBoxElement(index) {
  return document.getElementById(index);
}

function checkNumber(index, event) {
  setFocus(index);
  const eventCode = event.which || event.keyCode;
  console.log(eventCode);
  if (
    (eventCode >= 96 && eventCode <= 105) ||
    (eventCode >= 48 &&
      eventCode <= 57 &&
      getCodeBoxElement(index).value.length === 1)
  ) {
    if (index !== 4) {
      if (
        getCodeBoxElement(index + 1).value === "" &&
        getCodeBoxElement(index).value.length !== 0
      ) {
        getCodeBoxElement(index + 1).focus();
      }
    } else {
      event.preventDefault();
    }
  } else if (eventCode === 8 && index !== 1) {
    if (event.target.value === "") {
      getCodeBoxElement(index - 1).focus();
    } else {
      getCodeBoxElement(index).focus();
    }
  } else {
    event.preventDefault();
  }
}
function setFocus(index) {
  for (let item = 1; item < index; item++) {
    const currentElement = getCodeBoxElement(item);
    if (!currentElement.value) {
      currentElement.focus();
      break;
    }
  }
}
function App() {
  return (
    <div>
      <input
        id="1"
        className="form-control"
        maxLength="1"
        onKeyDown={e => checkNumber(1, e)}
      />
      <input
        id="2"
        className="form-control"
        maxLength="1"
        onKeyDown={e => checkNumber(2, e)}
      />
      <input
        id="3"
        className="form-control"
        maxLength="1"
        onKeyDown={e => checkNumber(3, e)}
      />
      <input
        id="4"
        className="form-control"
        maxLength="1"
        onKeyDown={e => checkNumber(4, e)}
      />
      <Button id="5">Submit</Button>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("container"));
