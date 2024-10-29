import { Catalog } from "../../componets/Catalog/Catalog";
import { Hero } from "../../componets/Hero/Hero";
import { catalogModerntables } from "../../data/moderntables";


const heroMenPage = {
    imageUrl: 'https://admin.alfgroup.com/writable/images/Tavolini%20Contemporary.jpg',
    imageText: 'Muebles OG',

};

const ModerntablesPage = () => {
    return <> 
    
        <Hero {...heroMenPage}/>
        <Catalog productList={catalogModerntables} />
    </>
}

export { ModerntablesPage };