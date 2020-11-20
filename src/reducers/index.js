import showNavbarReducer from "./showNavbar";
import store from "../store/store";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  showNavbar: showNavbarReducer,
  store,
});

export default allReducers;
