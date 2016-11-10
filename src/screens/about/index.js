import React from "react";

// Dox Dependencies
import TitleMeta from "victory-docs/src/components/title-meta";
import Icon from "victory-docs/src/components/icon";
// Child components
import Page from "../../components/page";
import Comparison from "./components/comparison";

class About extends React.Component {
  render() {
    return (
      <TitleMeta title="FormidableCharts | About">
        <Page
          location={this.props.location}
          sidebar="about"
          tocArray={[]}
        >
          <h1 className="u-noMargin">
            About FormidableCharts
          </h1>
          <p>
            {/*
              * TODO: Customize these buttons
              * https://github.com/FormidableLabs/formidable-landers/issues/175
              */}
            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=formidable-charts&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=formidable-charts&type=watch&count=true&size=large&v=2" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=formidable-charts&type=fork&count=true&size=large" frameBorder="0" scrolling="0" width="158px" height="30px"></iframe>
          </p>
          <p>
            FormidableCharts is a library that provides a quick charting option out of the box for React and other Javascript projects.
            Spend less time with styles and themes thanks to FormidableCharts&rsquo; easy built-in stylistic and behavioral theming.
            Compatible with React Native so that you can bring your charts to iOS and Android.
          </p>
          <p>
            <a href="https://github.com/FormidableLabs/formidable-charts/graphs/contributors">
              See contributors to FormidableCharts <Icon glyph="external-link" />
            </a>
          </p>
          <Comparison/>
          <h2>
            About Formidable
          </h2>
          <p>
            Formidable is a Seattle-based consultancy and development shop, focused on open-source, full-stack JavaScript
            using React.js and Node.js, and the architecture of large-scale JavaScript applications. We build products for
            some of the world’s biggest companies, while helping their internal teams develop smart, thoughtful, and
            scalable systems.
          </p>
        </Page>
      </TitleMeta>
    );
  }
}

About.propTypes = {
  location: React.PropTypes.object
};

export default About;
