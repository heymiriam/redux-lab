import {combineReducers} from 'redux'
import personReducer from './personReducer'
const root = combineReducers({
    person: personReducer,
  })
  
  /*function rootReducer(state = initialState, action) {
    return state;
  };
  
  export default rootReducer;*/