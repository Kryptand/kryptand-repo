import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FaHome, FaLaravel, FaPushed, FaSkyatlas, FaAdn } from 'react-icons/fa';
import { IconButton } from './icon-button';
import { NavigationView, NavigationViewProps } from './navigation-view';

const stories=storiesOf('NavigationView', module);
stories.addDecorator(withKnobs);

const NAVIGATION_VIEW_PROPS:NavigationViewProps = {
    initWidth: 48,
    background: "#ffffff",
    expandedWidth: 320,
    pageTitle:'Andy Page'
};

stories.add('general', () => 
<NavigationView 
    initWidth={number("Inital Width",NAVIGATION_VIEW_PROPS.initWidth)}
    background={text("Background",NAVIGATION_VIEW_PROPS.background )}
    expandedWidth={number("Expanded Width",NAVIGATION_VIEW_PROPS.expandedWidth)}
    pageTitle={text("Title of the page",NAVIGATION_VIEW_PROPS.pageTitle)}
    topNodes={[<IconButton expanded={false} icon={<FaHome/>} label={"Home"}/>,<IconButton expanded={false} icon={<FaLaravel/>} label={"Laravel"}/>,<IconButton expanded={false} icon={<FaPushed/>} label={"Pushed"}/>]}
    bottomNodes={[<IconButton expanded={false} icon={<FaSkyatlas/>} label={"SkyAtlas"}/>,<IconButton expanded={false} icon={<FaLaravel/>} label={"Laravel"}/>,<IconButton expanded={false} icon={<FaAdn/>} label={"adn"}/>]}
    />
);


  