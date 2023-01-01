import { useState } from "react"
import { ITodos } from "../Interfaces/interfaces";
import NavigationBar from "./NavigationBar"
import ToDos from "./ToDos"

function Home() {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [todo, setTodo] = useState<any>({});


  console.log("todo", todo);
  console.log("todos", todos);
  
  

  const setField = (name: string, value: any): void => {
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const saveToDo = (e : any) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        todo
      ])
      setTodo({
        item: "",
        days: 0
      })
    }
  }

  const RemoveToDo = (e : any, index : number) => {
    e.preventDefault();
    console.log("index", index);
    setTodos(todos.filter((a, i) => i !== index))
  }

  return (
    <div>
        <NavigationBar />
        {/* {todo.map((todo: ITodos, key: number) => {
          return <ToDos key={key} />
        })} */}
        {/* <ToDos todo={todo}/> */}
        <ToDos setField={setField} saveToDo={saveToDo} todos={todos} RemoveToDo={RemoveToDo} todo={todo}/>
    </div>
  )
}

export default Home