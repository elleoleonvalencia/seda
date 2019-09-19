import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Menu, Icon, Popover, Avatar, Row, Col } from 'antd';
import Icono_SedA from '../../images/icono-SedA.png'
import { Imagen } from '../../styles/Styles';

class navbar extends Component {
    render() {
        const content = (
            <div>
                <br />
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <Avatar shape="square" src={Icono_SedA} size={100} />
                    </Col>
                    <Col span={8}></Col>
                </Row>
                <br />
                <Row>
                    <Col span={9}></Col>
                    <Col span={6}>
                        <spam>Versión 1.0</spam>
                    </Col>
                    <Col span={9}></Col>
                </Row>
                <br />
                <Row>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <spam>Desarrollado X Grupo Geomática ENPA UEB VC 2019</spam>
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
                >
                    <Menu.Item key="1"><Popover placement="bottomRight" title={title} content={content}><Icon type="team" />Acerca de...</Popover></Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default withRouter(navbar);