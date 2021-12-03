import ArticleCard from "../ArticleCard";

function ArticlesList({ articles }) {
    return (
        <>
            <div className="articles-list-container">
                <ul className="articles-list">
                    {articles.map(
                        ({ id, imageUrl, title, publishedAt, summary }) => (
                            <ArticleCard
                                id={id}
                                imageUrl={imageUrl}
                                title={title}
                                publishedAt={publishedAt}
                                summary={summary}
                            />
                        ),
                    )}
                </ul>
            </div>
        </>
    );
}

export default ArticlesList;
