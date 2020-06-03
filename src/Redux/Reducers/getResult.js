export default function getResult(state = [], action) {
  switch (action.type) {
    case "GET_RESULT":
      return [...action.payload];
    default:
      return state;
  }
}
