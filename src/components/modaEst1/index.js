import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Row, Col } from 'antd';
import GraficoGeneral from './graficoGeneral';
import est1 from '../../images/est1.jpg'
import Card1 from '../card';

class modalEst1 extends Component {
    state = {
        visible: false
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Card1 title='Estadística 1' descripcion='En este tema se pueden realizar análisis estadísticos.' fotos={est1} show={this.showModal} />
                <Modal
                    title="Estadística 1"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                    centered
                    width={'98%'}
                >
                    <div>
                        <Row>
                            <br />
                        </Row>
                        <Row>
                            <GraficoGeneral municipio={this.props.match.params.municipio} />
                        </Row>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withRouter(modalEst1);