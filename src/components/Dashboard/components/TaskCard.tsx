import { FC } from 'react'
import Task from '../../../interface/task'
import style from '../style/taskCard.module.scss'
import ConditionalWrapper from '../../ui/ConditionalWrapper'
import getBrowser from '../../../util/getBrowser'
import { Browsers } from '../../../interface/browser'

interface TaskCardProps {
  task: Task
}

const DESCRIPTION_MAX_LENGTH = 60

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  const { progress, taskName, description, deadline } = task
  const descHasEllipsis = description.length > DESCRIPTION_MAX_LENGTH
  const finalDescription = descHasEllipsis ? `${description.substring(0, DESCRIPTION_MAX_LENGTH)}...` : description
  const isBrowserFireFox = getBrowser() === Browsers.firefox

  return (
    <div className={style.card}>
      <div className={style['card-icon']}>
        icon
      </div>
      <div className={style['card-details']}>
        <h1 className={style['card-details-title']}>
          {taskName}
        </h1>
        <div className={style['card-details-description']}>
          {finalDescription}
        </div>
        <div className={style['card-details-deadline']}>
          Deadline: {deadline.toLocaleDateString()}
        </div>
        <ConditionalWrapper 
          shouldWrap={isBrowserFireFox}
          className={style['card-details-firefox-progressbar']}
        >
          <progress max={100} value={progress}>
            {/* fallback */}
            <div className={style['card-details-progress-bar']}>
              <div 
                data-element-progress={progress}
                className={style['card-details-progress-bar-fill']}
              />
            </div>
          </progress>
        </ConditionalWrapper>
      </div>
    </div>
  )}

export default TaskCard