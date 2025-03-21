/* eslint-disable @typescript-eslint/ban-ts-comment */


import { ResponseSuccessType } from "@/types";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // modify request headers
    // const accessToken = getFromLocalStorage(authKey);
    // if (accessToken) {
    //   config.headers.Authorization = "Bearer" + " " + accessToken;
    // }
    return config;
  },
  function (error) {
    // Do something with request error

    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-expect-error
  function (response) {
    // modify response
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export { instance };
