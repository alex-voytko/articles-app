import { createReducer } from "@reduxjs/toolkit";
import articlesActions from "./articles-actions";
import { combineReducers } from "redux";

const items = createReducer([], {
    [articlesActions.fetchArticlesSuccess]: (state, { payload }) => [
        ...payload,
    ],
    [articlesActions.showArticleSuccess]: (state, { payload }) => payload,
});
const filter = createReducer("", {
    [articlesActions.changeFilter]: (_, { payload }) => payload,
});
const loading = createReducer(false, {
    [articlesActions.fetchArticlesRequest]: () => true,
    [articlesActions.fetchArticlesSuccess]: () => false,
    [articlesActions.fetchArticlesError]: () => false,
    [articlesActions.showArticleRequest]: () => true,
    [articlesActions.showArticleSuccess]: () => false,
    [articlesActions.showArticleError]: () => false,
});

export default combineReducers({
    items,
    loading,
    filter,
});
