import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Group from './Group';
import { group1 } from '../testdata';

storiesOf('Group', module)
  .add('exists', () => (
    <Group
      group={group1}
    >
    </Group>
  ));
