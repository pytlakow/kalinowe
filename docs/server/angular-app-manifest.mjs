
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/kalinowe/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/kalinowe"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3243, hash: 'b483f33f0813bb0cd8e3f115bc1b39554268ae3e3aaae38359ab4928ef293436', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 955, hash: '769da3a2dbfc77c2556248f2970d59283f0aa31c2cd215637115e8d81a5667d4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18146, hash: 'd47cdf471709a3585f9c58f9f574b260b9573f28d4f5229f017f1c9f22474074', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-MRQPL6OL.css': {size: 6592, hash: 'TBFpena2O/k', text: () => import('./assets-chunks/styles-MRQPL6OL_css.mjs').then(m => m.default)}
  },
};
