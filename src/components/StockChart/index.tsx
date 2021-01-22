import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

import ResponsiveContainer from './styles';
import CustomTooltip from '../CustomTooltip/index';

const StockChart: React.FC<any> = ({ data }) => {
  const currencyFormat = (item: string) => numeral(item).format('$0,0');
  const dateFormat = (item: Date) => moment(item).format('MMM YY');

  return (
    <ResponsiveContainer>
      <AreaChart
        width={600}
        height={250}
        data={data}
        margin={{
          top: 30,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="45%" stopColor="#f7931a" stopOpacity={1} />
            <stop offset="100%" stopColor="#f7931a" stopOpacity={0.0} />
          </linearGradient>
        </defs>
        <XAxis
          tick={false}
          axisLine={false}
          dataKey="close"
          tickFormatter={dateFormat}
        />
        <YAxis tick={false} axisLine={false} />

        <Area
          type="linear"
          dataKey="close"
          stroke="none"
          fill="url(#colorValue)"
          fillOpacity={1}
        />
        <Tooltip
          isAnimationActive={false}
          content={
            <CustomTooltip
              customProps="Price"
              customProps1="Date"
              customProps2="Price"
            />
          }
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StockChart;