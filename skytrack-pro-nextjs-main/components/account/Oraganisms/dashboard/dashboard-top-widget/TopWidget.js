import React from 'react'
import Styles from './topwidget.module.css'
import Image from 'next/image'
const topContents=[
    {icon:'/assets/svgs/Heart.svg',count:'178+',title:'Total leads',bg:'rgba(58, 54, 219, .1)'},
    {icon:'/assets/svgs/Game.svg',count:'20+',title:'Total sale closed',bg:'rgba(3, 168, 158, .1)'},
    {icon:'/assets/svgs/Bag.svg',count:'190+',title:'Total amount spent',bg:'rgba(255, 105, 180, .1)'},
    {icon:'/assets/svgs/Work.svg',count:'12+',title:'Total page reach',bg:'rgba(58, 54, 219, .1)'},
]
function TopWidget() {
  return (
    <div>
        <div className='row'>
       { topContents.map((route) =>(
              <div className='col-md-3'>
              <div className={Styles.box}>
                  <div className={Styles.icon_box}>
                      <Image src={route.icon} width={20} height={20}></Image>
                  </div>
                  <div class="flex flex-column">
                          <h5 className={Styles.count}>{route.count}</h5>
                          <p className={Styles.title}>{route.title}</p>
                  </div>
              </div>
          </div>
        ))}
          
        </div>
    </div>
  )
}

export default TopWidget