import React from 'react';
import Organigram from './Organigram'
import renderer from 'react-test-renderer';

test('Organigram renders views', () => {
  const component = renderer.create(
    <Organigram data={{ views: [ { name: 'Foo' }, { name: 'Bar' } ] }}></Organigram>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
