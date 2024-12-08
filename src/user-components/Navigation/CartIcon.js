import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import '../../Styles/NavigationBar.css'; 

function CartIcon() {
    return (
        <div className="cart-icon-container">
            <Link to="/cart" className="cart-icon mt-5">
                <HiOutlineShoppingCart size={35} />
                <span className="cart-badge">3</span>
            </Link>
        </div>
    );
}

export default CartIcon;
