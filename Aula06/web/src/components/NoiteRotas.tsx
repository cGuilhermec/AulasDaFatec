import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";
import Erro from "./Erro";
import Noite from "./Noite";
import Madrugada from "./Madrugada";


export default function DiaRotas() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="*" element={<Erro />} />
                <Route path="/Noite" element={<Noite />} />
                <Route path="/Madrugada" element={<Madrugada />} />
            </Routes>
        </BrowserRouter>
    )

};
