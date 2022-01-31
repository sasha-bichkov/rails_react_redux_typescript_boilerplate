import React, { FC } from 'react';

import CreateTasksList from "@Containers/TasksList";

const Tasks: FC = () => {
  return (
    <div>
      <h1>Tasks</h1>
        <CreateTasksList />
    </div>
  );
};
