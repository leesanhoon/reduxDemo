const {createStore} = require('redux');

const defaultState = {value: 0};

const reducer = (state = defaultState, action) => {
  if (action.type === 'UP') {
    return {
      value: state.value + 1,
    };
  }
  if (action.type === 'DOWN') {
    return {
      value: state.value - 1,
    };
  }
  return state;
};

const store = createStore(reducer);

console.log('Truoc khi dispatch: ' + store.getState().value);

store.dispatch({type: 'UP'});
console.log('Sau khi dispatch: ' + store.getState().value);

/**
 * 1. Up, Down
 * 2. Làm sao để tiếp cận được giá trị của State?
 *      - Sử dụng hàm store.getState()
 * 3. Làm sao thay đổi được giá trị của state ?
 *      - Dispath 1 action nào đó
 * */
