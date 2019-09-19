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
                <Card1 title='Área por Tecnología y Entidad' descripcion='En este tema se pueden realizar análisis estadísticos en cuanto al área de las formas productivas por tecnología y entidad en el municipio a partir de un gráfico de pastel.' fotos={est4} show={this.showModal} />
                <Modal
                    title="Área por Tecnología y Entidad"
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