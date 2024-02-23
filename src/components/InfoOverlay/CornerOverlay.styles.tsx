import styled from "styled-components";
import Corners from "../Corner/Corners";
import { mediaLarge } from "@/utils/media";
import css from "styled-jsx/css";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 3%;

  position: relative;

  ${mediaLarge(css`
    padding: 1%;
  `)}
`;

export const InfoOverlayCorners = styled(Corners)`
  div {
    width: 16px;
    height: 16px;
  }
`;
