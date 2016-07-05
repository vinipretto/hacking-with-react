import React from 'react';
import { IndexLink, Link } from 'react-router';

class List extends React.Component {
  render() {
    return (
      <div>
        <p>
          Your are here: <IndexLink to='/' activeClassName='active'>Home </IndexLink>
          { this.props.params.repo } 
        </p>
        <p>Please choose a repository from the list below.</p>
        <ul>
          <li>
            <Link to="/detail/react">React</Link>
          </li>
          <li>
            <Link to="/detail/react-native">React Native</Link>
          </li>
          <li>
            <Link to="/detail/jest">Jest</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default List;