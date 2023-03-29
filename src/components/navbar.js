import { FaShoppingBag } from 'react-icons/fa';
import './navbar.css';
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../feature/cartSlice";
import { Link } from 'react-router-dom';

function Navbar() {



const {cart, totalQuantity, totalPrice} = useSelector((state) => {
    return state.allCart;
});

const dispatch = useDispatch();

dispatch(getCartTotal());

    return (
        <nav>
            <div className="navbar">
                <div className="logo">
                    <Link to="/">Shopping Cart React</Link>
                </div>

                <div className="shopping-cart-button" >
                   <Link to="/cart">
                        <button>
                            <FaShoppingBag/>
                        </button>
                    </Link>
                     { (totalQuantity > 0) && 
                        <div className='shopping-cart-qty'>                       
                            { totalQuantity }
                        </div>
                    } 
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar;