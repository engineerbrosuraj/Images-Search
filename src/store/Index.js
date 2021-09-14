
import { createStore } from 'redux';

const valueHandler = (state = { changevalue: '', buttonchange : false, images:[]}, action) => {
  if (action.type === 'valuegetchange') {
    return {
      changevalue: action.setvalue,
      buttonchange : state.setvalue,
      images : state.images
    };
  }
  if(action.type === 'buttongetchange')
  {
    return {
      changevalue : state.changevalue,
      buttonchange : true,
      images : state.images
    };
  }
  if(action.type === 'images')
  {
    return {
      changevalue : state.changevalue,
      buttonchange : state.buttonchange,
      images : action.setvalue
    }
  }
  return state;
};

const store = createStore(valueHandler);
// export const  storeforbutton = createStore(buttonHandler);

export default store;