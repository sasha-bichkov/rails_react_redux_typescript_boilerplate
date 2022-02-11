import React, { FC } from 'react'
import { Action, bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'

import { registerNewUser } from '@Modules/User/actions'
import { IApplicationState } from '@Root/rootReducer'
import SignUpForm from '@Components/SingUpForm'
import { IUserRegister } from '@Modules/User/types'

interface ISignUpFormContainerProps {
  registerNewUser(payload: IUserRegister): void
}

const SignUpFormContainer: FC<ISignUpFormContainerProps> = props => {
  return (
    <SignUpForm onSubmit={props.registerNewUser} />
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function mapStateToProps(state: IApplicationState) {
  return {}
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return bindActionCreators({
    registerNewUser
  }, dispatch)
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(SignUpFormContainer))
