import React, { FC } from 'react'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { Action, bindActionCreators, Dispatch } from 'redux'

import { IApplicationState } from '@Root/rootReducer'
import CreatingTasksForm from "@Components/CreatingTasksForm";
import { ITask } from "@Modules/Tasks/types";
import { addNewTask } from "@Modules/Tasks/actions";

interface ITasksFromContainerProps {
  addNewTask(payload: ITask): void
}

const TasksFormContainer: FC<ITasksFromContainerProps> = props => {
  return (
    <CreatingTasksForm addNewTask={props.addNewTask} />
  )
}

function mapStateToProps(state: IApplicationState) {
  return {}
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return bindActionCreators({
    addNewTask
  }, dispatch)
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(TasksFormContainer))
