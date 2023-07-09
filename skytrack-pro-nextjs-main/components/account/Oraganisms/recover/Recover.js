import Link from 'next/link'
import React from 'react'
import InputField from '../../Atoms/inputField/InputField'
import Label from '../../Atoms/label/Label'
import Title from '../../Atoms/main-title/title'
import MainButton from '../../Atoms/mainButton/MainButton'
import SubTitle from '../../Atoms/sub-title/sub-title'
import ConfirmLayout from '../../Templates/account/confirm/ConfirmLayout'
import Style from './recover.module.css'
function Recover() {
  return (
   <div >
     
       <ConfirmLayout>
            <div class='width-100'>
                <Title />
                <div className={Style.mt_70}></div>
                <SubTitle>Recover</SubTitle>
                <Label>Email address</Label>
                <InputField>example@gmail.com</InputField>
                <Link href='/'><MainButton>Reset your password</MainButton></Link>
            </div>
       </ConfirmLayout>
    
   </div>
  )
}

export default Recover