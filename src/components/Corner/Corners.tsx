import { CPos, Container, Corner } from "./Corners.styles";

interface CornerProps {
  className?: string;
}

const svg = (
  <svg
    height="100%"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.375 16.566L1.375 0.565979M0.999999 1.06598L17 1.06598"
      stroke="currentColor"
    ></path>
  </svg>
);

const Corners: React.FC<CornerProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Corner position={CPos.TOP_LEFT}>{svg}</Corner>
      <Corner position={CPos.TOP_RIGHT}>{svg}</Corner>
      <Corner position={CPos.BOTTOM_RIGHT}>{svg}</Corner>
      <Corner position={CPos.BOTTOM_LEFT}>{svg}</Corner>
    </Container>
  );
};

export default Corners;
