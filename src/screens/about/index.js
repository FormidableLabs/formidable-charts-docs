import React from "react";

// Dox Dependencies
import TitleMeta from "victory-docs/src/components/title-meta";
import Icon from "victory-docs/src/components/icon";
// Child components
import Header from "../../components/header";
import Footer from "../../components/footer";

class About extends React.Component {
  render() {
    return (
      <TitleMeta title="FormidableCharts | About">
        <Header />
        <article className="Article">
          <h1 className="u-noMargin">
            FormidableCharts
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
            <a href="https://github.com/FormidableLabs/formidable-charts/graphs/contributors">
              See contributors to FormidableCharts <Icon glyph="external-link" />
            </a>
          </p>
          <h1>
            About Formidable
          </h1>
          <p>
            Formidable is a Seattle-based consultancy and development shop, focused on open-source, full-stack JavaScript
            using React.js and Node.js, and the architecture of large-scale JavaScript applications. We build products for
            some of the world’s biggest companies, while helping their internal teams develop smart, thoughtful, and
            scalable systems.
          </p>
        </article>
        <Footer />
      </TitleMeta>
    );
  }
}

export default About;
