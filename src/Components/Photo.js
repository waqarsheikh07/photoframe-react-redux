import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Photo = (props) => {
  const frame = props.finalPhoto;
  return (
    <figure className="figure-style">
      <img className="photo" src={frame.imageLink} alt={frame.description} />
      <figcaption>
        <p className="fig-caption">{frame.description}</p>
      </figcaption>

      <div className="button-container">
        <button
          onClick={() => {
            props.removePhoto(props.index);
          }}
          className="button-style"
          style={{ marginRight: "10px" }}
        >
          Remove
        </button>
        <Link to={"/UpdatePhoto/" + frame.id}>
          <button className="button-style">Update Photo</button>
        </Link>
      </div>
    </figure>
  );
};

Photo.propTypes = {
  finalPhoto: PropTypes.object.isRequired,
};
export default Photo;
