import { useForm } from 'react-hook-form';
import './checkout.styles.scss';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { toast, ToastContainer } from 'react-toastify';
import { useContext, useState } from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import { ShoppingCartContext } from '../../componets/providers/ShoppingCartContext';
import { ProductCardProps } from '../../componets/ProductCard/ProductCart';


type CheckoutFormData = {
    name: string;
    street: string;
    cp: string;
    colony: string;
    town: string;
    state: string;
    phoneNumber: string;
};

const Checkout = () => {
    const { productList } = useContext(ShoppingCartContext);
    const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>();
    const [payActive, setPayActive] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState<CheckoutFormData | null>(null);
    const [ticket, setTicket] = useState<string | undefined>();

    const onSubmit = (dataForm: CheckoutFormData) => {
        setData(dataForm);
        setPayActive(true);
    };

    const createOrder = (data: any, actions: any) => {
        return actions.order.create({
            purchase_units: [{
                description: 'Muebles OG',
                amount: {
                    currency_code: "MXN",
                    value: 1000, // Aquí el valor debe ser dinámico según el total del carrito
                },
            }],
        }).then((orderId: string) => {
            setModalOpen(true);
            setTicket(orderId);
            return orderId;
        });
    };

    const onError = () => {
        toast.error("Error con tu método de pago");
    };

    return (
        <div className="checkout">
            <h1>Finaliza la compra</h1>
            <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Datos de facturación</h2>

                <div className="form-group">
                    <label>Nombre completo</label>
                    <input type="text" {...register("name", { required: "Nombre completo es obligatorio" })} />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>

                <div className="form-group">
                    <label>Calle</label>
                    <input type="text" {...register("street", { required: "Calle es obligatorio" })} />
                    {errors.street && <p className="error">{errors.street.message}</p>}
                </div>

                <div className="form-group">
                    <label>Código postal</label>
                    <input type="text" {...register("cp", { required: "Código postal es obligatorio" })} />
                    {errors.cp && <p className="error">{errors.cp.message}</p>}
                </div>

                <div className="form-group">
                    <label>Colonia</label>
                    <input type="text" {...register("colony", { required: "Colonia es obligatorio" })} />
                    {errors.colony && <p className="error">{errors.colony.message}</p>}
                </div>

                <div className="form-group">
                    <label>Municipio</label>
                    <input type="text" {...register("town", { required: "Municipio es obligatorio" })} />
                    {errors.town && <p className="error">{errors.town.message}</p>}
                </div>

                <div className="form-group">
                    <label>Estado</label>
                    <input type="text" {...register("state", { required: "Estado es obligatorio" })} />
                    {errors.state && <p className="error">{errors.state.message}</p>}
                </div>

                <div className="form-group">
                    <label>Número de teléfono</label>
                    <input type="text" {...register("phoneNumber", { required: "Número de teléfono es obligatorio", pattern: { value: /^[0-9]{10}$/, message: "Número de teléfono inválido" } })} />
                    {errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p>}
                </div>

                {payActive ? (
                    <PayPalButtons 
                        createOrder={createOrder}
                        onError={onError}
                        className="paypal"
                    />
                ) : (
                    <button type="submit">Proceder al Pago</button>
                )}
            </form>

            <Modal isOpen={modalOpen}>
                <div className="checkout-modal">
                    <h2>Compra exitosa</h2>
                    <h3>Fecha: {moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
                    <h3>Número de ticket: {ticket}</h3>
                    <h3>Datos de compra:</h3>
                    <label>Nombre: {data?.name}</label>
                    <label>Calle: {data?.street}</label>
                    <label>Código Postal: {data?.cp}</label>
                    <label>Número de Teléfono: {data?.phoneNumber}</label>

                    {productList.map((product: ProductCardProps) => (
                        <div className="checkout-modal-product" key={product.id}>
                            <div className="checkout-modal-product-image">
                                <img src={product.imagesUrl[0]} alt={product.description} />
                            </div>
                            <label>{product.description}</label>
                            <label>Cantidad: {product.quantity}</label>
                            <label>Precio: ${product.quantity! * product.price}</label>
                        </div>
                    ))}
                </div>
            </Modal>

            <ToastContainer />
        </div>
    );
};

export { Checkout };
