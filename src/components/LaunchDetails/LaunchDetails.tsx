import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";
import "./style.css";

import { Divider } from "antd";

interface Props {
  data: LaunchInfoQuery;
}

export const LaunchDetails: React.FC<Props> = ({ data }) => {
  if (!data.launch) return <div>Launch unavailable.</div>;

  return (
    <div className="LaunchDetails">
      <div className="LaunchDetailsStatus">
        <h3>Launch Info</h3>
        <div className="launch-content">
          <p>Flight No: {data.launch.flight_number}</p>
          <p>
            Mission Name: {data.launch.mission_name} <Divider type="vertical" />{" "}
            Mission Year: {data.launch.launch_year}
          </p>
          <p>Launch Success: {JSON.stringify(data.launch.launch_success)}</p>
          <p>Launch Site: {data.launch.launch_site?.site_name}</p>
          <p>Launch Details: {data.launch.details}</p>
        </div>
        <h3>Rocket Details</h3>
        <div className="launch-content">
          <p>Rocket Name: {data.launch.rocket?.rocket_name}</p>
          <p>Rocket Type: {data.launch.rocket?.rocket_type}</p>
        </div>
      </div>
    </div>
  );
};
