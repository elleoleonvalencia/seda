import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import Navbar from '../navbar';
import ModalAvanzado from '../modaAvanzado';
import ModalEst1 from '../modalEst1';
import ModalEst2 from '../modalEst2';
import ModalEst3 from '../modalEst3';
import ModalEst4 from '../modalEst4';
import ModalEst5 from '../modalEst5';
import Footer1 from '../footer';
import { GlobalStyleL } from '../../styles/Styles';

const { Header, Footer, Content } = Layout;
class defaultComponent extends Component {
	render() {
		return (
			<div>
				<GlobalStyleL id="components-layout-demo-top">
					<Layout>
						<Header>
							< Navbar />
						</Header>
						<Content style={{ paddingLeft: '100px', paddingTop: '20px', paddingBottom: '20px', paddingRight: '100px' }}>
							<Row>
								<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10, offset: 2 }} lg={{ span: 6, offset: 2 }}>
									<ModalEst1 />
								</Col>
								<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10, offset: 2 }} lg={{ span: 6, offset: 2 }}>
									<ModalEst2 />
								</Col>
								<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10, offset: 2 }} lg={{ span: 6, offset: 2 }}>
									<ModalEst3 />
								</Col>
							</Row>
							<Row style={{ marginTop: '60px' }}>
								<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10, offset: 2 }} lg={{ span: 6, offset: 2 }}>
									<ModalEst4 />
								</Col>
								<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10, offset: 2 }} lg={{ span: 6, offset: 2 }}>
									<ModalEst5 />
								</Col>
								<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10, offset: 2 }} lg={{ span: 6, offset: 2 }}>
									<ModalAvanzado />
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