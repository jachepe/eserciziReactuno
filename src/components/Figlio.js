import React from 'react';

class Figlio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            parola: props.parola
        }
    }



    reverseString = (str) => {
        //creo array
        let splitString = str.split("");
        //inverto array
        let reverseArray = splitString.reverse();
        //riunisco array in parola
        let joinArray = reverseArray.join("");
        //valore di ritorno
        return joinArray;
    };

    render() {
        const style2 = {width: '500px'};

        return (
            <div className="ui card" style={style2}>
                <div className="content">
                    <div className="header"><h2>Secondo Esercizio</h2></div>
                    <hr/>
                    <h3 className="ui sub header">Data una parola dal padre, rovesciarla e stamparla nel figlio</h3>
                </div>
                <div className="content">
                    <h4 className="ui sub header">Svolgimento</h4>
                    <div className="ui small feed">
                        <div className="event">
                            <div className="content">
                                <div className="summary">
                                    Parola: {this.state.parola}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="extra content">
                    <h3>La soluzione è: {this.reverseString(this.state.parola)}</h3>
                </div>
            </div>
        )
    }
}

export default Figlio;
