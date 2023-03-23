import { ActionTypes } from "./types";

export const sendMassage = (payload) => {
  return {
    type: ActionTypes.SEND_MSG,
    payload,
  };
};
export const setIsTypingList = (payload) => {
  return {
    type: ActionTypes.SET_IS_TYPING,
    payload,
  };
};
export const removeIsTypingList = (payload) => {
  return {
    type: ActionTypes.REMOVE_IS_TYPING,
    payload,
  };
};
