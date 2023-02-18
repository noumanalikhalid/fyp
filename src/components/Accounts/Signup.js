import React from "react";
import { Link } from "react-bootstrap-icons";
import style from "../../style/Accountpage.module.css";
export const Signup=()=>
{
    return(
        <>
            <div className={style.Accpage}>
        <div className={style.signupbox}>
      <h1>Sign Up</h1>
      <h4>It's free and only takes a minute</h4>
      <form>
        <label>First Name</label>
        <input type="text" placeholder="" required />
        <label>Last Name</label>
        <input type="text" placeholder="" required/>
        <label>Email</label>
        <input type="email" placeholder=""required />
        <label>Password</label>
        <input type="password" placeholder=""  required/>
        <label>Confirm Password</label>
        <input type="password" placeholder=""  required/>
        <input className={style.btn} type="button" value="Submit" />
       
      <closeform></closeform></form>
      <p>
        By clicking the Sign Up button,you agree to our <br />
        <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
      </p> 
      <p className={style.para-2}>Already have an account? Login here </p>
      <Link to="/Login">
      <input className={style.btn2} type="button" value="login" /></Link>
    </div>
    
  
      
   
   
  

</div>
        </>
    )
}