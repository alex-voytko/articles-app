const searchWordsTitle = (arr, query) =>
    arr.filter(el => el.title.toLowerCase().includes(query.toLowerCase()));

const searchWordsDescr = (arr, query) =>
    arr.filter(el => el.summary.toLowerCase().includes(query.toLowerCase()));

const newFomc = (arr, query) => {
    const unitArrays = arr
        .map(el => el.title)
        .concat(arr.map(el => el.summary));
    console.log(unitArrays);
    // unitArrays.filter(el => el.toLowerCase().includes(query.toLowerCase()));
};

export default { searchWordsTitle, searchWordsDescr, newFomc };
