import React from "react";

import style from "../../style/Accountpage.module.css";

export const Login=()=>
{
    return(
        <>
        
        <div className={style.loginbox}>
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <input className={style.btn3} type="button" value="Submit" />
      <closeform></closeform></form>
    </div>
   
    <p className={style.para-2}>
      Not have an account? Sign Up Here 
    </p>
    
        </>
    )
}