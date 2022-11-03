

function countReducer(state, action) {
  switch(action.type){
    case 'inc': setState((prev) => prev + action.payload);
    break;
    case 'dec': setState((prev) => prev + action.payload);
    break;
    case 'reset': setState(0);
    break;
    default: setState(0);

  }
}

export default countReducer