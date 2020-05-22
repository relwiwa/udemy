import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <>
            <p>I'm some other page!</p>
            <p>
                <Link to="/">Go back home</Link>
            </p>
        </>
    )
};
