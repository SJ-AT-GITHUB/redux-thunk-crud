import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import ACTIONS from '../../redux/actions';

const EmployeeDailog = (props) => {
  const { mode, employee, setDailogState } = props;
  const { name: empName = '', tasks: empTasks = [], id } = employee || {};
  const [name, setName] = useState(empName);
  const [tasks, setTasks] = useState([...empTasks, '']);

  const dispatch = useDispatch();

  const handleClose = () => setDailogState({ open: false });

  const handlePrimary = () => {
    handleClose();
    if (mode === 'add') {
      dispatch(ACTIONS.addEmployee({ id: uuidv4(), name, tasks }))
    } else {
      dispatch(ACTIONS.updateEmployee({ id, name, tasks }))
    }
  }

  return (
    <Dialog fullWidth open onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{(mode === 'add' ? 'Add' : 'Edit') + ' Employee'}</DialogTitle>
      <DialogContent>
        <TextField
          style={{ marginBottom: '35px' }}
          value={name}
          onChange={({ target: { value } }) => setName(value)}
          autoFocus={mode === 'add'}
          id="name"
          label="Name"
          type="text"
          fullWidth
        />
        {tasks.map((task, i) => (
          <TextField
            key={i}
            id="task"
            style={{ marginBottom: '25px' }}
            value={task}
            onChange={({ target: { value } }) =>
              setTasks((prevTasks) => {
                prevTasks[i] = value;
                return [...prevTasks];
              })
            }
            label={`Task ${i + 1}`}
            type="text"
            fullWidth
          />
        )
        )}
        <IconButton
          disabled={(tasks.some(task => !task.length))}
          aria-label="add"
          onClick={() => setTasks((prevTasks) => [...prevTasks, ''])}
        >
          <AddCircle />
        </IconButton>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button
          disabled={(!name.length || tasks.some(task => !task.length))}
          onClick={handlePrimary}
          color="primary"
        >
          {mode === 'add' ? 'Add' : 'Edit'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EmployeeDailog;