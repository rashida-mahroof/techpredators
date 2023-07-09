import React from 'react'
import RightImage from '../../../Atoms/right-image/RightImage'
import LeftLayout from '../../../Oraganisms/AccountLeft/LoginLeft'
import Image from 'next/image'
function LoginLayout() {
  return (
    <div>
         <div class="vh-100">
          <div class="row">
                <div class="col-md-4 bg-white overflow-auto vh-100">
                    <LeftLayout />
                </div>
                <div class="col-md-8 bg-grey">
                    <RightImage>
                        <Image  src='/assets/images/login-vector.png' width={647} height={602}/>
                    </RightImage>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginLayout