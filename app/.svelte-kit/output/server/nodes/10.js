

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/fandoms/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.Ym66GjUo.js","_app/immutable/chunks/scheduler.BJrbY8Dn.js","_app/immutable/chunks/index.DOQLGmZL.js"];
export const stylesheets = [];
export const fonts = [];
