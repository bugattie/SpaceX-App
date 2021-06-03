import React from "react";
import { useLaunchInfoQuery } from "../../generated/graphql";
import { LaunchDetails } from "./LaunchDetails";

interface Props {
  missionNumber: number;
}

export const LaunchDetailsContainer: React.FC<Props> = ({ missionNumber }) => {
  const { data, error, loading } = useLaunchInfoQuery({
    variables: { id: missionNumber.toString() },
  });

  if (loading) return <div>Loading.....</div>;
  if (error || !data) return <div>Something went wrong!</div>;
  if (!data) return <div>Please select a mission for it's details.</div>;

  return <LaunchDetails data={data} />;
};
