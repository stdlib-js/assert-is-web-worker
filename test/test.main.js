/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* global global */

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var isWebWorker = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isWebWorker, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if the runtime is a web worker', function test( t ) {
	var isWebWorker;
	var scope;

	scope = {
		'self': {}
	};
	global.WorkerGlobalScope = scope;
	global.WorkerNavigator = WorkerNavigator;
	global.WorkerLocation = WorkerLocation;

	global.self = scope.self;
	global.importScripts = importScripts;
	global.navigator = new WorkerNavigator();
	global.location = new WorkerLocation();

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils-global': getGlobal,
		'@stdlib/assert-is-node': false,
		'@stdlib/assert-is-plain-object': alwaysTrue,
		'./global_scope.js': true
	});

	t.equal( isWebWorker(), true, 'returns true' );
	t.end();

	function getGlobal() {
		return scope.self;
	}

	function importScripts() {}

	function alwaysTrue() {
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});

tape( 'the function returns `false` if the runtime is not a web worker (`WorkerGlobalScope` global is not an object)', function test( t ) {
	var isWebWorker;
	var scope;

	scope = true;
	global.WorkerGlobalScope = scope;
	global.WorkerNavigator = WorkerNavigator;
	global.WorkerLocation = WorkerLocation;

	global.self = {};
	global.importScripts = importScripts;
	global.navigator = new WorkerNavigator();
	global.location = new WorkerLocation();

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils-global': getGlobal,
		'@stdlib/assert-is-node': false,
		'@stdlib/assert-is-plain-object': alwaysTrue,
		'./global_scope.js': true
	});

	t.equal( isWebWorker(), false, 'returns false' );
	t.end();

	function getGlobal() {
		return global.self;
	}

	function importScripts() {}

	function alwaysTrue() {
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});

tape( 'the function returns `false` if the runtime is not a web worker (`WorkerNavigator` global is not an object)', function test( t ) {
	var isWebWorker;
	var scope;

	scope = {
		'self': {}
	};
	global.WorkerGlobalScope = scope;
	global.WorkerNavigator = WorkerNavigator;
	global.WorkerLocation = WorkerLocation;

	global.self = scope.self;
	global.importScripts = importScripts;
	global.navigator = new WorkerNavigator();
	global.location = new WorkerLocation();

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils-global': getGlobal,
		'@stdlib/assert-is-node': false,
		'@stdlib/assert-is-plain-object': isObject,
		'./global_scope.js': true
	});

	t.equal( isWebWorker(), false, 'returns false' );
	t.end();

	function getGlobal() {
		return scope.self;
	}

	function importScripts() {}

	function isObject( v ) {
		if ( v === WorkerNavigator ) {
			return false;
		}
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});

tape( 'the function returns `false` if the runtime is not a web worker (`navigator` global is not an instance of `WorkerNavigator`)', function test( t ) {
	var isWebWorker;
	var scope;

	scope = {
		'self': {}
	};
	global.WorkerGlobalScope = scope;
	global.WorkerNavigator = WorkerNavigator;
	global.WorkerLocation = WorkerLocation;

	global.self = scope.self;
	global.importScripts = importScripts;
	global.navigator = {};
	global.location = new WorkerLocation();

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils-global': getGlobal,
		'@stdlib/assert-is-node': false,
		'@stdlib/assert-is-plain-object': alwaysTrue,
		'./global_scope.js': true
	});

	t.equal( isWebWorker(), false, 'returns false' );
	t.end();

	function getGlobal() {
		return scope.self;
	}

	function importScripts() {}

	function alwaysTrue() {
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});

tape( 'the function returns `false` if the runtime is not a web worker (`WorkerLocation` global is not an object)', function test( t ) {
	var isWebWorker;
	var scope;

	scope = {
		'self': {}
	};
	global.WorkerGlobalScope = scope;
	global.WorkerNavigator = WorkerNavigator;
	global.WorkerLocation = WorkerLocation;

	global.self = scope.self;
	global.importScripts = importScripts;
	global.navigator = new WorkerNavigator();
	global.location = new WorkerLocation();

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils-global': getGlobal,
		'@stdlib/assert-is-node': false,
		'@stdlib/assert-is-plain-object': isObject,
		'./global_scope.js': true
	});

	t.equal( isWebWorker(), false, 'returns false' );
	t.end();

	function getGlobal() {
		return scope.self;
	}

	function importScripts() {}

	function isObject( v ) {
		if ( v === WorkerLocation ) {
			return false;
		}
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});

tape( 'the function returns `false` if the runtime is not a web worker (`location` global is not an instance of `WorkerLocation`)', function test( t ) {
	var isWebWorker;
	var scope;

	scope = {
		'self': {}
	};
	global.WorkerGlobalScope = scope;
	global.WorkerNavigator = WorkerNavigator;
	global.WorkerLocation = WorkerLocation;

	global.self = scope.self;
	global.importScripts = importScripts;
	global.navigator = new WorkerNavigator();
	global.location = {};

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils-global': getGlobal,
		'@stdlib/assert-is-node': false,
		'@stdlib/assert-is-plain-object': alwaysTrue,
		'./global_scope.js': true
	});

	t.equal( isWebWorker(), false, 'returns false' );
	t.end();

	function getGlobal() {
		return scope.self;
	}

	function importScripts() {}

	function alwaysTrue() {
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});

tape( 'the function returns `false` if the runtime is not a web worker (`self` global is not the detected global variable)', function test( t ) {
	var isWebWorker;
	var scope;

	scope = {
		'self': {}
	};
	global.WorkerGlobalScope = scope;
	global.WorkerNavigator = WorkerNavigator;
	global.WorkerLocation = WorkerLocation;

	global.self = scope.self;
	global.importScripts = importScripts;
	global.navigator = new WorkerNavigator();
	global.location = new WorkerLocation();

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils-global': getGlobal,
		'@stdlib/assert-is-node': false,
		'@stdlib/assert-is-plain-object': alwaysTrue,
		'./global_scope.js': true
	});

	t.equal( isWebWorker(), false, 'returns false' );
	t.end();

	function getGlobal() {
		return {};
	}

	function importScripts() {}

	function alwaysTrue() {
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});

tape( 'the function returns `false` if the runtime is not a web worker (`self` global is not equal to the global scope)', function test( t ) {
	var isWebWorker;
	var scope;

	scope = {
		'self': {}
	};
	global.WorkerGlobalScope = scope;
	global.WorkerNavigator = WorkerNavigator;
	global.WorkerLocation = WorkerLocation;

	global.self = scope.self;
	global.importScripts = importScripts;
	global.navigator = new WorkerNavigator();
	global.location = new WorkerLocation();

	isWebWorker = proxyquire( './../lib/main.js', {
		'@stdlib/utils-global': getGlobal,
		'@stdlib/assert-is-node': false,
		'@stdlib/assert-is-plain-object': alwaysTrue,
		'./global_scope.js': false
	});

	t.equal( isWebWorker(), false, 'returns false' );
	t.end();

	function getGlobal() {
		return scope.self;
	}

	function importScripts() {}

	function alwaysTrue() {
		return true;
	}

	function WorkerNavigator() {
		return this;
	}

	function WorkerLocation() {
		return this;
	}
});
