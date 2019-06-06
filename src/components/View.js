import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import Tree from './Tree';

export default class View extends Component {
  static propTypes = {
    view: PropTypes.object,
  }

  render() {
    const {
      view,
    } = this.props

    return (
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={24}
      >{view.trees.map((tree) => {
        return <Grid item xs={6}><Tree tree={tree}/></Grid>
      })}</Grid>
    )
  }
}
