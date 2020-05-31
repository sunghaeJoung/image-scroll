export const getResult = (data) => {
  return {
    type: "GET_RESULT",
    payload: data,
  };
};

export const openFilter = () => {
  return {
    type: "OPEN_FILTER",
  };
};

export const closeFilter = () => {
  return {
    type: "CLOSE_FILTER",
  };
};

export const openLikeBox = () => {
  return {
    type: "OPEN_LIKEBOX",
  };
};

export const closeLikeBox = () => {
  return {
    type: "CLOSE_LIKEBOX",
  };
};

export const addLike = (data) => {
  return {
    type: "ADD_LIKE",
    payload: data,
  };
};
