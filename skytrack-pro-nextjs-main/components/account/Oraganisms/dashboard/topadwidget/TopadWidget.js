import React from 'react'
import DashBoardWidgetLayout from '../../../../layouts/dashboard/dashWidgetLayout/dashBoardWidgetLayout'
import Image from 'next/image'
import MoreIcon from '../../../Molecules/moreicon/MoreIcon'
function TopadWidget() {
  return (
    <div>
         <DashBoardWidgetLayout className='overflow-scroll'>
           <div className="flex items-center justify-content-between ">
                <h6>Top Ad Campaign</h6>
                <MoreIcon />
            </div>
            <div className='d-flex align-items-center flex-row border-bottom p-3'>
                <Image src="/assets/images/iphone.png" height={64} width={64}></Image>
                <div className='d-flex flex-column'>
                    <span className=' '>NIKE Shoes Black Pattern</span>
                    <div className='d-inline'>
                    <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half" aria-hidden="true"></i>
                     </div>
                    <span>$87</span>
                </div>
            </div>
            <div className='d-flex align-items-center flex-row border-bottom p-3'>
                <Image src="/assets/images/iphone.png" height={64} width={64}></Image>
                <div className='d-flex flex-column'>
                    <span className=''>NIKE Shoes Black Pattern</span>
                    <div className='d-inline'>
                    <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half" aria-hidden="true"></i>
                    </div>
                    <span>$87</span>
                </div>
            </div>
            <div className='d-flex align-items-center flex-row border-bottom p-3'>
                <Image src="/assets/images/iphone.png" height={64} width={64}></Image>
                <div className='d-flex flex-column'>
                    <span className=' '>NIKE Shoes Black Pattern</span>
                    <div className='d-inline'>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-half" aria-hidden="true"></i>
                    </div>
                    <span>$87</span>
                </div>
            </div>
            
            </DashBoardWidgetLayout>
    </div>
  )
}

export default TopadWidget