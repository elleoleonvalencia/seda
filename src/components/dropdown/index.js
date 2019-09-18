import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Select, Row, Col } from 'antd';

const { Option } = Select;

class dropdown extends Component {

    handleChangeMeasures = value => {
        this.props.camposMeasures(value)
    }

    handleChangeDimensions = value => {
        this.props.camposDimensions(value)
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={22} push={2}>
                        <Select
                            defaultValue="SymAgricUrbanaPoint.count"
                            style={{ width: '50%' }}
                            onChange={this.handleChangeMeasures}
                            mode='multiple'
                            showArrow='true'
                        >
                            <Option value="SymAgricUrbanaPoint.count">Cantidad</Option>
                            <Option value="SymAgricUrbanaPoint.areaTotal">Área</Option>
                        </Select>
                    </Col>
                    <Col span={2} pull={22}>
                        <strong>Valores (eje Y):</strong>
                    </Col>
                </Row>
                <Row>
                    <br />
                </Row>
                <Row>
                    <Col span={22} push={2}>
                        <Select
                            defaultValue="SymAgricUrbanaPoint.tecnologia"
                            style={{ width: '50%' }}
                            onChange={this.handleChangeDimensions}
                            mode='multiple'
                            showArrow='true'
                        >
                            <Option value="SymAgricUrbanaPoint.nombre">Nombre</Option>
                            <Option value="SymAgricUrbanaPoint.tecnologia">Tecnología</Option>
                            <Option value="SymAgricUrbanaPoint.ministerio">Ministerio</Option>
                            <Option value="SymAgricUrbanaPoint.consejoPopular">Consejo Popular</Option>
                            <Option value="SymAgricUrbanaPoint.provincia">Provincia</Option>
                            <Option value="SymAgricUrbanaPoint.entidad">Entidad</Option>
                            <Option value="SymAgricUrbanaPoint.productor">Productor</Option>
                        </Select>
                    </Col>
                    <Col span={2} pull={22}>
                    <strong>Categorías (eje X):</strong>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(dropdown);