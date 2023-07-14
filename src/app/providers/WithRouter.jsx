import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../../pages/Layout/Layout";

const WithRouter = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<div><h1>Старт</h1></div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default WithRouter