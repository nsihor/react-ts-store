import {Outlet, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";

import MainPage from "./pages/MainPage";
const ProductPage = lazy(() => import('./pages/ProductPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const OrderPage = lazy(() => import('./pages/OrderPage'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={<div>Layout <Outlet/></div>}>
                    <Route index element={<MainPage/>}/>
                    <Route path='cart' element={<CartPage/>}/>
                    <Route path='order' element={<OrderPage/>}/>
                    <Route path=':id' element={<ProductPage/>}/>
                    <Route path='*' element={<MainPage/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
