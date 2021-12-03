function NoResults({ onClick }) {
    return (
        <>
            <div className="no-results__container">
                <h2 className="no-results__title">
                    Sorry, there are no results
                </h2>
                <button className="no-results__btn" onClick={onClick}>
                    Load Articles
                </button>
            </div>
        </>
    );
}
export default NoResults;
