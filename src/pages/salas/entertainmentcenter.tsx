import { Catalog } from "../../componets/Catalog/Catalog";
import { Hero } from "../../componets/Hero/Hero";
import { catalogEntertainmentcenter } from "../../data/entertainmentcenter";

const heroMenPage = {
    imageUrl: 'https://admin.alfgroup.com/writable/images/Ent%20Center%20Contemporary.jpg',
    imageText: 'Muebles OG',
};

const EntertainmentcenterPage = () => {
    return <> 
    
        <Hero {...heroMenPage}/>
        <Catalog productList={catalogEntertainmentcenter} />
    </>
}

export { EntertainmentcenterPage };