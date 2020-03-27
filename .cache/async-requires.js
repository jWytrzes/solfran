// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-blog-js": () => import("./../src/pages/Blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-home-js": () => import("./../src/pages/Home.js" /* webpackChunkName: "component---src-pages-home-js" */),
  "component---src-pages-post-js": () => import("./../src/pages/Post.js" /* webpackChunkName: "component---src-pages-post-js" */),
  "component---src-pages-root-js": () => import("./../src/pages/Root.js" /* webpackChunkName: "component---src-pages-root-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

