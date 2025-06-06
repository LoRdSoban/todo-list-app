import React from 'react';

const DropdownMenu = ({ onDelete }) => {
  return (
    <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border py-1 z-30 min-w-24">
      <button
        onClick={onDelete}
        className="w-full px-3 py-2 text-left text-red-600 hover:bg-gray-50 text-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default DropdownMenu; 