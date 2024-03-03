import React from 'react'
import PulseLoader from "react-spinners/PulseLoader"

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "black",
};

const Loading = () => {
    return (
        <div>
            {/* <span>Loading...</span> */}

            <PulseLoader
                color={"#000000"}
                cssOverride={override}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loading