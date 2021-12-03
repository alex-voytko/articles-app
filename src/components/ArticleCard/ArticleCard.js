import React from "react";
import { Link } from "react-router-dom";
import routes from "../../views/routes";
import { oneHundredSymbolMaker, dateCreator } from "./ArticlesCardUtils";

function ArticleCard({ id, title, imageUrl, publishedAt, summary }) {
    return (
        <>
            <li key={id} className="article-card">
                <Link to={`${routes.articleView}/${id}`}>
                    <div>
                        <img
                            src={imageUrl}
                            alt=""
                            className="article-card__img"
                        />
                    </div>
                    <div className="article-card__content-container">
                        <p className="article-card__date-text">
                            {dateCreator(publishedAt)}
                        </p>
                        <h2 className="article-card__title" id="js-title">
                            {title}
                        </h2>
                        <p
                            className="article-card__description"
                            id="js-summary"
                        >
                            {oneHundredSymbolMaker(summary)}
                        </p>
                        <p className="article-card__link">Read more</p>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default ArticleCard;
