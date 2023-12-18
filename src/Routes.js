import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";

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
            {path: '/', element: <HomePage />},
            {path: '/products', element: <Products />},      
        ],
    },
]);


export default Router;