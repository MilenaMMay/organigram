import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Tree from './Tree';

import { container, heading, subline } from '../styles'

export default class View extends Component {
  static propTypes = {
    view: PropTypes.object,
  }

  render() {
    const {
      view,
    } = this.props

    return (
      <div style={container}>
        <h1 style={heading}>{view.name}</h1>
        <div>{view.trees.map((tree) => {
          return <Tree tree={tree}></Tree>
        })}</div>
      </div>
    )
  }
}
