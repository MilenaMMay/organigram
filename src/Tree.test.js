import React from 'react'
import Tree from './Tree'
import renderer from 'react-test-renderer'
import { bigtree } from './Tree.testdata'

test('Tree renders views', () => {
  const component = renderer.create(
    <Tree tree={bigtree}></Tree>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
