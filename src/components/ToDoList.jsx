import ToDoItem from './ToDoItem';

const ToDoList = ({ 
  todos, 
  onDelete, 
  onToggleComplete, 
  onEdit, 
  editingId, 
  editValue, 
  setEditValue, 
  onSaveEdit 
}) => {
  return (
    <ul className="space-y-3">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
          editingId={editingId}
          editValue={editValue}
          setEditValue={setEditValue}
          onSaveEdit={onSaveEdit}
        />
      ))}
    </ul>
  );
};

export default ToDoList;