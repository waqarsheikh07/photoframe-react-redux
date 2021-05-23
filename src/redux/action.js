export function removePhoto(index) {
  return {
    type: "REMOVE_PHOTO",
    index,
  };
}

export function addPhoto(photo) {
  return {
    type: "ADD_PHOTO",
    photo,
  };
}

export function updatePhoto(photo) {
  return {
    type: "UPDATE_PHOTO",
    photo,
  };
}
