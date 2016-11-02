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
          <h1 className="Heading">
            Quick and robust charts out of the box
          </h1>
          <div className="u-padding">
            <div className="Grid Grid--gutters Grid--full medium-Grid--fit u-textLarge">
              <div className="Grid-cell Grid-cell--autoSize">
                <h2 className="SubHeading u-textRight u-noMargin">
                  Why FormidableCharts?
                </h2>
              </div>
              <div className="Grid-cell">
                <p className="u-noMargin">
                  FormidableCharts offers composed Line, Area, Bar, Pie, and Scatter charts. Use in your React project, or in other Javascript projects using our Standalone wrapper.
                </p>
              </div>
            </div>
          </div>
          <div className="Installer">
            <code className="Installer-code">
              npm install formidable-charts
            </code>
          </div>
          <div className="Installer">
            <code className="Installer-code">
              npm install -native formidable-charts react-native-svg --save
            </code>
          </div>
          {/*
            TODO: example gif added here once Ken has some updated ones in docs... or use component playground?
            https://github.com/FormidableLabs/formidable-charts-docs/issues/20
          */}
          <div className="Container">
            <div className="u-paddingSm">
              <div className="Grid Grid--gutters Grid--full medium-Grid--1of3">
                <div className="Grid-cell u-textCenter">
                  <h3>Composed</h3>
                  <p>
                    Build the charts you need quickly without the hassle of fitting the pieces together yourself.
                  </p>
                </div>
                <div className="Grid-cell u-textCenter">
                  <h3>Themed</h3>
                  <p>
                    Give all of your charts a consistent look with our easy, built-in themes. Spend less time styling, more time building.
                  </p>
                </div>
                <div className="Grid-cell u-textCenter">
                  <h3>Native</h3>
                  <p>
                    Extend the FormidableCharts experience on iOS or Android platforms with an identical API.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
