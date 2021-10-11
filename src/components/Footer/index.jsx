import './Footer.css';
import { FiActivity, FiBluetooth, FiBattery } from "react-icons/fi";

const Footer = () => {
    return(
        <footer>
            <div className="item-footer">
                <FiActivity className="icon-footer" size={20}   />
                <p className="item-footer-text">High-Resolution Audio compatible</p>
            </div>
            <div className="item-footer">
                <FiBluetooth className="icon-footer" size={20}/>
                <p className="item-footer-text">Wireless connectivity using bluetooth</p>
            </div>
            <div className="item-footer">
                <FiBattery className="icon-footer" size={20}/>
                <p className="item-footer-text">High-Resolution Audio compatible</p>
            </div>
        </footer>
    );
}
export default Footer;