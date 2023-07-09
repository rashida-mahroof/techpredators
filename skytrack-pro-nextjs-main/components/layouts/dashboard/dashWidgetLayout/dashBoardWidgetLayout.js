import React from 'react'
import Styles from './dashboardwidgetlayout.module.css'
function DashBoardWidgetLayout({children}) {
  return (
    <div>
        <div className={Styles.cview}>
           {children}
        </div>
    </div>
  )
}

export default DashBoardWidgetLayout