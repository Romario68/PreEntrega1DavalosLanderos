import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/#;" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-dark">Books</button> 
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/categories/fiction"}>Fiction</Link></li>
            <li><Link className="dropdown-item" to={"/categories/nofiction"}>No fiction</Link></li>
            <li><Link className="dropdown-item" to={"/categories/science"}>Science</Link></li>
            <li><Link className="dropdown-item" to={"/categories/engineering"}>Engineering</Link></li>
            <li><Link className="dropdown-item" to={"/categories/kids"}>Kids</Link></li>
          </ul>
        </li>
    );
}

export default Categories;
