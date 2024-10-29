import { ButtonLink } from '../../componets/ButtonLink/ButtonLink';
import { Hero } from '../../componets/Hero/Hero';
import { motion } from "framer-motion";
import './homepage.styles.scss';

const heroProps = {
    imageUrl:'https://admin.alfgroup.com/writable/images/Home%20office%20Contemporary.jpg',
    imageText: 'Muebles OG',

};

const Homepage = () => {
    return <>
        <motion.div
            initial={{ opacity: 0, y: '20%' }}
            animate={{ opacity: 1, y: '0%' }}
            transition= {{ duration: 2}}
        >
            <Hero {...heroProps} />
        </motion.div>


        <div className="contenedor left" >
            <div className="c-contenido">
                <h1>DORMITORIOS MODERNOS</h1>
                <p>Gracias a los diversos acabados y estilos, los dormitorios modernos se adaptan a cualquier ambiente.
                    Incluyen distintos componentes, desde las camas en varios tamaños hasta las cómodas, 
                    las mesitas de noche, los espejos, los muebles Vanity y los armarios.
                </p>
                <ButtonLink label="DESCUBRE LOS PRODUCTOS DE DORMITORIOS MODERNOS" href={'/'}/>
            </div>
            <div className="c-image ">
                <img src="https://www.alfitalia.com/resources/img/p/home/box/camere.jpg?2024" />
            </div>   
        </div>

        <div className="contenedor right" >
            <div className="c-image">
                <img src="https://www.alfitalia.com/resources/img/p/home/box/sale.jpg" />
            </div>
            <div className="c-contenido">
                <h1>COMEDORES MODERNOS</h1>
                <p>Gracias a los diversos acabados y estilos, los comedores modernos se adaptan a cualquier ambiente.
                   Abarcan distintos componentes, desde las mesas en varios tamaños a los buffets, los espejos y las sillas.
                </p>
                <ButtonLink label="DESCUBRE LOS PRODUCTOS DE COMEDORES MODERNOS" href={'/'}/>
            </div>   
        </div>

        <div className="contenedor  left" >
            <div className="c-contenido">
                <h1>CENTRO DE ENTRETENIMIENTO MODERNO</h1>
                <p>Gracias a los diversos acabados y estilos, los centros de entretenimiento se adaptan a cualquier ambiente. 
                    Abarcan distintos componentes, desde las bases para TV a los paneles de pared y a las librerías.
                </p>
                <ButtonLink label="DESCUBRE LOS PRODUCTOS DE CENTROS DE ENTRETENIMIENTO" href={'/'}/>
            </div>
            <div className="c-image">
                <img src="https://www.alfitalia.com/resources/img/p/home/box/ec.jpg" />
            </div>   
        </div>

        <div className="contenedor  right" >
            <div className="c-image">
                <img src="https://www.alfitalia.com/resources/img/p/home/box/tavolini.jpg" />
            </div>
            <div className="c-contenido">
                <h1>MESITAS MODERNAS</h1>
                <p>Gracias a los diversos acabados y estilos, las mesitas modernas se adaptan a cualquier ambiente.
                </p>
                <ButtonLink label="DESCUBRE LOS PRODUCTOS DE MESITAS" href={'/'}/>
            </div>   
        </div>

        <div className="contenedor left" >
            <div className="c-contenido">
                <h1>HOME OFFICE MODERNAS</h1>
                <p>Gracias a los diversos acabados y estilos, las oficinas modernas se adaptan a cualquier ambiente.
                    Abarcan distintos componentes, desde escritorios en varios tamaños a librerías, ficheros, vitrinas y contenedores con ruedas.
                </p>
                <ButtonLink label="DESCUBRE LOS PRODUCTOS DE HOME OFFICE" href={'/'}/>
            </div>
            <div className="c-image">
                <img src="https://www.alfitalia.com/resources/img/p/home/box/home-office.jpg" />
            </div>   
        </div>
    </>
}

export { Homepage };