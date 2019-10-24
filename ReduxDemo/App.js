import React from 'react';
import AppComponent from './src/AppComponent';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const defaultState = {value: 0, highlight: true};

const reducer = (state = defaultState, action) => {
  if (action.type === 'UP') {
    return {
      value: state.value + 1,
      highlight: state.highlight,
    };
  }
  if (action.type === 'DOWN') {
    return {
      value: state.value - 1,
      highlight: state.highlight,
    };
  }
  if (action.type === 'CHANGE_COLOR') {
    return {
      value: state.value,
      highlight: !state.highlight,
    };
  }
  return state;
};

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppComponent />
      </Provider>
    );
  }
}
