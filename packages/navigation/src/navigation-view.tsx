import * as React from "react";
import styled, { createGlobalStyle, css } from 'styled-components';

export interface NavigationViewProps {
  initWidth: number;
  expandedWidth: number;
  background: string;
  defaultExpand: boolean;
  topIcon?: React.ReactElement;
  topNodes?: any[];
  bottomNodes?: any[];
  pageTitle: string;
  autoResize: boolean;
  displayMode: string;
}


export const NavigationView: React.FunctionComponent<
  NavigationViewProps
> = (props) => {
  return <div>
      asd
  </div>;
};
const Nav = styled(NavigationView)`
    background: ${props=> props.background},
    width:${props => props.initWidth},
`;

NavigationView.defaultProps = {
  initWidth: 48,
  background: "#ffffff",
  expandedWidth: 320,
  defaultExpand: false,
  autoResize: true,
  displayMode: "minimal"
};
