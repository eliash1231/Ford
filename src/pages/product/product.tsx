import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './product.styles.scss';
import EmblaCarousel from '../../componets/EmblaCarousel/EmblaCarousel';
import { useContext, useEffect, useState } from 'react';
import { catalogMen } from '../../data/catalog';
import { ProductCardProps } from '../../componets/ProductCard/ProductCart';
import ReactStars from 'react-stars';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Catalog } from '../../componets/Catalog/Catalog';
import { ShoppingCartContext } from '../../componets/providers/ShoppingCartContext';
import { setToLocalStorage } from '../../utils/localStorage';

interface ProductFormProps {
    quantity: number;
}

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY"

const ProductPage = () => {
    const { productList, setProductList } = useContext(ShoppingCartContext);
    const { register, handleSubmit } = useForm<ProductFormProps>();
    const params = useParams();
    const [ product, setProduct ] = useState<ProductCardProps>();

    useEffect (() => {
        const result = catalogMen.find((product) => {
            return product.id === params.productId
        });
        if (result) {
            setProduct(result);
        }

    }, [productList]);

    useEffect(() =>{
        if (productList && productList.length > 0) {
        setToLocalStorage(PRODUCT_LIST_KEY, productList);
        }
    }, [productList]);

    const findProduct = () => {
        // Si lo encuentra regresa la posicion, sino regresa un -1
        const result = productList?.findIndex((productSearch: ProductCardProps) => 
            productSearch.id === product?.id
        );

        return result;
        
        }

    const onSubmit: SubmitHandler<ProductFormProps> = (data) => {
        const productIndex = findProduct();
        if (productIndex === -1) { // Cuando no existe, lo añade a la lista
            setProductList(
                [
                    ...productList,
                    {
                        ...product,
                        quantity: Number (data.quantity) 
                    }
                ]
            );
        } else { // Cuando existe, solo modificalo
            productList[productIndex].quantity = 
            Number(productList[productIndex].quantity) +
            Number (data.quantity);
            setProductList([...productList]);

    }
    toast("Producto añadido al carrito")
    };

    if (!product) {
        return <div>Este veiculo esta agotado</div>;
    }

    return <div className='product-page'>
        <div className='product-page-body'>
        <div className='product-page-carousel'>
            <EmblaCarousel slides={product?.imagesUrl}/>
        </div>
            <div className='product-page-detail-wrapper'>
                {product.description}
                <div className='product-page-detail-price'>{product.price}</div>
                <ReactStars
                    count={5}
                    size={20}
                    value={product.stars}
                    edit={false}
                />                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>               
                    CANTIDAD:            
                    <select {...register('quantity')}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <button className="button-73" 
                            role="button">Agregar al carrito</button>
                    </label>
                </form>
            
            </div> 
        </div> 
        <label>¿Cuál es el tren motriz adecuado para mí?</label>
        <Catalog productList={catalogMen.slice(0,3)}/>
        <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
/>
    </div>
};

export { ProductPage };

