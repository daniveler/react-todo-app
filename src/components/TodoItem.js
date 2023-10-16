import React from 'react';
import { format } from 'date-fns';
import { MdDelete, MdEdit, MdUpdate } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import { deleteTodo } from '../slices/todoSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo Deleted Succesfully');
  };

  const handleUpdate = () => {
    console.log('updating');
  };

  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        [ ]
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
  );
}

export default TodoItem;
