import styled, { css } from "styled-components";

export enum CPos {
  TOP_LEFT = "top-left",
  TOP_RIGHT = "top-right",
  BOTTOM_LEFT = "bottom-left",
  BOTTOM_RIGHT = "bottom-right",
}

interface IContainer {
  position: CPos;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Corner = styled.div<IContainer>(
  ({ position }) => css`
    position: absolute;
    width: 6px;
    height: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${position === CPos.TOP_LEFT &&
    css`
      top: 0;
      left: 0;
    `}

    ${position === CPos.TOP_RIGHT &&
    css`
      top: 0;
      right: 0;
      rotate: 90deg;
    `}

    ${position === CPos.BOTTOM_LEFT &&
    css`
      bottom: 0;
      left: 0;
      rotate: -90deg;
    `}

    ${position === CPos.BOTTOM_RIGHT &&
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
