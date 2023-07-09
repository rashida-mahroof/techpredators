import React from 'react'
import Head from 'next/head'
import LoginLayout from '../components/account/Templates/account/login/LoginLayout'
function login() {
  return (
    <div>
            <Head>
                <title>SkyTrack-Login</title>
            </Head>
            <LoginLayout/>
    </div>
  )
}

export default login