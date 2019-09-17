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
                    <Col span={12}>
                        <Select defaultValue="SymAgricUrbanaPoint.count" style={{ width: 120 }} onChange={this.handleChangeMeasures} mode="multiple">
                            <Option value="SymAgricUrbanaPoint.count">Cantidad</Option>
                            <Option value="SymAgricUrbanaPoint.areaTotal">Área</Option>
                        </Select>
                    </Col>
                    <Col span={12}>
                        <Select defaultValue="SymAgricUrbanaPoint.tecnologia" style={{ width: 120 }} onChange={this.handleChangeDimensions} mode="multiple">
                            <Option value="SymAgricUrbanaPoint.nombre">Nombre</Option>
                            <Option value="SymAgricUrbanaPoint.tecnologia">Tecnología</Option>
                            <Option value="SymAgricUrbanaPoint.ministerio">Ministerio</Option>
                            <Option value="SymAgricUrbanaPoint.consejoPopular">Consejo Popular</Option>
                            <Option value="SymAgricUrbanaPoint.provincia">Provincia</Option>
                            <Option value="SymAgricUrbanaPoint.entidad">Entidad</Option>
                            <Option value="SymAgricUrbanaPoint.productor">Productor</Option>
                        </Select>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(dropdown);