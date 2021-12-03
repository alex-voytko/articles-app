import Loader from "react-loader-spinner";

function Spinner({ size }) {
    return (
        <div className="loader-spinner">
            <Loader type="Oval" color="#363636" height={size} width={size} />
        </div>
    );
}

export default Spinner;
