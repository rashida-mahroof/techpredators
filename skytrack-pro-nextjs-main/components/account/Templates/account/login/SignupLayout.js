import React from 'react'
import RightImage from '../../../Atoms/right-image/RightImage'
import Image from 'next/image'
import SignupLeft from '../../../Oraganisms/AccountLeft/SignupLeft'
function SignupLayout() {
  return (
    <div>
         <div class="vh-100">
          <div class="row">
                <div class="col-md-4 bg-white overflow-auto vh-100">
                   <SignupLeft />
                </div>
                <div class="col-md-8 bg-grey">
                    <RightImage>
                    <Image  src='/assets/images/signup-vector.png' width={694} height={428}/>
                    </RightImage>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignupLayout