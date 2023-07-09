import React from 'react'
import Style from './Datefield.module.css'
function DateField() {
  return (
    <div>
        <input className={Style.date} type="date" placeholder=''/>
    </div>
  )
}

export default DateField