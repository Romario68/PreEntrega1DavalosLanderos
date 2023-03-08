import { Link } from "react-router-dom";
import React from "react";

export const Categories = React.memo(() => {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/#;" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-dark">Books</button> 
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/books/fiction"}>Fiction</Link></li>
            <li><Link className="dropdown-item" to={"/books/nofiction"}>No fiction</Link></li>
            <li><Link className="dropdown-item" to={"/books/science"}>Science</Link></li>
            <li><Link className="dropdown-item" to={"/books/engineering"}>Engineering</Link></li>
            <li><Link className="dropdown-item" to={"/books/kids"}>Kids</Link></li>
          </ul>
        </li>
    );
})
