import Head from 'next/head'
import React from 'react'
import ConfirmAccount from '../components/account/Oraganisms/confirm-account/ConfirmAccount'

function confirm() {
  return (
    <div>
        <Head>
            <title>SkyTrack-Confirm</title>
        </Head>
        <ConfirmAccount></ConfirmAccount>
    </div>
  )
}

export default confirm