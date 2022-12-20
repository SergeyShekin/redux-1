import { createStore, combineReducers } from "redux";
import serviceAddReducer from "../reducers/serviceAddReducer";
import serviceListReducer from "../reducers/serviceListReducer";

const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer
});

const store = createStore(reducer);
export default store;