import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return(
      <div className="jumbotron">
        <h1> Pluralsight Administration</h1>
        <p>React, Reduct and React Router in ES6 for ultra-resposive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Lean more</Link>
      </div>
    );
  }
}

export default HomePage;