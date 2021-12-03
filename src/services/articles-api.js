import axios from "axios";

const url = "https://api.spaceflightnewsapi.net/v3";

const showArticles = () => {
    return axios
        .get(`${url}/articles?&_limit=9`)
        .then(response => response.data);
};
const showArticleById = id => {
    return axios
        .get(`${url}/articles?${id}`)
        .then(response => console.log(response.data));
};
export default { showArticles, showArticleById };
