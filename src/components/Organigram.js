import React, { Component } from 'react'
import PropTypes from 'prop-types'
import View from './View';

import { container } from '../styles'

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
        {this.state.data.views.map((view) =>
          <div style={container} key={view.name} onClick={() => this.setState({selectedView: view})}>
            {view.name}
          </div>
          )}
          { this.state.selectedView ? <View view={this.state.selectedView}></View> : null }
      </div>
    )
  }
}
