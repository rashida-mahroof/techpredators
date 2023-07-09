
import React from 'react'
import Style from './primarybtn.module.css'
function PrimaryBtn({children}) {
  return (
    <div>
        <button className={Style.btn}>{children}</button>
    </div>
  )
}

export default PrimaryBtn