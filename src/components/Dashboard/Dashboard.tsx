import { FC } from 'react'
import style from './style/dashboard.module.scss'
import SideDashboard from './components/SideDashboard'
import TopDashboard from './components/TopDashboard'
import BottomDashboard from './components/BottomDashboard'
interface DashboardProps {
  
}

const Dashboard: FC<DashboardProps> = () => {
  return (
    <>
      <div className={`${style.dashboard} dashboard` }>
        <TopDashboard />
        <BottomDashboard />
      </div>
      <SideDashboard />
    </>
  )}

export default Dashboard