import { FC } from 'react'
import style from '../style/topDashboard.module.scss'
import tasks from '../../../constants/mock/TaskList'
import TaskCard from './TaskCard'
interface TopDashboardProps {
  
}

const TopDashboard: FC<TopDashboardProps> = () => {
  return (
    <div className={style['top-dashboard']}>
      {
        tasks.map((task, i) => (
          <TaskCard
            key={`${task.taskName}-${task.taskId}-${i}`}
            task={task}
          />
        ))
      }
    </div>
  )}

export default TopDashboard