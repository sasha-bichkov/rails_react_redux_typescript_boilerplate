import produce, { Draft } from 'immer'

import { IUser } from './types'
import { IAction } from '@Root/types'

export const initialState: IUser = {
  id: 1
}

const userReducer = (
  state: IUser = initialState,
  action: IAction
): IUser => {
  return produce(state, draft => {
    switch (action.type) {
      case 'TEST_ACTION':
        console.log(draft)
        break

      default:
        break
    }
  })
}

export default userReducer
