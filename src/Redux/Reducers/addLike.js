export default function addLike(state = [], action) {
  switch (action.type) {
    case "ADD_LIKE":
      return [...state, { ...action.payload }];
    default:
      return state;
  }
}
