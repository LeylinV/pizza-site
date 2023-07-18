import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";

import {Layout} from "pages/Layout"

import {StorePage} from "pages/StorePage"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route index element={<StorePage/>}/>
        </Route>
    )
);

export default router;