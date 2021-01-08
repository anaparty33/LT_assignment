import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userRegisterReducer ,userLoginReducer,userDetailsReducer} from "./reducers/userReducers";
const middleware = [thunk];

const reducer = combineReducers({
  userRegister: userRegisterReducer,
 userLogin :userLoginReducer,
 userDetails:userDetailsReducer
});


const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo") ||"" )
  : null;

const intialstate = {
  userLogin: { userInfo: userInfoFromStorage },
};



const store = createStore(
  reducer,
  intialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);
export type RootState = ReturnType<typeof reducer>;
export default store;
