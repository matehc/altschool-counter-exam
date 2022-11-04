function countReducer(state, action) {
  switch(action.type){
    case 'inc':return state = state + 1;
    break;
    case 'dec': return state = state - 1;
    break;
    case 'reset':return state = 0;
    break;
    case 'add': return state = action.payload;
    break;
    default: state = 0;
  }
}

export default countReducer;