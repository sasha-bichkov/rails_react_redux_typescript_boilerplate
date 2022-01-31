import React, { FC } from "react"
import { ITaskState } from "@Modules/Tasks/reducer";
import { ITask, ITaskId } from "@Modules/Tasks/types";

interface TasksProps {
  tasks: ITaskState

  deleteTaskAction(id:ITaskId): void
}

const CreateTasksList: FC<TasksProps> = (props) => {
  const { tasks } = props.tasks
  // @ts-ignore
  const sendId = (e) => {
    const id = e.target.getAttribute('data-id')
    props.deleteTaskAction(id)
  }
  const RenderTask = (task: ITask) => {
    return <div key={task.id}>
      <p>{task.title}</p>
      <p>{task.text}</p>
      <button type='button' data-id={task.id} onClick={sendId}>
        delete
      </button>
    </div>
  }

  return (
    <div>
      <h1>Tasks</h1>
      {
        tasks && tasks.map(task => {
          return RenderTask(task)
        })
      }
    </div>
  );
};

export default CreateTasksList
