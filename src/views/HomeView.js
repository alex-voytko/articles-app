import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import articlesOperations from "../redux/articles/articles-operations";
import articleSelectors from "../redux/articles/article-selectors";
import Filter from "../components/Filter";
import search from "../components/Filter/FilterSearchUtils";
import ArticlesList from "../components/ArticlesList";
import Results from "../components/Results";
import NoResults from "../components/NoResults/";
import articlesActions from "../redux/articles/articles-actions";

function HomeView() {
    const dispatch = useDispatch();

    // fetch items :
    const [items, setItems] = useState([]);
    const fetchedItems = useSelector(articleSelectors.allArticles);
    useEffect(() => {
        dispatch(articlesOperations.fetchArticles());
        setItems(fetchedItems);
    }, []);

    const value = useSelector(articleSelectors.getFilter);
    useEffect(() => {
        setItems([...search.searchWordsTitle(fetchedItems, value)]);
        dispatch(articlesOperations.fetchArticles());
        setItems([...search.searchWordsDescr(fetchedItems, value)]);
    }, [value]);
    // filter items :

    const onChange = useCallback(
        e => dispatch(articlesActions.changeFilter(e.target.value)),
        [dispatch],
    );
    const onClickRender = () => {
        dispatch(articlesOperations.fetchArticles());
        setItems(fetchedItems);
        dispatch(articlesActions.changeFilter(""));
    };
    return (
        <>
            <Filter onChange={onChange} searchQuery={value} />
            {items.length ? (
                <>
                    <Results articlesAmount={items.length} />
                    <ArticlesList articles={items} />
                </>
            ) : (
                <NoResults onClick={onClickRender} />
            )}
        </>
    );
}

export default HomeView;
