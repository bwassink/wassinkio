import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.CHFbbH3f.js","_app/immutable/chunks/scheduler.BJrbY8Dn.js","_app/immutable/chunks/index.DOQLGmZL.js","_app/immutable/chunks/each.EriMJ2FF.js","_app/immutable/chunks/client.BdfZpmnH.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/index.CxsFIwBe.js","_app/immutable/chunks/index.BM6wh_11.js","_app/immutable/chunks/image.DUp3jStc.js"];
export const stylesheets = ["_app/immutable/assets/Welcome.CO5DLd5H.css"];
export const fonts = [];
