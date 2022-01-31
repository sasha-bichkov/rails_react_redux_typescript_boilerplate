import produce, { Draft } from 'immer'

import { IAction } from '@Root/types'
import { ITask, ITaskId, TasksActionTypes } from '@Modules/Tasks/types'

export interface ITaskState {
  tasks: ITask[]
}

export const initialState: ITaskState = {
  tasks: []
}

export const tasksReducer = (
  state = initialState,
  action: IAction<ITask>
): ITaskState => {
  return produce(state, draft => {
    switch (action.type) {
      case TasksActionTypes.ADD_TASK_SUCCESS:
        draft.tasks.push(action.payload as ITask)
        break
      case TasksActionTypes.DELETE_TASK_SUCCESS:
         draft.tasks = draft.tasks.filter(
          (item) => {
            // @ts-ignore
            return item.id !== action.payload
          }
        )
        // draft.tasks.pop()
        break

      default:
        break
    }
  })
}

// function deleteTask(draft: Draft<ITaskState>, payload: ITaskId) {
//   // @ts-ignore
//   return draft.tasks.filter(item => item.id !== payload.id)
// }
