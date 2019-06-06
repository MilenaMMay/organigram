import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
      <div>{view.trees.map((tree) => {
        return <Tree tree={tree}></Tree>
      })}</div>
    )
  }
}
