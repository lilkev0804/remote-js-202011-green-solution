import React from 'react';
import "./Homepage.css";
import {Link} from "react-router-dom";

function SimulatorBtn() {
    return (
        <div className="simulatorBtn">
            <Link to="/Calculator" style={{textDecoration:'none'}}>
                <button>Simulator</button>
            </Link>
        </div>
    )
}

export default SimulatorBtn;