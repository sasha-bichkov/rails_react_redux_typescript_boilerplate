import React, { FC } from "react"
import { FaRegTrashAlt } from 'react-icons/fa'

import { ITaskState } from "@Modules/Tasks/reducer";
import { ITask } from "@Modules/Tasks/types";

import './CreatingTasksList.scss'

interface TasksProps {
  tasks: ITaskState

  deleteTaskAction(task: ITask): void
}

const CreateTasksList: FC<TasksProps> = (props) => {
  const { tasks } = props.tasks
  const renderTask = (task: ITask) => {
    return (
      <form className="TasksList__form" key={task.id}>
        <div className="TasksList__content">
          <p className="TasksList__title">{task.title}</p>
          <p className="TasksList__text">{task.text}</p>
        </div>
        <button
          className="TasksList__button button-delete"
          type='button'
          onClick={() => {
            props.deleteTaskAction(task)
          }}>
          <FaRegTrashAlt />
        </button>
      </form>
    )
  }

  return (
    <div>
      <h1>Tasks</h1>
      {
        tasks && tasks.map(task => {
          return renderTask(task)
        })
      }
    </div>
  );
};

export default CreateTasksList
