import React from 'react';
import Organigram from './Organigram'
import renderer from 'react-test-renderer';
import { data } from '../testdata';

test('Organigram renders views', () => {
  const component = renderer.create(
    <Organigram data={data}></Organigram>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
