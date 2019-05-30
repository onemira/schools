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

        {/* Navigation Bar */}
        <h2 className="title">
          <Link to={'/'}>
            <span>HOME</span>
          </Link>
        </h2>

        {/* School Details */}
        <div class="contents">
          <h2>{school.Name}</h2>
          <p>
            <span role="img" aria-label="Finger">
              👉
            </span>
            {school.Description}
          </p>
          <ul class>
            {/* Change Boolean to String */}
            <li>School Open: {school.IsOpen.toString()}</li>
            {/* Find a specific teacher */}
            <li>
              Teachers:
              <ul>
                {school.Teachers.map((teacher, i) => {
                  return (
                    <li>
                      <Link to={`/schools/${school.Id}/teachers/${teacher.Id}`}>
                        {teacher.Name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default School
