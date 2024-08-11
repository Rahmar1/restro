import React from "react";
import '../Home/Header.css';
import '../../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Header = () => {

    return (
        <header id="home">
            <div className="container">
                <div className="col-md-6">
                    <h2>Good food choices are good investments.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                    <button>Order Now <FontAwesomeIcon icon={faShoppingCart} className="icon" /></button>
                    <button>Learn More  </button>
                </div>
                <div className="col-md-6">

                </div>
            </div>

        </header>
    )
}
export default Header