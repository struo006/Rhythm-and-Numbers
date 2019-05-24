import React, { Component } from "react";
import SmallerBoxes from "./SmallerBoxes.jsx";
import image from "../Exo.jpg";
import image2 from "../Twice.jpg";

class Boxes extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <SmallerBoxes title={"EXO"} text={"Nation's Boy Group"} image={image} />
        <SmallerBoxes
          title={"TWICE"}
          text={"Nation's Girl Group"}
          image={image2}
        />
      </div>
    );
  }
}

export default Boxes;
