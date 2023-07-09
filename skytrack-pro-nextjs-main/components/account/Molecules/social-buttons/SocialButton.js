
import Image from 'next/image'
import Styles from './socialbutton.module.css'
function SocialButton() {
  return (
    <div>
        <div class='flex flex-row space-between width-100'>
            <a>
              <div className={Styles.social1}>
                  <Image src="/assets/icons/google.svg" width={20} height={20}/>
                  <p className={Styles.name}>Google</p>
              </div>
            </a>
           <a>
            <div className={Styles.social1}>
                  <Image src="/assets/icons/fb.svg" width={20} height={20}/>
                  <p className={Styles.name}>FaceBook</p>
              </div>
            </a> 
        </div>
        <div className={Styles.line1}>Or</div>
    </div>
  )
}

export default SocialButton