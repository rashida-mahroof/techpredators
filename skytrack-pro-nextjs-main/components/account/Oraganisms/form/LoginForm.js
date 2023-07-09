import React from 'react'
import Link from 'next/link'
import Label from '../../Atoms/label/Label'
import Styles from './loginform.module.css'
import InputField from '../../Atoms/inputField/InputField'
import CheckBox from '../../Atoms/checkbox/Checkbox'
import PasswordField from '../../Atoms/passwordField/PasswordField'

function LoginForm() {
    return (
        <div>
            <Label>Email Address</Label>
            <InputField>example@gmail.com</InputField>
            <Label>Password</Label>
            <PasswordField />
            <div class="rere flex space-between items-center ">
               
                    <div class="flex items-center justify-center">
                        <CheckBox />
                        <div className={Styles.label}>Remember me</div>
                   </div>
               
                    <Link className={Styles.reset} href="/recover">Reset Password?</Link>

                
            </div>
        </div>
    )
}

export default LoginForm