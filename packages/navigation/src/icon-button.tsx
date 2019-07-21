import * as React from "react";

export interface IconButtonProps {
  icon: React.ReactElement<{}>;
  label: string;
  expanded: boolean;
}

export const IconButton: React.FunctionComponent<IconButtonProps> = props => {
  return (
    <button>
      {props.icon}
      {props.expanded ? <span>{props.label}</span> : null}
    </button>
  );
};
