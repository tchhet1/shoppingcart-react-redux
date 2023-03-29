import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import './productCard.css';
import { addtocart } from "../feature/cartSlice";


const ProductCard = ({id, name, price}) => {

    
    const [qtyData, setQtyData] = useState(1);

    let cartItem = {};

    const dispatch = useDispatch();


   const cartHandler = (id, name, price, qtyData) => {
        cartItem = {
            id: id,
            name: name,
            price: price,
            qtyData: parseInt(qtyData)
        }
        //console.log(cartItem);
        dispatch(addtocart(cartItem));
   }

    //console.log(items);
    return (
       

                <div className="product-card">
                    
                    <div className='product-image'>

                    </div>
                    <div className='product-title'>
                       { name }
                    </div>
                    <div className='product-price'>
                        { price }
                    </div>

                    <div className='product-quantity'>
                        <select id="quantity" name="quantity" value = {qtyData} onChange = { (e) =>  {
                            
                            setQtyData(e.target.value);
                        }}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className='cart-button'>
                        <button className='add-to-cart' onClick={ () => cartHandler(id, name, price, qtyData) }>Add To Cart</button>
                    </div>
                </div>
         
           
    )
}

export default ProductCard;