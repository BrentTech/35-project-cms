import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import APIreducer from "../components/cms/reducers.js";

let reducers = combineReducers({
  records: APIreducer
});

/**
 *
 * Creates store using Reducer components
 * applies middleware for async function calls.
 */
const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
