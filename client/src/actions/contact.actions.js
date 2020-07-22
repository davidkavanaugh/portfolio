import { GET_ERRORS, EMAIL_SENT } from "./types";
import axios from "axios";

// submit contact form
export const sendEmail = (formData) => dispatch => {
    dispatch(() => {
        axios
            .post("/api/contact/send-email", formData)
            .then(res => {
                dispatch({
                    type: EMAIL_SENT,
                    payload: res.data.message
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            })
    })
}