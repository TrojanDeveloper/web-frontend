import * as actions from "../actionTypes/courseActionTypes";

const courseInitState = {
  courses: [],
  department: [],
};

export default function courseReducer(state = courseInitState, action) {
  switch (action.type) {
    case actions.GET_ALL_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case actions.GET_ALL_DEPARTMENT:
      return {
        ...state,
        department: action.payload,
      };
    default:
      return state;
  }
}
