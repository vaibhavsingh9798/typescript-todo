"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.putTodo = exports.postTodo = exports.getTodo = void 0;
let todos = [];
let getTodo = (req, res) => {
    res.status(200).json({ todos: todos });
};
exports.getTodo = getTodo;
let postTodo = (req, res) => {
    let body = req.body;
    let newTodo = {
        id: new Date().toString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'created', todos: todos });
};
exports.postTodo = postTodo;
let putTodo = (req, res) => {
    let params = req.params;
    let tid = params.todoId;
    let body = req.body;
    let todoInd = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoInd >= 0) {
        todos[todoInd] = {
            id: todos[todoInd].id,
            text: body.text
        };
    }
    else {
        res.status(404).json({ errmessage: 'todoId could not find' });
    }
};
exports.putTodo = putTodo;
let deleteTodo = (req, res) => {
    let params = req.params;
    let tid = params.todoId;
    if (todos && tid) {
        todos = todos.filter(todoItem => todoItem.id != tid);
        res.status(200).json({ message: 'item deleted', todos: todos });
    }
    else {
        res.status(404).json({ message: 'Item not found' });
    }
    console.log('after', todos);
};
exports.deleteTodo = deleteTodo;
