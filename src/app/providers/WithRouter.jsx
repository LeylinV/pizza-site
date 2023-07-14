import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../../pages/Layout/Layout";
import PageStore from "../../pages/PageStore/PageStore";

const WithRouter = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<PageStore />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default WithRouter