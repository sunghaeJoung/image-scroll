import { combineReducers } from "redux";
import getResult from "Redux/Reducers/getResult";
import addLike from "Redux/Reducers/addLike";
import controlFilter from "Redux/Reducers/controlFilter";
import controlLikeBox from "Redux/Reducers/controlLikeBox";

const rootReducer = combineReducers({
  getResult,
  addLike,
  controlFilter,
  controlLikeBox,
});

export default rootReducer;
