import { RiShoppingCart2Line } from "react-icons/ri";
import { useContext } from "react";

import { IconLink } from "../IconLink/IconLink";
import { ShoppingCartContext } from "../providers/ShoppingCartContext";

const ShoppingCart = () => {
    const {productList } = useContext(ShoppingCartContext);
    
    return <div>
        <IconLink href="/Shopping-cart" 
            label={
                productList.length > 0 ?
                productList.length :
               ''}>
            <RiShoppingCart2Line />
        </IconLink>
    </div>
}
export { ShoppingCart }