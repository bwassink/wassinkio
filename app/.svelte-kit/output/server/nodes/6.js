import * as server from '../entries/pages/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.DB4qdvOO.js","_app/immutable/chunks/scheduler.BJrbY8Dn.js","_app/immutable/chunks/index.DOQLGmZL.js","_app/immutable/chunks/client.BdfZpmnH.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/index.CxsFIwBe.js","_app/immutable/chunks/image.DUp3jStc.js"];
export const stylesheets = ["_app/immutable/assets/Welcome.CO5DLd5H.css"];
export const fonts = [];
