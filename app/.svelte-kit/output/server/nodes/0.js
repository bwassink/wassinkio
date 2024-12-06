import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.BNBcgi1x.js","_app/immutable/chunks/LiveMode.-KOLU9WI.js","_app/immutable/chunks/index.CxsFIwBe.js","_app/immutable/chunks/scheduler.BJrbY8Dn.js","_app/immutable/chunks/index.DOQLGmZL.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/entry.BnQP4Ele.js","_app/immutable/chunks/client.BdfZpmnH.js","_app/immutable/chunks/stores.Cf11eC5v.js"];
export const stylesheets = ["_app/immutable/assets/0.C3QQbuUf.css"];
export const fonts = [];
