import { userAvatars } from "../../data/data";
import { ActionTypes } from "./types";

const initialValues = {
  isTypingList: ["john_due"],
  massages: [
    {
      id: 1,
      userId: "Eisa_Rezaei",
      isCall: false,
      userAvatar: userAvatars["user1Avatar"],
      content: "Hello All 🙋🏻‍♂️!!",
    },
    {
      id: 2,
      userId: "Eisa_Rezaei",
      isCall: false,
      userAvatar: userAvatars["user1Avatar"],
      content: "what are you guy's doing?",
    },
    {
      id: 3,
      userId: "john_due",
      isCall: false,
      userAvatar: userAvatars["user2Avatar"],
      content: "Hello",
    },
    {
      id: 4,
      userId: "Jennifer",
      isCall: false,
      userAvatar: userAvatars["user3Avatar"],
      content: "Hi Eisa 😁",
    },
    {
      id: 5,
      userId: "Sara",
      isCall: false,
      userAvatar: userAvatars["user4Avatar"],
      content: "We were waiting for you",
    },
    {
      id: 6,
      userId: "Alexandra",
      isCall: false,
      userAvatar: userAvatars["user5Avatar"],
      content: "yeah he is right",
    },
    {
      id: 13,
      userId: "Eisa_Rezaei",
      isCall: false,
      userAvatar: userAvatars["user1Avatar"],
      content: "new massage?",
    },
  ],
};

export const reducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    case ActionTypes.SEND_MSG:
      return { ...state, massages: [...state.massages, payload] };

    case ActionTypes.SET_IS_TYPING:
      return { ...state, isTypingList: [...state.isTypingList, payload] };
    case ActionTypes.REMOVE_IS_TYPING:
      return {
        ...state,
        isTypingList: state.isTypingList.filter((i) => i !== payload),
      };

    default:
      return state;
  }
};
