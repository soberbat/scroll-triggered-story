import { MotionValue, motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 3rem 2rem;
  z-index: 99;
  pointer-events: none;
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;

export const TextContainer = styled(motion.div)`
  flex: 1;
  color: #cec8be;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.888);
  margin: 0;
  padding: 0;
`;

export const Headline = styled.h1`
  font-weight: 900;
  font-size: 10rem;
  margin: 0;
  padding: 0;
`;

export const SubHeadline = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  padding: 0;
  margin-top: -1vh;
  margin-left: 0.5vw;
  font-weight: 300;
`;
