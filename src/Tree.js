import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Person from './Person';

import { container, heading, subline } from './Tree.styles'

export default class Tree extends Component {
  static propTypes = {
    tree: PropTypes.object,
  }

  render() {
    const {
      tree,
    } = this.props

    return (
      <div style={container}>
        <h1 style={heading}>{tree.name}</h1>
        <Person person={tree.parent}></Person>
        <div>{tree.children.map((child) => {
          return child.firstname ? (<Person person={child}></Person>) : <Tree tree={child}></Tree>
        })}</div>
      </div>
    )
  }
}
