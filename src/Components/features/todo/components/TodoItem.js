import React from 'react';
import classnames from 'classnames';
import './TodoItem.css'

function TodoItem(props) {

    const handleActiveTodo = (todo, index) => {
        console.log(index);
        if (!props.onActiveTodo) return;
        props.onActiveTodo(todo, index);
    }

    const handleDeleteTodo = (index) => {
        if (!props.onDeleteTodo) return;
        props.onDeleteTodo(index);
    }

    return (
        <li>
            <span
                className={classnames(
                    {
                        'todo-item': true,
                        'completed': props.todoItem.status === 'completed'
                    })}
                onClick={() => handleActiveTodo(props.todoItem, props.todoIndex)}>
                {props.todoItem.name}
            </span>
            <span onClick={() => handleDeleteTodo(props.todoIndex)}> Xóa ở đây</span>
        </li>
    );
}

export default TodoItem;
