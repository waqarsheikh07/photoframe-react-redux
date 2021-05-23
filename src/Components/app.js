import Main from "./Main";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removePhoto, addPhoto, updatePhoto } from "../redux/action";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    allPhotos: state,
  };
}
function mapDispatchToProp(dispatch) {
  return bindActionCreators({ removePhoto, addPhoto, updatePhoto }, dispatch);
}

const app = withRouter(connect(mapStateToProps, mapDispatchToProp)(Main));

export default app;
