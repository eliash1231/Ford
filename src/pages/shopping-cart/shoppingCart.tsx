import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ShoppingCartContext } from "../../componets/providers/ShoppingCartContext";
import { ProductCardProps } from "../../componets/ProductCard/ProductCart";

import './shoppingCart.styles.scss';
import { setToLocalStorage } from "../../utils/localStorage";
import { ButtonLink } from "../../componets/ButtonLink/ButtonLink";

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY"

const ShoppingCartPage = () => {
    const { register } = useForm();
    const { productList, setProductList } = useContext(ShoppingCartContext);
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        let totalGlobal = 0
         // Va a estar escuchando cuando las propiedades en el array cambien
        productList.forEach((product: ProductCardProps) => { //Leemos cada producto de la lista
            // Calcular el total por producto 
            const totalByProduc = product.quantity! * product.price;

            // El total por producto lo summa al total general
            totalGlobal = totalGlobal + totalByProduc;
        });
        setTotal(totalGlobal);    
    }, [productList]);

    const handleClick = (id: string) => {  // id seleccionado
        // Cuando el usuario de click se ejecuta esta funcion
        // Usamos filter, porque queremos eliminar un elemento de la lista
        const result = productList.filter((product: ProductCardProps) => {
            return product.id !== id  //Regresamos todos los productos que cumplan esta condición     
        });
        setProductList(result);
        setToLocalStorage(PRODUCT_LIST_KEY, result);
    };

    const findProduct = (id: string) => {
        // Si lo encuentra regresa la posicion, sino regresa un -1
        const result = productList?.findIndex((productSearch: ProductCardProps) => 
            productSearch.id === id
        );

        return result;
    }

    const handleOnQuantityChange = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        const productIndex = findProduct(id);

        productList[productIndex].quantity =  Number(event.target.value);

        setProductList([...productList]);

        setToLocalStorage(PRODUCT_LIST_KEY, [...productList]);
    }

    return <div className="Shopping-cart-page">
        <h1>Carrito</h1>
        <div className="Shopping-cart-page-list">
            {
                productList.map((product: ProductCardProps) => {
                    return <div className="Shopping-cart-page-product">
                        <div className="Shopping-cart-page-product-image">
                            <img src={product.imagesUrl[0]} alt="" />
                        </div>
                        <div className="Shopping-cart-page-product-desc">
                            <div>
                                {product.description}
                            </div>    
                            <div>
                                CANTIDAD:
                                <input 
                                type="number"
                                defaultValue={product.quantity}
                                onChange={(e) => {handleOnQuantityChange(e, product.id)}} />
                            </div>
                            <button className="button-28" onClick={() => handleClick(product.id)}>Eliminar</button> 
                        </div>
                        <div className="Shopping-cart-page-product-price">
                        Precio:${product.price}
                        </div>
                        <div className="Shopping-cart-page-product-total">
                            ${product.quantity! * product.price}
                        </div>
                    </div>
                })
            }
        <div>Total: ${total}</div>
        <ButtonLink href="checkout" label="Proceder al pago" />
      </div>
    </div>
};

export { ShoppingCartPage };



