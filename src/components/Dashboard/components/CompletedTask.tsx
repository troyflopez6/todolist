import { FC } from 'react'
import style from '../style/completedTask.module.scss'
import CompletedTasks from '../../../interface/task'
interface CompletedTaskProps {
  task:CompletedTasks
}

const CompletedTask: FC<CompletedTaskProps> = ({ task }) => {
  const { taskName, dateFinished } = task
  return (
    <div className={style.task}>
      <div>
        <p>{taskName}</p>
        <div>{dateFinished.toLocaleDateString()}</div>
      </div>
      <div className={style.icon}>
          ICON
      </div>

    </div>
  )}

export default CompletedTask