import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import GraficoGeneral from './graficoGeneral';
import TablaEspecifica from './tablaEspecifica';

import Dropdown from '../dropdown/index';

class orgLasCuevas extends Component {

	state = {
		measures: ["SymAgricUrbanaPoint.count"],
		dimensions: ["SymAgricUrbanaPoint.tecnologia"]
	};

	camposMeasures = async measures => {
		await this.setState({ measures: measures })
	}

	camposDimensions = async dimensions => {
		await this.setState({ dimensions: dimensions })
	}

	render() {
		return (
			<div>
				<Dropdown camposMeasures={this.camposMeasures} camposDimensions={this.camposDimensions} />
				<GraficoGeneral camposMeasures={this.state.measures} camposDimensions={this.state.dimensions} />
				<TablaEspecifica />
			</div>
		);
	}
}

export default withRouter(orgLasCuevas);