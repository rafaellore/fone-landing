import './Product.css';
import Fone from '../../img/fone.png';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import LeftSide from '../LeftSide';

const Product = () => {
    return(
        <section className="product">
            
            <img src={Fone} className="fone-img"/>
            <div className="product-description">
                <h1>Hyper X ON-EAR</h1>
                <p className="black-text first">Wireless over-ear headphones</p>
                <div className="stars">
                    <AiFillStar color="#ca3b3a" size={20} className="icon-star"/>
                    <AiFillStar color="#ca3b3a" size={20} className="icon-star"/> 
                    <AiFillStar color="#ca3b3a" size={20} className="icon-star"/> 
                    <AiOutlineStar  color="#ca3b3a" size={20} className="icon-star"/>
                    <p>4.2 (335)</p>
                </div>
                <div className="description-content">
                    <p className="black-text">Driver unit</p>
                    <p className="gray-text">70 mm, dome type (CCAW Voice Col)</p>
                </div>
                <div className="description-content">
                    <p className="black-text">Frequency Response</p>
                    <p className="gray-text">4 Hz + 100.000 Hz</p>
                </div>
                <div className="price">
                    <p>$89.99</p>
                    <button>Add to Cart</button>  
                </div>
            </div>
        </section>
    );
}
export default Product;