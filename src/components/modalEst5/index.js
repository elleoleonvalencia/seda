import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Row, Col } from 'antd';
import GraficoGeneral from './graficoGeneral';
import est5 from '../../images/est5.jpg'
import Card1 from '../card';

class modalEst5 extends Component {
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
                <Card1 title='Cantidad y Área por Tecnología, Entidad, Ministerio, Productor y Consejo Popular' descripcion='En este tema se pueden realizar análisis estadísticos en cuanto a cantidad y área por tecnología, entidad, ministerio, productor y consejo popular a partir de una tabla.' fotos={est5} show={this.showModal} />
                <Modal
                    title="Cantidad y Área por Tecnología, Entidad, Ministerio, Productor y Consejo Popular"
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

export default withRouter(modalEst5);