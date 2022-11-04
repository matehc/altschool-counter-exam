function countReducer(state, action) {
  switch(action.type){
    case 'inc': state = state + 1;
    break;
    case 'dec': state = state - 1;
    break;
    case 'reset':state = 0;
    break;
    default: state = 0;

  }
}

export default countReducer;