import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetailsPage from "./pages/ProductDetails";

// const routeDefinations = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<Products />} />
//     </Route>
// );
// const Router = createBrowserRouter(routeDefinations);

const Router = createBrowserRouter([
    {
        path :'/',
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            // {path: '/', element: <HomePage />},
            
            //This is the default route (index property will set it to the default route '/')
            {index: true, element: <HomePage />},
            {path: '/products', element: <Products />},     
            {path: '/products/:productId', element: <ProductDetailsPage/>} 
        ],
    },
]);


export default Router;