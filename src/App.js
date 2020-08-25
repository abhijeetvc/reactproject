import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListUserComponent from './components/user/ListUserComponent'
import AddUserComponent from './components/user/AddUserComponent'

function App() {
  return (
      <div className="container">
        <Router>
            <div className="col-md-6">
              <h1 className="text-center" style={style}>User Management Module</h1>
              <Switch>
                  <Route path="/" exact component={ListUserComponent} />
                  <Route path="/users" component={ListUserComponent} />
                  <Route path="/add-user" component={AddUserComponent} />
              </Switch>
            </div>
        </Router>
      </div>
  );
}

const style={
  color:'red',
  margin:'12px'
}
export default App;
