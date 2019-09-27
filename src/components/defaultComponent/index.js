import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Row, Col, Select, BackTop, Avatar } from 'antd';
import Navbar from '../navbar';
import ModalEst1 from '../modalEst1';
import ModalEst2 from '../modalEst2';
import ModalEst3 from '../modalEst3';
import ModalEst4 from '../modalEst4';
import ModalEst5 from '../modalEst5';
import Footer1 from '../footer';
import { GlobalStyleL } from '../../styles/Styles';
import EstAvanz from '../../images/est-avanz.png';
import EstAvanz1 from '../../images/est-avanz1.png';

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
										<h1 style={{ textAlign: 'center' }}>Resumen General de Agricultura Urbana y Suburbana</h1>
										<Row>
											<Col span={22} push={2}>
												<h1 style={{ textAlign: 'left' }}>Total : 366 de ellos:</h1>
											</Col>
											<Col span={2} pull={22}>
											</Col>
										</Row>
										<Row>
											<Col span={22} push={2}>
												<Avatar title='Estadística Avanzada' className='card_graf1' size={100} style={{ margin: 5, float: 'right' }} src={EstAvanz} alt='Estadística Avanzada'/>
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