import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { data } from './testdata';

import Organigram from './Organigram';

storiesOf('Organigram', module)
  .add('with two views', () => (
    <Organigram
      data={data}
    >
    </Organigram>
  ));
