import React from 'react'
import TitleLayout from '../../../layouts/dashboard/TitleLayout/TitleLayout'
import MainButton from '../../Atoms/mainButton/MainButton'
import DashTitle from '../../Atoms/DashTitle/DashTitle'
import MoreIcon from '../../Molecules/moreicon/MoreIcon'
import Image from 'next/image'
import Styles from './analyticslayout.module.css'
function AnalyticsLayout() {
  return (
    <div>
       
        <div className='row'>
          <div className='col-md-10'>
          <TitleLayout>
          <DashTitle>Analytics</DashTitle>
          <MainButton> +  Add Customer </MainButton>
        </TitleLayout>
          <table width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone no</th>
              <th>Gender</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className={Styles.row}>
              <td>
                <Image src="/assets/images/image.png" height={30} width={30}></Image>
                John Doe
              </td>
              <td>johndoe@gmail.com</td>
              <td>+91234567890</td>
              <td>Male</td>
              <th><MoreIcon/></th>
            </tr>
            <tr className={Styles.row}>
              <td>
                <Image src="/assets/images/image.png" height={30} width={30}></Image>
                John Doe
              </td>
              <td>johndoe@gmail.com</td>
              <td>+91234567890</td>
              <td>Male</td>
              <th><MoreIcon/></th>
            </tr>
            <tr className={Styles.row}>
              <td>
                <Image src="/assets/images/image.png" height={30} width={30}></Image>
                John Doe
              </td>
              <td>johndoe@gmail.com</td>
              <td>+91234567890</td>
              <td>Male</td>
              <th><MoreIcon/></th>
            </tr>
            <tr className={Styles.row}>
              <td>
                <Image src="/assets/images/image.png" height={30} width={30}></Image>
                John Doe
              </td>
              <td>johndoe@gmail.com</td>
              <td>+91234567890</td>
              <td>Male</td>
              <th><MoreIcon/></th>
            </tr>
            <tr className={Styles.row}>
              <td>
                <Image src="/assets/images/image.png" height={30} width={30}></Image>
                John Doe
              </td>
              <td>johndoe@gmail.com</td>
              <td>+91234567890</td>
              <td>Male</td>
              <th><MoreIcon/></th>
            </tr>
          </tbody>
        </table>
          </div>
          <div className='col-md-2'></div>
        </div>
    </div>
  )
}

export default AnalyticsLayout