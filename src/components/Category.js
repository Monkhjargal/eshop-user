import React from "react";
import { Link } from "react-router-dom";

class MainMenu extends React.Component {
  render() {
    const data = this.props && this.props.dataSource;
    var indents = data.map(function(item, index) {
      return (
        <div className="col-md-3 pad20" key={index} style={{ zIndex: "2" }}>
          <ul className="list-unstyled">
            <li key={index}>
              <Link to="">
                <strong className="text-uppercase">{item.name}</strong>
              </Link>
            </li>
            {item.children &&
              item.children.map(function(it, ind) {
                return (
                  <li key={ind}>
                    <Link to="" className="list-unstyled">
                      <span>{it.name}</span>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      );
    });
    return <div className="row row10">{indents}</div>;
  }
}

export default MainMenu;
