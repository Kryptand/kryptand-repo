import * as React from "react";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import styled from "styled-components";
import { isNullOrUndefined } from "util";
import { IconButton, IconButtonProps } from "./icon-button";
import { NavigationViewProps } from "./navigation-view";

export interface NavigationViewProps {
  initWidth: number;
  expandedWidth: number;
  background: string;
  topIcon?: React.ReactElement;
  topNodes?: React.ReactElement<IconButtonProps>[];
  bottomNodes?: React.ReactElement<IconButtonProps>[];
  pageTitle: string;
}

const getIconOrDefault = (
  props: NavigationViewProps
): React.ReactElement<{}> => {
  return isNullOrUndefined(props.topIcon) ? <IoIosMenu /> : props.topIcon;
};

const NavigationWrapper = styled.div<NavigationViewProps | any>`
  height: 100vh;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  background: ${props => props.background};
  width: ${props => (props.expanded ? props.expandedWidth : props.initWidth)}px;
`;
const TopNodeWrapper = styled.div`
display: flex;
flex-flow: column;
`;
const BottomNodeWrapper = styled.div`
display: flex;
flex-flow: column;
`;
export const NavigationView: React.FunctionComponent<NavigationViewProps> = (
  props: NavigationViewProps
) => {
  const [expanded, toggleExpanded] = useState(false);

  return (
    <NavigationWrapper {...props} expanded={expanded}>
      <TopNodeWrapper>
        <button
          onClick={() => {
            toggleExpanded(!expanded);
          }}
        >
          {getIconOrDefault(props)}
        </button>
        {props.pageTitle}
        {props.topNodes.map((component, index) => (
          <React.Fragment key={index}>
            <IconButton
              icon={component.props.icon}
              label={component.props.label}
              expanded={expanded}
            />
          </React.Fragment>
        ))}
      </TopNodeWrapper>
      <BottomNodeWrapper>
        {props.bottomNodes.map((component, index) => (
          <React.Fragment key={index}>
            <IconButton
              icon={component.props.icon}
              label={component.props.label}
              expanded={expanded}
            />
          </React.Fragment>
        ))}
      </BottomNodeWrapper>
    </NavigationWrapper>
  );
};
