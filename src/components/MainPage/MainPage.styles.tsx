import { mediaLarge } from "@/utils/media";
import { motion } from "framer-motion";
import styled from "styled-components";
import css from "styled-jsx/css";

export const Container = styled(motion.div)`
  font-family: "Inconsolata", monospace;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background-image: url("/overlay3.jpg");
  background-repeat: no-repeat;
  object-fit: fill;
  background-size: 450%;
  background-position: center;

  &::-webkit-scrollbar {
    display: none;
  }

  ${mediaLarge(css`
    background-size: 120%;
    object-fit: scale-down;
    background-position: center;
  `)}
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
  flex-direction: column;
  gap: 75vh;

  ${mediaLarge(css`
    padding-left: 20rem;
    gap: 83vh;
  `)}
`;

export const ScrollContainer = styled(motion.div)`
  height: 415vh;
`;

export const ScrollBar = styled(motion.div)`
  width: 0.8%;
  position: fixed;
  top: 0;
  background-color: #cec8be;
  height: 100%;
  right: 0;
  z-index: 9;

  ${mediaLarge(css`
    width: 0.18%;
  `)}
`;

export const ProgresBar = styled(motion.div)`
  background-color: #991421;
  width: 100%;
  transform-origin: top;
`;

export const Box = styled(motion.div)`
  width: 40vw;
  height: 30vh;
  background: rgba(24, 24, 24, 0.522);
  backdrop-filter: blur(6px);
  text-align: center;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  overflow: hidden;

  ${mediaLarge(css`
    width: 10vw;
    height: 20vh;
    backdrop-filter: blur(4px);
    background: rgba(24, 24, 24, 0.267);
  `)}
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
  color: white;
  position: absolute;
  padding: 1rem;
  text-align: justify;
  filter: blur(1px);

  ${mediaLarge(css`
    filter: blur(1px);
  `)}
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
