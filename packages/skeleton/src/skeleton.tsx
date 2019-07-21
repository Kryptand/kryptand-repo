import * as React from "react";

interface WelcomeProps {
 name?: string, // Change the required prop to an optional prop.
}
const Welcome: React.FunctionComponent<WelcomeProps> = (props) => {
 return <h1>Hello, {props.name}</h1>;
}
Welcome.defaultProps = {
 name: 'Guest User', // This value is adopted when name prop is omitted.
}