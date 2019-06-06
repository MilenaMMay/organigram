import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'

import { container, heading, subline } from '../styles'

export default class Person extends Component {
  static propTypes = {
    person: PropTypes.object,
  }

  render() {
    const {
      person,
    } = this.props

    return (
      <div style={container}>
        <h1 style={heading}>{person.firstname} {person.lastname}</h1>
        <h2 style={subline}>{person.role}</h2>
      </div>
    )
  }
}
