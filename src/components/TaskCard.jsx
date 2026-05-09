import React from 'react';

const TaskCard = ({ title }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-500">Task details...</p>
  </div>
);

export default TaskCard;
