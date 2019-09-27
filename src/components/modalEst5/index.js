import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import GraficoGeneral from './graficoGeneral';
import Card1 from '../card';

class modalEst5 extends Component {
    render() {
        return (
            <div>
                <Card1 title='Cantidad y Área por Tecnología, Entidad, Ministerio, Productor y Consejo Popular' descripcion={<GraficoGeneral municipio={this.props.match.params.municipio} />} />
            </div>
        );
    }
}

export default withRouter(modalEst5);