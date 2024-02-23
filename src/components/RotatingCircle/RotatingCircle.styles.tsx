import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import evaluateCircleRotation from "../../utils/evaluateCircleRotation";
import { IContainer, IInnerContainer, ISegment } from "./types";
import { mediaLarge } from "@/utils/media";
import isMobileDevice from "@/utils/isMobileDevice";
import { infoFlowConfig } from "@/utils/springConfig";

const color = "#cec8be";

export const Container = styled(motion.div).attrs<IContainer>(
  ({ translate }) => ({
    animate: isMobileDevice()
      ? { top: `${translate.get()}vh` }
      : { left: `${translate.get()}vh` },
    transition: {
      ...infoFlowConfig,
    },
  })
)`
  position: fixed;
  width: 40vh;
  height: 40vh;
  top: -20vh;
  left: 50%;
  transform: translateX(-50%) scaleX(-1) rotate(-90deg);
  z-index: 99;

  ${mediaLarge(css`
    width: 65vh;
    height: 65vh;
    rotate: unset;
    transform: unset;
    left: unset;
    top: 50%;
    transform: scaleX(-1) translate(0, -50%);
    left: -100vh;
  `)}
`;

export const TransformContainer = styled(motion.div).attrs<IInnerContainer>(
  ({ currentSegment }) => ({
    animate: {
      rotate: `${evaluateCircleRotation(currentSegment)}deg`,
    },
    transition: {
      ...infoFlowConfig,
    },
    initial: { rotate: "160deg" },
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
  width: 5vw;
  height: 5vw;

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

  ${mediaLarge(css`
    width: 2.5vw;
    height: 2.5vw;
  `)}
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
  position: relative;
  width: 100%;
  height: 100%;
`;

export const RotatedSquare = styled.div`
  width: 5px;
  height: 5px;
  background-color: #e03c36;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${mediaLarge(css`
    width: 10px;
    height: 10px;
  `)}
`;

export const Name = styled.span`
  font-size: 1rem;
  position: absolute;
  bottom: 10%;
  right: 120%;
  color: ${color};
  transform: scaleX(-1);
  will-change: opacity;
  font-weight: 300;
  transition: ease-in-out 0.5 all;
  text-shadow: 4px 4px 10px rgb(0, 0, 0);
  display: inline-block;

  ${mediaLarge(css`
    font-size: 1.8rem;
  `)}
`;
