import { NavBar } from './componets/ButtonLink/NavBar/NavBar';

import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/root';
import { Footer } from './componets/Footer/Footer';
import { ShoppingCartContext } from './componets/providers/ShoppingCartContext';
import { useEffect, useState } from 'react';
import { getFromLocalStorage } from './utils/localStorage';

const heroProps = {
    imageUrl:'https://th.bing.com/th/id/R.73bed6e29a955369d340773d70492c0f?rik=o1CQHQxlCZprCQ&riu=http%3a%2f%2fwww.addictivedesertdesigns.com%2fwordpress%2fwp-content%2fuploads%2f2016%2f02%2f2017-ford-raptor.jpg&ehk=rVBAFW3PYpplmpvFCmMeBFZUv2gk99dIakThXB5TT3I%3d&risl=&pid=ImgRaw&r=0',
    imageText: 'Ford',
    headline: '¡Vive la mejor experiencia con Ford!',
    button: {
        href: '/2025',
        label: 'CROMPAR AHORA'
    }
};

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY"

function App() {
    const [productList, setProductList] = useState([]);

    useEffect(()=> {
        const result = getFromLocalStorage(PRODUCT_LIST_KEY);
        if (result) {
            setProductList(result);
        }
    }, []);


    return (
        <ShoppingCartContext.Provider value={{
            productList,
            setProductList
        }}>
        <div className="app">
           <NavBar />
           <RouterProvider router={router} />
           <Footer /> 
        </div>
        </ShoppingCartContext.Provider>
    );
}

export default App;