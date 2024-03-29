import * as React from "react";
import "./Container.css";

const Container = ({ children }) => {
  return <div className="Container">{children}</div>;
};

export default React.memo(Container);
