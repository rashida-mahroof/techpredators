import React from 'react'
import DashBoardWidgetLayout from '../../../../layouts/dashboard/dashWidgetLayout/dashBoardWidgetLayout'
import MoreIcon from '../../../Molecules/moreicon/MoreIcon'
import Styles from './tableview.module.css'
import Image from 'next/image'
function TableView() {
  return (
    <div >
        <DashBoardWidgetLayout className='overflow-scroll'>
           <div className="flex items-center justify-content-between ">
                <h6>Recent Leads</h6>
                <MoreIcon />
            </div>
            <table className={Styles.table}>
      <thead>
        <tr>
            <th>Tracking No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Total order</th>
          <th>Total amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Tracking No">#876364</td>
          <td data-label="Name"><Image src="" width/><Image src='/assets/images/product.png' width={30} height={30}></Image> Camera lense</td>
          <td data-label="Price">$178</td>
          <td data-label="Total order"><div className={Styles.total}>328</div></td>
          <td data-label="Total amount">$1,46,660</td>
        </tr>
        <tr>
          <td data-label="Tracking No">#876364</td>
          <td data-label="Name"><Image src="" width/><Image src='/assets/images/product.png' width={30} height={30}></Image> Camera lense</td>
          <td data-label="Price">$178</td>
          <td data-label="Total order"><div className={Styles.total}>328</div></td>
          <td data-label="Total amount">$1,46,660</td>
        </tr>
        <tr>
          <td data-label="Tracking No">#876364</td>
          <td data-label="Name"><Image src="" width/><Image src='/assets/images/product.png' width={30} height={30}></Image> Camera lense</td>
          <td data-label="Price">$178</td>
          <td data-label="Total order"><div className={Styles.total}>328</div></td>
          <td data-label="Total amount">$1,46,660</td>
        </tr>
        <tr>
          <td data-label="Tracking No">#876364</td>
          <td data-label="Name"><Image src="" width/><Image src='/assets/images/product.png' width={30} height={30}></Image> Camera lense</td>
          <td data-label="Price">$178</td>
          <td data-label="Total order"><div className={Styles.total}>328</div></td>
          <td data-label="Total amount">$1,46,660</td>
        </tr>
        <tr>
          <td data-label="Tracking No">#876364</td>
          <td data-label="Name"><Image src="" width/><Image src='/assets/images/product.png' width={30} height={30}></Image> Camera lense</td>
          <td data-label="Price">$178</td>
          <td data-label="Total order"><div className={Styles.total}>328</div></td>
          <td data-label="Total amount">$1,46,660</td>
        </tr>
       
      </tbody>
    </table>
            </DashBoardWidgetLayout>
        
    </div>
  )
}

export default TableView