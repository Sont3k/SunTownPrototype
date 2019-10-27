import { types } from './types';
import { videoServices } from '../services/video.services';

export const videoActions = {
  addVideo,
  getVideoList,
  editVideo,
  deleteVideo
}

function addVideo(data) {
  return dispatch => {
    dispatch(request());

    videoServices.addVideo(data)
      .then(data => {
        dispatch(success(data));
      }, error => {
        dispatch(failure(error));
      })

      function request() { return { type: types.ADD_VIDEO_REQUEST }}
      function success(data) { return { type: types.ADD_VIDEO_SUCCESS, data }}
      function failure(error){ return { type: types.ADD_VIDEO_FAILURE, error }}
  }
}

function getVideoList() {
  return dispatch => {
    dispatch(request());

    videoServices.getVideoList()
      .then(videoList => {
        dispatch(success(videoList))
      }, error => {
        dispatch(failure(error))
      })
      function request() { return { type: types.GET_VIDEO_LIST_REQUEST }}
      function success(videoList) { return { type: types.GET_VIDEO_LIST_SUCCESS, videoList }}
      function failure(error){ return { type: types.GET_VIDEO_LIST_FAILURE, error }}
  }
}

function editVideo(id, data) {
  return dispatch => {
    dispatch(request());

    videoServices.editVideo(id, data)
      .then(video => {
        dispatch(success(video));
      }, error => {
        dispatch(failure(error));
      })

      function request() { return { type: types.EDIT_VIDEO_REQUEST }}
      function success(video) { return { type: types.EDIT_VIDEO_SUCCESS, video }}
      function failure(error){ return { type: types.EDIT_VIDEO_FAILURE, error }}
  }
}

function deleteVideo(id) {
  return dispatch => {
    dispatch(request());

    videoServices.deleteVideo(id)
      .then(video => {
        dispatch(success(video._id));
      }, error => {
        dispatch(failure(error));
      })

      function request() { return { type: types.DELETE_VIDEO_REQUEST }}
      function success(id) { return { type: types.DELETE_VIDEO_SUCCESS, id }}
      function failure(error){ return { type: types.DELETE_VIDEO_FAILURE, error }}
  }
}
