import React from "react";
import Radium from "radium";

// Common
import { Footer } from "formidable-landers";

class FCFooter extends React.Component {
  render() {
    return (
      <Footer
        style={{
          margin: 0
        }}
        styleContainer={{
          margin: "0 3vw"
        }}
        theme="dark"
      />
    );
  }
}

FCFooter.propTypes = {
  home: React.PropTypes.bool
};

FCFooter.defaultProps = {
  home: false
};


export default Radium(FCFooter);
