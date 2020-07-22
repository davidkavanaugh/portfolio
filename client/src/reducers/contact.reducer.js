import { EMAIL_SENT } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case EMAIL_SENT:
      return action.payload;
    default:
      return state;
  }
}