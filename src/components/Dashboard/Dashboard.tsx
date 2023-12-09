import { FC } from 'react'
import style from './style/dashboard.module.scss'
interface DashboardProps {
  
}

const Dashboard: FC<DashboardProps> = () => {
  return (
    <>
      <div className={`${style.dashboard} dashboard` }>
      Dashboard
      </div>
      <aside className={style.rightContent}>
        <p className={style.title}>
          Ongoing Tasks
        </p>
        <div className={style.currentTask}>
          <p>
            Task Name
          </p>
        </div>
      </aside> 
    </>
  )}

export default Dashboard