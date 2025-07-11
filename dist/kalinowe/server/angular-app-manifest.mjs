
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3290, hash: 'a84819e918f31bb7d2f952ba6ffd834d635208ada0034db296e75b9741347638', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 946, hash: 'f5f797df84c0b844befa23f042f1779bc5bff3aaf7834a1b544497ab440ac2b9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28082, hash: '78ab1deeb55be146efc24d46200d6a056e090fa5d1c5a47ec304c8c4f89c5f0c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KB4VCQPP.css': {size: 6860, hash: 'L6+ELQO4cC0', text: () => import('./assets-chunks/styles-KB4VCQPP_css.mjs').then(m => m.default)}
  },
};
