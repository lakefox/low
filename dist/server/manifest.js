const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","decode_logo.webp","handy_logo.webp","logo.png","logo.pxd/QuickLook/Icon.tiff","logo.pxd/QuickLook/Thumbnail.tiff","logo.pxd/data/22B0CED0-6488-4981-AB78-325EAE3C5556","logo.pxd/metadata.info","low_logo.png","low_logo.pxd/QuickLook/Icon.tiff","low_logo.pxd/QuickLook/Thumbnail.tiff","low_logo.pxd/data/917CF39A-AFD3-40AB-A55F-E7893E5FE609","low_logo.pxd/metadata.info","taste_logo.webp"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png",".tiff":"image/tiff"},
	_: {
		entry: {"file":"_app/immutable/start-bbaf5a9a.js","imports":["_app/immutable/start-bbaf5a9a.js","_app/immutable/chunks/index-5d7f4c85.js","_app/immutable/chunks/singletons-60fac0cc.js","_app/immutable/chunks/control-e7f5239e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-71f5238b.js'),
			() => import('./chunks/1-e6ce0c2d.js'),
			() => import('./chunks/2-2a9b9f73.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/[site]/[page]",
				pattern: /^\/api\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"site","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server-b91ff2cc.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
