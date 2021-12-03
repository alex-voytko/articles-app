import { createAction } from "@reduxjs/toolkit";

const fetchArticlesRequest = createAction("articles/fetchArticlesRequest");
const fetchArticlesSuccess = createAction("articles/fetchArticlesSuccess");
const fetchArticlesError = createAction("articles/fetchArticlesError");

const showArticleRequest = createAction("articles/showArticleRequest");
const showArticleSuccess = createAction("articles/showArticleSuccess");
const showArticleError = createAction("articles/showArticleError");

const changeFilter = createAction("articles/changeFilter");

export default {
    fetchArticlesRequest,
    fetchArticlesSuccess,
    fetchArticlesError,
    showArticleRequest,
    showArticleSuccess,
    showArticleError,
    changeFilter,
};
