import styled, { css } from "styled-components";
import { CornerPosition } from "./types";

interface IContainer {
  position: CornerPosition;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CornerWrap = styled.div<IContainer>(
  ({ position }) => css`
    position: absolute;
    width: 6px;
    height: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${position === CornerPosition.TOP_LEFT &&
    css`
      top: 0;
      left: 0;
    `}

    ${position === CornerPosition.TOP_RIGHT &&
    css`
      top: 0;
      right: 0;
      rotate: 90deg;
    `}

    ${position === CornerPosition.BOTTOM_LEFT &&
    css`
      bottom: 0;
      left: 0;
      rotate: -90deg;
    `}

    ${position === CornerPosition.BOTTOM_RIGHT &&
    css`
      bottom: 0;
      right: 0;
      rotate: 180deg;
    `}

    svg {
      width: 100%;
      height: 100%;
      color: #e03c36;
    }
  `
);
