import './App.css';
import Todo from "./features/todo/Todo";
import React from "react";
import FormTest from "./features/todo/FormTest";
import OrderForm from "./features/Form/OrderForm";

function App() {

    const handleSubmit = (value) => {
        console.log("Form submit ", value);
    }

    return (
        <div className="App">
            {/*<Todo/>*/}
            <OrderForm/>
        </div>
    );
}

export default App;
