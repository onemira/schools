import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SchoolData from '../data/SchoolData.json'
import Header from '../components/Header'

class SchoolList extends Component {
  render() {
    return (
      <>
        <Header />
        <div class="contents">
          <ol class="rounded-list">
            {/* Find a specific school */}
            {SchoolData.Schools.map((school, i) => {
              return (
                <li class="school-list">
                  <Link to={`/schools/${school.Id}`}>{school.Name}</Link>
                </li>
              )
            })}
          </ol>
        </div>
      </>
    )
  }
}

export default SchoolList
