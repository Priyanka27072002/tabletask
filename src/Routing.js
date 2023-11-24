import React from "react";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Form from "./Component/Form/Form.js";
import Table from "./Component/Table/Table.js";
const Routing=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Form/>} />
            <Route path="/table" element={<Table/>} />
        </Routes>
        </BrowserRouter>
    )
}
export default Routing