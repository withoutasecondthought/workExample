import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import MenuBar from "../elements/MenuBar";
import MainContent from "../elements/MainContent";
import TodoItem from "../elements/TodoItem";

const TodoScreen = () => {
    const [todos , setTodos] = useState([])

    useEffect(() => {
        fetchTodo()
    }, [])

    const fetchTodo = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => setTodos(response.data))
            .catch(e => console.log(e))
    }
    return (
        <div className="screenDefault">
            <MenuBar/>
            <MainContent>
                <p className="pageTitle">Todos:</p>
                {todos.map(todo => <TodoItem key={todo.id} title={todo.title} completed={todo.completed}/>)}
            </MainContent>
        </div>
    );
};

export default TodoScreen;