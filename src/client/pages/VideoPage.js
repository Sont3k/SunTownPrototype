import React, { Component } from "react";

import "../Styles/Video.css";

import SEO from "../components/SEO";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

export default class VideoPage extends Component {
  render() {
    const lang = !this.props.location.pathname.includes("/ua");
    let metaTags = this.props.getMetaResult && this.props.getMetaResult.result;

    return (
      <div className="Container">
        <SEO
          title={metaTags && metaTags.title}
          description={metaTags && metaTags.description}
          url={"https://suntown-ukraine.com/video"}
        ></SEO>
        <Header {...this.props} />
        <ScrollToTop />
        <div className="Content">
          <video width="640" height="480" controls>
            <source src="movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="Description">Great video description</p>
        </div>
      </div>
    );
  }
}
