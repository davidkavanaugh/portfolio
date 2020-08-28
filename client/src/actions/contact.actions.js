import { GET_ERRORS, EMAIL_SENT, GET_MESSAGES } from "./types";
import axios from "axios";

// submit contact form
export const sendEmail = (formData) => (dispatch) => {
  dispatch(() => {
    axios
      .post("/api/contact/send-email/", formData)
      .then((res) => {
        dispatch({
          type: EMAIL_SENT,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err,
        });
      });
  });
};

export const getMessages = () => (dispatch) => {
  dispatch(() => {
    axios
      .get("/api/contact/get-messages/")
      .then((res) => {
        dispatch({
          type: GET_MESSAGES,
          payload: res.data.messages,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err,
        });
      });
  });
};
