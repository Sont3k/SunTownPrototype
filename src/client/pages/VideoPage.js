import React, { Component } from "react";

export default class VideoPage extends Component {
  render() {
    return <div>Something great</div>;
  }
}

export function loadDataVideo({ dispatch }, path) {
    const lang = path.includes("/ua") ? "ua" : "ru";
  
    const promises = [dispatch(getSeoByUrl("video", lang))];
  
    return Promise.all(promises);
}
