export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","global.css","sanity.svg","svelte.svg"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.BliwAgom.js","app":"_app/immutable/entry/app.DZboMmGA.js","imports":["_app/immutable/entry/start.BliwAgom.js","_app/immutable/chunks/entry.BnQP4Ele.js","_app/immutable/chunks/scheduler.BJrbY8Dn.js","_app/immutable/chunks/index.CxsFIwBe.js","_app/immutable/entry/app.DZboMmGA.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.BJrbY8Dn.js","_app/immutable/chunks/index.DOQLGmZL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/beamer",
				pattern: /^\/beamer\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/blog/post/[slug]",
				pattern: /^\/blog\/post\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/fandoms",
				pattern: /^\/fandoms\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/post/[slug]",
				pattern: /^\/post\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/quiz",
				pattern: /^\/quiz\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
