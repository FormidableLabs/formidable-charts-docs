import React from "react";
import { ScrollContainer } from "react-router-scroll";

// Child Components
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";

class Page extends React.Component {
  shouldUpdateScroll(scrollBehavior, prevRouterProps) {
    if (scrollBehavior && scrollBehavior.location && prevRouterProps && prevRouterProps.location) {
      // if the previous URL remains unchanged, don’t scroll the container pls
      if (prevRouterProps.location.pathname === scrollBehavior.location.pathname) {
        return false;
      }
    }
    return true;
  }
  render() {
    return (
      <div className="u-fullHeight">
        <Header />
        <main className="Page">
          <Sidebar
            active={this.props.sidebar}
            location={this.props.location}
            tocArray={this.props.tocArray}
          />
          <ScrollContainer
            scrollKey="page-content"
            shouldUpdateScroll={this.shouldUpdateScroll}
          >
            <div className="Page-content">
              <article className="Article">
                {this.props.children}
              </article>
              <Footer />
            </div>
          </ScrollContainer>
        </main>
      </div>
    );
  }
}

Page.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object,
  sidebar: React.PropTypes.string,
  tocArray: React.PropTypes.array
};

Page.defaultProps = {
  children: null,
  sidebar: "index",
  tocArray: []
};

export default Page;
