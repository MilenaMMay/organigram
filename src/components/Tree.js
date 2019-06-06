import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Person from './Person';

export default class Tree extends Component {
  static propTypes = {
    tree: PropTypes.object,
  }

  render() {
    const {
      tree,
    } = this.props

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4" color="textSecondary">{tree.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Person person={tree.parent}></Person>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            {tree.children.map((child) => {
              return child.firstname ? <Person person={child}></Person> : <Tree tree={child}></Tree>
            })}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
