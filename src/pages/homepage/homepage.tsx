import { Carousel } from '../../componets/Carousel/Carousel';
import { sales, Speed } from '../../data/sales';
import { trendingProducts } from '../../data/treding-product';

const heroProps = {
    imageUrl:'https://youtu.be/AwhT7fw3pNY?si=oNcz6MkCl3YctebF',
    imageText: 'Ford',
    headline: '¡Vive la mejor experiencia con Ford!',
    button: {
        href: '/2025',
        label: 'COMPRA AHORA'
    }
};

const Homepage = () => {
    return <>
        <div className="App">
        <iframe width="1515" height="620" src="https://www.youtube.com/embed/AwhT7fw3pNY?autoplay=1&mute=1&controls=0&rel=0&loop=1&start=8" allow="autoplay;" title="YouTube video player" frameBorder="1.44"></iframe>
           <Carousel items={sales} title='Bienvenidos a la línea de partida, Motor, Tren motriz, Músculo, Llámalo como quieras pero para nosotros,'
            subtitle='Esto es solo el comienzo de la historia' /> 
           <Carousel items={trendingProducts} title='¿Cuál es el sistema de propulsión adecuado para mí?'
            subtitle='' />
           <Carousel items={Speed} title='Encuentra la potencia que mejor se adapta a ti'
           subtitle='' />
        </div>
    </>
}

export { Homepage };