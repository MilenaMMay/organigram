import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Person from './Person';
import Tree from './Tree';

export default class Group extends Component {
  static propTypes = {
    group: PropTypes.object,
  }

  render() {
    const {
      group,
    } = this.props

    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4" color="textSecondary">{group.groupname}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={24}
          >
            {group.members.map((member) => {
              return member.firstname ?
                <Grid item xs={4}><Person person={member}></Person></Grid>
                :
                (member.name ?
                  <Grid item xs={24}><Tree tree={member}/></Grid>
                  :
                  <Grid item xs={24}><Group group={member}/></Grid>
                )
            })}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}
