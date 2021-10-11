import './Header.css';
import Logo from '../../img/logo.svg';
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";

const Header = () => {
    return(
        <header>
            <img src={Logo}/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Support</li>
            </ul>
            <div className="header-icons">
                <a><FiSearch/></a>
                <a><FiShoppingCart/></a>
                <a><FiMenu/></a>
            </div>
        </header>
    );
} 

export default Header;