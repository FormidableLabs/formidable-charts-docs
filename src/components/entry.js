import entry from "victory-docs/src/components/entry-base";

import Index from "../../templates/index.hbs";
import routes from "../routes";
import basename from "../basename";

// Exported static site renderer
export default entry({
  Index,
  routes,
  basename
});
