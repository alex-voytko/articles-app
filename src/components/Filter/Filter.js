function Filter({ onChange, searchQuery }) {
    return (
        <div className="filter-container">
            <p className="filter-title">Filter by keywords</p>
            <button type="submit" className="search-btn"></button>
            <input
                className="search-input"
                placeholder="Type keyword..."
                onChange={onChange}
                value={searchQuery}
            />
        </div>
    );
}
export default Filter;
