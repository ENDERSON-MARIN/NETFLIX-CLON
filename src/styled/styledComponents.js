import styled from "styled-components";

import { InputBase } from "@material-ui/core";

export const NetflixButton = styled.button`
  background-color: red;
  z-index: 150;
  color: #fff;
  border-radius: 5px;
  text-transform: inherit;
  padding: 15px;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const NetflixInput = styled(InputBase)`
  z-index: 30;
  background: #fff;
  padding: 25.5px;
  height: 30px;
  border: none;
  border-radius: 5px;
`;
