import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <div id="particles-js" />
        <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" />
        <script />
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3mb-4">The Music Connection</h1>
                  <p className="lead"> Interact with students and instructor</p>
                  <hr />
                  <Link
                    to="/register"
                    className="btn btn-lg btn-outline-light mr-2"
                  >
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-outline-info">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
