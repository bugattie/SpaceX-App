import React, { useState } from "react";
import { LaunchesQuery } from "../../generated/graphql";
import "./style.css";
import { Contentss } from "./Content";

import { Layout, Menu, Breadcrumb, Divider } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Title from "antd/lib/skeleton/Title";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface Props {
  data: LaunchesQuery;
}

export const Launch: React.FC<Props> = ({ data }) => {
  const [missionNumber, changeMissionNumber] = useState(0);

  const menuClick = (index: number) => {
    changeMissionNumber(index);
  };

  return (
    <Layout>
      <Header>
        <div className="logo">Space X</div>
      </Header>

      <Layout>
        <Sider theme="light" width="256">
          <Menu defaultSelectedKeys={["0"]} defaultOpenKeys={["sub1"]}>
            {!!data.launches &&
              data.launches.map(
                (launch, i) =>
                  !!launch && (
                    <Menu.Item key={i} onClick={() => menuClick(i)}>
                      {launch.mission_name} - {launch.launch_year}
                    </Menu.Item>
                  )
              )}
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: "0 100px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Launch</Breadcrumb.Item>
              <Breadcrumb.Item>Launch Details</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              <Contentss missionDetail={missionNumber} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            &copy; Project 8 Space X with React, Typescript and GraphQL
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

/*
import React from "react";
import { DatePicker } from "antd";

import { LaunchesQuery } from "../../generated/graphql";
import "./style.css";

interface Props {
  data: LaunchesQuery;
}

export const Launch: React.FC<Props> = ({ data }) => {
  return (
    <div className="Launches">
      <DatePicker />
      { <h3>All SpaceX Launches</h3>
      <ol className="LaunchesOL">
        {!!data.launches &&
          data.launches.map(
            (launch, i) =>
              !!launch && (
                <li key={i} className="LaunchesItem">
                  {launch.mission_name} - {launch.launch_year} (
                  {JSON.stringify(launch.launch_success)})
                </li>
              )
          )}
      </ol>}
      </div>
      );
    };

*/
