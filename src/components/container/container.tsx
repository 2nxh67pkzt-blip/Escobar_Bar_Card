import type { ReactNode } from "react";
import "./container.scss";

interface ContainerProps {
  children?: ReactNode;
}

export function Container(props: ContainerProps) {
  return <div className="container">{props.children}</div>;
}

