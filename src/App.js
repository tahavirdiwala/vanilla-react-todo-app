import React, { useState } from "react";
import { AddTodo } from "./components/addTodo";
import { TodoList } from "./components/todoList";
import "./style.css";

export default function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  return (
    <React.Fragment>
      <AddTodo
        data={data}
        value={value}
        setValue={setValue}
        setData={setData}
      />
      <TodoList data={data} setData={setData} />
    </React.Fragment>
  );
}
