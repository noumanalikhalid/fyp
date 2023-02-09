import React from "react";
import { ArrowBarLeft, ArrowLeft, ChevronLeft } from "react-bootstrap-icons";
import style from "../../style/Built.module.css";
import { PBuilt } from "./PBuilt";
//var slider = document.getElementById("myRange");
//var output = document.getElementById("demo");
//output.innerHTML = slider.value;
//slider.oninput = function() {
  //  output.innerHTML = this.value;
//}
export const Built= () => { 
    // console.log(slider.value)
    return<>
        <div className={style.container}>
            <div className={style.breadcrumb}>
                <p>Porsche Car Configurator</p>
            </div>
            <button className={style.back}>
                <ChevronLeft/>
                Back
            </button>
            <div className={style.selectionpart}>
                <div className={style.leftselect}>
                    {/* Models */}
                    <h2>MODELS</h2>
                    <div className={style.childleftselect}>
                        <button>718</button>
                        <button>911</button>
                        <button>Taycan</button>
                        <button>Panamera</button>
                        <button>Macan</button>
                        <button>Cayenne</button>
                    </div>
                    {/* Body Design */}
                    <h2>BODY DESGIN</h2>
                    <div className={style.childleftselectbody}>
                        <button>COUPE</button>
                        <button>CABORIOLET</button>
                        <button>ROADSTER</button>
                        <button>SUV</button>
                        <button>SPORT SALON</button>
                        <button>EXECUTIVE</button>
                        <button>SUPORT TRUISOMO</button>
                        <button>CROSS TURISOMO</button>
                    </div>
                    {/* Transmission */}
                    <h2>TRANSMISSION</h2>
                    <div className={style.childleftselectbody}>
                        <button>MANUAL</button>
                        <button>TIPTRONIC</button>
                        <button>PDK</button>
                        <button>2-SPEED TRANSMISSION</button>
                    </div>
                    {/* SEATS */}
                    <h2>SEATS</h2>
                    <div className={style.childleftselectbody}>
                        <button>2</button>
                        <button>4 - 5</button>
                    </div>
                    {/* DRIVE */}
                    <h2>DRIVE</h2>
                    <div className={style.childleftselectbody}>
                        <button>REAR WHEEL DRIVE</button>
                        <button>ALL WHEEL DRIVE</button>
                    </div>
                    {/* FUELTYPE */}
                    <h2>FUELTYPE</h2>
                    <div className={style.childleftselectbody}>
                        <button>GASOLINE</button>
                        <button>DIESEL</button>
                        <button>HYBRID</button>
                        <button>ELECTRO</button>
                    </div>
                    {/* HORESPOWER */}
                    <h2>HORESPOWER</h2>
                    <div className={style.setuprange}>
                        <p id="demo"></p><p>HP</p>
                    </div>
                    <div className={style.leftrange}>
                        <input type="range" min="200" max="800" id="myRange"/> 
                    </div>
                    <div className={style.childleftselectbody}>
                        <button>RESET FILTER</button>
                    </div>
                </div>
                <div className={style.rightmain}>
                <h3>718 Models</h3>
                    <PBuilt/>
                    
                </div>
            </div>
           
        </div>
    </>
}