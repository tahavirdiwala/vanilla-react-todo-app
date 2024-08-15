import React, { useState } from 'react';

export const Todos = (props) => {
  const [editValue, setEditValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditTodo = () => {
    setIsEditing(true);
  };

  const handleCancelEditTodo = () => {
    setIsEditing(false);
  };

  const handleEditValueChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleSaveTodo = (id) => {
    props.setData((prev) =>
      prev.map((item, index) =>
        index === id ? { ...prev, value: editValue } : item
      )
    );
    setIsEditing(false);
  };

  const handleDeleteTodo = (id) => {
    props.setData((prev) => prev.filter((_, index) => index !== id));
  };

  return (
    <div style={{ padding: '4px' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            name={props.value}
            defaultValue={props.value}
            onChange={handleEditValueChange}
          />
          <button
            onClick={() => handleSaveTodo(props.index)}
            disabled={editValue.length === 0}
          >
            Save
          </button>
          <button onClick={handleCancelEditTodo}>Cancel</button>
        </>
      ) : (
        <li>
          {props.value}
          <button onClick={handleEditTodo}>Edit</button>
          <button onClick={() => handleDeleteTodo(props.index)}>Delete</button>
        </li>
      )}
    </div>
  );
};
