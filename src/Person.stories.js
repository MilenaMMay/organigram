import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Person from './Person';

const person = { firstname: 'Foo' , lastname: 'Bar', role: 'foobar' }

storiesOf('Person', module)
  .add('exists', () => (
    <Person
      person={person}
    >
    </Person>
  ));
