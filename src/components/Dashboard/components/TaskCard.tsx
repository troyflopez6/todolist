import { FC } from 'react'
import Task from '../../../interface/task'
import style from '../style/taskCard.module.scss'

interface TaskCardProps {
  task: Task
}

const TaskCard: FC<TaskCardProps> = () => {

  return (
    <div className={style.card}>
      <div className={style['card-icon']}>
        icon
      </div>
      <div className={style['card-details']}>
        details
      </div>
    </div>
  )}

export default TaskCard