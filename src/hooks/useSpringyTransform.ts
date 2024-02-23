import { MotionValue, useSpring, useTransform } from "framer-motion";
import { scaleConfig } from "../utils/springConfig";

const useSpringyTransform = (
  range: number[],
  output: number[],
  scrollYProgress: MotionValue<number>
) => {
  return useSpring(useTransform(scrollYProgress, range, output), scaleConfig);
};

export default useSpringyTransform;
