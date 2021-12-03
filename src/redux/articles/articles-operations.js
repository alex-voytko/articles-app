import axios from "axios";
import articlesActions from "./articles-actions";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3";

const fetchArticles = () => async dispatch => {
    dispatch(articlesActions.fetchArticlesRequest());

    try {
        const response = await axios.get("/articles?&_limit=9");
        dispatch(articlesActions.fetchArticlesSuccess(response.data));
    } catch (error) {
        dispatch(articlesActions.fetchContactsError(error.message));
    }
};

const showArticleById = id => dispatch => {
    dispatch(articlesActions.showArticleRequest());
    axios
        .get(`/articles?${id}`)
        .then(({ data }) => dispatch(articlesActions.showArticleSuccess(data)))
        .catch(error =>
            dispatch(articlesActions.showArticleError(error.message)),
        );
};
export default { fetchArticles, showArticleById };
