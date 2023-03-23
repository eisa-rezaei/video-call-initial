const getMassages = (store) => store.massages.massages;
const getIsTypingList = (store) => store.massages.isTypingList;

const selectors = {
  getMassages,
  getIsTypingList,
};

export default selectors;
