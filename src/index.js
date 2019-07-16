import React from 'react';
import ReactDOM from 'react-dom';

import Triangolo from './components/Triangolo';
import Figlio from './components/Figlio';
import FiglioDue from './components/Figlio2';

let parolaPadre ="scemo chi legge";

const Array = [0, 1, 2, 3, 4, 5];

const style = {maxWidth: '1140px', margin: '40px auto 40px'};


const App = () => {
    return (
        <div className="container centered grid" style={style}>
            <h1 className="container segment" >Esercizi</h1>
            <Triangolo lato1="20" lato2="20" lato3="20" />
            <Figlio parola={parolaPadre} />
            <FiglioDue array={Array} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
