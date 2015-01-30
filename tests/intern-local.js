define({
	proxyPort: 9000,

	proxyUrl: 'localhost:9000',

	capabilities: {
		'selenium-version': '2.44.0'
	},

	environments: [
        //{browserName: 'firefox', version: '25'},
        //{browserName: 'chrome'},
        {browserName: 'safari', version: '8.0.2'}
	],

	maxConcurrency: 3,
    
    reporters: [ 'pretty', 'runner' ],
    
	tunnel: 'nullTunnel',
    
    useSauceConnect: false,

	suites: null,

	functionalSuites: [ 'tests/functional/index' ],

	excludeInstrumentation: /^(?:tests|node_modules)\//
});
