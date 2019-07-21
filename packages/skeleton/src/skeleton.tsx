import * as React from "react";

interface SkeletonProps {
 name?: string, // Change the required prop to an optional prop.
}
const Skeleton: React.FunctionComponent<SkeletonProps> = (props) => {
 return <h1>Hello, {props.name}</h1>;
}
Skeleton.defaultProps = {
 name: 'Guest User', // This value is adopted when name prop is omitted.
}
export default Skeleton;