import ProductCard from "../components/productCard";
import { useSelector } from "react-redux";


function MainPage() {

    const items = useSelector((state) => {
        return state.allCart.item;
    });

    return (

        <div className='product-container'>
        {
                   items.map(item => {
                      return (
                        <ProductCard 
                            key= {item.id}
                            id={item.id}
                            name= {item.name}
                            price={item.price}
                        />
                      )
                   })
                     
        }
               
        </div>
    )
    
}

export default MainPage;