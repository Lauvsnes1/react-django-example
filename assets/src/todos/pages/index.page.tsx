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

  return (
    <div>
      <p>Hva skjer her egt</p>
    </div>
  );
});

export default TodosIndexPage;
