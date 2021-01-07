import React from 'react';
import TodoItem from "./TodoItem";

function TodoList(props) {
    return (
        <ul className="todo-list">
            {props.todoList.map(
                (item, index) =>
                     <TodoItem key={item.id}
                               todoItem={item}
                               todoIndex={index}
                               onActiveTodo={props.onActiveTodo}
                               onDeleteTodo={props.onDeleteTodo}
                     />

            )}
        </ul>
    );
}

export default TodoList;
