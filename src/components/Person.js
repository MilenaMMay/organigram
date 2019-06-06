import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default class Person extends Component {
  static propTypes = {
    person: PropTypes.object,
  }

  render() {
    const {
      person,
    } = this.props

    return (
      <Card>
        <CardContent>
          <Typography variant="h5">
            {person.firstname} {person.lastname}
          </Typography>
          <Typography component="p" color="textSecondary" >
            {person.role}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}
