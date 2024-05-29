import { FC } from 'react'
import style from '../style/bottomDashboard.module.scss'
interface BottomDashboardProps {
  
}

const BottomDashboard: FC<BottomDashboardProps> = () => {
  return (
    <div className={style.bottom}>
      <div className={style.header}>
        <h1 className={style.title}>
            Your Tasks
        </h1>
        <div className={style['control']}>
          <span className={style['selected-date']}>
            January
          </span>
          <div className={style['date-control']}>
            control
          </div>
        </div>
      </div>
      <div className={style['calendar']}>
      </div>
    </div>
  )}

export default BottomDashboard