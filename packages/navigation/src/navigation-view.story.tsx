import { text, withKnobs, number, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {NavigationView, NavigationViewProps} from './navigation-view';

const stories=storiesOf('NavigationView', module);

stories.addDecorator(withKnobs);
const NAVIGATION_VIEW_PROPS:NavigationViewProps = {
    initWidth: 48,
    background: "#ffffff",
    expandedWidth: 320,
    defaultExpand: false,
    autoResize: true,
    displayMode: "minimal",
    pageTitle:'Andy Page'
};

stories.add('default', () => 
<NavigationView 
    initWidth={number('Inital Width',NAVIGATION_VIEW_PROPS.initWidth)}
    autoResize={boolean("Resize after Window has fired an resize event",NAVIGATION_VIEW_PROPS.autoResize)}
    defaultExpand={boolean("Expand by default?", NAVIGATION_VIEW_PROPS.defaultExpand)}
    background={text('Background',NAVIGATION_VIEW_PROPS.background )}
    expandedWidth={number('Inital Width',NAVIGATION_VIEW_PROPS.expandedWidth)}
    displayMode={text('Display Mode',NAVIGATION_VIEW_PROPS.displayMode)}
    pageTitle={text('Title of the page',NAVIGATION_VIEW_PROPS.pageTitle)}
    />
);


  