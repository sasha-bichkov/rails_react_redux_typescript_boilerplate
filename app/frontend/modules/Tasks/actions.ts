import {
  ITask, ITaskId,
  TasksActionTypes
} from './types'

export const addNewTask = (payload: ITask) => {
  return {
    type: TasksActionTypes.ADD_TASK,
    payload
  }
}

export const deleteTask = (payload: ITaskId) => {
  return {
    type: TasksActionTypes.DELETE_TASK,
    payload
  }
}
