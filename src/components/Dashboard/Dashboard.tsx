import { FC } from 'react'
import style from './style/dashboard.module.scss'
import CompletedTask from './components/CompletedTask'
import { completedTasks } from '../../constants/mock/CompletedTasks'
interface DashboardProps {
  
}

const Dashboard: FC<DashboardProps> = () => {
  return (
    <>
      <div className={`${style.dashboard} dashboard` }>
      Dashboard
      </div>
      <aside>
        <p className={style.title}>
          Ongoing Tasks
        </p>
        <div className={style.currentTask}>
          <p>Task Name</p>
          <div>Task Description</div>
          <div>Deadline:</div>
          <div>Priority:</div>
        </div>
        <div className={style['completed-task']}>
          <div className={style['completed-task-title']}>
            Completed Tasks
          </div>
          <div className={style['completed-task-list']}>
            {
              completedTasks.map((task , i) => (
                <CompletedTask 
                  key={`${task.taskName}_${i}`}
                  task={task}
                />
              ))
            }
          </div>
        </div>
      </aside> 
    </>
  )}

export default Dashboard