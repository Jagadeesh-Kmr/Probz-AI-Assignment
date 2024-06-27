import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-large-container">
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/area-chart-monthly" className="nav-link">
              Line Chart
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/pie-chart" className="nav-link">
              Pie Chart
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item-mobile">
          <Link to="/area-chart-monthly" className="nav-link">
            Line Chart
          </Link>
        </li>

        <li className="nav-menu-item-mobile">
          <Link to="/pie-chart" className="nav-link">
            PieChart
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default withRouter(Header)
