import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './Todo.css'

function Todo(props) {

    // call api load todo
    const todoListInit = [
        {
            id: 1,
            name: 'hehe',
            status: 'completed'
        },
        {
            id: 2,
            name: 'haha',
            status: 'new'
        },
        {
            id: 3,
            name: 'huhu',
            status: 'new'
        }
    ];

    // state
    const [todoList, setTodoList] = useState(todoListInit);
    const [filter, setFilter] = useState('all');

    const addTodo = (name) => {
        const todoListCopy = [...todoList];

        const newTodoItem = {
            id: todoListCopy.length + 1,
            name: name,
            status: 'new'
        }
        todoListCopy.push(newTodoItem);
        setTodoList(todoListCopy);
    }

    // function active or completed todo when click
    const activeTodo = (todo, index) => {

        console.log(todo, index);
        const todoListCopy = [...todoList];

        const newTodoItem = {
            ...todoListCopy[index],
            status: todoListCopy[index].status === 'new' ? 'completed' : 'new'
        }
        console.log(newTodoItem)

        todoListCopy[index] = newTodoItem;
        console.log(todoListCopy)
        setTodoList(todoListCopy);
    }

    const deleteTodo = function (index) {
        const todoListCopy = [...todoList];
        todoListCopy.splice(index, 1);
        setTodoList(todoListCopy);
    }

    function showCompleted() {
        setFilter('completed')
    }

    function showNew() {
        setFilter('new')
    }

    function showAll(number) {
        setFilter('all')
    }

    const todoFilter = todoList.filter(item => filter === 'all' || filter === item.status);

    return (
        <div className="todo">
            <h2 className="todo-title">Todo List</h2>
            <TodoForm onAddTodo={addTodo}/>
            <TodoList todoList={todoFilter}
                      onActiveTodo={activeTodo}
                      onDeleteTodo={deleteTodo}
            />
            <button onClick={showAll}>Show All</button>
            <button onClick={showNew}>New</button>
            <button onClick={showCompleted}>Completed</button>
        </div>
    );
}

export default Todo;
