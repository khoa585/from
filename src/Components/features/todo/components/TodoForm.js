import React, {useState} from 'react';

function TodoForm(props) {

    const [input, setInput] = useState('');

    function handleSubmit(e) {
        console.log(input)
        props.onAddTodo(input);
        e.preventDefault();
    }

    return (
        <form className="todo-form" onSubmit={(e) => handleSubmit(e)}>
            <input
                className="todo-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="todo-button">Add todo</button>
        </form>
    );
}

export default TodoForm;
