import { combineReducers } from 'redux'

import { userReducer } from '@Modules/User/reducer'
import { ITaskState, tasksReducer } from "@Modules/Tasks/reducer";
import { IUser } from '@Modules/User/types'
import { ITask } from '@Modules/Tasks/types';

export interface IApplicationState {
  readonly user: IUser
  readonly tasks: ITaskState
}

export default () => combineReducers<IApplicationState>({
  user: userReducer,
  tasks: tasksReducer
})
