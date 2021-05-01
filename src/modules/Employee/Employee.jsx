import React from 'react';
import { useDispatch } from 'react-redux';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import ACTIONS from '../../redux/actions';

const Employee = ({ id, name, setDailogState }) => {
  const dispatch = useDispatch();
  return (
    <ListItem button>
      <ListItemText
        primary={name}
      />
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => setDailogState({ open: true, mode: 'edit', id })}
          edge="end"
          aria-label="edit"
        >
          <Edit />
        </IconButton>
        <IconButton
          onClick={() => dispatch(ACTIONS.deleteEmployee({ id }))}
          edge="end"
          aria-label="delete"
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Employee;