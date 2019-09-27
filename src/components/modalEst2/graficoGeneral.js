import React, { Component } from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Chart, Axis, Tooltip, Geom, Coord, Legend } from 'bizcharts';
import { Row, Col, Statistic, Table } from 'antd';
import moment from 'moment';

const API_URL = "http://192.168.0.10:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Njg5MjA0ODAsImV4cCI6MTU2OTAwNjg4MH0.1W5UqFnsHl9VVqelZ7bnka85Inf8zsT2O5oMpJhGk6I",
    { apiUrl: API_URL + "/cubejs-api/v1" }
);

class gg extends Component {

    pieRender = ({ resultSet }) => (
        <Chart height={400} data={resultSet.chartPivot()} forceFit>
            <Coord type='theta' radius={0.75} />
            {resultSet.seriesNames().map(s => (<Axis name={s.key} />))}
            <Legend position='right' />
            <Tooltip />
            {resultSet.seriesNames().map(s => (<Geom type="intervalStack" position={s.key} color="category" />))}
        </Chart>
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
                        "SymAgricUrbanaPoint.count"
                    ],
                    "timeDimensions": [],
                    "dimensions": [
                        "SymAgricUrbanaPoint.tecnologia",
                        "SymAgricUrbanaPoint.entidad"
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
                render={this.renderChart(this.pieRender)}
            />);
    }
}
export default gg;