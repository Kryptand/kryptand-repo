import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {Skeleton} from './skeleton';

const stories=storiesOf('Skeleton', module);

stories.addDecorator(withKnobs);
  stories.add('default', () => <Skeleton name={text('name','Andy')}/>);
