import React from 'react'
import Group from './Group'
import renderer from 'react-test-renderer'
import { group1 } from '../testdata'

test('Group renders views', () => {
  const component = renderer.create(
    <Group group={group1}></Group>,
  );
  let group = component.toJSON();
  expect(group).toMatchSnapshot();
});
