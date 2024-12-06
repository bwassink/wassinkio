import * as server from '../entries/pages/post/_slug_/_page.server.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/post/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/post/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/11.CIyUcVl1.js","_app/immutable/chunks/scheduler.BJrbY8Dn.js","_app/immutable/chunks/index.DOQLGmZL.js","_app/immutable/chunks/PortableText.C7A-fl7E.js","_app/immutable/chunks/each.EriMJ2FF.js","_app/immutable/chunks/client.BdfZpmnH.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/index.CxsFIwBe.js","_app/immutable/chunks/index.BM6wh_11.js","_app/immutable/chunks/image.DUp3jStc.js"];
export const stylesheets = ["_app/immutable/assets/11.CWsInvDZ.css"];
export const fonts = [];