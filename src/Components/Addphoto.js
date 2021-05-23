import { number } from "prop-types";
import React, { Component } from "react";
class Addphoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const link = event.target.link.value;
    const description = event.target.description.value;
    const photo = {
      id: Number(new Date()),
      description: description,
      imageLink: link,
    };

    if (link && description) {
      this.props.addPhoto(photo);
      this.props.onHistory.push("/");
    }

    event.preventDefault();
  }
  state = {};
  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input name="link" type="text" placeholder="Link" />
            <textarea
              name="description"
              cols="20"
              rows="5"
              placeholder="Description"
            ></textarea>
            <button>submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Addphoto;
