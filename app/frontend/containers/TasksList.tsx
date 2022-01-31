import React, { FC, ReactElement } from 'react';
import { Action, bindActionCreators, Dispatch } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";

import { IApplicationState } from "@Root/rootReducer";
import CreateTasksList from "@Components/CreatingTasksList/CreatingTasksList";
import { deleteTask } from "@Modules/Tasks/actions";
import { ITaskId } from "@Modules/Tasks/types";

const TasksList: FC = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state: IApplicationState) => state.tasks)
  const deleteTaskAction = (id:ITaskId) => {
    dispatch(deleteTask(id))
  }
  return (
    <CreateTasksList tasks={tasks} deleteTaskAction={deleteTaskAction}/>
  )
}

export default TasksList
