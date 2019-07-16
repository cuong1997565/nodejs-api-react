import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './components/person/create';
import Edit from './components/person/edit';
import Index from './components/person/index';
import indexAcount from './components/acount/indexAcount';
import createAcount from './components/acount/createAcount';
import editAcount from './components/acount/editAcount';
function App() {
  return (
    <Router>
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/create'} className="nav-link">Create</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/index'} className="nav-link">Index</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/index-acount'} className="nav-link">Acount</Link>
                    </li>
                </ul>
            </div>
        </nav> <br/>
        <h2>Create app CRUD with ReactJs, NodeJs, MongoDB</h2> <br/>
        <Switch>
            <Route exact path='/create' component={ Create } />
            <Route path='/edit/:id' component={ Edit } />
            <Route path='/index' component={ Index } />
            <Route path='/index-acount' component={ indexAcount } />
            <Route path='/create-acount' component={ createAcount } />
            <Route path='edit-acount/:id' component={ editAcount } />

        </Switch>
    </div>
</Router>
  );
}

export default App;
