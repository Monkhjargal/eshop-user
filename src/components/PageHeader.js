import React from "react";
import PropTypes from "prop-types";

import { IMAGE } from "../utils/consts";

class PageHeader extends React.Component {
  state = {
    title: "",
    subtitle: "",
    banners: [],
    bgColor: "#feb415"
  };

  componentDidMount() {
    this.setState({ ...this.props });
  }

  render() {
    const { title, subtitle, banners, bgColor } = this.props;

    const selected = banners[Math.floor(Math.random() * banners.length)];

    return (
      <div
        className="whole-page-title"
        style={{ padding: "0", backgroundColor: `${bgColor}` }}
      >
        <div
          className="whole-page-title class container pad10"
          style={{
            backgroundImage: `url(${selected === undefined ? '' : IMAGE + selected.imgnm})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundSize: "50% 115px",
            backgroundColor: `${bgColor}`
          }}
        >
          <div className="container pad10">
            <div className="title-container flex-space">
              <h2>
                <span className="big">{title}</span>
                <strong>{subtitle}</strong>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  banners: PropTypes.array,
  bgColor: PropTypes.string
};

export default PageHeader;
