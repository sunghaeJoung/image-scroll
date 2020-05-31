const INITIAL_STATE = {
  likeBox: false,
};

export default function controlLikeBox(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "OPEN_LIKEBOX":
      return { ...state, likeBox: true };
    case "CLOSE_LIKEBOX":
      return { ...state, likeBox: false };
    default:
      return state;
  }
}
