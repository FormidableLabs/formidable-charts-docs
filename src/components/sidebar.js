import React from "react";
import { Link } from "react-router";
import MarkdownIt from "markdown-it";
import { times } from "lodash";

// Dox dependencies
import Icon from "victory-docs/src/components/icon";
// Children
import { config } from "./config";

class Sidebar extends React.Component {
  renderTransformedToc(siblings, targetLocation) {
    const md = MarkdownIt();

    return (
      <ul className="Sidebar-toc">
        {
          siblings.map((sibling, id) => {
            if (Array.isArray(sibling)) {
              return (
                <li className="Sidebar-toc-item" key={id}>
                  {this.renderTransformedToc(sibling, targetLocation)}
                </li>
              );
            }

            return sibling && (
              <li key={id} className="Sidebar-toc-item">
                <Link
                  to={`${targetLocation}#${sibling.anchor}`}
                  dangerouslySetInnerHTML={{__html: md.renderInline(sibling.content)}}
                />
              </li>
            );
          })
        }
      </ul>
    );
  }

  pushToLevel(siblings, level, heading) {
    siblings = siblings.slice(0);
    let parentTarget = siblings;
    let target;

    times(level, () => {
      target = parentTarget[parentTarget.length - 1];

      if (Array.isArray(target)) {
        parentTarget = target;
      } else {
        parentTarget.push([]);
        parentTarget = parentTarget[parentTarget.length - 1];
      }
    });

    if (Array.isArray(target)) {
      target.push(heading);
    } else {
      parentTarget.push(heading);
    }

    return siblings;
  }

  transformTocArray(headings) {
    const topHeading = headings[0];

    return headings.reduce((siblings, heading) => {
      const level = heading.level - topHeading.level;
      return this.pushToLevel(siblings, level, heading);
    }, []);
  }

  renderToc(targetLocation) {
    if (!this.props.location || (this.props.location.pathname !== targetLocation)) {
      return null;
    }

    const list = this.props.tocArray.filter((heading) => heading.level !== 1);

    return this.renderTransformedToc(
      this.transformTocArray(list),
      targetLocation
    );
  }

  renderList(items, route, category) {
    const listItems = items.map((item) => {
      if (item.category === category) {
        /* The /docs/index/ slug should map to /docs/ */
        if (item.slug === "index") {
          return (
            <li key={item.slug} className="Sidebar-List-Item">
              <Link to={`/${route}/`} activeClassName="is-active">
                {item.text} <Icon glyph="internal-link" />
              </Link>
              {this.renderToc(`/${route}/`)}
            </li>
          );
        }
        return (
          <li key={item.slug} className="Sidebar-List-Item">
            <Link to={`/${route}/${item.slug}/`} activeClassName="is-active">
              {item.text} <Icon glyph="internal-link" />
            </Link>
            {this.renderToc(`/${route}/${item.slug}/`)}
          </li>
        );
      }
    });
    return (
      <ul className="Sidebar-List">
        {listItems}
      </ul>
    );
  }

  render() {
    /* eslint-disable max-len */
    return (
      <div className="Page-sidebar">
        <nav className="Sidebar">
          <div className="Sidebar-Grid">
            <p className="Sidebar-Heading u-noMargin u-noPadding">
              Documentation
            </p>
            {this.renderList(this.props.docs, "docs", "base")}
            <ul className="Sidebar-List">
              <li className="Sidebar-List-Item">
                <a href="https://github.com/FormidableLabs/formidable-charts/#contributing">
                  Contributing <Icon glyph="external-link" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  /* eslint-enable max-len */
  }
}

Sidebar.propTypes = {
  active: React.PropTypes.string,
  docs: React.PropTypes.array,
  location: React.PropTypes.object,
  recipes: React.PropTypes.array,
  tocArray: React.PropTypes.array
};

Sidebar.defaultProps = {
  docs: config,
  active: null
};

export default Sidebar;
