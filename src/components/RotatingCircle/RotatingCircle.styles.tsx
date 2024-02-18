import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import evaluateCircleRotation from "../../utils/evaluateCircleRotation";
import { IContainer, IInnerContainer, ISegment } from "./types";

const color = "#cec8be";

export const Container = styled(motion.div).attrs<IContainer>(({ left }) => ({
  animate: { left: `${left.get()}vh` },
  // transition: { duration: 1.5, type: "spring" },
  transition: {
    stiffness: 30,
    damping: 20,
    restDelta: 0.001,
    type: "spring",
  },
}))`
  position: fixed;
  width: 65vh;
  height: 65vh;
  top: 50%;
  left: -100vh;
  z-index: 99;
  transform: scaleX(-1) translate(0, -50%);
`;

export const TransformContainer = styled(motion.div).attrs<IInnerContainer>(
  ({ currentSegment }) => ({
    initial: { rotate: "160deg" },
    transition: {
      stiffness: 30,
      damping: 20,
      restDelta: 0.001,
      type: "spring",
    },
    animate: {
      rotate: `${evaluateCircleRotation(currentSegment)}deg`,
    },
  })
)`
  width: 100%;
  height: 100%;
  border: 2px solid ${color};
  border-radius: 9999px;
  position: relative;
`;

export const InnerContainer = styled.div`
  position: relative;
`;

export const Segment = styled.div<ISegment>`
  position: absolute;
  transition: all ease-in-out 1s;
  border-radius: 50%;
  background-color: ${color};
  width: 40px;
  height: 40px;

  ${({ isActive }) =>
    isActive
      ? css`
          scale: 1;
          span {
            opacity: 1;
          }
        `
      : css`
          scale: 0.7;
          span {
            opacity: 0.4;
          }
        `}
`;

export const InnerSegmentContainer = styled(motion.div).attrs<IInnerContainer>(
  ({ currentSegment }) => ({
    animate: {
      rotate: `-${evaluateCircleRotation(currentSegment)}deg`,
    },
    transition: {
      stiffness: 30,
      damping: 20,
      restDelta: 0.001,
      type: "spring",
    },
  })
)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Name = styled.span`
  font-size: 1.8rem;
  position: absolute;
  bottom: 0;
  right: 120%;
  color: ${color};
  transform: scaleX(-1);
  will-change: opacity;
  font-weight: 300;
  transition: ease-in-out 0.5 all;
  text-shadow: 4px 4px 10px rgb(0, 0, 0);
  display: inline-block;
`;
