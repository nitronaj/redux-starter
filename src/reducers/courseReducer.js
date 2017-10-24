export default function courseReducer(state = [], action) {
  let newState = state;
  switch (action.type) {
    case 'CREATE_COURSE':
        newState = [...state, Object.assign({}, action.course)];
      break;
  }

  return newState;
}