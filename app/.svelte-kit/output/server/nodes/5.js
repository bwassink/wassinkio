

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/quiz/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CtFDVA1x.js","_app/immutable/chunks/scheduler.BJrbY8Dn.js","_app/immutable/chunks/index.DOQLGmZL.js"];
export const stylesheets = [];
export const fonts = [];
