import React from 'react';

class TableInput extends React.Component {
    render() {return(
        <div>
            <h2 className="titleBox">{this.props.title}</h2>
            <div className= "inputBox">
                <input className="input"></input>
                <p className="units">{this.props.units}</p>
            </div>
        </div>
        )
    }
}

export default TableInput