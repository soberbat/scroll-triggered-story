"use client";
import { useCallback, useRef, useState } from "react";
import * as S from "./MainPage.styles";
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
import isMobileDevice from "@/utils/isMobileDevice";
import { INITIAL_BAR_HEİGHT } from "@/utils/appConfig";

const InfoPage = () => {
  const isMobile = isMobileDevice();
  const rootRef = useRef(null);
  const [barScale, setBarScale] = useState(0);
  const scrollConfig = { container: rootRef };
  const { scrollY, scrollYProgress } = useScroll(scrollConfig);
  const sOutput = isMobile ? [1, 2] : [1, 4];
  const HScale = useSpringyTransform([0.15, 0.16], sOutput, scrollYProgress);
  const OScale = useSpringyTransform([0.42, 0.43], sOutput, scrollYProgress);
  const SScale = useSpringyTransform([0.78, 0.79], sOutput, scrollYProgress);
  const BGScale = useTransform(scrollYProgress, [0, 1], [110, 145]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const backgroundSize = `${BGScale.get()}%`;
  const height = `${INITIAL_BAR_HEİGHT + barScale}%`;

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
          animate={!isMobile && { backgroundSize }}
        >
          <S.ScrollContainer />
        </S.Container>

        <S.InnerContainer style={{ y }}>
          {[HScale, OScale, SScale].map((scale, index) => (
            <S.Box key={index} style={{ scale }}>
              <S.QuestionMark>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente inventore dolor quod eligendi aperiam debitis.
                Dignissimos iste assumenda mollitia fuga id, excepturi nisi
                ipsam omnis voluptas exercitationem, repellendus facilis
                asperiores? Saepe, nisi! Ea perspiciatis illum neque illo nobis
                reiciendis tenetur delectus, magnam eius error, ullam ex
                pariatur doloremque cupiditate fuga reprehenderit? Quam fugiat
                aperiam iusto at est accusamus dolorem nostrum.
              </S.QuestionMark>
              <Corners />
            </S.Box>
          ))}
        </S.InnerContainer>

        <S.ScrollBar>
          <S.ProgresBar transition={infoFlowConfig} animate={{ height }} />
        </S.ScrollBar>

        <RotatingCircle scrollProgress={scrollYProgress} />

        <InfoOverlay />

        <S.ScrollDownIndicator style={{ opacity }} />
      </>
    </S.AnimationContainer>
  );
};

export default InfoPage;
