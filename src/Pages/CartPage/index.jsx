import CartCard from '../../components/CartCard';
import { useContext } from 'react';
import { CartContext } from '../../components/Context/Cart.Context';
import "./style.css";

const Cart = (data = {}) => {
    const { cartItems = [] } = useContext(CartContext);
    return (
        <div className="container cart-page-container">
            <div className="items-listing-container">
                <div className="listing-header">
                    <h1>Shopping Cart</h1>
                    <h3>3 Items</h3>
                </div>
                <div className="cart-items-listing">
                    {cartItems.map((data = {}, index) => (

                        <CartCard data={data} key={`${data.id}-${index}`} />
                    ))}
                </div>
            </div>
            <div className="cart-calculator-container"></div>
        </div>
    );
}

export default Cart
