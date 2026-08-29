import type { FC } from "react";

import { SkeletonBase } from "./Skeleton.styles";

export interface SkeletonProps {
  width?: string;
  height?: string;
  radius?: string;
  padding?: string;
  margin?: string;
}

const Skeleton: FC<SkeletonProps> = ({
  width,
  height,
  radius,
  padding,
  margin,
}) => {
  return (
    <SkeletonBase
      width={width}
      height={height}
      radius={radius}
      padding={padding}
      margin={margin}
    />
  );
};

export default Skeleton;
