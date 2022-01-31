
export const TasksActionTypes = {
  ADD_TASK: '@@tasks/ADD_TASK',
  ADD_TASK_SUCCESS: '@@tasks/ADD_TASK_SUCCESS',
  DELETE_TASK: '@@tasks/DELETE_TASK',
  DELETE_TASK_SUCCESS: '@@tasks/DELETE_TASK_SUCCESS',
}

export interface ITask {
  readonly title: string
  readonly text: string
  readonly id: string
}

export interface ITaskId {
  readonly id: string
}
