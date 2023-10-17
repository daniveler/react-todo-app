import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModel from './TodoModel';

function AppHeader() {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModelOpen(true)}>
        Add Task
      </Button>
      <SelectButton id="status">
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModel type="add" modelOpen={modelOpen} setModelOpen={setModelOpen} />
    </div>
  );
}

export default AppHeader;
