import {
  ADD_REMAINDER,
  REMOVE_REMAINDER,
  CLEAR_REMAINDERS,
} from "../actions/types";

export default function remainders(state = [], action) {
  let remainders = [];
  switch (action.type) {
    case ADD_REMAINDER:
      remainders = [
        ...state,
        { text: action.text, date: action.date, id: Math.random() },
      ];
      console.log("from reducer", remainders);
      return remainders;
    case REMOVE_REMAINDER:
      remainders = state.filter((remainder) => remainder.id !== action.id);
      return remainders;
    case CLEAR_REMAINDERS:
      remainders = [];
      return remainders;
    default:
      return state;
  }
}
