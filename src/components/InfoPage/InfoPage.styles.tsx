import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div).attrs({})`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background-image: url("/overlay3.jpg");
  background-size: 120%;
  object-fit: scale-down;
  background-position: center;
  font-family: "Inconsolata", monospace;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InnerContainer = styled(motion.div)`
  position: fixed;
  height: 415vh;
  z-index: 10;
  width: 100%;
  pointer-events: none;
  left: 0;
  display: flex;
  align-items: center;
  padding-left: 20rem;
  flex-direction: column;
  gap: 83vh;
`;

export const ScrollContainer = styled(motion.div)`
  height: 415vh;
`;

export const ScrollBar = styled(motion.div)`
  width: 0.18%;
  position: fixed;
  top: 0;
  background-color: #cec8be;
  height: 100%;
  right: 0;
  z-index: 9;
`;

export const ProgresBar = styled(motion.div)`
  background-color: #991421;
  width: 100%;
  transform-origin: top;
`;

export const Box = styled(motion.div)`
  width: 10vw;
  height: 20vh;
  background: rgba(24, 24, 24, 0.267);
  backdrop-filter: blur(4px);
  text-align: center;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  overflow: hidden;
`;

export const QuestionMark = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  font-weight: 100;
  font-size: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  position: absolute;
  padding: 1rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 10%;
  filter: blur(1px);
`;

export const AnimationContainer = styled(motion.div).attrs({
  initial: { opacity: 0, filter: "blur(15px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  transition: { duration: 1 },
})`
  width: 100vw;
  height: 100vh;
  z-index: 99;
  top: 0;
  left: 0;
  position: fixed;
`;
