import { FC, ReactNode } from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { FaCartShopping } from "react-icons/fa6";
import ReactStars from 'react-stars';
import './ProductCard.styles.scss';

export interface ProductCardProps {
    [x: string]: ReactNode;
    id: string;
    imagesUrl: string[];
    description: string;
    price: number;
    stars: number;
    discount?: number;
    quantity?: number;
}

const ProductCard: FC<ProductCardProps> = ({
    id,
    imagesUrl,
    description,
    price,
    stars,
    discount
}) => {
    return (
        <a className="product-card" href={`product/${id}`}>
            <img 
                className="product-card-img"
                src={imagesUrl[0]} 
                alt={description}  // Corregido: agregado 'alt' para accesibilidad
            />
            <div className="product-card-details">
                <label>{description}</label>
                <ReactStars
                    count={5}
                    size={16}
                    value={stars}
                    edit={false}
                />
                <div className="product-card-footer">
                    <div>
                        <p>
                            <label className="product-card-price">
                                ${price}
                            </label>
                            {discount && (  // Solo mostrar si hay un descuento
                                <label className="product-card-discount">
                                    -{discount}%  // Corregido: Formato de descuento
                                </label>
                            )}
                        </p>

                        
                    </div>
                </div>
            </div>
        </a>
    );
}

export { ProductCard };
