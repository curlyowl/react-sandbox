import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, addVacancy, finish, remove} = this.props;
    return <div>
      <div>{name}</div>
      <div>
        <button onClick={addVacancy}>Добавить вакансию</button>
        <button onClick={finish}>Закрыть проект</button>
        <button onClick={remove}>Удалить</button>
      </div>
    </div>
  }
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  addVacancy: PropTypes.func.isRequired,
  finish: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default Project;
