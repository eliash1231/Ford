import { FC } from "react";
import { ProductCard, ProductCardProps } from "../ProductCard/ProductCart";

import './Catalog.styles.scss';

interface CatalogProps {
    productList: ProductCardProps[];

};

const Catalog: FC<CatalogProps>  = ({
    productList
}) => {
    return <div className="catalog">
           <div className="catalog-list"/>
        {
            productList &&
            productList.length > 0 ?
            productList.map((product, index) =>
                <div className={`catalog-product-wrapper ${index % 2 === 0 ? 'left' : 'right'}`}><ProductCard {...product} /></div>
            ):
            <div>lo sentimos,
                pero no se encuentra este Mueble por el momento
            </div>
        }


    </div>;
    
};

export { Catalog };
