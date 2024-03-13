import { useState } from "react";
import '../styles/Nome.css';

interface Props {
    nome: string;
    idade: string;
};

function Nome( prop: Props ) {
    return <div> Bom dia {prop.nome} sua idade é {prop.idade} </div>
};

function Exibir( prop: { lista: Props[] } ) {
    return (

        <ol>

            {
                prop.lista.map( item => <li> Nome {item.nome} e a idade {item.idade}; </li> )
            }

        </ol>

    );
};


export default function App() {
    const [ nome, setNome ] = useState( "" );
    const [ idade, setIdade ] = useState( "" );
    const [ lista, setLista ] = useState([] as Props[]);

    const save = () => {

        setLista([ ...lista, { nome, idade } ]);
        console.log(lista);

    };

    return (
        <div className="divs">

            <Nome nome={nome} idade={idade} />

            <label> Nome: </label>
            <input 
                value={nome} 
                onChange={ (e) => setNome( e.target.value ) } 
            />
            
            <label> Idade: </label>
            <input value={idade} onChange={ (e) => setIdade( e.target.value ) } />
            <button onClick={save} >Salvar</button>
            <Exibir lista={lista} />

        </div>
    );

};