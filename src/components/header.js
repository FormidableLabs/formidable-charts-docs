import React from "react";
import { Link } from "react-router";

// Common
import { Header } from "formidable-landers";
import LOGO from "../../static/logotype.svg";

class FCHeader extends React.Component {
  render() {
    const formidableChartsLogo = (
      <Link
        dangerouslySetInnerHTML={{ __html: LOGO }}
        to="/"
        style={{ display: "block", height: "50px", maxWidth: "100%" }}
      />);

    return (
      <Header
        className="victory fc"
        logoProject={formidableChartsLogo}
      >
        <div className="default" style={{textAlign: "center"}}>
          <Link to="/about/">
            About
          </Link>
          <Link to="/docs/">
            Docs
          </Link>
          <a href="https://github.com/FormidableLabs/formidable-charts">
            Github
          </a>
        </div>
      </Header>
    );
  }
}

FCHeader.propTypes = {
  home: React.PropTypes.bool
};

FCHeader.defaultProps = {
  home: false
};


export default FCHeader;
