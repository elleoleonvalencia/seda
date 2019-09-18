import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Menu } from 'antd';
import Icono_SedA from '../../images/icono-SedA.png'
import { Imagen } from '../../styles/Styles';

class navbar extends Component {
    render() {
        return (
            <div>
                <div className="logo">
                    <Imagen src={Icono_SedA} />
                    <Link to="/manicaragua/manicaragua" className="Iniciolink">
                        <h1 className="Iniciolink">SedA</h1>
                    </Link>
                </div>
                <Menu
                    theme="dark"
                    className="menu-inicio"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '40px', marginTop: '5px' }}
                >
                    <Menu.Item key="1">Ayuda</Menu.Item>
                    <Menu.Item key="2">Acerca de...</Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default withRouter(navbar);