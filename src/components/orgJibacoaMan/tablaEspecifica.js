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

const API_URL = "http://192.168.0.10:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjUxODE0NjMsImV4cCI6MTU2NTI2Nzg2M30.r3FYOTFyahrqGyE_BWF0HXeXlrDP8YDtWhWTRtehU0I",
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
      "SymAgricUrbanaPoint.consejoPopular",
      "SymAgricUrbanaPoint.municipio",
      "SymAgricUrbanaPoint.tecnologia",
      "SymAgricUrbanaPoint.ministerio",
      "SymAgricUrbanaPoint.provincia",
      "SymAgricUrbanaPoint.entidad",
      "SymAgricUrbanaPoint.productor"
    ],
    "filters": [
      {
        "dimension": "SymAgricUrbanaPoint.nombre",
        "operator": "equals",
        "values": [
          "Jibacoa"
        ]
      }
    ]
  }}
  cubejsApi={cubejsApi}
  render={renderChart(tableRender)}
/>;

export default ChartRenderer;