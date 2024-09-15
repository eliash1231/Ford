import { Catalog } from "../../componets/Catalog/Catalog";
import { Hero } from "../../componets/Hero/Hero";
import { catalogMen } from "../../data/catalog";

const heroMenPage = {
    imageUrl: 'https://youtu.be/mwPwIR5en4o?si=oNcz6MkCl3YctebF',
    imageText: 'Lo mejor  en velocidad',
    headline: 'THE DREAM FORD GT',
    button: {
        href: '/',
        label: 'ORDENAR'
    }

};

const MenPage = () => {
    return <>
    <iframe width="1517" height="614" src="https://www.youtube.com/embed/mwPwIR5en4o?autoplay=1&mute=1&controls=0&rel=0&loop=1&start=23" allow="autoplay;" title="YouTube video player" frameBorder="1.44"></iframe>
        <Hero {...heroMenPage}/>
        <Catalog productList={catalogMen} />
    </>
}

export { MenPage };
