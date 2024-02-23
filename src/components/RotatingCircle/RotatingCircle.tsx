import { FC, useCallback, useState } from "react";
import * as S from "./RotatingCircle.styles";
import { MotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import Segments from "./config";
import { Segment, SegmentThreshold } from "./types";
import isMobileDevice from "@/utils/isMobileDevice";

export interface IRotatingCircle {
  scrollProgress: MotionValue<number>;
}

const RotatingCircle: FC<IRotatingCircle> = ({ scrollProgress }) => {
  const isMobile = isMobileDevice();
  const [currentSegment, setCurrentSegment] = useState<Segment>(0);
  const transformOutput = [-100, isMobile ? -25 : -43];
  const translate = useTransform(scrollProgress, [0.06, 0.08], transformOutput);

  const evalueCurrentSegment = useCallback((latestScrollPosition: number) => {
    const currentSegment =
      latestScrollPosition < SegmentThreshold.HistorySegment
        ? Segment.History
        : latestScrollPosition < SegmentThreshold.OriginSegment
        ? Segment.Origin
        : Segment.Symbol;
    setCurrentSegment(currentSegment);
  }, []);

  useMotionValueEvent(scrollProgress, "change", evalueCurrentSegment);

  return (
    <S.Container translate={translate}>
      <S.TransformContainer currentSegment={currentSegment}>
        {Segments.map(({ name, style }, i) => (
          <S.Segment isActive={i === currentSegment} style={style}>
            <S.InnerSegmentContainer currentSegment={currentSegment}>
              <S.RotatedSquare />
              <S.Name>{name}</S.Name>
            </S.InnerSegmentContainer>
          </S.Segment>
        ))}
      </S.TransformContainer>
    </S.Container>
  );
};

export default RotatingCircle;
