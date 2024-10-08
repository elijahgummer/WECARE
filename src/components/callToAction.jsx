import React from "react";
import './css/CTA.css'
import pills from './images/pills.png'
import { PrimButton } from "./Buttons";
function CallToAction() {
    return(
        <div id="cta">
            <div className="container">
                <div className="image-container">
                    <img src={pills} alt="pills" />
                </div>
                <div className="content">
                    <h1>Public Pharmacy</h1>
                    <p>Managing your medications at We Care Medical Clinic is simple, from start to finish.                     </p>
                    <PrimButton>LEARN MORE</PrimButton>
                </div>
            </div>
        </div>
    );
}
export default CallToAction;