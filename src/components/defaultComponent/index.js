import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Row, Col, Card, Breadcrumb } from 'antd';
import Navbar from '../navbar';
import Footer1 from '../footer';
import { GlobalStyleL } from '../../styles/Styles';
import est1 from '../../images/est1.jpg'
import est2 from '../../images/est2.jpg'
import est3 from '../../images/est3.jpg'
import est4 from '../../images/est4.jpg'
import est5 from '../../images/est5.jpg'
import est6 from '../../images/est6.jpg'

const { Header, Footer, Content } = Layout;
const { Meta } = Card;
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
						<Content style={{ paddingLeft: '100px', paddingTop: '20px', paddingBottom: '30px', paddingRight: '100px' }}>
							<Row>
								<Col span={24}>
									<Breadcrumb style={{ paddingLeft: '150px', paddingBottom: '50px' }}>
										<Breadcrumb.Item><strong>Home</strong></Breadcrumb.Item>
										<Breadcrumb.Item>
											<a href="#"><strong>Application Center</strong></a>
										</Breadcrumb.Item>
										<Breadcrumb.Item>
											<a href="#"><strong>Application List</strong></a>
										</Breadcrumb.Item>
										<Breadcrumb.Item><strong>An Application</strong></Breadcrumb.Item>
									</Breadcrumb>
								</Col>
							</Row>
							<Row>
								<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card
										hoverable
										className='card__three'
										style={{ width: 350, borderRadius: '15px' }}
										cover={<img alt="ffff" style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} src={est1} />}
									>
										<Meta title="Estadistica nueva" description="Nueva estadistica de produccion aki en ville clara, enpa 2019" />
									</Card>
								</Col>
								<Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card
										hoverable
										className='card__three'
										style={{ width: 350, borderRadius: '15px' }}
										cover={<img alt="ffff" style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} src={est2} />}
									>
										<Meta title="Estadistica nueva" description="Nueva estadistica de produccion aki en ville clara, enpa 2019" />
									</Card>
								</Col>
								<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card
										hoverable
										className='card__three'
										style={{ width: 350, borderRadius: '15px' }}
										cover={<img alt="ffff" style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} src={est3} />}
									>
										<Meta title="Estadistica nueva" description="Nueva estadistica de produccion aki en ville clara, enpa 2019" />
									</Card>
								</Col>
							</Row>
							<Row style={{ marginTop: '60px' }}>
								<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card
										hoverable
										className='card__three'
										style={{ width: 350, borderRadius: '15px' }}
										cover={<img alt="ffff" style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} src={est4} />}
									>
										<Meta title="Estadistica nueva" description="Nueva estadistica de produccion aki en ville clara, enpa 2019" />
									</Card>
								</Col>
								<Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card
										hoverable
										className='card__three'
										style={{ width: 350, borderRadius: '15px' }}
										cover={<img alt="ffff" style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} src={est5} />}
									>
										<Meta title="Estadistica nueva" description="Nueva estadistica de produccion aki en ville clara, enpa 2019" />
									</Card>
								</Col>
								<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
									<Card
										hoverable
										className='card__three'
										style={{ width: 350, borderRadius: '15px' }}
										cover={<img alt="ffff" style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} src={est6} />}
									>
										<Meta title="Estadistica nueva" description="Nueva estadistica de produccion aki en ville clara, enpa 2019" />
									</Card>
								</Col>
							</Row>
						</Content>
						<Footer style={{ backgroundColor:'#ffffff', bottom: '0', left: '0', right: '0'}}>
							< Footer1 />
						</Footer>
					</Layout>
				</GlobalStyleL>
			</div >
		);
	}
}

export default withRouter(defaultComponent);