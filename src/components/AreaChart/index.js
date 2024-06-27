import {useState} from 'react'

import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const data = [
  {
    name: 'JAN',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'FEB',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'MAR',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'APR',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'MAY',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'JUN',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'JULY',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'JAN',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'AUG',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'SEP',
    uv: 1400,
    pv: 4400,
    amt: 2290,
  },
  {
    name: 'OCT',
    uv: 2780,
    pv: 6708,
    amt: 2000,
  },
  {
    name: 'NOV',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'DEC',
    uv: 2390,
    pv: 7800,
    amt: 2500,
  },
]

const dataWeekly = [
  {
    name: 'SUN',
    uv: 4000,
    pv: 4400,
    amt: 2400,
  },
  {
    name: 'MON',
    uv: 3000,
    pv: 4498,
    amt: 2210,
  },
  {
    name: 'TUE',
    uv: 8400,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'WED',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'THU',
    uv: 7890,
    pv: 2800,
    amt: 2181,
  },
  {
    name: 'FRI',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'SAT',
    uv: 8490,
    pv: 4400,
    amt: 2100,
  },
  {
    name: 'SUN',
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
]

const RenderLineChart = () => {
  const [viewUpdate, setViewUpdate] = useState('false')

  const renderChartMonthly = () => (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{top: 10, right: 30, left: 0, bottom: 0}}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )

  const renderChartWeekly = () => (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={dataWeekly}
          margin={{top: 10, right: 30, left: 0, bottom: 0}}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )

  const renderChartData = () => (
    <>{viewUpdate ? renderChartWeekly() : renderChartMonthly()}</>
  )

  const updatedView = viewUpdate ? 'Monthly' : 'Weekly'
  const view = viewUpdate ? 'WEEKLY' : 'MONTHLY'

  return (
    <>
      <h1 className="areaH1">
        Line Chart With Coding Drafts <span className="viewSpan">{view}</span>{' '}
        view
      </h1>
      <p className="updateP">For {updatedView} update click the below button</p>
      <button
        type="button"
        className="updateBtn"
        onClick={() => setViewUpdate(!viewUpdate)}
      >
        {updatedView}
      </button>
      {renderChartData()}
    </>
  )
}

export default RenderLineChart
