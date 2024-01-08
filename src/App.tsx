import {Outlet, Route, Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path='/' element={<div>Layout <Outlet/></div>}>
                <Route index element={<div>Main page</div>}/>
            </Route>
        </Routes>
    );
}

export default App;
