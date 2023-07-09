import React from 'react'
import Link from 'next/link'
import Label from '../../Atoms/label/Label'
import Styles from './loginform.module.css'
import InputField from '../../Atoms/inputField/InputField'
import PasswordField from '../../Atoms/passwordField/PasswordField'
import CheckBox from '../../Atoms/checkbox/Checkbox'
function SignupForm() {
    return (
        <div>
            <Label>Full Name</Label>
            <InputField>Enter your fullname</InputField>
            <Label>Email address</Label>
           <InputField>example@gmail.com</InputField>
            <Label>Username</Label>
            <InputField>Enter your username</InputField>
            <Label>Password</Label>
            <PasswordField />
            <div class=" flex space-between items-center ">
                <div class="flex items-center justify-center">
                    <CheckBox/>
                    <label className={Styles.policy} for="remember">
                        By creating an account you agree to the
                         <span className={Styles.policy1}>terms of use</span> 
                          and our <span className={Styles.policy1}>privacy policy</span> .</label>

                </div>
               
            </div>
        </div>
    )
}

export default SignupForm