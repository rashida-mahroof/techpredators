import React from 'react'
import { useState } from 'react';
import Styles from './passwordfield.module.css'
  const Eye=()=>{
        if(password=="password"){
            setpassword("text");
            seteye(false);
            settype(true);
        }
        else{
            setpassword("password");
            seteye(true);
            settype(false);
        }
    }
function PasswordField() {
    const[eye,seteye]=useState(true);
  
  return (
    <div>
        <div class="relative">
                <input class='input' type="password" name="password" placeholder="Enter Your Password" />
                <div className={Styles.show_icon_box}>
                    {/* <i class="fa fa-eye-slash"></i> */}
                    {/* <div onclick="myPassword(1)" id="openEye1" style="display: none;"><i class="fa fa-eye"></i></div> */}
                    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                </div>
            </div>
    </div>
  )
}

export default PasswordField