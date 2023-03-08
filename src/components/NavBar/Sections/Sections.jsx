import { Link } from "react-router-dom";
import {Categories} from "../Categories/Categories";
import React from "react";

export const Sections = React.memo(() => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to={"/"} ><button className="btn btn-dark">Home</button></Link>
            </li>
            <Categories/>
            <li className="nav-item">
                <Link className="nav-link" to={"/music"} ><button className="btn btn-dark">Music</button></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/movies"} ><button className="btn btn-dark">Movies</button></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/contact"} ><button className="btn btn-dark">Contact</button></Link>
            </li>
        </>
    );
}
)
