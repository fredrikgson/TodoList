import TodoListItem from "./TodoListItem";

const TodoList = ({todoList, toggleArchived, deleteItem}) => {
    return(
        <ul className="todo-list">
        <p id="list-empty-message">{todoList.length === 0 && "Try adding some todos!"}</p>
        {todoList.map((item) => {
          return (
            <TodoListItem 
            id={item.id} 
            key={item.id}
            title={item.title} 
            archived={item.archived}
            toggleArchived={toggleArchived}
            deleteItem={deleteItem}
            />
          );
        })}
      </ul>
    );
}
export default TodoList;