import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import View from './View';
import { view1 } from './testdata';

storiesOf('View', module)
  .add('exists', () => (
    <View
      view={view1}
    >
    </View>
  ));
