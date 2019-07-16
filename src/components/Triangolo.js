import React from 'react';

const Triangolo = (props) => {

    let lato1 = props.lato1;
    let lato2 = props.lato2;
    let lato3 = props.lato3;

    const style2 = {width: '500px'};

    function calcoloTirangolo() {
        if (lato1 === lato2 && lato2 === lato3) {
            return "Equilatero";
        } else if (lato1 === lato2 || lato2 === lato3 || lato1 === lato3) {
            return "Isoscele";
        } else {
            return "Scaleno";
        }
    }

    return (
        <div className="ui card" style={style2}>
            <div className="content">
                <div className="header"><h2>Primo Esercizio</h2></div>
                <hr />
                <h3 className="ui sub header">Dati tre valori numerici, che tipo di triangolo è ?</h3>
            </div>
            <div className="content">
                <h4 className="ui sub header">Svolgimento</h4>
                <div className="ui small feed">
                    <div className="event">
                        <div className="content">
                            <div className="summary">
                                Lato Uno: {lato1}
                            </div>
                        </div>
                    </div>
                    <div className="event">
                        <div className="content">
                            <div className="summary">
                                Lato Due: {lato2}
                            </div>
                        </div>
                    </div>
                    <div className="event">
                        <div className="content">
                            <div className="summary">
                                Lato Tre: {lato3}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="extra content">
                <h3>La soluzione è: Triangolo {calcoloTirangolo()}</h3>
            </div>
        </div>








               /*     <p>Vi chiedo di creare, usando create-react-app, un piccolo software che, date tre valori numerici,
                        mi restituisca che tipo di triangolo sia (isoscele, scaleno, ecc...).</p>*/

    )
};

export default Triangolo;
