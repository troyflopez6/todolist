import Task from '../../interface/task';

const tasks: Task[] = [
  {
    taskId: 1,
    taskName: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, inventore!',
    progress: 70,
    dateStart: new Date(Date.now()),
    dateFinished: new Date(Date.now()),
    deadline: new Date(Date.now()),
  },
  {
    taskId: 2,
    taskName: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, inventore!',
    progress: 50,
    dateStart: new Date(Date.now()),
    dateFinished: new Date(Date.now()),
    deadline: new Date(Date.now()),
  },
  {
    taskId: 3,
    taskName: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, inventore!',
    progress: 20,
    dateStart: new Date(Date.now()),
    dateFinished: new Date(Date.now()),
    deadline: new Date(Date.now()),
  },
  {
    taskId: 3,
    taskName: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, inventore!',
    progress: 600,
    dateStart: new Date(Date.now()),
    dateFinished: new Date(Date.now()),
    deadline: new Date(Date.now()),
  },
]

export default tasks