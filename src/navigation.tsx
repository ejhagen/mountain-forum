import { FunctionComponent } from "react";

export const Navigation: FunctionComponent = () => (
  <nav
    style={{
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
      borderBottom: " solid 1px",
      padding: "0.5rem",
    }}
  >
    <a style={{ fontWeight: 400 }} href="threads">
      Threads
    </a>
    <a style={{ fontWeight: 400 }} href="flows">
      Flows
    </a>
    <a style={{ fontWeight: 400 }} href="about">
      About
    </a>
  </nav>
);
