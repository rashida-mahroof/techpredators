import React from 'react'
import Style from './label.module.css'
function Label({children}) {
  return (
    <div className={Style.lab}>
        {children}
    </div>
  )
}

export default Label