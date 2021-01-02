import { LeftOutlined, ReloadOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Checkbox } from 'antd';
import 'antd/lib/button/style/css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './NaviButton.css';

const NaviButton = (props) => {
  const { className, history, nextPath, ...otherProps } = props;

  const [withState, setWithState] = useState(false);
  const [withQuery, setWithQuery] = useState(false);

  const nextState = withState ? { valueInState: Math.random() } : undefined;
  const nextQuery = withState ? { valueInState: Math.random() } : undefined;

  return (
    <div className={`navi-button ${className}`} {...otherProps}>
      {nextPath && (
        <div>
          <Button
            onClick={() => history.push({ pathname: nextPath, query: nextQuery, state: nextState })}
            icon={<RightOutlined />}
          >
            下一页(push)
          </Button>
          <Button
            onClick={() => history.replace({ pathname: nextPath, query: nextQuery, state: nextState })}
            icon={<RightOutlined />}
          >
            下一页(replace)
          </Button>
          <Checkbox checked={withState} onClick={() => setWithState(!withState)}>
            with state
          </Checkbox>
          <Checkbox checked={withQuery} onClick={() => setWithQuery(!withQuery)}>
            with query
          </Checkbox>
        </div>
      )}
      <div>
        <Button onClick={() => history.go(-1)} icon={<LeftOutlined />}>
          后退(back)
        </Button>
        <Button onClick={() => window.location.reload()} icon={<ReloadOutlined />}>
          刷新(reload)
        </Button>
        <Button onClick={() => history.go(1)} icon={<RightOutlined />}>
          前进(forward)
        </Button>
      </div>
    </div>
  );
};

NaviButton.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

NaviButton.defaultProps = {
  className: '',
  style: {},
};

export default NaviButton;
