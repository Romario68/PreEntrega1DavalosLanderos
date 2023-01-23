import Categories from "../Categories/Categories";

const Sections = () => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><button className="btn btn-dark">Home</button></a>
            </li>
            <Categories/>
            <li className="nav-item">
                <a className="nav-link" href="#"><button className="btn btn-dark">Ebooks</button></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><button className="btn btn-dark">Audio books</button></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><button className="btn btn-dark">Gift cards</button></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><button className="btn btn-dark">Music & movies</button></a>
            </li>
        </>
    );
}

export default Sections;
