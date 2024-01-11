import { combineReducers } from "@reduxjs/toolkit";
import productsShop from "../productsShop/productsShop";

const rootReducer = combineReducers({
    productsShop : productsShop,
});

export default rootReducer;