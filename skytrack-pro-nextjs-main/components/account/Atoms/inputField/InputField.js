import React from 'react'
import Style  from './inputfield.module.css'
function InputField({children}) {
  return (
    <div>
        <input className={Style.input} placeholder={children}></input>
        
    </div>
  )
}

export default InputField