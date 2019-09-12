import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SymAgricUrbanaPoint from './graficoGeneral';
import TablaEspecifica from './tablaEspecifica';

class orgLasCuevas extends Component {

	

	render() {
		return (
			<div>
                <SymAgricUrbanaPoint />
                <TablaEspecifica />
			</div>
		);
	}
}

export default withRouter(orgLasCuevas);