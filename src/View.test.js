import React from 'react'
import View from './View'
import renderer from 'react-test-renderer'
import { view } from './View.testdata'

test('View renders views', () => {
  const component = renderer.create(
    <View view={view}></View>,
  );
  let view = component.toJSON();
  expect(view).toMatchSnapshot();
});
