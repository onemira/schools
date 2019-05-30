import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SchoolData from '../data/SchoolData.json'
import Header from '../components/Header'

class Teacher extends Component {
  render() {
    const school = SchoolData.Schools.find(
      school => school.Id === this.props.match.params.school_id
    )

    const teacher = school.Teachers.find(
      teacher => teacher.Id === this.props.match.params.teacher_id
    )

    return (
      <>
        <Header />

        {/* Navigation Bar */}
        <h2 className="title">
          <Link to={'/'}>
            <span>HOME</span>
          </Link>
          /
          <Link to={`/schools/${school.Id}`}>
            <span>TEACHERS</span>
          </Link>
        </h2>

        {/* Teacher Details */}
        <div class="contents">
          <h2>{teacher.Name}</h2>
          <ul>
            {teacher.Students.map((student, i) => {
              return (
                <ul>
                  <li>
                    Student's Name:{' '}
                    <Link
                      to={`/schools/${school.Id}/teachers/${
                        teacher.Id
                      }/students/${student.Id}`}
                    >
                      {student.Name}
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

export default Teacher
