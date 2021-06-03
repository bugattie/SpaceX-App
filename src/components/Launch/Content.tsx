import React from "react";

interface Props {
  missionDetail: number;
}

export const Contentss: React.FC<Props> = ({ missionDetail }) => {
  return (
    <>
      <p>Content - {missionDetail}</p>
    </>
  );
};
