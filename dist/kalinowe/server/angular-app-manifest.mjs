
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
    'index.csr.html': {size: 442, hash: '9c5a85f98f05cb81738ee4524e5721c7338483416b90df3d802e180445bdccfb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 955, hash: 'b1da416754567acd7fa2e6b9aabdb8b93f4dddc5f9d1d9ad0fa87a6364a38bbf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21554, hash: 'b10af2774e368f66fedcd85ab3f484ad19d3062e0ca9aec49cda8ea74d9d5822', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
