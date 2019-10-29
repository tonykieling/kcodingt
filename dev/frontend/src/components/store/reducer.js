import { saveState, clearUserLS } from './localStorage.js'

const initialState = {}

const reducer = (state = initialState, action) => {
console.log("= action", action);
  let newState = {...state};
  if (action.type === "LOGIN") {
    newState = {...state,
      id          : action.data.user.id,
      email       : action.data.user.email,
      name        : action.data.user.name,
      phone       : action.data.user.phone,
      token       : action.data.user.token
    };
    saveState(newState);

  } else if (action.type === "LOGOUT") {
    newState = {
      id          : undefined,
      email       : undefined,
      name        : undefined,
      phone       : undefined,
      token       : undefined
    };
    clearUserLS();
  }
  
  return newState;
}

export default reducer;
