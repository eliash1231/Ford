import { Catalog } from "../../componets/Catalog/Catalog";
import { Hero } from "../../componets/Hero/Hero";
import { catalogMen } from "../../data/diningrooms";

const heroMenPage = {
    imageUrl: 'https://admin.alfgroup.com/writable/images/Sale%20Contemporary.jpg',
    imageText: 'Muebles OG',
};

const MenPage = () => {
    return <> 
    

        <Catalog productList={catalogMen} />
    </>
}

export { MenPage };
