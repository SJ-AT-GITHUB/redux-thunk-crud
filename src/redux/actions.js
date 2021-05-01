// types of action
const Types = {
    ADD_EMPLOYEE: "ADD_EMPLOYEE",
    UPDATE_EMPLOYEE: "UPDATE_EMPLOYEE",
    DELETE_EMPLOYEE: "DELETE_EMPLOYEE",
};

// actions
const addEmployee = data => ({
    type: Types.ADD_EMPLOYEE,
    payload: data
});

const updateEmployee = data => ({
    type: Types.UPDATE_EMPLOYEE,
    payload: data
});

const deleteEmployee = data => ({
    type: Types.DELETE_EMPLOYEE,
    payload: data
});

const ACTIONS = {
    Types,
    addEmployee,
    updateEmployee,
    deleteEmployee,
};

export default ACTIONS;
