import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Row, Col, Select, BackTop } from 'antd';
import Navbar from '../navbar';
import ModalEst1 from '../modalEst1';
import ModalEst2 from '../modalEst2';
import ModalEst3 from '../modalEst3';
import ModalEst4 from '../modalEst4';
import ModalEst5 from '../modalEst5';
import Footer1 from '../footer';
import { GlobalStyleL } from '../../styles/Styles';
import ModaAvanzado from '../modaAvanzado';
import Total from '../total';
import TablaTotalPorTecnolog from '../tablaTotalPorTecnolog';
import TablaTotalPorMinist from '../tablaTotalPorMinist';

const { Option } = Select;

const { Header, Footer, Content } = Layout;
class defaultComponent extends Component {
	handleChange = value => {
		console.log(`selected ${value}`);
	}
	render() {
		return (
			<div>
				<GlobalStyleL id="components-layout-demo-top">
					<Layout>
						<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
							< Navbar />
						</Header>
						<BackTop />
						<Content style={{ paddingLeft: '150px', paddingTop: '100px', paddingBottom: '20px', paddingRight: '150px' }}>
							<Row>
								<Col span={24} >
									<div className='resumen'>
										<div style={{ margin: '20px' }}>
											<h1 style={{ textAlign: 'center' }}>Resumen General de Agricultura Urbana y Suburbana</h1>
											<Row>
												<Col span={24}>
													<h1 style={{ textAlign: 'left' }}><Total provincia={this.props.match.params.provincia} municipio={this.props.match.params.municipio} /></h1>
												</Col>
											</Row>
											<Row>
												<Col span={11}>
													<TablaTotalPorTecnolog provincia={this.props.match.params.provincia} municipio={this.props.match.params.municipio} />
												</Col>
												<Col span={2}>
												</Col>
												<Col span={11}>
													<TablaTotalPorMinist provincia={this.props.match.params.provincia} municipio={this.props.match.params.municipio} />
												</Col>
											</Row>
										</div>
										<Row>
											<Col span={22} push={2}>
												<ModaAvanzado />
											</Col>
											<Col span={2} pull={22}>
											</Col>
										</Row>
									</div>
								</Col>
							</Row>
							<Row style={{ marginTop: '30px' }}>
								<Col span={24}>
									<ModalEst5 />
								</Col>
							</Row>
							<Row style={{ marginTop: '30px' }}>
								<Col span={24}>
									<ModalEst3 />
								</Col>
							</Row>
							<Row style={{ marginTop: '30px' }}>
								<Col span={24}>
									<ModalEst4 />
								</Col>
							</Row>
							<Row style={{ marginTop: '30px' }}>
								<Col span={24}>
									<ModalEst1 />
								</Col>
							</Row>
							<Row style={{ marginTop: '30px' }}>
								<Col span={24}>
									<ModalEst2 />
								</Col>
							</Row>
						</Content>
						<Footer style={{ backgroundColor: '#ffffff', bottom: '0', left: '0', right: '0' }}>
							< Footer1 />
						</Footer>
					</Layout>
				</GlobalStyleL>
			</div >
		);
	}
}

export default withRouter(defaultComponent);