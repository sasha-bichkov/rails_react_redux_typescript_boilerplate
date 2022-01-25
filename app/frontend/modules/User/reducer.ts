import produce, { Draft } from 'immer'

import { IAction } from '@Root/types'

import { IUser } from './types'

export const initialState: IUser = {}

const userReducer = (
  state: IUser = initialState,
  action: IAction
): IUser => {
  return produce(state, draft => {
    switch (action.type) {
      default: return state
    }
  })
}

export default userReducer
