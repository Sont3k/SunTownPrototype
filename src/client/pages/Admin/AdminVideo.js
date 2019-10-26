import React, { Component } from "react";
import "../../Styles/Admin.css";

export default class AdminVideo extends Component {
  state = {};

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
              // value={
              //   this.state.isRu
              //     ? this.state.galleryDataRu.admin_gallery_description
              //     : this.state.galleryData.admin_gallery_description
              // }
              // onChange={this.onChange}
            />
          </div>

          {!this.state.isRu ? (
            <div className="admin_input_line">
              <h2>Видео тайтл (videoTitle)</h2>
              <input
                className="admin_gallery_input"
                type="text"
                id="admin_video_videoTitle"
                // value={this.state.galleryData.admin_gallery_imageTitle}
                // onChange={this.onChange}
              />
            </div>
          ) : null}

          {!this.state.isRu ? (
            <label className="admin_input_line">
              <h2>Файл</h2>
              <span className="admin_custom_file_selector">
                {/* {this.state.file} */}
              </span>
              <input
                className="admin_file_selector"
                type="file"
                accept="image/*, video/mp4"
                id="admin_video_file"
                // onChange={this.getFiles}
              />
            </label>
          ) : null}
        </form>
      </div>
    );
  }
}
