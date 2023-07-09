import React from 'react'
import Head from 'next/head'
import SignupLayout from '../components/account/Templates/account/login/SignupLayout'
function Signup() {
  return (
    <div>
            <Head>
                <title>SkyTrack-Login</title>
            </Head>
            <SignupLayout/>
    </div>
  )
}

export default Signup