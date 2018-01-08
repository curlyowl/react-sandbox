import React from 'react';
import Project from './components/Project';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  addVacancy() {
    console.log('add vacancy');
  }
  finish() {
    console.log('finish');
  }
  remove() {
    console.log('remove');
  }
  render() {
    console.log(this.props.projects);
    const projectList = this.props.projects.map((project) =>
      <Project key={project.id} name={project.name} id={project.id} addVacancy={this.addVacancy} finish={this.finish} remove={this.remove}/>
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
