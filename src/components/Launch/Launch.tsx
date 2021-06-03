import React, { useState } from "react";
import { LaunchesQuery } from "../../generated/graphql";

import { LaunchDetailsContainer } from "../LaunchDetails/index";
import "./style.css";

import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer, Sider } = Layout;

interface Props {
  data: LaunchesQuery;
}

export const Launch: React.FC<Props> = ({ data }) => {
  const [missionNumber, changeMissionNumber] = useState(0);

  const menuClick = (index: number) => {
    changeMissionNumber(index);
  };

  return (
    <Layout className="displayLayout">
      <Header>
        <div className="logo">Space X</div>
      </Header>

      <Layout>
        <Sider
          theme="light"
          width="256"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <Menu defaultSelectedKeys={["0"]} defaultOpenKeys={["sub1"]}>
            {!!data.launches &&
              data.launches.map(
                (launch, i) =>
                  !!launch && (
                    <Menu.Item key={i} onClick={() => menuClick(i + 1)}>
                      {launch.mission_name} - {launch.launch_year}
                    </Menu.Item>
                  )
              )}
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: "200px" }}>
          <Content style={{ padding: "0 100px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Launch</Breadcrumb.Item>
              <Breadcrumb.Item>Launch Details</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              <LaunchDetailsContainer missionNumber={missionNumber} />
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
