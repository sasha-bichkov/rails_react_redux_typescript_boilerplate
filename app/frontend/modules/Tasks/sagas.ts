import { ITask, ITaskId, TasksActionTypes } from '@Modules/Tasks/types'
import { put, takeLatest } from 'redux-saga/effects'

import { IAction } from '@Root/types'

export function* addNewTask(action: Required<IAction<ITask>>) {
  const id = "id" + Math.random().toString(16).slice(2)
  try {
    yield put({
      type: TasksActionTypes.ADD_TASK_SUCCESS,
      payload: { ...action.payload, id }
    })
  } catch (e) {
    throw new Error('error adding task')
  }
}

export function* deleteTask(action: Required<IAction<ITaskId>>) {
  try {
    yield put({
      type: TasksActionTypes.DELETE_TASK_SUCCESS,
      payload: action.payload
    })
  } catch (e) {
    throw new Error('error deleting task')
  }
}

function* tasksSagas() {
  yield takeLatest(TasksActionTypes.ADD_TASK, addNewTask)
  yield takeLatest(TasksActionTypes.DELETE_TASK, deleteTask)
}

export default tasksSagas
