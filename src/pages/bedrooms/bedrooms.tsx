import { Catalog } from "../../componets/Catalog/Catalog";
import { Hero } from "../../componets/Hero/Hero";
import { catalogBedrooms } from "../../data/bedrooms";


const heroMenPage = {
    imageUrl: 'https://admin.alfgroup.com/writable/images/Camere%20Contemporary.jpg',
    imageText: 'Muebles OG',
};

const BedroomsPage = () => {
    return <> 
    
        <Hero {...heroMenPage}/>
        <Catalog productList={catalogBedrooms} />
    </>
}

export { BedroomsPage };