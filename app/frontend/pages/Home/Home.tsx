import React from 'react'
import { withTranslation, TFunction } from 'react-i18next'

import OmniAuthButton from '@Components/OmniAuthButton'
import GoogleIcon from '@Images/OmniAuthButton/GoogleLogo.svg'
import SignUp from '@Root/containers/SignUp'

import './Home.scss'
import TasksFormContainer from '@Root/containers/TasksFormContainer'
import TasksList from "@Root/containers/TasksList";

interface HomeProps {
  t: TFunction<('translation' | 'common')[], undefined>
}

interface HomeState {} // eslint-disable-line @typescript-eslint/no-empty-interface

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    const { t } = this.props

    return (
      <div>
        <h1>{t('home.title')}</h1>
        <TasksFormContainer />
        <TasksList />
      </div>
    )
  }
}

export default withTranslation()(Home)
