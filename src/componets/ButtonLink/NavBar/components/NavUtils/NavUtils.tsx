import { FaRegHeart } from "react-icons/fa";

import './NavUtils.styles.scss';
import { ShoppingCart } from "../../../../ShoppingCart/ShoppingCart";

const NavUtils = () => {
    return <div className="nav-utils">
       <a href="favorites"><FaRegHeart /></a>
       <ShoppingCart />

    </div>
};

export { NavUtils };