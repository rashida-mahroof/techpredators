import React from 'react'
import Style from './confirmlayout.module.css'
function ConfirmLayout({children}) {
  return (
    <div>
        <div className={Style.outer}>
            <div className={Style.bg}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default ConfirmLayout