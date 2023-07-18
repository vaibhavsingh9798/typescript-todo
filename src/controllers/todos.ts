import {Todo} from '../models/todo'

type RequestBody = {text:string}
type RequestParams = {todoId:string}

let todos: Todo[] = [];

export let getTodo = (req:any,res:any) =>{
    res.status(200).json({todos:todos})
}

export let postTodo = (req:any,res:any)=>{
    let body = req.body as RequestBody
  let newTodo : Todo = {
    id : new Date().toString(),
    text:  body.text
  };
  todos.push(newTodo)
  res.status(201).json({message:'created',todos:todos})
}

export let putTodo =(req:any,res:any)=>{
    let params = req.params as RequestParams
      let tid = params.todoId
      let body = req.body as RequestBody
      let todoInd = todos.findIndex(todoItem => todoItem.id === tid)
     if(todoInd>=0){
     todos[todoInd] = {
      id : todos[todoInd].id,
      text: body.text
     }
  }else{
   res.status(404).json({errmessage:'todoId could not find'})
  }
  }

export let deleteTodo =(req:any,res:any)=>{
    let params = req.params as RequestParams
    let tid = params.todoId
    if(todos && tid){
     todos = todos.filter(todoItem => todoItem.id != tid) 
    res.status(200).json({message:'item deleted',todos:todos })
    }
    else{
    res.status(404).json({message:'Item not found'})
    }
    console.log('after',todos)
}