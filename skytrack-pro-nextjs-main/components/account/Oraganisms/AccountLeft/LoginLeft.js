
import Title from '../../Atoms/main-title/title'
import SubTitle from '../../Atoms/sub-title/sub-title'
import SocialButton from '../../Molecules/social-buttons/SocialButton'
import MainButton from '../../Atoms/mainButton/MainButton'
import Styles from './leftlayout.module.css'
import Link from 'next/link'
import LoginForm from '../form/LoginForm'
function LeftLayout() {
  return (
    <div className={Styles.bg}>
        <Title />
        <div className={Styles.pad60}>
            <SubTitle> Login</SubTitle>
        </div>
        <SocialButton />
        <LoginForm />
        <div className={Styles.mt_40}></div>
        <MainButton>Login</MainButton>
        <div className={Styles.new}>Don’t have account yet? <Link className={Styles.highlight} href='/signup'>New Account</Link></div>
    </div>
  )
}

export default LeftLayout