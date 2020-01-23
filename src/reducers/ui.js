import * as types from '../actions/ActionTypes';

const initialState = {
  color: [205, 255, 255]
};

export default function ui(state = initialState, action) {
  if (action.types === types.SET_COLOR) {
    return {
      color: action.color
    };
  } else {
    return state;
  }
}