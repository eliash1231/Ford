import { Navigate, createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/homepage/homepage";
import { MenPage } from "../pages/men/men";
import { ProductPage } from "../pages/product/product";
import { ShoppingCartPage } from "../pages/shopping-cart/shoppingCart";
import { Checkout } from "../pages/checkout/checkout";
import { BedroomsPage } from "../pages/bedrooms/bedrooms";
import { ModerntablesPage } from "../pages/moderntables/moderntables";
import { EntertainmentcenterPage } from "../pages/salas/entertainmentcenter";
import { FavoritesPage } from "../pages/favorites/favorites";



const router = createBrowserRouter([
    {
        path: "/",
        element: (
          <Homepage />    
        ),
    },
    {
        path: "centro-entretenimiento",
        element: <EntertainmentcenterPage />,
    },
    {
        path: "comedores-modernos",
        element: <MenPage />,
    },
    {
        path: "dormitorios-modernos",
        element: <BedroomsPage />,
    },
    {
        path: "mesitas-modernas",
        element: <ModerntablesPage />,
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
        path: "favorites",
        element: <FavoritesPage />
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