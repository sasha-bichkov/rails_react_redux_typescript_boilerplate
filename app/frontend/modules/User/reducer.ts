import produce, { Draft } from 'immer'
import { IAction } from '@Root/types'
import { IUser, UserActionTypes } from '@Modules/User/types'

export const initialState: IUser = {
  email: ''
}

export const userReducer = (
  state: IUser = initialState,
  action: IAction,
): IUser => {
  return produce(state, draft => {
    switch (action.type) {
    case UserActionTypes.REGISTER_SUCCESS: {
      updateEmail(draft, action)
      break
    }

    default:
      break
    }
  })
}

const updateEmail = (draft: Draft<IUser>, action: IAction) => {
  if (!action.payload) { return }

  draft.email = action.payload.email as string
}
