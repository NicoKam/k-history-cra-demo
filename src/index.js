import { Radio } from 'antd';
import 'antd/lib/button/style/css';
import 'antd/lib/radio/style/css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { getHistory, getHistoryMode, historyOption, setHistoryMode } from './historyUtil';
import './index.css';
import routes from './routes';

const historyMode = getHistoryMode();
const history = getHistory();

ReactDOM.render(
  <React.StrictMode>
    <div>
      <div>History mode:</div>
      <Radio.Group
        value={historyMode}
        options={historyOption}
        onChange={e => setHistoryMode(e.target.value)}
        optionType="button"
      ></Radio.Group>
    </div>
    <Router history={history}>
      <Switch>
        {routes.map((props) => (
          <Route key={props.path} exact {...props} />
        ))}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
