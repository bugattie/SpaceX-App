import React, { useState } from "react";
import { LaunchesQuery } from "../../generated/graphql";
import "./style.css";

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
  return (
    <Layout>
      <Header>
        <div className="logo">Space X</div>
      </Header>

      <Layout>
        <Sider theme="light" width="256">
          <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]}>
            <Menu.Item key="1">Navigation One</Menu.Item>
            <Menu.Item key="2">Navigation Two</Menu.Item>
            <Menu.Item key="3">Navigation One</Menu.Item>
            <Menu.Item key="4">Navigation Two</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: "0 100px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Launch</Breadcrumb.Item>
              <Breadcrumb.Item>Launch Details</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">Content</div>
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
