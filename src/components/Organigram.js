import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { container } from '../styles'

export default class Organigram extends Component {
  static propTypes = {
    text: PropTypes.string,
    data: PropTypes.object,
  }

  render() {
    const {
      text,
      data,
    } = this.props

    return (
      <div>
        {data.views.map((view) =>
          <div style={container} key={view.name}>
            {view.name}
          </div>
          )}
      </div>
    )
  }
}
