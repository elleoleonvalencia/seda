import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import GraficoGeneral from './graficoGeneral';
import Card1 from '../card';

class modalEst1 extends Component {
    render() {
        return (
            <div>
                <Card1 title='Cantidad por Tecnología' descripcion={<GraficoGeneral municipio={this.props.match.params.municipio} />} />
            </div>
        );
    }
}

export default withRouter(modalEst1);