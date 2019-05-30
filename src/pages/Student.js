import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SchoolData from '../data/SchoolData.json'
import Header from '../components/Header'

class Student extends Component {
  render() {
    const school = SchoolData.Schools.find(
      school => school.Id === this.props.match.params.school_id
    )

    const teacher = school.Teachers.find(
      teacher => teacher.Id === this.props.match.params.teacher_id
    )

    const student = teacher.Students.find(
      student => student.Id === this.props.match.params.student_id
    )

    return (
      <>
        <Header />
        <h2 className="title">
          <Link to={'/'}>
            <span>HOME</span>
          </Link>
          /{' '}
          <Link to={`/schools/${school.Id}`}>
            <span>TEACHERS</span>
          </Link>
          /{' '}
          <Link to={`/schools/${school.Id}/teachers/${teacher.Id}`}>
            <span>STUDENTS</span>
          </Link>
        </h2>
        <div>
          <h2>{student.Name}</h2>
          <ul>
            <li>Enrollment Status: {student.IsEnrolled.toString()}</li>
          </ul>
        </div>
      </>
    )
  }
}
export default Student
