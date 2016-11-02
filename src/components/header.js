import React from "react";
import Radium from "radium";
import { Link } from "react-router";

// Common
import { Header } from "formidable-landers";
import LOGO from "../../static/logotype.svg";

class FCHeader extends React.Component {
  render() {
    const padding = this.props.home ? "60px 0" : "40px 0";

    const formidableChartsLogo = (
      <Link
        dangerouslySetInnerHTML={{ __html: LOGO }}
        to="/"
        style={{ display: "block", height: "50px" }}
      />);

    return (
      <Header
        logoProject={formidableChartsLogo}
        padding={padding}
        styleContainer={{
          marginRight: "3vw",
          marginLeft: "3vw"
        }}
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


export default Radium(FCHeader);
