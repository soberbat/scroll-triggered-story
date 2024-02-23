import { FlattenSimpleInterpolation } from "styled-components";
import responsive from "./responsive";

const media = {
  xs: "400px",
  sm: "600px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  xxl: "1920px",
};

export const mediaLarge = (content: string | FlattenSimpleInterpolation) =>
  responsive(media.lg, content);
