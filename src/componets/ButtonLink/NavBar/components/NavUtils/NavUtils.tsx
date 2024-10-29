import { FaRegHeart } from "react-icons/fa";

import './NavUtils.styles.scss';
import { ShoppingCart } from "../../../../ShoppingCart/ShoppingCart";
import { Favorites } from "./favorites/favorites";


const NavUtils = () => {
    return <div className="nav-utils">
         <Favorites />
       <ShoppingCart />

    </div>
};

export { NavUtils };