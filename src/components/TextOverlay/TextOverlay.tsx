import React from "react";
import { IRotatingCircle } from "../RotatingCircle/RotatingCircle";
import * as S from "./TextOverlay.styles";
import useSpringyTransform from "@/hooks/useSpringyTransform";
import { useTransform } from "framer-motion";

interface ITextOverlay extends IRotatingCircle {}

const TextOverlay = ({ scrollProgress }: ITextOverlay) => {
  const opacity = useSpringyTransform([0.01, 0.03], [1, 0], scrollProgress);

  return (
    <S.Container>
      <S.TextContainer style={{ opacity }}>
        <S.Headline> Search</S.Headline>
        <S.SubHeadline>Reading the blurry lines</S.SubHeadline>
      </S.TextContainer>
    </S.Container>
  );
};

export default TextOverlay;
