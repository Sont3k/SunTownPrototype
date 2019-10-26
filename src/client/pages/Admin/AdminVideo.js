import React, { Component } from "react";
import "../../Styles/Admin.css";

export default class AdminVideo extends Component {
  state = {
    videoData: {
      admin_video_description: "",
      admin_video_videoTitle: ""
    },
    videoDataRu: {
      admin_video_description: "",
      admin_video_videoTitle: ""
    },
    isRu: false,
    file: "Файл не выбран"
  };

  onChange = e => {
    !this.state.isRu
      ? this.setState({
          ...this.state,
          videoData: {
            ...this.state.videoData,
            [e.target.id]: e.target.value
          }
        })
      : this.setState({
          ...this.state,
          videoDataRu: {
            ...this.state.videoDataRu,
            [e.target.id]: e.target.value
          }
        });
  };

  getFiles = e => {
    const file = document.getElementById(e.target.id).files;
    if (file.length > 0) {
      if (this.state.isRu) {
        this.setState({ file: "Файл выбран" });
        return;
      } else {
        this.setState({ file: "Файл обраний" });
        return;
      }
    }

    if (this.state.isRu) {
      this.setState({ file: "Файл не выбран" });
    } else {
      this.setState({ file: "Файл необраний" });
    }
  };

  render() {
    return (
      <div className="admin">
        <form>
          <div className="admin_input_line">
            <h2>Описание (description)</h2>
            <input
              className="admin_gallery_input"
              type="text"
              id="admin_video_description"
              value={
                this.state.isRu
                  ? this.state.videoDataRu.admin_video_description
                  : this.state.videoData.admin_video_description
              }
              onChange={this.onChange}
            />
          </div>

          {!this.state.isRu ? (
            <div className="admin_input_line">
              <h2>Видео тайтл (videoTitle)</h2>
              <input
                className="admin_gallery_input"
                type="text"
                id="admin_video_videoTitle"
                value={this.state.videoData.admin_video_videoTitle}
                onChange={this.onChange}
              />
            </div>
          ) : null}

          {!this.state.isRu ? (
            <label className="admin_input_line">
              <h2>Файл</h2>
              <span className="admin_custom_file_selector">
                {this.state.file}
              </span>
              <input
                className="admin_file_selector"
                type="file"
                accept="video/mp4"
                id="admin_video_file"
                onChange={this.getFiles}
              />
            </label>
          ) : null}
        </form>
      </div>
    );
  }
}
