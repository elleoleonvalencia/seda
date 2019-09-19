import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Row, Col } from 'antd';
import GraficoGeneral from './graficoGeneral';
import est4 from '../../images/est4.jpg'
import Card1 from '../card';

class modalEst4 extends Component {
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
                <Card1 title='Estadística 4' descripcion='En este tema se pueden realizar análisis estadísticos.' fotos={est4} show={this.showModal} />
                <Modal
                    title="Estadística 4"
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

export default withRouter(modalEst4);