import React from 'react';
import { Link } from 'react-router-dom';
import config from 'config';

import timesale6 from '../scss/assets/images/demo/11.jpg';

const IMAGE =
    process.env.NODE_ENV === 'development'
        ? config.image.development
        : config.image.production;

class Banner extends React.Component {
  render() {
    const banner = this.props && this.props.data;

    return (
      <div className="banner-container" >
          <span style={{ backgroundImage: `url(${IMAGE + banner.imgnm})` }}></span>
          <div className="container pad10">
              <Link to="">
                  <img alt="banner" src={timesale6} className="img-fluid" />
              </Link>
          </div>
      </div>
    );
  }
}

export default Banner;