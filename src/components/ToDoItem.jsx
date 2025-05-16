const ToDoItem = ({ 
    todo, 
    onDelete, 
    onToggleComplete, 
    onEdit, 
    editingId, 
    editValue, 
    setEditValue, 
    onSaveEdit 
  }) => {
    const isEditing = editingId === todo.id;
  
    return (
      <li className={`p-4 rounded-md border ${todo.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'} shadow-sm`}>
        {isEditing ? (
          <div className="flex gap-2">
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="flex-1 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <button
              onClick={() => onSaveEdit(todo.id)}
              className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleComplete(todo.id)}
                className="h-5 w-5 text-blue-500 rounded focus:ring-blue-400"
              />
              <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {todo.text}
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(todo.id, todo.text)}
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </li>
    );
  };
  
  export default ToDoItem;