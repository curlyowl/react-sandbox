import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './counter/components/Counter';
import counter from './counter/reducers';
import projects from './dobby-hr/reducers';
import App from './dobby-hr/App';

const PROJECTS = [
  {id: 1, name: 'Apple Inc.', vacancies: []},
  {id: 2, name: 'Microsoft', vacancies: []}
];

const store = createStore(projects);

ReactDOM.render(
  <App
    projects={PROJECTS}
  />,
  document.querySelector('#root')
);

// const store = createStore(counter);
//
// const render = () => ReactDOM.render(
//   <Counter
//     value={store.getState()}
//     onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//     onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//   />,
//   document.querySelector('#counter')
// );
//
// render();
// store.subscribe(render);
