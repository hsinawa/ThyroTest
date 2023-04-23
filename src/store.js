import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  RegisterAdminReducer,
  LoginAdminReducer,
} from "./reducers/AdminReducer";

import {
  AddNewTestsReducer,
  GetAllTestsReducer,
  GetTestsByComboReducer,
  GetTestsByIDReducer,
  GetTestMedReducer,
  GetTestCategoryReducer,
} from "./reducers/TestsReducer";
import { CartReducer } from "./reducers/CartReducer";


import { BookingReducer,GetBookingsContactReducer,GetBookingsIdReducer,GetBookingsAllReducer } from "./reducers/BookingReducer";

const FinalReducer = combineReducers({
  RegisterAdminReducer: RegisterAdminReducer,
  LoginAdminReducer: LoginAdminReducer,
  AddNewTestsReducer: AddNewTestsReducer,
  GetAllTestsReducer: GetAllTestsReducer,
  GetTestsByComboReducer: GetTestsByComboReducer,
  GetTestsByIDReducer: GetTestsByIDReducer,
  CartReducer: CartReducer,
  GetTestMedReducer: GetTestMedReducer,
  GetTestCategoryReducer: GetTestCategoryReducer,
  BookingReducer:BookingReducer,
  GetBookingsContactReducer:GetBookingsContactReducer,
  GetBookingsIdReducer:GetBookingsIdReducer,
  GetBookingsAllReducer:GetBookingsAllReducer
});

const admin = localStorage.getItem("admin")
  ? JSON.parse(localStorage.getItem("admin"))
  : null;

const CartItem = localStorage.getItem("CartItem")
  ? JSON.parse(localStorage.getItem("CartItem"))
  : [];

const InitialState = {
  CartReducer: { CartItem: CartItem },
  LoginAdminReducer: { admin: admin },
};

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(
  FinalReducer,
  InitialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
