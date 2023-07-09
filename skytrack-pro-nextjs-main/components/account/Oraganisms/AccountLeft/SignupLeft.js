import React from 'react'
import Title from '../../Atoms/main-title/title'
import SubTitle from '../../Atoms/sub-title/sub-title'
import SocialButton from '../../Molecules/social-buttons/SocialButton'
import MainButton from '../../Atoms/mainButton/MainButton'
import Styles from './leftlayout.module.css'
import SignupForm from '../form/SignupForm'
import Link from 'next/link'
function SignupLeft() {
  return (
    <div className={Styles.bg}>
        <Title />
        <div className={Styles.pad60}>
            <SubTitle> Signup</SubTitle>
        </div>
        <SocialButton />
        <SignupForm />
        <div className={Styles.mt_40}></div>
        <Link href='/confirm'><MainButton>Create account</MainButton></Link>
        <div className={Styles.new}>Already have an account?<Link href='/login' className={Styles.highlight}> Log in</Link></div>
    </div>
  )
}

export default SignupLeft