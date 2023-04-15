import "./Cart.scss";
import {MdClose} from "react-icons/md"
import {BsCartX} from "react-icons/bs"
import CartItem from "./CartItem/CartItem"
import { useContext } from "react";
import { Context } from "../../utils/context";
import './Cart.scss'
import {loadStripe} from "@stripe/stripe-js"
import {makePaymentRequest} from "../../utils/api"
const Cart = ({setshowCart}) => {
   const {cartItems,cartSubTotal}= useContext(Context);
   const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
   const handlePayment = async () => {
    try {
        const stripe = await stripePromise;
        const res = await makePaymentRequest.post("/api/orders", {
            products: cartItems,
        });
        
        await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
        });
    } catch (err) {
        console.log(err);
    }
};
    return(
        <div className="cart-panel">
            <div className="opac-layer">
                <div className="cart-content">
                   <div className="cart-header">
                    <span className="heading"> Shopping Cart</span>
                    <span className="close-btn">
                        <MdClose/>
                        <span className="text" onClick={()=>setshowCart(false)}>Close</span>
                    </span>
                   </div>
                   { !cartItems?.length  && <div className="empty-cart">
                    <BsCartX/>
                    <span>No Products in the Cart</span>
                    <button className="return-cta">Return to Shop</button>
                   </div>
}
                  { !!cartItems?.length   && <>
                   <CartItem/>
                   <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">SubTotal:</span>
                        <span className="text total">&#8377;{cartSubTotal}</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta" onClick={handlePayment}>Checkout</button>
                    </div>
                   </div>
                   </>}
                </div>
            </div>
        </div>
    );

};

export default Cart;
