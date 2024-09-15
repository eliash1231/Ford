import { useForm } from 'react-hook-form';
import './checkout.styles.scss';

const Checkout = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data)
    }

    return <div className='checkout'>
            <h1>Finaliza la compra</h1>
        <form className='checkout-form' onSubmit={handleSubmit(onSubmit)}>
            <h2>Facturacion</h2>
            <label>Nombre completo</label>
            <input type="text" {...register("name")}/>
            <label>calle</label>
            <input type="text" {...register("street")}/>
            <label>codigo postal</label>
            <input type="text" {...register("cp")}/>
            <label>colonia</label>
            <input type="text" {...register("colony")}/>
            <label>Municipio</label>
            <input type="text" {...register("tonw")}/>
            <label>estasdo</label>
            <input type="text" {...register("state")}/>
            <label>Numero de telefono</label>
            <input type="text" {...register("phoneNumber")}/>
            <button type='submit'>Comprar</button>
        </form>
    </div>
}

export { Checkout };