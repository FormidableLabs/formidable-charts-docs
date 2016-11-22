import React from "react";

// Common
import { Footer } from "formidable-landers";

class FCFooter extends React.Component {
  render() {
    return (
      <Footer
        className="victory"
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


export default FCFooter;
