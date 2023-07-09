import React from 'react'
import Style from './titlelayout.module.css'
function TitleLayout({children}) {
  return (
    <div className={Style.display}>
        {children}
    </div>
  )
}

export default TitleLayout