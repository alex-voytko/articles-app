import { useEffect } from "react";
import articlesAPI from "../services/articles-api";

function ArticleView() {
    useEffect(() => {
        console.log(articlesAPI.showArticleById);
    }, []);

    return (
        <>
            <div className="background_image-block"></div>
            <div>
                <p></p>
            </div>
        </>
    );
}

export default ArticleView;
