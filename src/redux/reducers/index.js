import { combineReducers } from "redux"
import counterReducer from "./counter"
import loginReducer from "./isLogged"


const allReducers = combineReducers({
    counter: counterReducer,
      isLogin: loginReducer
})

export default allReducers