import {CartWidget} from "../CartWidget/CartWidget";
import {Sections} from "./Sections/Sections";
import { Link } from "react-router-dom";

export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Sections/>
                    </ul>
                    <Link className="nav-link" to={"/cart"} ><CartWidget qty={5}/></Link>
                </div>
            </div>
        </nav>
    );
}
