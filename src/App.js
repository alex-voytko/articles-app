import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import Spinner from "./components/Loader";
import routes from "./views/routes";

const HomeView = lazy(() =>
    import("./views/HomeView" /* webpackChunkName: "home-view" */),
);
const ArticleView = lazy(() =>
    import("./views/ArticleView" /* webpackChunkName: "article-view" */),
);

function App() {
    return (
        <>
            <Container>
                <Suspense fallback={<Spinner size="70" />}>
                    <Switch>
                        <Route exact path={routes.home} component={HomeView} />
                        <Route
                            path={routes.articleView}
                            component={ArticleView}
                        />
                        <Route component={HomeView} />
                    </Switch>
                </Suspense>
            </Container>
        </>
    );
}

export default App;
