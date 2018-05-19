import React from 'react';
import {connect} from 'react-redux';

import './filter.scss';

class Filter extends React.Component {

  render() {
    return <form>
      <select>
        <option value="" default>select filter --></option>
        <option value="javascript">JavaScript</option>
        <option value="react">React</option>
        <option value="mongodb">MongoDB</option>
        <option value="postgresql">PostgreSQL</option>
      </select>
    </form>
  }
}

export default Filter;