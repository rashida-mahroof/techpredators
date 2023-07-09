import React from 'react'
import TopWidget from '../../Oraganisms/dashboard/dashboard-top-widget/TopWidget'
import Styles from './dashboardlayout.module.css'
import DashTitle from '../../Atoms/DashTitle/DashTitle'
import ChartView from '../../Oraganisms/dashboard/chart/FilledChart'
import PiChart from '../../Oraganisms/dashboard/piChart/PiChart'
import TitleLayout from '../../../layouts/dashboard/TitleLayout/TitleLayout'
import DateField from '../../Atoms/dateField/DateField'
import TableView from '../../Oraganisms/dashboard/TableView/TableView'
import TopadWidget from '../../Oraganisms/dashboard/topadwidget/TopadWidget'
function DashboardLayout() {
  return (
    <div>
        <TitleLayout>
          <DashTitle>Dashboard</DashTitle>
          <div class='flex flex-row'>
          <DateField/>
          <div className={Styles.mr8}></div>
          <DateField/>
          </div>
        </TitleLayout>
        <TopWidget></TopWidget>
        <div className='row'>
          <div className='col-md-8 '>
            <ChartView/>
          </div>
          <div className='col-md-4 '>
            <PiChart />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8 '>
            <TableView/>
          </div>
          <div className='col-md-4 '>
            <TopadWidget />
          </div>
        </div>
    </div>
  )
}

export default DashboardLayout