import React from "react";
import style from "../../style/Paint.module.css";

const Paint=(props)=>
{
    return(
        <>
        <div className={style.paintclass}>
            <img  className={style.imgsize} src={props.imgsrc} alt='my_picture'/>
            <p className={style.paintname} >{props.Name}</p>
            </div>
        </>
    )
}
export default Paint;