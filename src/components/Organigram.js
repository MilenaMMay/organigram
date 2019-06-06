import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import View from './View'

export default class Organigram extends Component {
  static propTypes = {
    data: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      selectedView: props.data.views[0]
    }
  }

  render() {
    return (
      <div>
        <Tabs
          value={this.state.selectedView.name}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {this.state.data.views.map((view) =>
            <Tab
              label={view.name}
              value={view.name}
              key={view.name}
              onClick={() => this.setState({selectedView: view})}
            />
          )}
        </Tabs>
        { this.state.selectedView ? <View view={this.state.selectedView}></View> : null }
      </div>
    )
  }
}
