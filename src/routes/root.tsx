import { Navigate, createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/homepage/homepage";
import { MenPage } from "../pages/men/men";
import { ProductPage } from "../pages/product/product";
import { ShoppingCartPage } from "../pages/shopping-cart/shoppingCart";
import { Checkout } from "../pages/checkout/checkout";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
          <Homepage />    
        ),
    },
    {
        path: "Vehiculos",
        element: <MenPage />,
    },
    {
        path: "soporte_servicio",
        element: <MenPage />,
    },
    {
        path: "historia",
        element: <MenPage />,
    },
    {
        path:"product/:productId",
        element: <ProductPage />
    },
    {
        path: "shopping-cart",
        element: <ShoppingCartPage />
    },
    {
        path: "checkout",
        element: <Checkout />
    },
    {
        path: "*",
        element: (<Navigate to="/" replace={true} />)
    }
]);

export { router };