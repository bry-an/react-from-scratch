import { css, keyframes } from "@emotion/react";
import { Link } from "@reach/router";
import React from "react";
import colors from "./colors.js";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const NavBar = () => {
  return (
    <header
      css={css`
        background-color: ${colors.light};
        padding: 15px;
      `}
    >
      <Link to="/">Adopt me!</Link>
    </header>
  );
};

export default NavBar;
