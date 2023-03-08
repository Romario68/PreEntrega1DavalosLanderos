import logo from './knowledgetree_logo.png';
import './Brand.css';

export const Brand = () => {

    return (
        <div className="Header-style">
            <img src={logo} className="Header-logo" alt="knowledgetree logo" />
            &nbsp;Knowledge tree
        </div>
    );
}

