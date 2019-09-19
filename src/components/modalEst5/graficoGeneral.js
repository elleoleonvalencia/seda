import React, { Component } from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Row, Col, Statistic, Table } from 'antd';
import "antd/dist/antd.css";

const API_URL = "http://192.168.0.10:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Njg5MjA0ODAsImV4cCI6MTU2OTAwNjg4MH0.1W5UqFnsHl9VVqelZ7bnka85Inf8zsT2O5oMpJhGk6I",
    { apiUrl: API_URL + "/cubejs-api/v1" }
);
class gg extends Component {
    tableRender = ({ resultSet }) => (
        <Table
            pagination={false}
            columns={resultSet.tableColumns().map(c => ({ ...c, dataIndex: c.key }))}
            dataSource={resultSet.tablePivot()}
        />

    );

    renderChart = (Component) => ({ resultSet, error }) => (
        (resultSet && <Component resultSet={resultSet} />) ||
        (error && error.toString()) ||
        (<Spin />)
    )

    render() {
        return (
            <QueryRenderer
                query={{
                    "measures": [
                        "SymAgricUrbanaPoint.areaTotal",
                        "SymAgricUrbanaPoint.count"
                    ],
                    "timeDimensions": [],
                    "dimensions": [
                        "SymAgricUrbanaPoint.tecnologia",
                        "SymAgricUrbanaPoint.entidad",
                        "SymAgricUrbanaPoint.ministerio",
                        "SymAgricUrbanaPoint.productor",
                        "SymAgricUrbanaPoint.consejoPopular"
                    ],
                    "filters": [
                        {
                            "dimension": "SymAgricUrbanaPoint.municipio",
                            "operator": "equals",
                            "values": [
                                this.props.municipio.charAt(0).toUpperCase() + this.props.municipio.slice(1)
                            ]
                        }
                    ]
                }}
                cubejsApi={cubejsApi}
                render={this.renderChart(this.tableRender)}
            />);
    }
}
export default gg;