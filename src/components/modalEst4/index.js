import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import GraficoGeneral from './graficoGeneral';
import Card1 from '../card';

class modalEst4 extends Component {
    render() {
        return (
            <div>
                <Card1 title='Área por Tecnología y Entidad' descripcion={<GraficoGeneral provincia={this.props.match.params.provincia} municipio={this.props.match.params.municipio} />} />
            </div>
        );
    }
}

export default withRouter(modalEst4);