import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './counter/components/Counter';
import counter from './counter/reducers';
import App from './App';

ReactDOM.render(
  <App cat={5} />,
  document.querySelector('#root')
);

const store = createStore(counter);

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  document.querySelector('#counter')
);

render();
store.subscribe(render);
