import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css"

export default function Home() {
    return (
        <div className={"survay-home-div"}>
            <Link  to="/input">
                <button className="survay-btn">Входное тестирование</button>
            </Link>
        </div>

    );
}