import React, { useState } from 'react';
import { format } from 'date-fns';
import { MdDelete, MdEdit, MdUpdate } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import { deleteTodo } from '../slices/todoSlice';
import TodoModel from './TodoModel';
import CheckButton from './CheckButton';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModelOpen, setUpdateModelOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo Deleted Succesfully');
  };

  const handleUpdate = () => {
    setUpdateModelOpen(true);
  };

  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <CheckButton />
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === 'complete' && styles['todoText--completed'],
              ])}
            >
              {todo.title}
            </p>
            <p className={styles.time}>{todo.time}</p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={handleDelete}
            onKeyDown={handleDelete}
            role="button"
            tabIndex={0}
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            role="button"
            tabIndex={0}
          >
            <MdEdit />
          </div>
        </div>
      </div>

      <TodoModel
        type="update"
        todo={todo}
        modelOpen={updateModelOpen}
        setModelOpen={setUpdateModelOpen}
      />
    </>
  );
}

export default TodoItem;
