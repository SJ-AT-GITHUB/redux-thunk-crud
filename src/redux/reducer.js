
import ACTIONS from "./actions";

const employeeReducer = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.Types.ADD_EMPLOYEE: {
            return [...state, action.payload];
        }
        case ACTIONS.Types.UPDATE_EMPLOYEE: {
            const newState = [...state];
            const { payload: { id: ID } } = action;
            const index = newState.findIndex(({ id }) => id === ID);
            if (index !== -1) newState[index] = action.payload;
            return newState;
        }
        case ACTIONS.Types.DELETE_EMPLOYEE: {
            const newState = [...state];
            const { payload: { id: ID } } = action;
            const index = newState.findIndex(({ id }) => id === ID);
            if (index !== -1) newState.splice(index, 1)
            return newState;
        }
        default:
            return state;
    }
};

export default employeeReducer;
