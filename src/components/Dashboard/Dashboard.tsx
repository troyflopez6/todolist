import { FC } from 'react'
import style from './style/dashboard.module.scss'
import SideDashboard from './components/SideDashboard'
import TopDashboard from './components/TopDashboard'
interface DashboardProps {
  
}

const Dashboard: FC<DashboardProps> = () => {
  return (
    <>
      <div className={`${style.dashboard} dashboard` }>
        <TopDashboard />
        <div className={style['dashboard-bottom']}> bottom </div>
      </div>
      <SideDashboard />
    </>
  )}

export default Dashboard