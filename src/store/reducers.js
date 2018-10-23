import { combineReducers } from "redux";

import headerReducer from "../header/store/reducer";
import footerReducer from "../footer/store/reducer";

export default combineReducers({
    header: headerReducer,
    footer: footerReducer
})