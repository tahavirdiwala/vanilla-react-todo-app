import React from 'react';
import { Todos } from './todos';

export const TodoList = (props) => {
  return props.data.map((item, index) => (
    <Todos key={index} value={item.value} index={index} {...props} />
  ));
};
