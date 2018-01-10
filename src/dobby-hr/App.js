import React from 'react';
import { createStore } from 'redux';
import Project from './components/Project';
import projects from './reducers/projects';

const store = createStore(projects);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  addVacancy() {
    console.log('add vacancy');
  }
  remove() {
    console.log('remove');
  }
  render() {
    console.log(this.props.projects);
    const projectList = this.props.projects.map((project) =>
      <Project key={project.id} name={project.name} id={project.id} addVacancy={this.addVacancy} finish={() => {store.dispatch({type: 'FINISH_PROJECT'})}} remove={this.remove}/>
    );

    return <div>
      <h1>Список проектов</h1>
      <div>
        {projectList}
      </div>
    </div>
  }
}



export default App;
