import CartWidget from "../CartWidget/CartWidget";
import Sections from "./Sections/Sections";
import Categories from "./Categories/Categories";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Sections/>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
