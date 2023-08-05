import React from 'react'
import { Outlet } from 'react-router-dom';
import { Layout, Space } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    alignItems: 'center',
    color: '#919aa3',
    height: 100,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#001529',
  };
  
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    color: '#919aa3',
    backgroundColor: '#f5f5f5',
  };
  
  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#1f1f1f',
    backgroundColor: '#ffffff',
  };

const WebsiteLayout = () => {
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
        <Header style={headerStyle}>
          <h1>LOGO Thông tin cửa hàng</h1>
        </Header>
        <Content style={contentStyle}>
         <h2>== BANNER ==</h2>
        </Content>
        <Footer style={footerStyle}>
        <Outlet />
        </Footer>
        </Layout>
    </Space>
    )
}

export default WebsiteLayout