function countReducer(state, action) {
  switch(action.type){
    case 'inc':return {...state, count: state.count + 1};
    break;
    case 'dec': return {...state, count: state.count - 1};;
    break;
    case 'reset':return {...state, count: 0};
    break;
    case 'add': return {...state, count: action.payload};
    break;
    default: state = 0;
  }
}

export default countReducer;