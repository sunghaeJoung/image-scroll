const INITIAL_STATE = {
  filter: false,
};

export default function controlFilter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "OPEN_FILTER":
      return { ...state, filter: true };
    case "CLOSE_FILTER":
      return { ...state, filter: false };
    default:
      return state;
  }
}
