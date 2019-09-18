import React, { Component } from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Chart, Axis, Tooltip, Geom, Coord, Legend } from 'bizcharts';
import { Row, Col, Statistic, Table } from 'antd';
import moment from 'moment';

const API_URL = "http://192.168.0.10:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjUxODE0NjMsImV4cCI6MTU2NTI2Nzg2M30.r3FYOTFyahrqGyE_BWF0HXeXlrDP8YDtWhWTRtehU0I",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

class gg extends Component {

  stackedChartData = (resultSet) => {
    const data = resultSet.pivot().map(
      ({ xValues, yValuesArray }) =>
        yValuesArray.map(([yValues, m]) => ({
          x: resultSet.axisValuesString(xValues, ', '),
          color: resultSet.axisValuesString(yValues, ', '),
          measure: m && Number.parseFloat(m)
        }))
    ).reduce((a, b) => a.concat(b));
    return data;
  }

  barRender = ({ resultSet }) => (
    <Chart scale={{ x: { tickCount: 8 } }} height={400} data={this.stackedChartData(resultSet)} forceFit>
      <Axis name="x" />
      <Axis name="measure" />
      <Tooltip />
      <Geom type="intervalStack" position={`x*measure`} color="color" />
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
          "measures": this.props.camposMeasures,
          "timeDimensions": [],
          "dimensions": this.props.camposDimensions,
          "filters": [
            {
              "dimension": "SymAgricUrbanaPoint.municipio",
              "operator": "equals",
              "values": [
                this.props.municipio]
            }
          ]
        }}
        cubejsApi={cubejsApi}
        render={this.renderChart(this.barRender)}
      />);
  }

}

export default gg;