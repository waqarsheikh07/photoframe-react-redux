import React, { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PhotoFrame = (props) => {
  return (
    <div>
      <Link className="add-item" to="/Addphoto"></Link>

      <div className="photo-grid">
        {props.allPhotos
          .sort(function (a, b) {
            return b.id - a.id;
          })

          .map((photo, index) => (
            <Photo
              key={index}
              finalPhoto={photo}
              index={index}
              {...props}
            ></Photo>
          ))}
      </div>
    </div>
  );
};
PhotoFrame.propTypes = {
  allPhotos: PropTypes.array.isRequired,
};
export default PhotoFrame;
