import Moment from "react-moment";

export const dateCreator = date => (
    <Moment format="MMMM Do, YYYY">{date}</Moment>
);

export const oneHundredSymbolMaker = summary => `${summary.slice(0, 101)}...`;
