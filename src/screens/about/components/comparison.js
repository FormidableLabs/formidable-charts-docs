import React from "react";
import { Link } from "react-router";
// Common
import LOGO from "../../../../static/logotype.svg";
import VLOGO from "victory-docs/static/logotype-hero.svg";

class ComparisonChart extends React.Component {
  render() {
    return (
      <div>
        <h2>
          When should I use FormidableCharts versus Victory?
        </h2>
        <p>
          We wanted to provide developers with multiple charting options for their projects.
        </p>
        <p>
          FormidableCharts is quick and easy to implement! Focus on the data with pre-built charts.
        </p>
        <p>
          Victory is much more flexible, allowing users to create fully custom charts that integrate seamlessly with the look and feel of a project.
        </p>
        <div className="Grid Grid--guttersSm">
          <div className="Grid-cell Grid-cell--autoSize">
            <table className="Table Table--fc">
              <thead>
                <tr>
                  <th>
                    <div
                      dangerouslySetInnerHTML={{ __html: LOGO }}
                      style={{ display: "block", height: "30px" }}
                    />
                    <p>
                      <Link className="btn btn--dark" to="/docs/">
                        Get Started
                      </Link>
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="Table-td--same">Web Charts</td>
                </tr>
                <tr>
                  <td className="Table-td--same">Native Charts</td>
                </tr>
                <tr>
                  <td>Emphasis on Ease of Use</td>
                </tr>
                <tr>
                  <td>Prebuilt Charts</td>
                </tr>
                <tr>
                  <td>Automatic Animations</td>
                </tr>
                <tr>
                  <td>Automatic Interactive Events</td>
                </tr>
                <tr>
                  <td>Readymade Themes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="Grid-cell Grid-cell--autoSize">
            <table className="Table Table--v">
              <thead>
                <tr>
                  <th>
                    <div
                      dangerouslySetInnerHTML={{ __html: VLOGO }}
                      style={{ display: "block", height: "30px" }}
                    />
                    <p>
                      <a className="btn btn--gray" href="https://formidable.com/open-source/victory/docs/">
                        Get Started
                      </a>
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="Table-td--same">Web Charts</td>
                </tr>
                <tr>
                  <td className="Table-td--same">Native Charts</td>
                </tr>
                <tr>
                  <td>Emphasis on Flexibility</td>
                </tr>
                <tr>
                  <td>Modular Chart Components</td>
                </tr>
                <tr>
                  <td>Configurable Animations</td>
                </tr>
                <tr>
                  <td>Flexible Event System</td>
                </tr>
                <tr>
                  <td>Custom Themes and Styles</td>
                </tr>
                <tr>
                  <td>Custom Feature Support</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}

export default ComparisonChart;
