import { combineReducers } from "redux";
import categoryListReducer from "./categoryListReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
import changeBackBtRedurcer from "./changeBackBtRedurcer";
import saveProductReducer from "./saveProductReducer";
import removeApiReducer from "./removeApiReducer";

const rootReducer = combineReducers({
    changeCategoryReducer:changeCategoryReducer,
    categoryListReducer: categoryListReducer,
    productListReducer :productListReducer,
    cartReducer : cartReducer,
    changeBackBtRedurcer : changeBackBtRedurcer,
    saveProductReducer : saveProductReducer,
    removeApiReducer : removeApiReducer
});

export default rootReducer;