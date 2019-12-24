import {FETCH_DATA} from '../Action/type'

const initialState = {
  items: []
};

const PlaceholderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, items: action.payload };

    default:
      return state;
  }
};
export default PlaceholderReducer;
