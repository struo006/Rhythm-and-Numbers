import React, { Component } from "react";
import image from "../Exo.jpg";

class SmallerBoxes extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-6">
        <div class="thumbnail">
          <img
            src={this.props.image}
            alt="Generic placeholder thumbnail"
            class="img-thumbnail"
          />
        </div>

        <div class="caption">
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>

          <p>
            <a href="#" class="btn btn-primary" role="button">
              Go to
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default SmallerBoxes;
