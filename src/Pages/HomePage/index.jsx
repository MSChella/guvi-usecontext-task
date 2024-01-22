import { useContext, useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { CartContext } from '../../components/Context/Cart.Context';




export default function Home() {
    const { cartItems, updateCart = () => { } } = useContext(CartContext)
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch("http://localhost:3000/products.json")
            .then((response) => response.json())

            //   .then((result)=>{
            //     if(result.data){
            //         setProducts(result.data)
            //     }else 
            //     console.error("Invalid Data Structure:", result);
            //   })

            .then((result) => setProducts(result.data))
            .catch((error) => console.log(error));
    }, []);


    function addToCart(data = {}) {
        // const cartCopy = [...cartItems, { ...data, quantity: 1 }];
        // let cartCopy = [...cartItems];
        // cartCopy.push({ ...data, quantity: 1 });

        // updateCart(cartCopy);

        // updateCart((prevItems) => {
        //     const updateCart = [...prevItems, { ...data, quantity: 1 }];

        //     console.log("clicked");
        //     return updateCart; 
        // });
        console.log("clicked", cartItems, cartItems.length)
        console.table(cartItems)

        updateCart([...cartItems, { ...data, quantity: 1 }]);


    }




    return (
        <div>

            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {products.map((data, index) => {
                        console.log(`Key: ${data.id}-${index}`);
                        return (
                            <ProductCard key={`${data.id}-${index}`} data={data} addToCart={addToCart} />
                        );
                    })}
                </div></div>
        </div>


    )
}


