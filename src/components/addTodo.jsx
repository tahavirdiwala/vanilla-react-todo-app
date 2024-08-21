import React from 'react';

export const AddTodo = (props) => {
  const handleSetTodo = (e) => {
    props.setValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    props.setData([...props.data, { isEditing: false, value: props.value }]);
    props.setValue('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        name="name"
        value={props.value}
        onChange={handleSetTodo}
      />
      <button type="submit">Add</button>
    </form>
  );
};
