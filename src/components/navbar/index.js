import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Menu, Icon, Popover, Avatar, Row, Col } from 'antd';
import Icono_SedA from '../../images/icono-SedA.png'
import { Imagen } from '../../styles/Styles';

const { SubMenu } = Menu;

class navbar extends Component {
    render() {
        const content = (
            <div>
                <br />
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <Avatar shape="square" src={Icono_SedA} style={{ width: '130px', height: '110px' }}/>
                    </Col>
                    <Col span={8}></Col>
                </Row>
                <br />
                <Row>
                    <Col span={10}></Col>
                    <Col span={7}>
                        <h4>Versión 1.0</h4>
                    </Col>
                    <Col span={8}></Col>
                </Row>
                <br />
                <Row>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <h4>Desarrollado X Grupo Geomática ENPA UEB VC 2019</h4>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        );
        const title = (
            <div>
                SedA | Sistema Estadístico para la toma de Decisiones de la Agricultura
            </div>
        );
        return (
            <div>
                <div className="logo">
                    <Imagen src={Icono_SedA} />
                    <h1 className="Iniciolink">SedA</h1>
                </div>
                <Menu
                    theme="dark"
                    className="menu-inicio"
                    mode="horizontal"
                    style={{ lineHeight: '40px', marginTop: '10px' }}
                    multiple
                >
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <Icon type="environment" />
                                Provincia
                            </span>
                        }
                    >
                        <Menu.ItemGroup>
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <Icon type="environment" />
                                Municipio
                            </span>
                        }
                    >
                        <Menu.ItemGroup>
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="1"><Popover placement="bottomRight" title={title} content={content}><Icon type="team" />Acerca de...</Popover></Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default withRouter(navbar);