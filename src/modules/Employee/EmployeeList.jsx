import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Employee from './Employee';
import EmployeeDailog from './EmployeeDailog';
import { List, Typography, Container, IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

const EmployeeList = () => {
  const employees = useSelector((state) => state);
  const [dialogState, setDailogState] = useState({ open: false })
  return (
    <>
      <Container>
        <Typography variant="h6">List Of Employees</Typography>
        <List style={{ width: '50%', margin: 'auto' }}>
          {
            employees.map(employee => <Employee key={employee.id} {...{ ...employee, setDailogState }} />)
          }
        </List>
        <IconButton
          aria-label="add"
          onClick={() => setDailogState({ open: true, mode: 'add' })}
        >
          <AddCircle />
        </IconButton>
      </Container>
      {dialogState.open
        && <EmployeeDailog
          {...{ ...dialogState, setDailogState }}
          employee={dialogState.id && employees.find(({ id }) => id === dialogState.id)}

        />
      }
    </>
  )
}

export default EmployeeList;
