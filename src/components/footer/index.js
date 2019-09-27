import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row } from 'antd';

class footer1 extends Component {
    render() {
        return (
            <div>
                <Row style={{ textAlign: 'center' }}>
                    <h1>&copy;  {new Date().getFullYear()} Derechos Reservados, Empresa de Proyectos e Ingeniería del MINAG, UEB Villa Clara</h1>
                </Row>
            </div>
        );
    }
}


export default withRouter(footer1);