import {BrowserRouter, Routes, Route} from "react-router-dom";

const WithRouter = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<div><h1>Старт</h1></div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default WithRouter