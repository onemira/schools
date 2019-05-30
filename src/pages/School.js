import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SchoolData from '../data/SchoolData.json'
import Header from '../components/Header'

class School extends Component {
  render() {
    const school = SchoolData.Schools.find(
      school => school.Id === this.props.match.params.school_id
    )

    return (
      <>
        <Header />
        <h2 className="title">
          <Link to={'/'}>
            <span>HOME</span>
          </Link>
        </h2>
        <div>
          <h2>{school.Name}</h2>
          <ul>
            <li>{school.Description}</li>
            <li>School Open: {school.IsOpen.toString()}</li>
            {school.Teachers.map((teacher, i) => {
              return (
                <ul>
                  <li>
                    Teacher's Name:{' '}
                    <Link to={`/schools/${school.Id}/teachers/${teacher.Id}`}>
                      {teacher.Name}
                    </Link>
                  </li>
                </ul>
              )
            })}
          </ul>
        </div>
      </>
    )
  }
}

export default School
