"use client";
import { useCallback, useRef, useState } from "react";
import * as S from "./InfoPage.styles";
import {
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { infoFlowConfig } from "../../utils/springConfig";
import RotatingCircle from "../RotatingCircle/RotatingCircle";
import useSpringyTransform from "../../hooks/useSpringyTransform";
import InfoOverlay from "../InfoOverlay/CornerOverlay";

import Corners from "../Corner/Corners";
import TextOverlay from "../TextOverlay/TextOverlay";

const InfoPage = () => {
  const rootRef = useRef(null);
  const [barScale, setBarScale] = useState(0);
  const scrollConfig = { container: rootRef };
  const { scrollY, scrollYProgress } = useScroll(scrollConfig);
  const HScale = useSpringyTransform([0.15, 0.16], [1, 4], scrollYProgress);
  const OScale = useSpringyTransform([0.42, 0.43], [1, 4], scrollYProgress);
  const SScale = useSpringyTransform([0.78, 0.79], [1, 4], scrollYProgress);
  const BGScale = useTransform(scrollYProgress, [0, 1], [120, 135]);
  const backgroundSize = `${BGScale.get()}%`;
  const height = `${6 + barScale}%`;

  const getScale = useCallback((v: number) => setBarScale(v * 100), []);
  useMotionValueEvent(scrollYProgress, "change", getScale);

  const evaluateTransform = useCallback(() => {
    if (typeof window === "undefined") return;
    const transitionOffset = window.innerHeight * 1.5;
    return -scrollY.get() + transitionOffset;
  }, [scrollY]);

  const y = useSpring(useTransform(scrollY, evaluateTransform), infoFlowConfig);

  return (
    <S.AnimationContainer key="info">
      <>
        <S.Container
          ref={rootRef}
          transition={infoFlowConfig}
          animate={{ backgroundSize }}
        >
          <S.ScrollContainer />
        </S.Container>

        <S.InnerContainer style={{ y }}>
          {[HScale, OScale, SScale].map((scale, index) => (
            <S.Box key={index} style={{ scale }}>
              <S.QuestionMark>
                Who doesn't love a little bit of blur?
              </S.QuestionMark>
              <Corners />
            </S.Box>
          ))}
        </S.InnerContainer>

        <S.ScrollBar>
          <S.ProgresBar transition={infoFlowConfig} animate={{ height }} />
        </S.ScrollBar>

        <RotatingCircle scrollProgress={scrollYProgress} />
        <TextOverlay scrollProgress={scrollYProgress} />
        <InfoOverlay />
      </>
    </S.AnimationContainer>
  );
};

export default InfoPage;
