//import {combineReducers} from 'redux'
import {createStore , applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { jobsReducer } from './actions/reducers/jobsReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { loaderReducer } from './actions/reducers/loaderReducer';
import { usersReducer } from './actions/reducers/usersReducer';

const rootReducer = combineReducers ({
    jobsReducer: jobsReducer,
    loaderReducer: loaderReducer,
    usersReducer: usersReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  );

  export default store;