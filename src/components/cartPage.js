import { useDispatch } from "react-redux";
import { editItem, deleteItem, getCartTotal } from "../feature/cartSlice";
import { useState } from "react";


function CartPage({id, name, price, qtyData}) {

    const [editQuantity, setEditQuantity] = useState(qtyData);

    const dispatch = useDispatch();

    const editHandler = ({id, qtyData}) => {

        setEditQuantity(dispatch(editItem({id, qtyData})));
    }

    const deleteHandler = (item) => {
        dispatch(deleteItem(item))
        
    }

    
    return (
                <div className='cart-item'>
                        <div className='product-title'>
                            { name }
                        </div>
                        
                        <div className='product-price'>
                            Price: { price }
                            
                        </div>
                        
                        <div className='update-item'>
                            <div className='edit-item'>
                            Quantity: 
                                <select id="quantity" name="quantity" value = { editQuantity } onChange={ () => editHandler({id, qtyData}) } >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className='delete-item' onClick={ () => deleteHandler(id) }>
                                Delete
                            </div>
                        </div>
            </div>
    )
}

export default CartPage;