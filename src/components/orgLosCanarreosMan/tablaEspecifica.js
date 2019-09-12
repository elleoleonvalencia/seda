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
      "SymAgricUrbanaPoint.count",
      "SymAgricUrbanaPoint.areaTotal"
    ],
    "timeDimensions": [],
    "dimensions": [
      "SymAgricUrbanaPoint.tecnologia",
      "SymAgricUrbanaPoint.nombre",
      "SymAgricUrbanaPoint.ministerio",
      "SymAgricUrbanaPoint.consejoPopular",
      "SymAgricUrbanaPoint.municipio"
    ],
    "filters": [
      {
        "dimension": "SymAgricUrbanaPoint.nombre",
        "operator": "equals",
        "values": [
          "Los Canarreos"
        ]
      }
    ]
  }}
  cubejsApi={cubejsApi}
  render={renderChart(tableRender)}
/>;

export default ChartRenderer;