import { EMAIL_SENT, GET_MESSAGES } from "../actions/types";

const initialState = {
  messages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_SENT:
      return action.payload;
    case GET_MESSAGES:
      return { messages: action.payload };
    default:
      return state;
  }
};
