import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Row, Col } from 'antd';
import GraficoGeneral from './graficoGeneral';
import est6 from '../../images/est6.jpg'
import Card1 from '../card';

import Dropdown from '../dropdown/index';

class modalAvanzado extends Component {
    state = {
        visible: false,
        measures: ["SymAgricUrbanaPoint.count"],
        dimensions: ["SymAgricUrbanaPoint.tecnologia"]
    };

    camposMeasures = async measures => {
        await this.setState({ measures: measures })
        console.log(measures);
    }

    camposDimensions = async dimensions => {
        await this.setState({ dimensions: dimensions })
        console.log(dimensions);
    }
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
                <Card1 title='Estadística Avanzada' descripcion='En este tema se pueden realizar análisis estadísticos a partir de un gráfico construido con valores y categorías deseadas.' fotos={est6} show={this.showModal} />
                <Modal
                    title="Estadística Avanzada"
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
                            <Dropdown camposMeasures={this.camposMeasures} camposDimensions={this.camposDimensions} />
                        </Row>
                        <Row>
                            <br />
                        </Row>
                        <Row>
                            <GraficoGeneral camposMeasures={this.state.measures} camposDimensions={this.state.dimensions} />
                        </Row>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withRouter(modalAvanzado);