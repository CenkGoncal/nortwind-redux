import { combineReducers } from "redux";
import categoryListReducer from "./categoryListReducer";
import changeCategoryReducer from "./changeCategoryReducer";

const rootReducer = combineReducers({
    changeCategoryReducer:changeCategoryReducer,
    categoryListReducer: categoryListReducer
});

export default rootReducer;