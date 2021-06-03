import React from "react";
import { useLaunchesQuery } from "../../generated/graphql";
import { Launch } from "./Launch";

export const LaunchContainer = () => {
  const { data, error, loading } = useLaunchesQuery();

  if (loading) return <div>Loading.....</div>;
  if (error || !data) return <div>Something went wrong!</div>;

  return <Launch data={data} />;
};
