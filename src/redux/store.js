import { applyMiddleware, createStore } from "redux";
import articlesReducer from "./articles/articles-reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    articlesReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
