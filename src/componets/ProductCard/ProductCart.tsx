import { FC, ReactNode } from "react";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { FaCartShopping } from "react-icons/fa6";
import ReactStart from 'react-stars';
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
    imagesUrl,
    description,
    price,
    stars,
    discount,
    id
}) => {
    return <a className="product-card"
        href={`product/${id}`}>
        <img 
            className="product-card-img"
            src={imagesUrl[0]} 
            alt="" />       
        <div className="product-card-details">
        <label>{description}</label>
            <ReactStart
                count={5}
                size={16}
                value={stars}
                edit={false}
            />
            <div className="product-card-footer">
            <div>
            <p>
                <label
                    className="product-card-price">
                        $MNX {price}
                </label>
                <label
                    className="product-card-discount">
                        -{discount}%
                </label>
            </p>
            <ButtonLink 
                href="" 
                className="dark"
                iconAfter={() => <FaCartShopping />}
            />
          </div>
        </div>
     </div>
    </a>
}

export { ProductCard };
