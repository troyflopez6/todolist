export default interface Task {
    taskId: number
    taskName: string
    description: string
    progress: number
    dateStart: Date
    dateFinished: Date
}