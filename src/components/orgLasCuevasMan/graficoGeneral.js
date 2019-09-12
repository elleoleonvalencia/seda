import React from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';
//import { Row, Col, Statistic, Table } from 'antd';
//import moment from 'moment';

const stackedChartData = (resultSet) => {
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

const lineRender = ({ resultSet }) => (
  <Chart scale={{ x: { tickCount: 8 } }} height={400} data={stackedChartData(resultSet)} forceFit>
    <Axis name="x" />
    <Axis name="measure" />
    <Tooltip crosshairs={{ type: 'y' }} />
    <Geom type="line" position={`x*measure`} size={2} color="color" />
  </Chart>
);

//const API_URL = "http://localhost:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjM4ODc0MzUsImV4cCI6MTU2Mzk3MzgzNX0.jcg1W0UysY2PCAEGpl4QR9Cr_doUtdlt_0yRlFaSv0g",
  { apiUrl: 'http://192.168.0.10:4000/cubejs-api/v1' }
);

const renderChart = (Component) => ({ resultSet, error }) => (
  (resultSet && <Component resultSet={resultSet} />) ||
  (error && error.toString()) ||
  (<Spin />)
)

const ChartRenderer = () => <QueryRenderer
  query={{
    "measures": [
      "SymAgricUrbanaPoint.count"
    ],
    "timeDimensions": [],
    "filters": [],
    "dimensions": [
      "SymAgricUrbanaPoint.ministerio",
      "SymAgricUrbanaPoint.tecnologia"
    ]
  }}
  cubejsApi={cubejsApi}
  render={renderChart(lineRender)}
/>;

export default ChartRenderer;