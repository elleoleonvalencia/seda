import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Button } from 'antd';
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
			    <Card1 title='Est6' descripcion='est6' fotos={est6} kk={this.showModal}/>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <div>
                        <Dropdown camposMeasures={this.camposMeasures} camposDimensions={this.camposDimensions} />
                        <GraficoGeneral camposMeasures={this.state.measures} camposDimensions={this.state.dimensions} />
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withRouter(modalAvanzado);