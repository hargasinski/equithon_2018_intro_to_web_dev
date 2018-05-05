import React from 'react';

import { Icon } from 'antd';

class Weather extends React.Component {
  render() {
    const {
      results,
      city
    } = this.props;

    return (
      <div className="weather">
        <div className="back-arrow">
          <Icon type="arrow-left" />
        </div>
        <h1>{city}</h1>
      </div>
    );
  }
}

export default Weather;
