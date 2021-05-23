import { element } from "prop-types";
import allPhotos from "../data/allPhotos";
const allPhotosReducer = (state = allPhotos, action) => {
  switch (action.type) {
    case "REMOVE_PHOTO":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case "ADD_PHOTO":
      return [...state, action.photo];
    case "UPDATE_PHOTO":
      state[state.map((element) => element.id).indexOf(action.photo.id)] =
        action.photo;
    default:
      return state;
  }
};

export default allPhotosReducer;
