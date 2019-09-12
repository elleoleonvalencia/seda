import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Select, Row, Col } from 'antd';

const { Option } = Select;

class dropdown extends Component {

    handleChange = value => {
        console.log(`selected ${value}`);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                        </Select>
                    </Col>
                    <Col span={12}>
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange} mode="multiple">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                        </Select>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(dropdown);