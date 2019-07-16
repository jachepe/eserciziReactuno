import React from 'react';

const FiglioDue = (props) => {

    let array = props.array;
    let arraySol = props.array[4];
    const style2 = {width: '500px'};

    return(
        <div className="ui card" style={style2}>
            <div className="content">
                <div className="header"><h2>Terzo Esercizio</h2></div>
                <hr/>
                <h3 className="ui sub header">Dato un Array nel padre, stampare il quinto elemento nel figlio</h3>
            </div>
            <div className="content">
                <h4 className="ui sub header">Svolgimento</h4>
                <div className="ui small feed">
                    <div className="event">
                        <div className="content">
                            <div className="summary">
                                Array: {array}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="extra content">
                <h3>La soluzione è: {arraySol}</h3>
            </div>
        </div>
    )
};

export default FiglioDue;
