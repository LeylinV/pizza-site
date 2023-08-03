import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Layout} from "pages/Layout";

import {StorePage} from "pages/StorePage/ui";

const WithRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<StorePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default WithRouter