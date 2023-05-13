import express from 'express';
import { createTodo, deleteTodo, readTodos, updateTodo } from '../controller/todos.js';

const router = express.Router();
router.get('/', readTodos);
router.post('/',createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);
export default router;