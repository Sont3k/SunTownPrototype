import { apiUrl } from "../config";
import { handleResponse, authHeader } from "./serviceUtils";
import fetch from "node-fetch";

export const videoServices = {
    addVideo,
    getVideoList,
    editVideo,
    videoAction,
    deleteVideo
};

async function addVideo(data) {
    const headers = await authHeader();
    const requestOption = {
        method: "POST",
        headers,
        body: data
    };

    return fetch(`${apiUrl}/video`, requestOption).then(handleResponse);
}

async function getVideoList() {
    const requestOption = {
        method: "GET"
    };
    console.log("url", `${apiUrl}/video`);
    return fetch(`${apiUrl}/video`, requestOption).then(handleResponse);
}

async function editVideo(id, data) {
    const headers = await authHeader();
    const requestOptions = {
        method: "PUT",
        headers,
        body: data
    };

    return videoAction(id, requestOptions);
}

async function deleteVideo(id) {
    const headers = await authHeader();
    const requestOptions = {
        method: "DELETE",
        headers
    };

    return videoAction(id, requestOptions);
}

function videoAction(id, requestOptions) {
    return fetch(`${apiUrl}/video/${id}`, requestOptions).then(
        handleResponse
    );
}
