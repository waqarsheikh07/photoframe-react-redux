import React, { Component } from "react";

import PhotoFrame from "./PhotoFrame";
import Addphoto from "./Addphoto";

import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import UpdatePhoto from "./updatePhoto";

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Photoframe</Link>
        </h1>
        <Route exact path="/">
          <PhotoFrame {...this.props} />
        </Route>
        <Route
          exact
          path="/Addphoto"
          render={({ history }) => (
            <Addphoto {...this.props} onHistory={history} />
          )}
        ></Route>
        <Route
          exact
          path="/UpdatePhoto/:id"
          render={(useParams) => (
            <UpdatePhoto {...useParams} {...this.props}></UpdatePhoto>
          )}
        ></Route>
      </div>
    );
  }
}

export default Main;
