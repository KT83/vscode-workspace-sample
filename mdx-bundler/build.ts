import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import * as fs from "fs";
import { renderToStaticMarkup } from "react-dom/server";

// process.env.NODE_ENV = "production";

(async () => {
  const source = await fs.readFileSync("./pages/sample.mdx", "utf-8");
  const result = await bundleMDX({
    source: source,
  });

  const { code, frontmatter } = result;

  const component = getMDXComponent(code);
  const rendered = renderToStaticMarkup(component({}));

  console.log(rendered);
  fs.writeFileSync("./pages/sample.html", rendered);
})();
