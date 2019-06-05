import React from 'react';
import Person from './Person'
import renderer from 'react-test-renderer';
import { person1 } from './testdata';

test('Person renders views', () => {
  const component = renderer.create(
    <Person person={person1}></Person>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
