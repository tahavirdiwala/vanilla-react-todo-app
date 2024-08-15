import React, { useState } from 'react';
import { TodoConfig } from './components/todoConfig';
import { TodoList } from './components/todoList';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  return (
    <React.Fragment>
      <TodoList
        data={data}
        value={value}
        setValue={setValue}
        setData={setData}
      />
      <TodoConfig data={data} setData={setData} />
    </React.Fragment>
  );
}
