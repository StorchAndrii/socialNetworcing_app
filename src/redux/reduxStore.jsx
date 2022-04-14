import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPages: dialogsReducer,
  sideBar: sidebarReducer,
});
const store = createStore(reducers);

export default store;