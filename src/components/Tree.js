import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Person from './Person';
import Group from './Group';

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
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={24}
          >
            <Grid item xs={12}>
              {tree.parent.firstname ?
                <Person person={tree.parent}></Person>
                :
                <Group group={tree.parent}/>
              }
            </Grid>
            {tree.children.map((child) => {
              return child.firstname ?
                <Grid item xs={4}><Person person={child}></Person></Grid>
                :
                (child.name ?
                  <Grid item xs={12}><Tree tree={child}/></Grid>
                  :
                  <Grid item xs={12}><Group group={child}/></Grid>
                )
            })}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
