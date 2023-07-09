import React from 'react'
import ConfirmLayout from '../../Templates/account/confirm/ConfirmLayout'
import Image from 'next/image'
import Link from 'next/link'
import Style from './confirmaccount.module.css'
import PrimaryBtn from '../../Atoms/primary-btn/PrimaryBtn'
function ConfirmAccount() {
  return (
    <div>
        <ConfirmLayout>
        <div class="relative">
                <Image src="/assets/svgs/eclipse.svg" width={150} height={150}/>
                    <div className={Style.svgs}>
                        <Image src="/assets/svgs/particles.svg" width={180} height={180}/>
                    </div>
                    <div className={Style.thumb}>
                    <Image src="/assets/svgs/thumbs-up.svg" width={70} height={70}/>
                    </div>
                    
                </div>
                <div className={Style.c_text}>Your account successfully created</div>
                <Link href='/Home'><PrimaryBtn>Go to home</PrimaryBtn></Link>
             
        </ConfirmLayout>
    </div>
  )
}

export default ConfirmAccount