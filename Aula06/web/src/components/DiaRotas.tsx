import { Route, Routes } from "react-router";
import Manha from "./Manha";
import Tarde from "./Tarde";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";
import Erro from "./Erro";


export default function DiaRotas() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="*" element={<Erro />} />
                <Route path="/manha" element={<Manha />} />
                <Route path="/Tarde" element={<Tarde />} />
            </Routes>
        </BrowserRouter>
    )

};
