const TodoListItem = ({id, title, archived, toggleArchived, deleteItem}) => {
    return (
        <li>
              <p>
                <input
                  type="checkbox"
                  className="todo-item-checkbox"
                  checked={archived}
                  onChange={(e) => toggleArchived(id, e.target.checked)}
                />
                <span>{title}</span>
              </p>
              <button className="delete-button" onClick={() => deleteItem(id)}>x</button>
            </li>
    );
}
export default TodoListItem;