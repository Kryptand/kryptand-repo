import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {Skeleton} from './skeleton';

storiesOf('Skeleton', module)
  .add('default', () => <Skeleton />);
