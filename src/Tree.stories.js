import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Tree from './Tree';
import { smalltree, bigtree } from './testdata';

storiesOf('Tree', module)
  .add('Small Tree', () => (
    <Tree
      tree={smalltree}
    >
    </Tree>
  ))
  .add('Big Tree', () => (
    <Tree
      tree={bigtree}
    >
    </Tree>
  ));
