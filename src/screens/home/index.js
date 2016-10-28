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

          {/* TODO: Add copy */}

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
