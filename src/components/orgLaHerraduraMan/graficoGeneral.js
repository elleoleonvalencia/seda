import React from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Chart, Axis, Tooltip, Geom, Coord, Legend } from 'bizcharts';
import { Row, Col, Statistic, Table } from 'antd';
import moment from 'moment';

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

const pieRender = ({ resultSet }) => (
  <Chart height={400} data={resultSet.chartPivot()} forceFit>
    <Coord type='theta' radius={0.75} />
    {resultSet.seriesNames().map(s => (<Axis name={s.key} />))}
    <Legend position='right' />
    <Tooltip />
    {resultSet.seriesNames().map(s => (<Geom type="intervalStack" position={s.key} color="category" />))}
  </Chart>
);

const API_URL = "http://seda.enpa.vcl.minag.cu"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjU3MTM4NTksImV4cCI6MTU2NTgwMDI1OX0.M95g7rXXUB7FjNexnRZBPqGvzbekSQA2HfGSj83AR18",
  { apiUrl: API_URL + "/cubejs-api/v1" }
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
    "dimensions": [
      "SymAgricUrbanaPoint.ministerio",
      "SymAgricUrbanaPoint.tecnologia"
    ],
    "filters": []
  }}
  cubejsApi={cubejsApi}
  render={renderChart(pieRender)}
/>;

export default ChartRenderer;