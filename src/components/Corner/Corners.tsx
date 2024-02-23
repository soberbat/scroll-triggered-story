import Corner from "../Corner";
import { Container, CornerWrap } from "./Corners.styles";
import { CornerPosition } from "./types";

interface CornerProps {
  className?: string;
}

const Corners: React.FC<CornerProps> = ({ className }) => {
  const positionConfig = Object.values(CornerPosition);

  return (
    <Container className={className}>
      {positionConfig.map((pos) => (
        <CornerWrap position={pos}>
          <Corner />
        </CornerWrap>
      ))}
    </Container>
  );
};

export default Corners;
