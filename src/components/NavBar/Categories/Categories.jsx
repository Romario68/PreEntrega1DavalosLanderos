const Categories = () => {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-dark">Books</button> 
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Fiction</a></li>
            <li><a className="dropdown-item" href="#">No fiction</a></li>
            <li><a className="dropdown-item" href="#">Science</a></li>
            <li><a className="dropdown-item" href="#">Engineering</a></li>
            <li><a className="dropdown-item" href="#">Kids</a></li>
          </ul>
        </li>
    );
}

export default Categories;
