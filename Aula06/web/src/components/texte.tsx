import { BrowserRouter, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import { createContext, useContext, useState } from "react";

export default function App() {
    return (
        <Provider>
            <Rotas />
        </Provider>
    );
}

function Rotas() {
    const { logado } = useContext(Contexto);
    return logado ? <DiaRotas /> : <NoiteRotas />;
}


function DiaRotas() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="*" element={<Erro />} />
                <Route path="/manha" element={<Manha />} />
                <Route path="/tarde" element={<Tarde />} />
            </Routes>
        </BrowserRouter>
    );
}

function NoiteRotas() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="*" element={<Erro />} />
                <Route path="/noite" element={<Noite />} />
                <Route path="/madrugada" element={<Madrugada />} />
            </Routes>
        </BrowserRouter>
    );
}

function Manha() { return <div>bom dia</div>; }
function Tarde() { return <div>boa tarde</div>; }
function Noite() { return <div>boa noite</div>; }
function Madrugada() { return <div>bom sono</div>; }
function Erro() { return <div>Rota inexistente</div>; }

function Menu() {
    const { logado, setLogado } = useLogado();
    return (
        <div>
            <button onClick={() => setLogado(true)}>Login</button>
            <button onClick={() => setLogado(false)}>Logout</button>
            <span>{logado ? "Logado" : "Desconectado"}</span>
            <Link to="manha">Manhã</Link>
            <Link to="tarde">Tarde</Link>
            <Link to="noite">Noite</Link>
            <Link to="madrugada">Madrugada</Link>
        </div>
    );
}

interface Props {
    logado: boolean;
    setLogado: Function;
}

const Contexto = createContext<Props>({} as Props);

function Provider({ children }: any) {
    const [logado, setLogado] = useState(false);
    return (
        <Contexto.Provider value={{ logado, setLogado }}>
            {children}
        </Contexto.Provider>
    );
}

// definição do Hook
function useLogado() {
    const context = useContext(Contexto);
    return context;
}