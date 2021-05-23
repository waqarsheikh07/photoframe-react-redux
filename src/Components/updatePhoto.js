import React, { Component } from "react";
class UpdatePhoto extends Component {
  constructor() {
    super();
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(event) {
    const link = event.target.link.value;
    const description = event.target.description.value;
    const photo = {
      id: Number(this.props.match.params.id),
      description: description,
      imageLink: link,
    };

    if (link && description) {
      this.props.updatePhoto(photo);
      this.props.history.push("/");
    }

    event.preventDefault();
  }
  state = {};

  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleUpdate}>
            <input name="link" type="text" placeholder="Link" />
            <textarea
              name="description"
              cols="20"
              rows="5"
              placeholder="Description"
            ></textarea>
            <button>Update</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdatePhoto;
