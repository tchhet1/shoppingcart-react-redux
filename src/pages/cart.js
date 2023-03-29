import CartPage from '../components/cartPage';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from "../feature/cartSlice";



function Cart() {

    const {cart, totalQuantity, totalPrice} = useSelector((state) => {
        console.log(state.allCart.cart);
        return state.allCart;
    });

    const dispatch = useDispatch();

    dispatch(getCartTotal());



    return (
        <div className='cart-container'>
{
            cart.map((item) => {
                return (
                    <CartPage 
                    key= {item.id}
                    id={item.id}
                    name= {item.name}
                    price={item.price}
                    qtyData = {item.qtyData}
                    />
                )
                
            })
}

            <div className="total-cart">
                <div className="total-quantity">
                    Total Quantity - {totalQuantity}
                </div>
                <div className="total-price">
                    Total Price - {totalPrice}
                </div>
            </div>  
            
           
        </div>
        
    )
    
}

export default Cart;