import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

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
          <div className={styles.test}>
            {view.name}
          </div>
          )}
      </div>
    )
  }
}
