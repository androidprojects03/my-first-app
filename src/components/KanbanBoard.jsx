import React from 'react';
import TaskCard from './TaskCard';

const KanbanBoard = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md">
      <h2 className="text-xl font-semibold mb-4">To Do</h2>
      <TaskCard title="Sample Task 1" />
      <TaskCard title="Sample Task 2" />
    </div>
    <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md">
      <h2 className="text-xl font-semibold mb-4">In Progress</h2>
      <TaskCard title="Sample Task 3" />
    </div>
    <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md">
      <h2 className="text-xl font-semibold mb-4">Done</h2>
      <TaskCard title="Sample Task 4" />
    </div>
  </div>
);

export default KanbanBoard;
