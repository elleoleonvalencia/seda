import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import Navbar from '../navbar';
import Breadcrumb1 from '../breadcrumb';
import ModalAvanzado from '../modaAvanzado';
import Footer1 from '../footer';
import Card1 from '../card';
import { GlobalStyleL } from '../../styles/Styles';
import est1 from '../../images/est1.jpg'
import est2 from '../../images/est2.jpg'
import est3 from '../../images/est3.jpg'
import est4 from '../../images/est4.jpg'
import est5 from '../../images/est5.jpg'

const { Header, Footer, Content } = Layout;
// import dropdown from './dropdown';
// import grafico from './grafico';
// import footer from './footer';
class defaultComponent extends Component {
	render() {
		return (
			<div>
				<GlobalStyleL id="components-layout-demo-top">
					<Layout>
						<Header>
							< Navbar />
						</Header>
						<Content style={{ paddingLeft: '100px', paddingTop: '20px', paddingBottom: '50px', paddingRight: '100px' }}>
							<Row>
								<Col span={24}>
									<Breadcrumb1 />
								</Col>
							</Row>
							<Row>
								<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card1 title='Est1' descripcion='est1' fotos={est1} />
								</Col>
								<Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card1 title='Est2' descripcion='est2' fotos={est2} />
								</Col>
								<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card1 title='Est3' descripcion='est3' fotos={est3} />
								</Col>
							</Row>
							<Row style={{ marginTop: '60px' }}>
								<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card1 title='Est4' descripcion='est4' fotos={est4} />
								</Col>
								<Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card1 title='Est5' descripcion='est5' fotos={est5} />
								</Col>
								<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
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