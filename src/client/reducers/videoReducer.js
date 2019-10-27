import { types } from "../actions/types";

const initialState = {};

export const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_VIDEO_REQUEST:
      return {
        ...state,
        uploading: true
      };
    case types.ADD_VIDEO_SUCCESS:
      return {
        ...state,
        error: "",
        uploading: false,
        videoList: state.videoList.length
          ? [...state.videoList, action.data]
          : []
      };

    case types.ADD_VIDEO_FAILURE:
      return {
        ...state,
        uploading: false,
        error: action.error
      };

    case types.GET_VIDEO_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.GET_VIDEO_LIST_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        videoList: action.videoList ? [...action.videoList] : action.videoList
      };
    case types.GET_VIDEO_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error.message
      };
      
    case types.GET_SELECTED_VIDEO:
      return {
        ...state,
        error: "",
        editedVideoList: false,
        //   editingVideoError: '',
        selectedVideo: state.videoList.filter(
          video => video._id === action.id
        )[0]
      };
    case types.UNSELECT_VIDEO:
      return {
        ...state,
        selectedVideo: null
      };

    case types.EDIT_VIDEO_REQUEST:
      return {
        ...state,
        error: "",
        editing: true
      };
    case types.EDIT_VIDEO_SUCCESS:
      return {
        ...state,
        editedVideoList: true,
        editing: false,
        error: "",
        videoList: state.videoList.map(video => {
          if (video._id === action.video._id) {
            return { ...action.video };
          }
          return video;
        }),
        error: ""
      };
    case types.EDIT_VIDEO_FAILURE:
      return {
        ...state,
        editing: false,
        error: action.error.message
      };
    case types.DELETE_VIDEO_REQUEST:
      return {
        ...state,
        deleting: true
      };
    case types.DELETE_VIDEO_SUCCESS:
      return {
        ...state,
        deleting: false,
        videoList: state.videoList.filter(video => video._id !== action.id)
      };
    case types.DELETE_VIDEO_FAILURE:
      return {
        ...state,
        deleting: false,
        error: action.error
      };
    default:
      return state;
  }
};
