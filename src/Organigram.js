import React, { Component } from 'react'
import PropTypes from 'prop-types'

import organigramStyles from './Organigram.styles'

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
          <div style={organigramStyles} key={view.name}>
            {view.name}
          </div>
          )}
      </div>
    )
  }
}
