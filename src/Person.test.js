import React from 'react';
import Person from './Person'
import renderer from 'react-test-renderer';

test('Person renders views', () => {
  const component = renderer.create(
    <Person person={{ firstname: 'Foo', lastname: 'Bar', role: 'foobar' }}></Person>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
