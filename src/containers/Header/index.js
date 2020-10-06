import React from 'react';
import { Menu, Input, Row, Col } from 'antd';
import logo from '../../assets/images/logo.svg';
import { SearchOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';


const HeaderItem = () => {
  return (
      <div className={"header-item"}>
          <div className="container">
              <Row>
                  <Col span={18}>
                      <div className={"header-el"}>
                          <img src={logo} alt="" className={"logo-item"}/>
                          <Menu theme="dark" mode="horizontal" focusable={false}>
                              <Menu.Item key="1"><Link to={"/"}> Home </Link></Menu.Item>
                              <Menu.Item key="2"><Link to={"/favorites"}> Favorites </Link></Menu.Item>
                          </Menu>
                      </div>
                  </Col>
                  <Col span={6}>
                      <Input
                          prefix={<SearchOutlined className="site-form-item-icon" />}
                          type="text"
                          placeholder="Enter movie name here"
                      />
                  </Col>
              </Row>
          </div>
      </div>
  )
};

export default HeaderItem;
