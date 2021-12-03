const allArticles = state => state.items;
const getFilter = state => state.filter;

// const getFilteredArticles = createSelector(
//     [allArticles, getFilter],
//     (articles, filter) => {
//         const normalizedFilter = filter.toLowerCase();
//         return articles.filter(article =>
//             article.title.toLowerCase().includes(normalizedFilter),
//         );
//     },
// );

export default { allArticles, getFilter };
