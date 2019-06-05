import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Organigram from './Organigram';

const data = { views: [
  { name: 'Foo' },
  { name: 'Bar' },
] }

storiesOf('Organigram', module)
  .add('with two views', () => (
    <Organigram
      data={data}
    >
    </Organigram>
  ));
