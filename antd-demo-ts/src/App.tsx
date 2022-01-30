import React, { FC, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import { Button } from 'antd';
import './App.less';

/*
const App: FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>

  </div>
);

export default App;
*/


const App: FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
    {
      year: '1999',
      value: 8,
    },
  ];
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    stepType: 'vh',
  };
  return <Line {...config} />;
};

export default App;
