import React from "react";
import { useLaunchInfoQuery } from "../../generated/graphql";
import { LaunchDetails } from "./LaunchDetails";

export const LaunchDetailsContainer = () => {
  const { data, error, loading } = useLaunchInfoQuery({
    variables: { id: "13" },
  });

  if (loading) return <div>Loading.....</div>;
  if (error || !data) return <div>Something went wrong!</div>;
  if (!data) return <div>Please select a mission for it's details.</div>;

  return <LaunchDetails data={data} />;
};
