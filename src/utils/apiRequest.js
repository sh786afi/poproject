import { API_URL_ROOT, ACCESS_TOKEN } from "./constant.js";
import axios from "axios";
import * as Cookie from "./Cookie";

export async function post(path, postData) {
  let config = {
    headers: {
      Authorization: "Bearer " + Cookie.getCookie(ACCESS_TOKEN)
    }
  };
  const url = `${API_URL_ROOT}/${path}`;
  return await axios.post(url, postData, config);
}

export async function postFormData(path, postData) {
  const url = `${API_URL_ROOT}/${path} `;
  return await axios({
    url: url,
    method: "POST",
    data: postData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + Cookie.getCookie(ACCESS_TOKEN)
    }
  });
}

export async function get(path) {
  let config = {
    headers: {
      Authorization: "Bearer " + Cookie.getCookie(ACCESS_TOKEN)
    }
  };
  const url = `${API_URL_ROOT}/${path}`;
  return await axios.get(url, config);
}

export async function put(path, postData) {
  let config = {
    headers: {
      Authorization: "Bearer " + Cookie.getCookie(ACCESS_TOKEN)
    }
  };
  const url = `${API_URL_ROOT}/${path}`;
  return await axios.put(url, postData, config);
}
