import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Row, Col, Icon, Card } from 'antd';
import Navbar from '../navbar';
import { GlobalStyleL } from '../../styles/Styles';

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
						<Content style={{ padding: '100px' }}>
							<Row>
								<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card style={{ width: 400, borderRadius: '10px' }}>
										<br/>
										aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
										<br/>
										<br/>
										<br/>
										<br/>
									</Card>
								</Col>
								<Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card style={{ width: 400, borderRadius: '10px' }}>
										<br/>
										bbbbbbbbbbbbbbbbbbbbbbbbb
										<br/>
										<br/>
										<br/>
										<br/>
									</Card>
								</Col>
								<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card style={{ width: 400, borderRadius: '10px' }}>
										<br/>
										ccccccccccccccccccccccccccccccc
										<br/>
										<br/>
										<br/>
										<br/>
									</Card>
								</Col>
							</Row>
							<Row style={{ marginTop: '60px' }}>
								<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card style={{ width: 400, borderRadius: '10px' }}>
										<br/>
										dddddddddddddddddddddddddddddddddddddddd
										<br/>
										<br/>
										<br/>
										<br/>
									</Card>
								</Col>
								<Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card style={{ width: 400, borderRadius: '10px' }}>
										<br/>
										<br/>
										<br/>
										<br/>
										<br/>
										<br/>
									</Card>
								</Col>
								<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card style={{ width: 400, borderRadius: '10px' }}>
										<br/>
										<br/>
										<br/>
										<br/>
										<br/>
										<br/>
									</Card>
								</Col>
							</Row>
						</Content>
						<Footer style={{ position: 'relative', bottom: '0', left: '0', right: '0', padding: '100px 100px' }}>
							<Row style={{ textAlign: 'center' }}>
								<h1 style={{ paddingTop: '50px' }}>Copyright &copy; ENPA 2019</h1>
							</Row>
						</Footer>
					</Layout>
				</GlobalStyleL>
			</div>
		);
	}
}

export default withRouter(defaultComponent);