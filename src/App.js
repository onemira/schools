import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SchoolList from './pages/SchoolList'
import Teacher from './pages/Teacher'
import Student from './pages/Student'
import School from './pages/School'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={SchoolList} />
            <Route exact path="/schools/:school_id" component={School} />
            <Route
              exact
              path="/schools/:school_id/teachers/:teacher_id"
              component={Teacher}
            />
            <Route
              exact
              path="/schools/:school_id/teachers/:teacher_id/students/:student_id"
              component={Student}
            />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
