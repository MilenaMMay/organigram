import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { person1 } from '../testdata';

import Person from './Person';

storiesOf('Person', module)
  .add('exists', () => (
    <Person
      person={person1}
    >
    </Person>
  ));
