import React from "react";
import Prism from "prismjs";
import { find } from "lodash";
/* eslint-disable no-unused-vars */
// add more language support
import jsx from "prismjs/components/prism-jsx";
import sh from "prismjs/components/prism-bash";
import yaml from "prismjs/components/prism-yaml";
/* eslint-enable no-unused-vars */

// Dox dependencies
import Markdown from "victory-docs/src/components/markdown";
import TitleMeta from "victory-docs/src/components/title-meta";
// Child components
import { config } from "../../components/config";
import Page from "../../components/page";

class Docs extends React.Component {
  constructor() {
    super();

    this.state = {
      tocArray: []
    };
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() { // is this the right one??
    Prism.highlightAll();
  }

  updateTocArray(tocArray) {
    this.setState({tocArray});
  }

  renderContent(activePage) {
    const conf = find(config, { slug: activePage });
    const markdownDocs = conf.docs;
    const editUrl = `https://github.com/FormidableLabs/formidable-charts/blob/master/docs/${activePage}.md`;

    return (
      <div>
        <a href={editUrl} className="SubHeading">Edit this page</a>
        <Markdown
          location={this.props.location}
          updateTocArray={this.updateTocArray.bind(this)}
          active={activePage}
          markdownFile={markdownDocs}
        />
      </div>
    );
  }

  render() {
    const activePage = this.props.params.component ?
      this.props.params.component :
      "index";

    return (
      <TitleMeta title="FormidableCharts | Documentation">
        <Page
          location={this.props.location}
          sidebar={activePage}
          tocArray={this.state.tocArray}
        >
          { this.renderContent(activePage) }
        </Page>
      </TitleMeta>
    );
  }
}

Docs.propTypes = {
  location: React.PropTypes.object,
  params: React.PropTypes.object
};

Docs.defaultProps = {
  params: null
};


export default Docs;
