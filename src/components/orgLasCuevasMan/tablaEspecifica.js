import React from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Row, Col, Statistic, Table } from 'antd';
import "antd/dist/antd.css";

const tableRender = ({ resultSet }) => (
  <Table 
    pagination={false}
    columns={resultSet.tableColumns().map(c => ({ ...c, dataIndex: c.key }))} 
    dataSource={resultSet.tablePivot()} 
  />
  
);

//const API_URL = "http://localhost:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjM5NzgzNzcsImV4cCI6MTU2NDA2NDc3N30.qugRR8df5TDCaFDqUexXJIs1SpukCB0FIhEHe-SsaRY",
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
      "SymAgricUrbanaPoint.areaTotal"
    ],
    "timeDimensions": [],
    "dimensions": [
      "SymAgricUrbanaPoint.nombre",
      "SymAgricUrbanaPoint.tecnologia",
      "SymAgricUrbanaPoint.ministerio",
      "SymAgricUrbanaPoint.consejoPopular",
      "SymAgricUrbanaPoint.municipio",
      "SymAgricUrbanaPoint.provincia",
      "SymAgricUrbanaPoint.entidad",
      "SymAgricUrbanaPoint.productor"
    ],
    "filters": [
      {
        "dimension": "SymAgricUrbanaPoint.nombre",
        "operator": "equals",
        "values": [
          "Las Cuevas"
        ]
      }
    ]
  }}
  cubejsApi={cubejsApi}
  render={renderChart(tableRender)}
/>;

export default ChartRenderer;