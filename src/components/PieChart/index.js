import {PureComponent} from 'react'
import {PieChart, Pie, ResponsiveContainer} from 'recharts'
import './index.css'

const data01 = [
  {name: 'Group A', value: 400},
  {name: 'Group B', value: 300},
  {name: 'Group C', value: 300},
  {name: 'Group D', value: 200},
]
const data02 = [
  {timestamp: '2023-01-01T00:00:00Z', value: 10},
  {timestamp: '2023-01-02T00:00:00Z', value: 12},
  {timestamp: '2023-01-03T00:00:00Z', value: 5},
  {timestamp: '2023-01-01T00:00:00Z', value: 10},
  {timestamp: '2023-01-01T00:00:00Z', value: 10},
  {timestamp: '2023-01-02T00:00:00Z', value: 12},
  {timestamp: '2023-01-03T00:00:00Z', value: 5},
  {timestamp: '2023-01-01T00:00:00Z', value: 10},
  {timestamp: '2023-01-01T00:00:00Z', value: 10},
  {timestamp: '2023-01-02T00:00:00Z', value: 12},
  {timestamp: '2023-01-03T00:00:00Z', value: 5},
  {timestamp: '2023-01-01T00:00:00Z', value: 10},
]

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-of-two-levels-gor24'

  render() {
    return (
      <>
        <h1 className="pie-h1">Pie Chart With Coding Drafts</h1>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={400} height={400}>
            <Pie
              data={data01}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
            />
            <Pie
              data={data02}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </>
    )
  }
}
