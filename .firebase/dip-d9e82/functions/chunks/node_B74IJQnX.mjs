export { renderers } from '../renderers.mjs';

const page = () => import('./pages/node_CTRDpcbs.mjs').then(n => n.n);

export { page };
