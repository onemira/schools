import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SchoolData from '../data/SchoolData.json'
// import School from './School'
import Header from '../components/Header'

class SchoolList extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <header />
          {SchoolData.Schools.map((school, i) => {
            return (
              <ul>
                <li>
                  <Link to={`/schools/${school.Id}`}>{school.Name}</Link>
                </li>
              </ul>
            )
          })}
        </main>
      </>
    )
  }
}

export default SchoolList
