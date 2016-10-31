import React from "react";

// Dox Dependencies
import TitleMeta from "victory-docs/src/components/title-meta";
// FormidableCharts
import Header from "../../components/header";
import Footer from "../../components/footer";

class Home extends React.Component {
  render() {
    return (
      <TitleMeta title="FormidableCharts">
        <Header home />
        <section className="Home playgroundsMaxHeight">
          <h2>Quick, composed React charts out of the box</h2>
          <code>npm install formidable-charts</code>
          <p>
            <iframe title="Stars on GitHub" src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=formidable-charts&type=star&count=true" frameBorder="0" scrolling="0" width="90px" height="20px"></iframe>
          </p>
          {/* example gif added here once Ken has some updated ones in docs... or use component playground?*/}
          <h3>Composed</h3>
            <p>Build the charts you need quickly without the hassle of fitting the pieces together yourself. FormidableCharts offers
             composed Line, Area, Bar, Pie, and Scatter charts. Use in your React project, or in other Javascript projects using our Standalone wrapper.</p>
          <h3>Themed</h3>
            <p>Give all of your charts a consistent look with our easy, built-in themes. Spend less time styling, more time building.</p>
          <h3>Native</h3>
            <p>Extend the FormidableCharts experience on iOS or Android platforms with an identical API.</p>
            <code>npm install -native formidable-charts react-native-svg --save</code>
        </section>
        <Footer
          style={{
            margin: 0
          }}
          styleContainer={{
            margin: "0 3vw"
          }}
        />
      </TitleMeta>
    );
  }
}

export default Home;
