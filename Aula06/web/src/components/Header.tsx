import { Link } from "react-router-dom";
import '../style/Header.css';
import { createContext, useContext, useState } from "react";
import DiaRotas from '../components/DiaRotas';
import NoiteRotas from '../components/NoiteRotas';


interface Props {
    logado: boolean;
    setLogado: Function;
}

export function Rotas() {
    const { logado } = useContext(Contexto);
    return logado ? <DiaRotas /> : <NoiteRotas />;
    }
    


const Contexto = createContext<Props>({} as Props);

export function Provider({ children }: any) {
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
    


export function Header(){
    const { logado, setLogado } = useLogado();

    return (

        <header className="header">

            <div className="logo">
                <h1>Site-Web</h1>
            </div>

           <div className="btns">
                <div>
                    <button onClick={() => setLogado(true)}>Login</button>
                    <button onClick={() => setLogado(false)}>Logout</button>
                    <span>{logado ? "Logado" : "Desconectado"}</span>
                </div>

                <div>
                    <Link className="btn" to="manha">Manhã</Link>
                    <Link className="btn" to="Tarde">Tarde</Link>
                    <Link className="btn" to="Noite">Noite</Link>  
                    <Link className="btn" to="Madrugada">Madrugada</Link>  
                </div>
            </div> 

        </header>
    );

};