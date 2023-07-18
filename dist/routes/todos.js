"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
router.get('/todos', todos_1.getTodo);
router.post('/todo', todos_1.postTodo);
router.put('/todos/:todoId', todos_1.postTodo);
router.delete('/todos/:todoId', todos_1.deleteTodo);
exports.default = router;
