import {Router} from 'express';
import {getTodo,putTodo,postTodo,deleteTodo} from '../controllers/todos'
const router = Router();

type RequestBody = {text:string}
type RequestParams = {todoId:string}



router.get('/todos',getTodo);

router.post('/todo',postTodo);

router.put('/todos/:todoId',postTodo)

router.delete('/todos/:todoId',deleteTodo)

export default router;