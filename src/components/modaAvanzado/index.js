import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Row, Avatar } from 'antd';
import GraficoGeneral from './graficoGeneral';
import Dropdown from '../dropdown';
import EstAvanz from '../../images/est-avanz.png';

class modalAvanzado extends Component {
    state = {
        visible: false,
        measures: ["SymAgricUrbanaPoint.count"],
        dimensions: ["SymAgricUrbanaPoint.tecnologia"],
        tipoGrafic: '',
        showGM: true,
        showGD: true
    };

    camposMeasures = async measures => {
        await this.setState({ measures: measures })
    }

    showGrafic = async (value1, value2) => {
        await this.setState({ showGM: value1, showGD: value2 })
    }

    camposDimensions = async dimensions => {
        await this.setState({ dimensions: dimensions })
    }

    tipoGraficFunction = async grafic => {
        await this.setState({ tipoGrafic: grafic })
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
                <Avatar title='Estadística Avanzada' className='card_graf1' size={100} style={{ margin: 5, float: 'right' }} src={EstAvanz} alt='Estadística Avanzada' onClick={this.showModal} />
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
                            <Dropdown showGrafic={this.showGrafic} camposMeasures={this.camposMeasures} camposDimensions={this.camposDimensions} tipoGrafic={this.tipoGraficFunction} />
                        </Row>
                        <Row>
                            <br />
                        </Row>
                        {this.state.showGM && this.state.showGD ? <Row><GraficoGeneral camposMeasures={this.state.measures} camposDimensions={this.state.dimensions} tipoGrafic={this.state.tipoGrafic} provincia={this.props.match.params.provincia} municipio={this.props.match.params.municipio} /></Row> : ''}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withRouter(modalAvanzado);