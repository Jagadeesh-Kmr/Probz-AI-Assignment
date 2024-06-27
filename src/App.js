import {Switch, Route} from 'react-router-dom'
import AreaChart from './components/AreaChart'
import PieChart from './components/PieChart'
import Header from './components/Header'

import './App.css'

const App = () => (
  <>
    <Header />
    <div className="chart-bg">
      <Switch>
        <Route path="/area-chart-monthly" component={AreaChart} />
        <Route path="/pie-chart" component={PieChart} />
      </Switch>
    </div>
  </>
)

export default App
