import React, { memo } from "react";
import { usePageContext } from "../../utils/usePageContext";
import PostButton from "./components/postButton";
import NamesList from "./components/studentList";

interface Todo {
  id: number;
  title: string;
}

const TodosIndexPage = memo(() => {
  let pageContext = usePageContext<{ todos: Todo[] }>();
  let todos = pageContext?.todos;

  console.log("Hello");
  return (
    <div>
      <h1>Todos</h1>
      <NamesList />
      <PostButton />
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
});

export default TodosIndexPage;
