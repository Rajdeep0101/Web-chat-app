// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2j5dx":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6rimH":[function(require,module,exports) {
var _emojiButton = require("@joeattardi/emoji-button");
const socket = io('http://localhost:8000');
const form = document.getElementById('send-container');
const messageInp = document.getElementById('messageInp');
const messagecontainer = document.querySelector('.message-container');
const nav = document.querySelector('.nav');
const picker = new _emojiButton.EmojiButton({
    style: 'twemoji',
    // theme: 'dark',
    recentsCount: 20,
    // position: {
    //     bottom: '0',
    //     left: '0',
    //   }
    autoHide: false,
    // showCategoryButtons: false,
    //   showSearch: false,
    showPreview: false,
    //   showRecents: false,
    emojiSize: '24px',
    emojisPerRow: 6,
    rows: 6,
    autoFocusSearch: false
});
const trigger = document.querySelector('#emoji-button i');
picker.on('emoji', (selection)=>{
    let newmessage = messageInp.value;
    newmessage += selection.emoji;
    messageInp.value = newmessage;
});
trigger.addEventListener('click', (e)=>{
    e.preventDefault();
    picker.togglePicker(trigger);
});
const messages = document.querySelector('.message');
const append = (Name1, message, time, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    const messagesender = document.createElement('div');
    messagesender.innerText = Name1;
    const messagetime = document.createElement('div');
    messagetime.innerText = time;
    messageElement.classList.add('message');
    messagesender.classList.add('nam');
    messagetime.classList.add('tame');
    messageElement.append(messagesender);
    messageElement.append(messagetime);
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
    $(".message-container").stop().animate({
        scrollTop: $(".message-container")[0].scrollHeight
    }, 1000);
};
var Time = ()=>{
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    return time;
};
// ***************for joined message*******************8
const append1 = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message1');
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
    $(".message-container").stop().animate({
        scrollTop: $(".message-container")[0].scrollHeight
    }, 1000);
};
//    for data input from user
const Name = prompt("Enter your Name here");
const RoomId = prompt("Enter your RoomId here");
// append2(RoomId);
const data = {
    Name,
    RoomId
};
// sending the data to the server
socket.emit('new-user-joined', data);
// for print the joined message
socket.on('user-joined', (Name2)=>{
    append1(`${Name2} joined the chat`, 'center');
});
// for print the message for myself
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageInp.value;
    var time = Time();
    append('You', `${message}`, `${time}`, 'right');
    socket.emit('send', message);
    messageInp.value = '';
});
// for print the message for others
socket.on('recieve', (data1)=>{
    var time = Time();
    append(`${data1.name}`, `${data1.message}`, `${time}`, 'left');
});
// for print the leaving message
socket.on('left', (name)=>{
    append1(`${name} left the chat`, 'center');
});

},{"@joeattardi/emoji-button":"aoJkb"}],"aoJkb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmojiButton", ()=>sn
);
var global = arguments[3];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function e(e1, o1, n1, i1) {
    return new (n1 || (n1 = Promise))(function(a1, r1) {
        function t1(e2) {
            try {
                m1(i1.next(e2));
            } catch (e3) {
                r1(e3);
            }
        }
        function s1(e4) {
            try {
                m1(i1.throw(e4));
            } catch (e5) {
                r1(e5);
            }
        }
        function m1(e6) {
            var o2;
            e6.done ? a1(e6.value) : (o2 = e6.value, o2 instanceof n1 ? o2 : new n1(function(e7) {
                e7(o2);
            })).then(t1, s1);
        }
        m1((i1 = i1.apply(e1, o1 || [])).next());
    });
}
!function(e8, o3) {
    void 0 === o3 && (o3 = {
    });
    var n2 = o3.insertAt;
    if (e8 && "undefined" != typeof document) {
        var i2 = document.head || document.getElementsByTagName("head")[0], a2 = document.createElement("style");
        a2.type = "text/css", "top" === n2 && i2.firstChild ? i2.insertBefore(a2, i2.firstChild) : i2.appendChild(a2), a2.styleSheet ? a2.styleSheet.cssText = e8 : a2.appendChild(document.createTextNode(e8));
    }
}('@keyframes show {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  100% {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes hide {\n  0% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  100% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8);\n  }\n}\n\n@keyframes grow {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8); \n  }\n\n  100% { \n    opacity: 1;\n    transform: scale3d(1, 1, 1); \n  }\n}\n\n@keyframes shrink {\n  0% { \n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  100% { \n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8); \n  }\n}\n\n@keyframes fade-in {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n@keyframes fade-out {\n  0% { opacity: 1; }\n  100% { opacity: 0; }\n}\n\n.emoji-picker {\n  --animation-duration: 0.2s;\n  --animation-easing: ease-in-out;\n\n  --emoji-size: 1.8em;\n  --emoji-size-multiplier: 1.5;\n  --emoji-preview-size: 2em;\n  --emoji-per-row: 8;\n  --row-count: 6;\n\n  --content-height: calc((var(--emoji-size) * var(--emoji-size-multiplier)) * var(--row-count) + var(--category-name-size) + var(--category-button-height) + 0.5em);\n\n  --category-name-size: 0.85em;\n\n  --category-button-height: 2em;\n  --category-button-size: 1.1em;\n  --category-border-bottom-size: 4px;\n\n  --focus-indicator-color: #999999;\n\n  --search-height: 2em;\n\n  --blue-color: #4F81E5;\n\n  --border-color: #CCCCCC;\n  --background-color: #FFFFFF;\n  --text-color: #000000;\n  --secondary-text-color: #666666;\n  --hover-color: #E8F4F9;\n  --search-focus-border-color: var(--blue-color);\n  --search-icon-color: #CCCCCC;\n  --overlay-background-color: rgba(0, 0, 0, 0.8);\n  --popup-background-color: #FFFFFF;\n  --category-button-color: #666666;\n  --category-button-active-color: var(--blue-color);\n\n  --dark-border-color: #666666;\n  --dark-background-color: #333333;\n  --dark-text-color: #FFFFFF;\n  --dark-secondary-text-color: #999999;\n  --dark-hover-color: #666666;\n  --dark-search-background-color: #666666;\n  --dark-search-border-color: #999999;\n  --dark-search-placeholder-color: #999999;\n  --dark-search-focus-border-color: #DBE5F9;\n  --dark-popup-background-color: #333333;\n  --dark-category-button-color: #FFFFFF;\n\n  --font: Arial, Helvetica, sans-serif;\n  --font-size: 16px;\n}\n\n.emoji-picker {\n  font-size: var(--font-size);\n  border: 1px solid var(--border-color);\n  border-radius: 5px;\n  background: var(--background-color);\n  width: calc(var(--emoji-per-row) * var(--emoji-size) * var(--emoji-size-multiplier) + 1em + 1.5rem);\n  font-family: var(--font);\n  overflow: hidden;\n  animation: show var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker * {\n  font-family: var(--font);\n  box-sizing: content-box;\n}\n\n.emoji-picker__overlay {\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.emoji-picker.hiding {\n  animation: hide var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker.dark {\n  background: var(--dark-background-color);\n  color: var(--dark-text-color);\n  border-color: var(--dark-border-color);\n}\n\n.emoji-picker__content {\n  padding: 0.5em;\n  height: var(--content-height);\n  position: relative;\n}\n\n.emoji-picker__preview {\n  height: var(--emoji-preview-size);\n  padding: 0.5em;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.emoji-picker.dark .emoji-picker__preview {\n  border-top-color: var(--dark-border-color);\n}\n\n.emoji-picker__preview-emoji {\n  font-size: var(--emoji-preview-size);\n  margin-right: 0.25em;\n  font-family: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji";\n}\n\n.emoji-picker__preview-emoji img.emoji {\n  height: 1em;\n  width: 1em;\n  margin: 0 .05em 0 .1em;\n  vertical-align: -0.1em;\n}\n\n.emoji-picker__preview-name {\n  color: var(--text-color);\n  font-size: 0.85em;\n  overflow-wrap: break-word;\n  word-break: break-all;\n}\n\n.emoji-picker.dark .emoji-picker__preview-name {\n  color: var(--dark-text-color);\n}\n\n.emoji-picker__container {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(var(--emoji-per-row), calc(var(--emoji-size) * var(--emoji-size-multiplier)));\n  grid-auto-rows: calc(var(--emoji-size) * var(--emoji-size-multiplier));\n}\n\n.emoji-picker__container.search-results {\n  height: var(--content-height);\n  overflow-y: auto;\n}\n\n.emoji-picker__custom-emoji {\n  width: 1em;\n  height: 1em;\n}\n\n.emoji-picker__emoji {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  font-size: var(--emoji-size);\n  width: 1.5em;\n  height: 1.5em;\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji";\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.emoji-picker__emoji img.emoji {\n  height: 1em;\n  width: 1em;\n  margin: 0 .05em 0 .1em;\n  vertical-align: -0.1em;\n}\n\n.emoji-picker__emoji:focus, .emoji-picker__emoji:hover {\n  background: var(--hover-color);\n}\n\n.emoji-picker__emoji:focus {\n  outline: 1px dotted var(--focus-indicator-color);\n}\n\n.emoji-picker.dark .emoji-picker__emoji:focus, .emoji-picker.dark .emoji-picker__emoji:hover {\n  background: var(--dark-hover-color);\n}\n\n.emoji-picker__plugin-container {\n  margin: 0.5em;\n  display: flex;\n  flex-direction: row;\n}\n\n.emoji-picker__search-container {\n  margin: 0.5em;\n  position: relative;\n  height: var(--search-height);\n  display: flex;\n}\n\n.emoji-picker__search {\n  box-sizing: border-box;\n  width: 100%;\n  border-radius: 3px;\n  border: 1px solid var(--border-color);\n  padding-right: 2em;\n  padding: 0.5em 2.25em 0.5em 0.5em;\n  font-size: 0.85em;\n  outline: none;\n}\n\n.emoji-picker.dark .emoji-picker__search {\n  background: var(--dark-search-background-color);\n  color: var(--dark-text-color);\n  border-color: var(--dark-search-border-color);\n}\n\n.emoji-picker.dark .emoji-picker__search::placeholder {\n  color: var(--dark-search-placeholder-color);\n}\n\n.emoji-picker__search:focus {\n  border: 1px solid var(--search-focus-border-color);\n}\n\n.emoji-picker.dark .emoji-picker__search:focus {\n  border-color: var(--dark-search-focus-border-color);\n}\n\n.emoji-picker__search-icon {\n  position: absolute;\n  color: var(--search-icon-color);\n  width: 1em;\n  height: 1em;\n  right: 0.75em;\n  top: calc(50% - 0.5em);\n}\n\n.emoji-picker__search-icon img {\n  width: 1em;\n  height: 1em;\n}\n\n.emoji-picker__search-not-found {\n  color: var(--secondary-text-color);\n  text-align: center;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.emoji-picker__search-not-found h2 {\n  color: var(--secondary-text-color);\n}\n\n.emoji-picker.dark .emoji-picker__search-not-found {\n  color: var(--dark-secondary-text-color);\n}\n\n.emoji-picker.dark .emoji-picker__search-not-found h2 {\n  color: var(--dark-secondary-text-color);\n}\n\n.emoji-picker__search-not-found-icon {\n  font-size: 3em;\n}\n\n.emoji-picker__search-not-found-icon img {\n  width: 1em;\n  height: 1em;\n}\n\n.emoji-picker__search-not-found h2 {\n  margin: 0.5em 0;\n  font-size: 1em;\n}\n\n.emoji-picker__variant-overlay {\n  background: var(--overlay-background-color);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  animation: fade-in var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker__variant-overlay.hiding {\n  animation: fade-out var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker__variant-popup {\n  background: var(--popup-background-color);\n  margin: 0.5em;\n  padding: 0.5em;\n  text-align: center;\n  border-radius: 5px;\n  animation: grow var(--animation-duration) var(--animation-easing);\n  user-select: none;\n}\n\n.emoji-picker__variant-overlay.hiding .emoji-picker__variant-popup {\n  animation: shrink var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker.dark .emoji-picker__variant-popup {\n  background: var(--dark-popup-background-color);\n}\n\n.emoji-picker__emojis {\n  overflow-y: auto;\n  position: relative;\n  height: calc((var(--emoji-size) * var(--emoji-size-multiplier)) * var(--row-count) + var(--category-name-size));\n}\n\n.emoji-picker__emojis.hiding {\n  animation: fade-out 0.05s var(--animation-easing);\n}\n\n.emoji-picker__emojis h2.emoji-picker__category-name {\n  font-size: 0.85em;\n  color: var(--secondary-text-color);\n  text-transform: uppercase;\n  margin: 0.25em 0;\n  text-align: left;\n}\n\n.emoji-picker.dark h2.emoji-picker__category-name {\n  color: var(--dark-secondary-text-color);\n}\n\n.emoji-picker__category-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  height: var(--category-button-height);\n  margin-bottom: 0.5em;\n}\n\nbutton.emoji-picker__category-button {\n  flex-grow: 1;\n  background: transparent;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  font-size: var(--category-button-size);\n  vertical-align: middle;\n  color: var(--category-button-color);\n  border-bottom: var(--category-border-bottom-size) solid transparent;\n  outline: none;\n}\n\nbutton.emoji-picker__category-button img {\n  width: var(--category-button-size);\n  height: var(--category-button-size);\n}\n\n.emoji-picker.keyboard button.emoji-picker__category-button:focus {\n  outline: 1px dotted var(--focus-indicator-color);\n}\n\n.emoji-picker.dark button.emoji-picker__category-button.active {\n  color: var(--category-button-active-color);\n}\n\n.emoji-picker.dark button.emoji-picker__category-button {\n  color: var(--dark-category-button-color);\n}\n\nbutton.emoji-picker__category-button.active {\n  color: var(--category-button-active-color);\n  border-bottom: var(--category-border-bottom-size) solid var(--category-button-active-color);\n}\n\n@media (prefers-color-scheme: dark) {\n  .emoji-picker.auto {\n    background: var(--dark-background-color);\n    color: var(--dark-text-color);\n    border-color: var(--dark-border-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__preview {\n    border-top-color: var(--dark-border-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__preview-name {\n    color: var(--dark-text-color);\n  }\n\n  .emoji-picker.auto button.emoji-picker__category-button {\n    color: var(--dark-category-button-color);\n  }\n\n  .emoji-picker.auto button.emoji-picker__category-button.active {\n    color: var(--category-button-active-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__emoji:focus, .emoji-picker.auto .emoji-picker__emoji:hover {\n    background: var(--dark-hover-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search {\n    background: var(--dark-search-background-color);\n    color: var(--dark-text-color);\n    border-color: var(--dark-search-border-color);\n  }\n \n  .emoji-picker.auto h2.emoji-picker__category-name {\n    color: var(--dark-secondary-text-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search::placeholder {\n    color: var(--dark-search-placeholder-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search:focus {\n    border-color: var(--dark-search-focus-border-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search-not-found {\n    color: var(--dark-secondary-text-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search-not-found h2 {\n    color: var(--dark-secondary-text-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__variant-popup {\n    background: var(--dark-popup-background-color);\n  }\n}');
var o = [
    "input",
    "select",
    "textarea",
    "a[href]",
    "button",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable="false"])'
], n = o.join(","), i = "undefined" == typeof Element ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
function a(e9, o4) {
    o4 = o4 || {
    };
    var a3, t2, s2, d1 = [], g1 = [], u1 = e9.querySelectorAll(n);
    for(o4.includeContainer && i.call(e9, n) && (u1 = Array.prototype.slice.apply(u1)).unshift(e9), a3 = 0; a3 < u1.length; a3++)r(t2 = u1[a3]) && (0 === (s2 = m(t2)) ? d1.push(t2) : g1.push({
        documentOrder: a3,
        tabIndex: s2,
        node: t2
    }));
    return g1.sort(c).map(function(e10) {
        return e10.node;
    }).concat(d1);
}
function r(e11) {
    return !(!t(e11) || function(e12) {
        return (function(e13) {
            return d(e13) && "radio" === e13.type;
        })(e12) && !function(e14) {
            if (!e14.name) return !0;
            var o5 = function(e15) {
                for(var o6 = 0; o6 < e15.length; o6++)if (e15[o6].checked) return e15[o6];
            }(e14.ownerDocument.querySelectorAll('input[type="radio"][name="' + e14.name + '"]'));
            return !o5 || o5 === e14;
        }(e12);
    }(e11) || m(e11) < 0);
}
function t(e16) {
    return !(e16.disabled || function(e17) {
        return d(e17) && "hidden" === e17.type;
    }(e16) || function(e18) {
        return null === e18.offsetParent || "hidden" === getComputedStyle(e18).visibility;
    }(e16));
}
a.isTabbable = function(e19) {
    if (!e19) throw new Error("No node provided");
    return !1 !== i.call(e19, n) && r(e19);
}, a.isFocusable = function(e20) {
    if (!e20) throw new Error("No node provided");
    return !1 !== i.call(e20, s) && t(e20);
};
var s = o.concat("iframe").join(",");
function m(e21) {
    var o7 = parseInt(e21.getAttribute("tabindex"), 10);
    return isNaN(o7) ? (function(e22) {
        return "true" === e22.contentEditable;
    })(e21) ? 0 : e21.tabIndex : o7;
}
function c(e23, o8) {
    return e23.tabIndex === o8.tabIndex ? e23.documentOrder - o8.documentOrder : e23.tabIndex - o8.tabIndex;
}
function d(e24) {
    return "INPUT" === e24.tagName;
}
var g, u = a, l = function() {
    for(var e25 = {
    }, o9 = 0; o9 < arguments.length; o9++){
        var n3 = arguments[o9];
        for(var i3 in n3)v.call(n3, i3) && (e25[i3] = n3[i3]);
    }
    return e25;
}, v = Object.prototype.hasOwnProperty;
var f, y = (f = [], {
    activateTrap: function(e26) {
        if (f.length > 0) {
            var o10 = f[f.length - 1];
            o10 !== e26 && o10.pause();
        }
        var n4 = f.indexOf(e26);
        -1 === n4 || f.splice(n4, 1), f.push(e26);
    },
    deactivateTrap: function(e27) {
        var o11 = f.indexOf(e27);
        -1 !== o11 && f.splice(o11, 1), f.length > 0 && f[f.length - 1].unpause();
    }
});
function j(e28) {
    return setTimeout(e28, 0);
}
var h = function(e29, o12) {
    var n5 = document, i4 = "string" == typeof e29 ? n5.querySelector(e29) : e29, a4 = l({
        returnFocusOnDeactivate: !0,
        escapeDeactivates: !0
    }, o12), r2 = {
        firstTabbableNode: null,
        lastTabbableNode: null,
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1
    }, t3 = {
        activate: function(e30) {
            if (r2.active) return;
            w1(), r2.active = !0, r2.paused = !1, r2.nodeFocusedBeforeActivation = n5.activeElement;
            var o13 = e30 && e30.onActivate ? e30.onActivate : a4.onActivate;
            o13 && o13();
            return m2(), t3;
        },
        deactivate: s3,
        pause: function() {
            if (r2.paused || !r2.active) return;
            r2.paused = !0, c1();
        },
        unpause: function() {
            if (!r2.paused || !r2.active) return;
            r2.paused = !1, w1(), m2();
        }
    };
    function s3(e31) {
        if (r2.active) {
            clearTimeout(g), c1(), r2.active = !1, r2.paused = !1, y.deactivateTrap(t3);
            var o14 = e31 && void 0 !== e31.onDeactivate ? e31.onDeactivate : a4.onDeactivate;
            return o14 && o14(), (e31 && void 0 !== e31.returnFocus ? e31.returnFocus : a4.returnFocusOnDeactivate) && j(function() {
                var e32;
                k1((e32 = r2.nodeFocusedBeforeActivation, d2("setReturnFocus") || e32));
            }), t3;
        }
    }
    function m2() {
        if (r2.active) return y.activateTrap(t3), g = j(function() {
            k1(v1());
        }), n5.addEventListener("focusin", h1, !0), n5.addEventListener("mousedown", f1, {
            capture: !0,
            passive: !1
        }), n5.addEventListener("touchstart", f1, {
            capture: !0,
            passive: !1
        }), n5.addEventListener("click", b1, {
            capture: !0,
            passive: !1
        }), n5.addEventListener("keydown", p1, {
            capture: !0,
            passive: !1
        }), t3;
    }
    function c1() {
        if (r2.active) return n5.removeEventListener("focusin", h1, !0), n5.removeEventListener("mousedown", f1, !0), n5.removeEventListener("touchstart", f1, !0), n5.removeEventListener("click", b1, !0), n5.removeEventListener("keydown", p1, !0), t3;
    }
    function d2(e33) {
        var o15 = a4[e33], i5 = o15;
        if (!o15) return null;
        if ("string" == typeof o15 && !(i5 = n5.querySelector(o15))) throw new Error("`" + e33 + "` refers to no known node");
        if ("function" == typeof o15 && !(i5 = o15())) throw new Error("`" + e33 + "` did not return a node");
        return i5;
    }
    function v1() {
        var e34;
        if (!(e34 = null !== d2("initialFocus") ? d2("initialFocus") : i4.contains(n5.activeElement) ? n5.activeElement : r2.firstTabbableNode || d2("fallbackFocus"))) throw new Error("Your focus-trap needs to have at least one focusable element");
        return e34;
    }
    function f1(e35) {
        i4.contains(e35.target) || (a4.clickOutsideDeactivates ? s3({
            returnFocus: !u.isFocusable(e35.target)
        }) : a4.allowOutsideClick && a4.allowOutsideClick(e35) || e35.preventDefault());
    }
    function h1(e36) {
        i4.contains(e36.target) || e36.target instanceof Document || (e36.stopImmediatePropagation(), k1(r2.mostRecentlyFocusedNode || v1()));
    }
    function p1(e37) {
        if (!1 !== a4.escapeDeactivates && (function(e38) {
            return "Escape" === e38.key || "Esc" === e38.key || 27 === e38.keyCode;
        })(e37)) return e37.preventDefault(), void s3();
        (function(e39) {
            return "Tab" === e39.key || 9 === e39.keyCode;
        })(e37) && (function(e40) {
            if (w1(), e40.shiftKey && e40.target === r2.firstTabbableNode) return e40.preventDefault(), void k1(r2.lastTabbableNode);
            if (!e40.shiftKey && e40.target === r2.lastTabbableNode) e40.preventDefault(), k1(r2.firstTabbableNode);
        })(e37);
    }
    function b1(e41) {
        a4.clickOutsideDeactivates || i4.contains(e41.target) || a4.allowOutsideClick && a4.allowOutsideClick(e41) || (e41.preventDefault(), e41.stopImmediatePropagation());
    }
    function w1() {
        var e42 = u(i4);
        r2.firstTabbableNode = e42[0] || v1(), r2.lastTabbableNode = e42[e42.length - 1] || v1();
    }
    function k1(e43) {
        e43 !== n5.activeElement && (e43 && e43.focus ? (e43.focus(), r2.mostRecentlyFocusedNode = e43, (function(e44) {
            return e44.tagName && "input" === e44.tagName.toLowerCase() && "function" == typeof e44.select;
        })(e43) && e43.select()) : k1(v1()));
    }
    return t3;
};
function p() {
}
p.prototype = {
    on: function(e, o16, n6) {
        var i6 = this.e || (this.e = {
        });
        return (i6[e] || (i6[e] = [])).push({
            fn: o16,
            ctx: n6
        }), this;
    },
    once: function(e45, o17, n7) {
        var i7 = this;
        function a5() {
            i7.off(e45, a5), o17.apply(n7, arguments);
        }
        return a5._ = o17, this.on(e45, a5, n7);
    },
    emit: function(e) {
        for(var o18 = [].slice.call(arguments, 1), n8 = ((this.e || (this.e = {
        }))[e] || []).slice(), i8 = 0, a6 = n8.length; i8 < a6; i8++)n8[i8].fn.apply(n8[i8].ctx, o18);
        return this;
    },
    off: function(e, o19) {
        var n9 = this.e || (this.e = {
        }), i9 = n9[e], a7 = [];
        if (i9 && o19) for(var r3 = 0, t4 = i9.length; r3 < t4; r3++)i9[r3].fn !== o19 && i9[r3].fn._ !== o19 && a7.push(i9[r3]);
        return a7.length ? n9[e] = a7 : delete n9[e], this;
    }
};
var b = p;
function w(e46) {
    var o20 = e46.getBoundingClientRect();
    return {
        width: o20.width,
        height: o20.height,
        top: o20.top,
        right: o20.right,
        bottom: o20.bottom,
        left: o20.left,
        x: o20.left,
        y: o20.top
    };
}
function k(e47) {
    if ("[object Window]" !== e47.toString()) {
        var o21 = e47.ownerDocument;
        return o21 ? o21.defaultView : window;
    }
    return e47;
}
function x(e48) {
    var o22 = k(e48);
    return {
        scrollLeft: o22.pageXOffset,
        scrollTop: o22.pageYOffset
    };
}
function C(e49) {
    return e49 instanceof k(e49).Element || e49 instanceof Element;
}
function E(e50) {
    return e50 instanceof k(e50).HTMLElement || e50 instanceof HTMLElement;
}
function _(e51) {
    return e51 ? (e51.nodeName || "").toLowerCase() : null;
}
function z(e52) {
    return (C(e52) ? e52.ownerDocument : e52.document).documentElement;
}
function O(e53) {
    return w(z(e53)).left + x(e53).scrollLeft;
}
function I(e54) {
    return k(e54).getComputedStyle(e54);
}
function S(e55) {
    var o23 = I(e55), n10 = o23.overflow, i10 = o23.overflowX, a8 = o23.overflowY;
    return /auto|scroll|overlay|hidden/.test(n10 + a8 + i10);
}
function P(e56, o24, n11) {
    void 0 === n11 && (n11 = !1);
    var i11, a9, r4 = z(o24), t5 = w(e56), s4 = {
        scrollLeft: 0,
        scrollTop: 0
    }, m3 = {
        x: 0,
        y: 0
    };
    return n11 || (("body" !== _(o24) || S(r4)) && (s4 = (i11 = o24) !== k(i11) && E(i11) ? {
        scrollLeft: (a9 = i11).scrollLeft,
        scrollTop: a9.scrollTop
    } : x(i11)), E(o24) ? ((m3 = w(o24)).x += o24.clientLeft, m3.y += o24.clientTop) : r4 && (m3.x = O(r4))), {
        x: t5.left + s4.scrollLeft - m3.x,
        y: t5.top + s4.scrollTop - m3.y,
        width: t5.width,
        height: t5.height
    };
}
function M(e57) {
    return {
        x: e57.offsetLeft,
        y: e57.offsetTop,
        width: e57.offsetWidth,
        height: e57.offsetHeight
    };
}
function A(e58) {
    return "html" === _(e58) ? e58 : e58.assignedSlot || e58.parentNode || e58.host || z(e58);
}
function L(e59) {
    return [
        "html",
        "body",
        "#document"
    ].indexOf(_(e59)) >= 0 ? e59.ownerDocument.body : E(e59) && S(e59) ? e59 : L(A(e59));
}
function T(e60, o25) {
    void 0 === o25 && (o25 = []);
    var n12 = L(e60), i12 = "body" === _(n12), a10 = k(n12), r5 = i12 ? [
        a10
    ].concat(a10.visualViewport || [], S(n12) ? n12 : []) : n12, t6 = o25.concat(r5);
    return i12 ? t6 : t6.concat(T(A(r5)));
}
function N(e61) {
    return [
        "table",
        "td",
        "th"
    ].indexOf(_(e61)) >= 0;
}
function F(e62) {
    return E(e62) && "fixed" !== I(e62).position ? e62.offsetParent : null;
}
function B(e63) {
    for(var o26 = k(e63), n13 = F(e63); n13 && N(n13);)n13 = F(n13);
    return n13 && "body" === _(n13) && "static" === I(n13).position ? o26 : n13 || o26;
}
p.TinyEmitter = b;
var D = "top", R = "bottom", q = "right", V = "left", H = [
    D,
    R,
    q,
    V
], U = H.reduce(function(e64, o27) {
    return e64.concat([
        o27 + "-start",
        o27 + "-end"
    ]);
}, []), W = [].concat(H, [
    "auto"
]).reduce(function(e65, o28) {
    return e65.concat([
        o28,
        o28 + "-start",
        o28 + "-end"
    ]);
}, []), K = [
    "beforeRead",
    "read",
    "afterRead",
    "beforeMain",
    "main",
    "afterMain",
    "beforeWrite",
    "write",
    "afterWrite"
];
function J(e66) {
    var o29 = new Map, n14 = new Set, i13 = [];
    function a11(e67) {
        n14.add(e67.name), [].concat(e67.requires || [], e67.requiresIfExists || []).forEach(function(e68) {
            if (!n14.has(e68)) {
                var i14 = o29.get(e68);
                i14 && a11(i14);
            }
        }), i13.push(e67);
    }
    return e66.forEach(function(e69) {
        o29.set(e69.name, e69);
    }), e66.forEach(function(e70) {
        n14.has(e70.name) || a11(e70);
    }), i13;
}
function G(e71) {
    return e71.split("-")[0];
}
var X = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function Y() {
    for(var e72 = arguments.length, o30 = new Array(e72), n15 = 0; n15 < e72; n15++)o30[n15] = arguments[n15];
    return !o30.some(function(e73) {
        return !(e73 && "function" == typeof e73.getBoundingClientRect);
    });
}
function $(e74) {
    void 0 === e74 && (e74 = {
    });
    var o31 = e74, n16 = o31.defaultModifiers, i15 = void 0 === n16 ? [] : n16, a12 = o31.defaultOptions, r6 = void 0 === a12 ? X : a12;
    return function(e75, o32, n17) {
        void 0 === n17 && (n17 = r6);
        var a13, t7, s5 = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({
            }, X, {
            }, r6),
            modifiersData: {
            },
            elements: {
                reference: e75,
                popper: o32
            },
            attributes: {
            },
            styles: {
            }
        }, m4 = [], c2 = !1, d3 = {
            state: s5,
            setOptions: function(n18) {
                g2(), s5.options = Object.assign({
                }, r6, {
                }, s5.options, {
                }, n18), s5.scrollParents = {
                    reference: C(e75) ? T(e75) : e75.contextElement ? T(e75.contextElement) : [],
                    popper: T(o32)
                };
                var a14, t8, c3 = function(e76) {
                    var o33 = J(e76);
                    return K.reduce(function(e77, n19) {
                        return e77.concat(o33.filter(function(e78) {
                            return e78.phase === n19;
                        }));
                    }, []);
                }((a14 = [].concat(i15, s5.options.modifiers), t8 = a14.reduce(function(e79, o34) {
                    var n20 = e79[o34.name];
                    return e79[o34.name] = n20 ? Object.assign({
                    }, n20, {
                    }, o34, {
                        options: Object.assign({
                        }, n20.options, {
                        }, o34.options),
                        data: Object.assign({
                        }, n20.data, {
                        }, o34.data)
                    }) : o34, e79;
                }, {
                }), Object.keys(t8).map(function(e) {
                    return t8[e];
                })));
                return s5.orderedModifiers = c3.filter(function(e80) {
                    return e80.enabled;
                }), s5.orderedModifiers.forEach(function(e81) {
                    var o35 = e81.name, n21 = e81.options, i16 = void 0 === n21 ? {
                    } : n21, a15 = e81.effect;
                    if ("function" == typeof a15) {
                        var r7 = a15({
                            state: s5,
                            name: o35,
                            instance: d3,
                            options: i16
                        }), t9 = function() {
                        };
                        m4.push(r7 || t9);
                    }
                }), d3.update();
            },
            forceUpdate: function() {
                if (!c2) {
                    var e82 = s5.elements, o36 = e82.reference, n22 = e82.popper;
                    if (Y(o36, n22)) {
                        s5.rects = {
                            reference: P(o36, B(n22), "fixed" === s5.options.strategy),
                            popper: M(n22)
                        }, s5.reset = !1, s5.placement = s5.options.placement, s5.orderedModifiers.forEach(function(e83) {
                            return s5.modifiersData[e83.name] = Object.assign({
                            }, e83.data);
                        });
                        for(var i17 = 0; i17 < s5.orderedModifiers.length; i17++)if (!0 !== s5.reset) {
                            var a16 = s5.orderedModifiers[i17], r8 = a16.fn, t10 = a16.options, m5 = void 0 === t10 ? {
                            } : t10, g3 = a16.name;
                            "function" == typeof r8 && (s5 = r8({
                                state: s5,
                                options: m5,
                                name: g3,
                                instance: d3
                            }) || s5);
                        } else s5.reset = !1, i17 = -1;
                    }
                }
            },
            update: (a13 = function() {
                return new Promise(function(e84) {
                    d3.forceUpdate(), e84(s5);
                });
            }, function() {
                return t7 || (t7 = new Promise(function(e85) {
                    Promise.resolve().then(function() {
                        t7 = void 0, e85(a13());
                    });
                })), t7;
            }),
            destroy: function() {
                g2(), c2 = !0;
            }
        };
        if (!Y(e75, o32)) return d3;
        function g2() {
            m4.forEach(function(e86) {
                return e86();
            }), m4 = [];
        }
        return d3.setOptions(n17).then(function(e87) {
            !c2 && n17.onFirstUpdate && n17.onFirstUpdate(e87);
        }), d3;
    };
}
var Z = {
    passive: !0
};
function Q(e88) {
    return e88.split("-")[1];
}
function ee(e89) {
    return [
        "top",
        "bottom"
    ].indexOf(e89) >= 0 ? "x" : "y";
}
function oe(e90) {
    var o37, n23 = e90.reference, i18 = e90.element, a17 = e90.placement, r9 = a17 ? G(a17) : null, t11 = a17 ? Q(a17) : null, s6 = n23.x + n23.width / 2 - i18.width / 2, m6 = n23.y + n23.height / 2 - i18.height / 2;
    switch(r9){
        case D:
            o37 = {
                x: s6,
                y: n23.y - i18.height
            };
            break;
        case R:
            o37 = {
                x: s6,
                y: n23.y + n23.height
            };
            break;
        case q:
            o37 = {
                x: n23.x + n23.width,
                y: m6
            };
            break;
        case V:
            o37 = {
                x: n23.x - i18.width,
                y: m6
            };
            break;
        default:
            o37 = {
                x: n23.x,
                y: n23.y
            };
    }
    var c4 = r9 ? ee(r9) : null;
    if (null != c4) {
        var d = "y" === c4 ? "height" : "width";
        switch(t11){
            case "start":
                o37[c4] = Math.floor(o37[c4]) - Math.floor(n23[d] / 2 - i18[d] / 2);
                break;
            case "end":
                o37[c4] = Math.floor(o37[c4]) + Math.ceil(n23[d] / 2 - i18[d] / 2);
        }
    }
    return o37;
}
var ne = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};
function ie(e91) {
    var o38, n24 = e91.popper, i19 = e91.popperRect, a18 = e91.placement, r10 = e91.offsets, t12 = e91.position, s7 = e91.gpuAcceleration, m7 = e91.adaptive, c5 = function(e92) {
        var o39 = e92.x, n25 = e92.y, i20 = window.devicePixelRatio || 1;
        return {
            x: Math.round(o39 * i20) / i20 || 0,
            y: Math.round(n25 * i20) / i20 || 0
        };
    }(r10), d4 = c5.x, g4 = c5.y, u2 = r10.hasOwnProperty("x"), l1 = r10.hasOwnProperty("y"), v2 = V, f2 = D, y1 = window;
    if (m7) {
        var j1 = B(n24);
        j1 === k(n24) && (j1 = z(n24)), a18 === D && (f2 = R, g4 -= j1.clientHeight - i19.height, g4 *= s7 ? 1 : -1), a18 === V && (v2 = q, d4 -= j1.clientWidth - i19.width, d4 *= s7 ? 1 : -1);
    }
    var h2, p2 = Object.assign({
        position: t12
    }, m7 && ne);
    return s7 ? Object.assign({
    }, p2, ((h2 = {
    })[f2] = l1 ? "0" : "", h2[v2] = u2 ? "0" : "", h2.transform = (y1.devicePixelRatio || 1) < 2 ? "translate(" + d4 + "px, " + g4 + "px)" : "translate3d(" + d4 + "px, " + g4 + "px, 0)", h2)) : Object.assign({
    }, p2, ((o38 = {
    })[f2] = l1 ? g4 + "px" : "", o38[v2] = u2 ? d4 + "px" : "", o38.transform = "", o38));
}
var ae = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function re(e93) {
    return e93.replace(/left|right|bottom|top/g, function(e) {
        return ae[e];
    });
}
var te = {
    start: "end",
    end: "start"
};
function se(e94) {
    return e94.replace(/start|end/g, function(e) {
        return te[e];
    });
}
function me(e95) {
    return parseFloat(e95) || 0;
}
function ce(e96) {
    var o40 = k(e96), n26 = function(e97) {
        var o41 = E(e97) ? I(e97) : {
        };
        return {
            top: me(o41.borderTopWidth),
            right: me(o41.borderRightWidth),
            bottom: me(o41.borderBottomWidth),
            left: me(o41.borderLeftWidth)
        };
    }(e96), i21 = "html" === _(e96), a19 = O(e96), r11 = e96.clientWidth + n26.right, t13 = e96.clientHeight + n26.bottom;
    return i21 && o40.innerHeight - e96.clientHeight > 50 && (t13 = o40.innerHeight - n26.bottom), {
        top: i21 ? 0 : e96.clientTop,
        right: e96.clientLeft > n26.left ? n26.right : i21 ? o40.innerWidth - r11 - a19 : e96.offsetWidth - r11,
        bottom: i21 ? o40.innerHeight - t13 : e96.offsetHeight - t13,
        left: i21 ? a19 : e96.clientLeft
    };
}
function de(e98, o42) {
    var n27 = Boolean(o42.getRootNode && o42.getRootNode().host);
    if (e98.contains(o42)) return !0;
    if (n27) {
        var i22 = o42;
        do {
            if (i22 && e98.isSameNode(i22)) return !0;
            i22 = i22.parentNode || i22.host;
        }while (i22)
    }
    return !1;
}
function ge(e99) {
    return Object.assign({
    }, e99, {
        left: e99.x,
        top: e99.y,
        right: e99.x + e99.width,
        bottom: e99.y + e99.height
    });
}
function ue(e100, o43) {
    return "viewport" === o43 ? ge(function(e101) {
        var o44 = k(e101), n28 = o44.visualViewport, i23 = o44.innerWidth, a20 = o44.innerHeight;
        return n28 && /iPhone|iPod|iPad/.test(navigator.platform) && (i23 = n28.width, a20 = n28.height), {
            width: i23,
            height: a20,
            x: 0,
            y: 0
        };
    }(e100)) : E(o43) ? w(o43) : ge(function(e102) {
        var o45 = k(e102), n29 = x(e102), i24 = P(z(e102), o45);
        return i24.height = Math.max(i24.height, o45.innerHeight), i24.width = Math.max(i24.width, o45.innerWidth), i24.x = -n29.scrollLeft, i24.y = -n29.scrollTop, i24;
    }(z(e100)));
}
function le(e103, o46, n30) {
    var i25 = "clippingParents" === o46 ? function(e104) {
        var o47 = T(e104), n31 = [
            "absolute",
            "fixed"
        ].indexOf(I(e104).position) >= 0 && E(e104) ? B(e104) : e104;
        return C(n31) ? o47.filter(function(e105) {
            return C(e105) && de(e105, n31);
        }) : [];
    }(e103) : [].concat(o46), a21 = [].concat(i25, [
        n30
    ]), r12 = a21[0], t14 = a21.reduce(function(o48, n32) {
        var i26 = ue(e103, n32), a22 = ce(E(n32) ? n32 : z(e103));
        return o48.top = Math.max(i26.top + a22.top, o48.top), o48.right = Math.min(i26.right - a22.right, o48.right), o48.bottom = Math.min(i26.bottom - a22.bottom, o48.bottom), o48.left = Math.max(i26.left + a22.left, o48.left), o48;
    }, ue(e103, r12));
    return t14.width = t14.right - t14.left, t14.height = t14.bottom - t14.top, t14.x = t14.left, t14.y = t14.top, t14;
}
function ve(e106) {
    return Object.assign({
    }, {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, {
    }, e106);
}
function fe(e107, o49) {
    return o49.reduce(function(o50, n) {
        return o50[n] = e107, o50;
    }, {
    });
}
function ye(e108, o51) {
    void 0 === o51 && (o51 = {
    });
    var n33 = o51, i27 = n33.placement, a23 = void 0 === i27 ? e108.placement : i27, r13 = n33.boundary, t15 = void 0 === r13 ? "clippingParents" : r13, s8 = n33.rootBoundary, m8 = void 0 === s8 ? "viewport" : s8, c6 = n33.elementContext, d5 = void 0 === c6 ? "popper" : c6, g5 = n33.altBoundary, u = void 0 !== g5 && g5, l2 = n33.padding, v3 = void 0 === l2 ? 0 : l2, f3 = ve("number" != typeof v3 ? v3 : fe(v3, H)), y = "popper" === d5 ? "reference" : "popper", j2 = e108.elements.reference, h3 = e108.rects.popper, p3 = e108.elements[u ? y : d5], b2 = le(C(p3) ? p3 : p3.contextElement || z(e108.elements.popper), t15, m8), k2 = w(j2), x1 = oe({
        reference: k2,
        element: h3,
        strategy: "absolute",
        placement: a23
    }), E1 = ge(Object.assign({
    }, h3, {
    }, x1)), _1 = "popper" === d5 ? E1 : k2, O1 = {
        top: b2.top - _1.top + f3.top,
        bottom: _1.bottom - b2.bottom + f3.bottom,
        left: b2.left - _1.left + f3.left,
        right: _1.right - b2.right + f3.right
    }, I1 = e108.modifiersData.offset;
    if ("popper" === d5 && I1) {
        var S1 = I1[a23];
        Object.keys(O1).forEach(function(e109) {
            var o52 = [
                q,
                R
            ].indexOf(e109) >= 0 ? 1 : -1, n = [
                D,
                R
            ].indexOf(e109) >= 0 ? "y" : "x";
            O1[e109] += S1[n] * o52;
        });
    }
    return O1;
}
function je(e110, o53) {
    void 0 === o53 && (o53 = {
    });
    var n34 = o53, i28 = n34.placement, a24 = n34.boundary, r14 = n34.rootBoundary, t16 = n34.padding, s9 = n34.flipVariations, m9 = n34.allowedAutoPlacements, c7 = void 0 === m9 ? W : m9, d6 = Q(i28), g6 = (d6 ? s9 ? U : U.filter(function(e111) {
        return Q(e111) === d6;
    }) : H).filter(function(e112) {
        return c7.indexOf(e112) >= 0;
    }).reduce(function(o54, n35) {
        return o54[n35] = ye(e110, {
            placement: n35,
            boundary: a24,
            rootBoundary: r14,
            padding: t16
        })[G(n35)], o54;
    }, {
    });
    return Object.keys(g6).sort(function(e, o) {
        return g6[e] - g6[o];
    });
}
function he(e113, o55, n36) {
    return Math.max(e113, Math.min(o55, n36));
}
function pe(e114, o56, n37) {
    return void 0 === n37 && (n37 = {
        x: 0,
        y: 0
    }), {
        top: e114.top - o56.height - n37.y,
        right: e114.right - o56.width + n37.x,
        bottom: e114.bottom - o56.height + n37.y,
        left: e114.left - o56.width - n37.x
    };
}
function be(e115) {
    return [
        D,
        q,
        R,
        V
    ].some(function(o) {
        return e115[o] >= 0;
    });
}
var we = $({
    defaultModifiers: [
        {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {
            },
            effect: function(e116) {
                var o57 = e116.state, n38 = e116.instance, i29 = e116.options, a25 = i29.scroll, r15 = void 0 === a25 || a25, t17 = i29.resize, s10 = void 0 === t17 || t17, m10 = k(o57.elements.popper), c8 = [].concat(o57.scrollParents.reference, o57.scrollParents.popper);
                return r15 && c8.forEach(function(e117) {
                    e117.addEventListener("scroll", n38.update, Z);
                }), s10 && m10.addEventListener("resize", n38.update, Z), function() {
                    r15 && c8.forEach(function(e118) {
                        e118.removeEventListener("scroll", n38.update, Z);
                    }), s10 && m10.removeEventListener("resize", n38.update, Z);
                };
            },
            data: {
            }
        },
        {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(e119) {
                var o58 = e119.state, n = e119.name;
                o58.modifiersData[n] = oe({
                    reference: o58.rects.reference,
                    element: o58.rects.popper,
                    strategy: "absolute",
                    placement: o58.placement
                });
            },
            data: {
            }
        },
        {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(e120) {
                var o59 = e120.state, n39 = e120.options, i30 = n39.gpuAcceleration, a26 = void 0 === i30 || i30, r16 = n39.adaptive, t18 = void 0 === r16 || r16, s11 = {
                    placement: G(o59.placement),
                    popper: o59.elements.popper,
                    popperRect: o59.rects.popper,
                    gpuAcceleration: a26
                };
                null != o59.modifiersData.popperOffsets && (o59.styles.popper = Object.assign({
                }, o59.styles.popper, {
                }, ie(Object.assign({
                }, s11, {
                    offsets: o59.modifiersData.popperOffsets,
                    position: o59.options.strategy,
                    adaptive: t18
                })))), null != o59.modifiersData.arrow && (o59.styles.arrow = Object.assign({
                }, o59.styles.arrow, {
                }, ie(Object.assign({
                }, s11, {
                    offsets: o59.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1
                })))), o59.attributes.popper = Object.assign({
                }, o59.attributes.popper, {
                    "data-popper-placement": o59.placement
                });
            },
            data: {
            }
        },
        {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function(e121) {
                var o60 = e121.state;
                Object.keys(o60.elements).forEach(function(e122) {
                    var n40 = o60.styles[e122] || {
                    }, i31 = o60.attributes[e122] || {
                    }, a27 = o60.elements[e122];
                    E(a27) && _(a27) && (Object.assign(a27.style, n40), Object.keys(i31).forEach(function(e123) {
                        var o61 = i31[e123];
                        !1 === o61 ? a27.removeAttribute(e123) : a27.setAttribute(e123, !0 === o61 ? "" : o61);
                    }));
                });
            },
            effect: function(e124) {
                var o62 = e124.state, n41 = {
                    popper: {
                        position: o62.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {
                    }
                };
                return Object.assign(o62.elements.popper.style, n41.popper), o62.elements.arrow && Object.assign(o62.elements.arrow.style, n41.arrow), function() {
                    Object.keys(o62.elements).forEach(function(e125) {
                        var i32 = o62.elements[e125], a28 = o62.attributes[e125] || {
                        }, r17 = Object.keys(o62.styles.hasOwnProperty(e125) ? o62.styles[e125] : n41[e125]).reduce(function(e126, o) {
                            return e126[o] = "", e126;
                        }, {
                        });
                        E(i32) && _(i32) && (Object.assign(i32.style, r17), Object.keys(a28).forEach(function(e127) {
                            i32.removeAttribute(e127);
                        }));
                    });
                };
            },
            requires: [
                "computeStyles"
            ]
        },
        {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: [
                "popperOffsets"
            ],
            fn: function(e128) {
                var o63 = e128.state, n42 = e128.options, i33 = e128.name, a29 = n42.offset, r18 = void 0 === a29 ? [
                    0,
                    0
                ] : a29, t19 = W.reduce(function(e129, n43) {
                    return e129[n43] = (function(e130, o64, n44) {
                        var i34 = G(e130), a30 = [
                            V,
                            D
                        ].indexOf(i34) >= 0 ? -1 : 1, r19 = "function" == typeof n44 ? n44(Object.assign({
                        }, o64, {
                            placement: e130
                        })) : n44, t20 = r19[0], s13 = r19[1];
                        return t20 = t20 || 0, s13 = (s13 || 0) * a30, [
                            V,
                            q
                        ].indexOf(i34) >= 0 ? {
                            x: s13,
                            y: t20
                        } : {
                            x: t20,
                            y: s13
                        };
                    })(n43, o63.rects, r18), e129;
                }, {
                }), s12 = t19[o63.placement], m11 = s12.x, c9 = s12.y;
                null != o63.modifiersData.popperOffsets && (o63.modifiersData.popperOffsets.x += m11, o63.modifiersData.popperOffsets.y += c9), o63.modifiersData[i33] = t19;
            }
        },
        {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function(e131) {
                var o65 = e131.state, n45 = e131.options, i = e131.name;
                if (!o65.modifiersData[i]._skip) {
                    for(var a31 = n45.mainAxis, r20 = void 0 === a31 || a31, t21 = n45.altAxis, s14 = void 0 === t21 || t21, m12 = n45.fallbackPlacements, c10 = n45.padding, d7 = n45.boundary, g7 = n45.rootBoundary, u3 = n45.altBoundary, l3 = n45.flipVariations, v4 = void 0 === l3 || l3, f4 = n45.allowedAutoPlacements, y2 = o65.options.placement, j3 = G(y2), h4 = m12 || (j3 === y2 || !v4 ? [
                        re(y2)
                    ] : function(e132) {
                        if ("auto" === G(e132)) return [];
                        var o66 = re(e132);
                        return [
                            se(e132),
                            o66,
                            se(o66)
                        ];
                    }(y2)), p4 = [
                        y2
                    ].concat(h4).reduce(function(e133, n46) {
                        return e133.concat("auto" === G(n46) ? je(o65, {
                            placement: n46,
                            boundary: d7,
                            rootBoundary: g7,
                            padding: c10,
                            flipVariations: v4,
                            allowedAutoPlacements: f4
                        }) : n46);
                    }, []), b3 = o65.rects.reference, w2 = o65.rects.popper, k3 = new Map, x2 = !0, C1 = p4[0], E2 = 0; E2 < p4.length; E2++){
                        var _2 = p4[E2], z1 = G(_2), O2 = "start" === Q(_2), I2 = [
                            D,
                            R
                        ].indexOf(z1) >= 0, S = I2 ? "width" : "height", P1 = ye(o65, {
                            placement: _2,
                            boundary: d7,
                            rootBoundary: g7,
                            altBoundary: u3,
                            padding: c10
                        }), M1 = I2 ? O2 ? q : V : O2 ? R : D;
                        b3[S] > w2[S] && (M1 = re(M1));
                        var A = re(M1), L1 = [];
                        if (r20 && L1.push(P1[z1] <= 0), s14 && L1.push(P1[M1] <= 0, P1[A] <= 0), L1.every(function(e134) {
                            return e134;
                        })) {
                            C1 = _2, x2 = !1;
                            break;
                        }
                        k3.set(_2, L1);
                    }
                    if (x2) for(var T1 = function(e135) {
                        var o67 = p4.find(function(o68) {
                            var n47 = k3.get(o68);
                            if (n47) return n47.slice(0, e135).every(function(e136) {
                                return e136;
                            });
                        });
                        if (o67) return C1 = o67, "break";
                    }, N1 = v4 ? 3 : 1; N1 > 0; N1--){
                        if ("break" === T1(N1)) break;
                    }
                    o65.placement !== C1 && (o65.modifiersData[i]._skip = !0, o65.placement = C1, o65.reset = !0);
                }
            },
            requiresIfExists: [
                "offset"
            ],
            data: {
                _skip: !1
            }
        },
        {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(e137) {
                var o69 = e137.state, n48 = e137.options, i = e137.name, a32 = n48.mainAxis, r21 = void 0 === a32 || a32, t22 = n48.altAxis, s15 = void 0 !== t22 && t22, m13 = n48.boundary, c11 = n48.rootBoundary, d8 = n48.altBoundary, g8 = n48.padding, u4 = n48.tether, l4 = void 0 === u4 || u4, v5 = n48.tetherOffset, f5 = void 0 === v5 ? 0 : v5, y3 = ye(o69, {
                    boundary: m13,
                    rootBoundary: c11,
                    padding: g8,
                    altBoundary: d8
                }), j4 = G(o69.placement), h5 = Q(o69.placement), p5 = !h5, b4 = ee(j4), w = "x" === b4 ? "y" : "x", k4 = o69.modifiersData.popperOffsets, x3 = o69.rects.reference, C2 = o69.rects.popper, E3 = "function" == typeof f5 ? f5(Object.assign({
                }, o69.rects, {
                    placement: o69.placement
                })) : f5, _3 = {
                    x: 0,
                    y: 0
                };
                if (k4) {
                    if (r21) {
                        var z = "y" === b4 ? D : V, O = "y" === b4 ? R : q, I = "y" === b4 ? "height" : "width", S2 = k4[b4], P2 = k4[b4] + y3[z], A1 = k4[b4] - y3[O], L2 = l4 ? -C2[I] / 2 : 0, T2 = "start" === h5 ? x3[I] : C2[I], N2 = "start" === h5 ? -C2[I] : -x3[I], F1 = o69.elements.arrow, H1 = l4 && F1 ? M(F1) : {
                            width: 0,
                            height: 0
                        }, U1 = o69.modifiersData["arrow#persistent"] ? o69.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }, W1 = U1[z], K1 = U1[O], J1 = he(0, x3[I], H1[I]), X1 = p5 ? x3[I] / 2 - L2 - J1 - W1 - E3 : T2 - J1 - W1 - E3, Y1 = p5 ? -x3[I] / 2 + L2 + J1 + K1 + E3 : N2 + J1 + K1 + E3, $1 = o69.elements.arrow && B(o69.elements.arrow), Z1 = $1 ? "y" === b4 ? $1.clientTop || 0 : $1.clientLeft || 0 : 0, oe1 = o69.modifiersData.offset ? o69.modifiersData.offset[o69.placement][b4] : 0, ne1 = k4[b4] + X1 - oe1 - Z1, ie1 = k4[b4] + Y1 - oe1, ae1 = he(l4 ? Math.min(P2, ne1) : P2, S2, l4 ? Math.max(A1, ie1) : A1);
                        k4[b4] = ae1, _3[b4] = ae1 - S2;
                    }
                    if (s15) {
                        var re = "x" === b4 ? D : V, te = "x" === b4 ? R : q, se1 = k4[w], me1 = he(se1 + y3[re], se1, se1 - y3[te]);
                        k4[w] = me1, _3[w] = me1 - se1;
                    }
                    o69.modifiersData[i] = _3;
                }
            },
            requiresIfExists: [
                "offset"
            ]
        },
        {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(e138) {
                var o70, n49 = e138.state, i = e138.name, a33 = n49.elements.arrow, r22 = n49.modifiersData.popperOffsets, t23 = G(n49.placement), s16 = ee(t23), m = [
                    V,
                    q
                ].indexOf(t23) >= 0 ? "height" : "width";
                if (a33 && r22) {
                    var c12 = n49.modifiersData[i + "#persistent"].padding, d9 = M(a33), g = "y" === s16 ? D : V, u = "y" === s16 ? R : q, l5 = n49.rects.reference[m] + n49.rects.reference[s16] - r22[s16] - n49.rects.popper[m], v6 = r22[s16] - n49.rects.reference[s16], f6 = B(a33), y4 = f6 ? "y" === s16 ? f6.clientHeight || 0 : f6.clientWidth || 0 : 0, j5 = l5 / 2 - v6 / 2, h6 = c12[g], p6 = y4 - d9[m] - c12[u], b5 = y4 / 2 - d9[m] / 2 + j5, w3 = he(h6, b5, p6), k = s16;
                    n49.modifiersData[i] = ((o70 = {
                    })[k] = w3, o70.centerOffset = w3 - b5, o70);
                }
            },
            effect: function(e139) {
                var o71 = e139.state, n50 = e139.options, i = e139.name, a34 = n50.element, r23 = void 0 === a34 ? "[data-popper-arrow]" : a34, t24 = n50.padding, s17 = void 0 === t24 ? 0 : t24;
                null != r23 && ("string" != typeof r23 || (r23 = o71.elements.popper.querySelector(r23))) && de(o71.elements.popper, r23) && (o71.elements.arrow = r23, o71.modifiersData[i + "#persistent"] = {
                    padding: ve("number" != typeof s17 ? s17 : fe(s17, H))
                });
            },
            requires: [
                "popperOffsets"
            ],
            requiresIfExists: [
                "preventOverflow"
            ]
        },
        {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: [
                "preventOverflow"
            ],
            fn: function(e140) {
                var o72 = e140.state, n = e140.name, i35 = o72.rects.reference, a35 = o72.rects.popper, r24 = o72.modifiersData.preventOverflow, t25 = ye(o72, {
                    elementContext: "reference"
                }), s18 = ye(o72, {
                    altBoundary: !0
                }), m14 = pe(t25, i35), c13 = pe(s18, a35, r24), d10 = be(m14), g9 = be(c13);
                o72.modifiersData[n] = {
                    referenceClippingOffsets: m14,
                    popperEscapeOffsets: c13,
                    isReferenceHidden: d10,
                    hasPopperEscaped: g9
                }, o72.attributes.popper = Object.assign({
                }, o72.attributes.popper, {
                    "data-popper-reference-hidden": d10,
                    "data-popper-escaped": g9
                });
            }
        }
    ]
}), ke = function() {
    var e141 = {
        base: "https://twemoji.maxcdn.com/v/13.0.0/",
        ext: ".png",
        size: "72x72",
        className: "emoji",
        convert: {
            fromCodePoint: function(e142) {
                var o74 = "string" == typeof e142 ? parseInt(e142, 16) : e142;
                if (o74 < 65536) return s19(o74);
                return s19(55296 + ((o74 -= 65536) >> 10), 56320 + (1023 & o74));
            },
            toCodePoint: j6
        },
        onerror: function() {
            this.parentNode && this.parentNode.replaceChild(m15(this.alt, !1), this);
        },
        parse: function(o75, n52) {
            n52 && "function" != typeof n52 || (n52 = {
                callback: n52
            });
            var i37;
            return ("string" == typeof o75 ? l6 : u5)(o75, {
                callback: n52.callback || c14,
                attributes: "function" == typeof n52.attributes ? n52.attributes : f7,
                base: "string" == typeof n52.base ? n52.base : e141.base,
                ext: n52.ext || e141.ext,
                size: n52.folder || (i37 = n52.size || e141.size, "number" == typeof i37 ? i37 + "x" + i37 : i37),
                className: n52.className || e141.className,
                onerror: n52.onerror || e141.onerror
            });
        },
        replace: y5,
        test: function(e143) {
            n51.lastIndex = 0;
            var o76 = n51.test(e143);
            return n51.lastIndex = 0, o76;
        }
    }, o73 = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
    }, n51 = /(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g, i36 = /\uFE0F/g, a36 = String.fromCharCode(8205), r25 = /[&<>'"]/g, t26 = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/, s19 = String.fromCharCode;
    function m15(e144, o77) {
        return document.createTextNode(o77 ? e144.replace(i36, "") : e144);
    }
    function c14(e145, o78) {
        return "".concat(o78.base, o78.size, "/", e145, o78.ext);
    }
    function d11(e146, o79) {
        for(var n53, i38, a37 = e146.childNodes, r26 = a37.length; r26--;)3 === (i38 = (n53 = a37[r26]).nodeType) ? o79.push(n53) : 1 !== i38 || "ownerSVGElement" in n53 || t26.test(n53.nodeName.toLowerCase()) || d11(n53, o79);
        return o79;
    }
    function g10(e147) {
        return j6(e147.indexOf(a36) < 0 ? e147.replace(i36, "") : e147);
    }
    function u5(e148, o80) {
        for(var i39, a38, r27, t27, s20, c15, u6, l7, v8, f8, y6, j7, h7, p7 = d11(e148, []), b6 = p7.length; b6--;){
            for(r27 = !1, t27 = document.createDocumentFragment(), c15 = (s20 = p7[b6]).nodeValue, l7 = 0; u6 = n51.exec(c15);){
                if ((v8 = u6.index) !== l7 && t27.appendChild(m15(c15.slice(l7, v8), !0)), j7 = g10(y6 = u6[0]), l7 = v8 + y6.length, h7 = o80.callback(j7, o80), j7 && h7) {
                    for(a38 in (f8 = new Image).onerror = o80.onerror, f8.setAttribute("draggable", "false"), i39 = o80.attributes(y6, j7))i39.hasOwnProperty(a38) && 0 !== a38.indexOf("on") && !f8.hasAttribute(a38) && f8.setAttribute(a38, i39[a38]);
                    f8.className = o80.className, f8.alt = y6, f8.src = h7, r27 = !0, t27.appendChild(f8);
                }
                f8 || t27.appendChild(m15(y6, !1)), f8 = null;
            }
            r27 && (l7 < c15.length && t27.appendChild(m15(c15.slice(l7), !0)), s20.parentNode.replaceChild(t27, s20));
        }
        return e148;
    }
    function l6(e149, o81) {
        return y5(e149, function(e150) {
            var n54, i40, a39 = e150, t28 = g10(e150), s21 = o81.callback(t28, o81);
            if (t28 && s21) {
                for(i40 in a39 = "<img ".concat('class="', o81.className, '" ', 'draggable="false" ', 'alt="', e150, '"', ' src="', s21, '"'), n54 = o81.attributes(e150, t28))n54.hasOwnProperty(i40) && 0 !== i40.indexOf("on") && -1 === a39.indexOf(" " + i40 + "=") && (a39 = a39.concat(" ", i40, '="', n54[i40].replace(r25, v7), '"'));
                a39 = a39.concat("/>");
            }
            return a39;
        });
    }
    function v7(e) {
        return o73[e];
    }
    function f7() {
        return null;
    }
    function y5(e151, o82) {
        return String(e151).replace(n51, o82);
    }
    function j6(e152, o83) {
        for(var n55 = [], i41 = 0, a40 = 0, r28 = 0; r28 < e152.length;)i41 = e152.charCodeAt(r28++), a40 ? (n55.push((65536 + (a40 - 55296 << 10) + (i41 - 56320)).toString(16)), a40 = 0) : 55296 <= i41 && i41 <= 56319 ? a40 = i41 : n55.push(i41.toString(16));
        return n55.join(o83 || "-");
    }
    return e141;
}(), xe = {
    categories: [
        "smileys",
        "people",
        "animals",
        "food",
        "travel",
        "activities",
        "objects",
        "symbols",
        "flags"
    ],
    emoji: [
        {
            emoji: "😀",
            category: 0,
            name: "grinning face",
            version: "1.0"
        },
        {
            emoji: "😃",
            category: 0,
            name: "grinning face with big eyes",
            version: "1.0"
        },
        {
            emoji: "😄",
            category: 0,
            name: "grinning face with smiling eyes",
            version: "1.0"
        },
        {
            emoji: "😁",
            category: 0,
            name: "beaming face with smiling eyes",
            version: "1.0"
        },
        {
            emoji: "😆",
            category: 0,
            name: "grinning squinting face",
            version: "1.0"
        },
        {
            emoji: "😅",
            category: 0,
            name: "grinning face with sweat",
            version: "1.0"
        },
        {
            emoji: "🤣",
            category: 0,
            name: "rolling on the floor laughing",
            version: "3.0"
        },
        {
            emoji: "😂",
            category: 0,
            name: "face with tears of joy",
            version: "1.0"
        },
        {
            emoji: "🙂",
            category: 0,
            name: "slightly smiling face",
            version: "1.0"
        },
        {
            emoji: "🙃",
            category: 0,
            name: "upside-down face",
            version: "1.0"
        },
        {
            emoji: "😉",
            category: 0,
            name: "winking face",
            version: "1.0"
        },
        {
            emoji: "😊",
            category: 0,
            name: "smiling face with smiling eyes",
            version: "1.0"
        },
        {
            emoji: "😇",
            category: 0,
            name: "smiling face with halo",
            version: "1.0"
        },
        {
            emoji: "🥰",
            category: 0,
            name: "smiling face with hearts",
            version: "11.0"
        },
        {
            emoji: "😍",
            category: 0,
            name: "smiling face with heart-eyes",
            version: "1.0"
        },
        {
            emoji: "🤩",
            category: 0,
            name: "star-struck",
            version: "5.0"
        },
        {
            emoji: "😘",
            category: 0,
            name: "face blowing a kiss",
            version: "1.0"
        },
        {
            emoji: "😗",
            category: 0,
            name: "kissing face",
            version: "1.0"
        },
        {
            emoji: "☺️",
            category: 0,
            name: "smiling face",
            version: "1.0"
        },
        {
            emoji: "😚",
            category: 0,
            name: "kissing face with closed eyes",
            version: "1.0"
        },
        {
            emoji: "😙",
            category: 0,
            name: "kissing face with smiling eyes",
            version: "1.0"
        },
        {
            emoji: "🥲",
            category: 0,
            name: "smiling face with tear",
            version: "13.0"
        },
        {
            emoji: "😋",
            category: 0,
            name: "face savoring food",
            version: "1.0"
        },
        {
            emoji: "😛",
            category: 0,
            name: "face with tongue",
            version: "1.0"
        },
        {
            emoji: "😜",
            category: 0,
            name: "winking face with tongue",
            version: "1.0"
        },
        {
            emoji: "🤪",
            category: 0,
            name: "zany face",
            version: "5.0"
        },
        {
            emoji: "😝",
            category: 0,
            name: "squinting face with tongue",
            version: "1.0"
        },
        {
            emoji: "🤑",
            category: 0,
            name: "money-mouth face",
            version: "1.0"
        },
        {
            emoji: "🤗",
            category: 0,
            name: "hugging face",
            version: "1.0"
        },
        {
            emoji: "🤭",
            category: 0,
            name: "face with hand over mouth",
            version: "5.0"
        },
        {
            emoji: "🤫",
            category: 0,
            name: "shushing face",
            version: "5.0"
        },
        {
            emoji: "🤔",
            category: 0,
            name: "thinking face",
            version: "1.0"
        },
        {
            emoji: "🤐",
            category: 0,
            name: "zipper-mouth face",
            version: "1.0"
        },
        {
            emoji: "🤨",
            category: 0,
            name: "face with raised eyebrow",
            version: "5.0"
        },
        {
            emoji: "😐",
            category: 0,
            name: "neutral face",
            version: "1.0"
        },
        {
            emoji: "😑",
            category: 0,
            name: "expressionless face",
            version: "1.0"
        },
        {
            emoji: "😶",
            category: 0,
            name: "face without mouth",
            version: "1.0"
        },
        {
            emoji: "😏",
            category: 0,
            name: "smirking face",
            version: "1.0"
        },
        {
            emoji: "😒",
            category: 0,
            name: "unamused face",
            version: "1.0"
        },
        {
            emoji: "🙄",
            category: 0,
            name: "face with rolling eyes",
            version: "1.0"
        },
        {
            emoji: "😬",
            category: 0,
            name: "grimacing face",
            version: "1.0"
        },
        {
            emoji: "🤥",
            category: 0,
            name: "lying face",
            version: "3.0"
        },
        {
            emoji: "😌",
            category: 0,
            name: "relieved face",
            version: "1.0"
        },
        {
            emoji: "😔",
            category: 0,
            name: "pensive face",
            version: "1.0"
        },
        {
            emoji: "😪",
            category: 0,
            name: "sleepy face",
            version: "1.0"
        },
        {
            emoji: "🤤",
            category: 0,
            name: "drooling face",
            version: "3.0"
        },
        {
            emoji: "😴",
            category: 0,
            name: "sleeping face",
            version: "1.0"
        },
        {
            emoji: "😷",
            category: 0,
            name: "face with medical mask",
            version: "1.0"
        },
        {
            emoji: "🤒",
            category: 0,
            name: "face with thermometer",
            version: "1.0"
        },
        {
            emoji: "🤕",
            category: 0,
            name: "face with head-bandage",
            version: "1.0"
        },
        {
            emoji: "🤢",
            category: 0,
            name: "nauseated face",
            version: "3.0"
        },
        {
            emoji: "🤮",
            category: 0,
            name: "face vomiting",
            version: "5.0"
        },
        {
            emoji: "🤧",
            category: 0,
            name: "sneezing face",
            version: "3.0"
        },
        {
            emoji: "🥵",
            category: 0,
            name: "hot face",
            version: "11.0"
        },
        {
            emoji: "🥶",
            category: 0,
            name: "cold face",
            version: "11.0"
        },
        {
            emoji: "🥴",
            category: 0,
            name: "woozy face",
            version: "11.0"
        },
        {
            emoji: "😵",
            category: 0,
            name: "dizzy face",
            version: "1.0"
        },
        {
            emoji: "🤯",
            category: 0,
            name: "exploding head",
            version: "5.0"
        },
        {
            emoji: "🤠",
            category: 0,
            name: "cowboy hat face",
            version: "3.0"
        },
        {
            emoji: "🥳",
            category: 0,
            name: "partying face",
            version: "11.0"
        },
        {
            emoji: "🥸",
            category: 0,
            name: "disguised face",
            version: "13.0"
        },
        {
            emoji: "😎",
            category: 0,
            name: "smiling face with sunglasses",
            version: "1.0"
        },
        {
            emoji: "🤓",
            category: 0,
            name: "nerd face",
            version: "1.0"
        },
        {
            emoji: "🧐",
            category: 0,
            name: "face with monocle",
            version: "5.0"
        },
        {
            emoji: "😕",
            category: 0,
            name: "confused face",
            version: "1.0"
        },
        {
            emoji: "😟",
            category: 0,
            name: "worried face",
            version: "1.0"
        },
        {
            emoji: "🙁",
            category: 0,
            name: "slightly frowning face",
            version: "1.0"
        },
        {
            emoji: "☹️",
            category: 0,
            name: "frowning face",
            version: "1.0"
        },
        {
            emoji: "😮",
            category: 0,
            name: "face with open mouth",
            version: "1.0"
        },
        {
            emoji: "😯",
            category: 0,
            name: "hushed face",
            version: "1.0"
        },
        {
            emoji: "😲",
            category: 0,
            name: "astonished face",
            version: "1.0"
        },
        {
            emoji: "😳",
            category: 0,
            name: "flushed face",
            version: "1.0"
        },
        {
            emoji: "🥺",
            category: 0,
            name: "pleading face",
            version: "11.0"
        },
        {
            emoji: "😦",
            category: 0,
            name: "frowning face with open mouth",
            version: "1.0"
        },
        {
            emoji: "😧",
            category: 0,
            name: "anguished face",
            version: "1.0"
        },
        {
            emoji: "😨",
            category: 0,
            name: "fearful face",
            version: "1.0"
        },
        {
            emoji: "😰",
            category: 0,
            name: "anxious face with sweat",
            version: "1.0"
        },
        {
            emoji: "😥",
            category: 0,
            name: "sad but relieved face",
            version: "1.0"
        },
        {
            emoji: "😢",
            category: 0,
            name: "crying face",
            version: "1.0"
        },
        {
            emoji: "😭",
            category: 0,
            name: "loudly crying face",
            version: "1.0"
        },
        {
            emoji: "😱",
            category: 0,
            name: "face screaming in fear",
            version: "1.0"
        },
        {
            emoji: "😖",
            category: 0,
            name: "confounded face",
            version: "1.0"
        },
        {
            emoji: "😣",
            category: 0,
            name: "persevering face",
            version: "1.0"
        },
        {
            emoji: "😞",
            category: 0,
            name: "disappointed face",
            version: "1.0"
        },
        {
            emoji: "😓",
            category: 0,
            name: "downcast face with sweat",
            version: "1.0"
        },
        {
            emoji: "😩",
            category: 0,
            name: "weary face",
            version: "1.0"
        },
        {
            emoji: "😫",
            category: 0,
            name: "tired face",
            version: "1.0"
        },
        {
            emoji: "🥱",
            category: 0,
            name: "yawning face",
            version: "12.0"
        },
        {
            emoji: "😤",
            category: 0,
            name: "face with steam from nose",
            version: "1.0"
        },
        {
            emoji: "😡",
            category: 0,
            name: "pouting face",
            version: "1.0"
        },
        {
            emoji: "😠",
            category: 0,
            name: "angry face",
            version: "1.0"
        },
        {
            emoji: "🤬",
            category: 0,
            name: "face with symbols on mouth",
            version: "5.0"
        },
        {
            emoji: "😈",
            category: 0,
            name: "smiling face with horns",
            version: "1.0"
        },
        {
            emoji: "👿",
            category: 0,
            name: "angry face with horns",
            version: "1.0"
        },
        {
            emoji: "💀",
            category: 0,
            name: "skull",
            version: "1.0"
        },
        {
            emoji: "☠️",
            category: 0,
            name: "skull and crossbones",
            version: "1.0"
        },
        {
            emoji: "💩",
            category: 0,
            name: "pile of poo",
            version: "1.0"
        },
        {
            emoji: "🤡",
            category: 0,
            name: "clown face",
            version: "3.0"
        },
        {
            emoji: "👹",
            category: 0,
            name: "ogre",
            version: "1.0"
        },
        {
            emoji: "👺",
            category: 0,
            name: "goblin",
            version: "1.0"
        },
        {
            emoji: "👻",
            category: 0,
            name: "ghost",
            version: "1.0"
        },
        {
            emoji: "👽",
            category: 0,
            name: "alien",
            version: "1.0"
        },
        {
            emoji: "👾",
            category: 0,
            name: "alien monster",
            version: "1.0"
        },
        {
            emoji: "🤖",
            category: 0,
            name: "robot",
            version: "1.0"
        },
        {
            emoji: "😺",
            category: 0,
            name: "grinning cat",
            version: "1.0"
        },
        {
            emoji: "😸",
            category: 0,
            name: "grinning cat with smiling eyes",
            version: "1.0"
        },
        {
            emoji: "😹",
            category: 0,
            name: "cat with tears of joy",
            version: "1.0"
        },
        {
            emoji: "😻",
            category: 0,
            name: "smiling cat with heart-eyes",
            version: "1.0"
        },
        {
            emoji: "😼",
            category: 0,
            name: "cat with wry smile",
            version: "1.0"
        },
        {
            emoji: "😽",
            category: 0,
            name: "kissing cat",
            version: "1.0"
        },
        {
            emoji: "🙀",
            category: 0,
            name: "weary cat",
            version: "1.0"
        },
        {
            emoji: "😿",
            category: 0,
            name: "crying cat",
            version: "1.0"
        },
        {
            emoji: "😾",
            category: 0,
            name: "pouting cat",
            version: "1.0"
        },
        {
            emoji: "🙈",
            category: 0,
            name: "see-no-evil monkey",
            version: "1.0"
        },
        {
            emoji: "🙉",
            category: 0,
            name: "hear-no-evil monkey",
            version: "1.0"
        },
        {
            emoji: "🙊",
            category: 0,
            name: "speak-no-evil monkey",
            version: "1.0"
        },
        {
            emoji: "💋",
            category: 0,
            name: "kiss mark",
            version: "1.0"
        },
        {
            emoji: "💌",
            category: 0,
            name: "love letter",
            version: "1.0"
        },
        {
            emoji: "💘",
            category: 0,
            name: "heart with arrow",
            version: "1.0"
        },
        {
            emoji: "💝",
            category: 0,
            name: "heart with ribbon",
            version: "1.0"
        },
        {
            emoji: "💖",
            category: 0,
            name: "sparkling heart",
            version: "1.0"
        },
        {
            emoji: "💗",
            category: 0,
            name: "growing heart",
            version: "1.0"
        },
        {
            emoji: "💓",
            category: 0,
            name: "beating heart",
            version: "1.0"
        },
        {
            emoji: "💞",
            category: 0,
            name: "revolving hearts",
            version: "1.0"
        },
        {
            emoji: "💕",
            category: 0,
            name: "two hearts",
            version: "1.0"
        },
        {
            emoji: "💟",
            category: 0,
            name: "heart decoration",
            version: "1.0"
        },
        {
            emoji: "❣️",
            category: 0,
            name: "heart exclamation",
            version: "1.0"
        },
        {
            emoji: "💔",
            category: 0,
            name: "broken heart",
            version: "1.0"
        },
        {
            emoji: "❤️",
            category: 0,
            name: "red heart",
            version: "1.0"
        },
        {
            emoji: "🧡",
            category: 0,
            name: "orange heart",
            version: "5.0"
        },
        {
            emoji: "💛",
            category: 0,
            name: "yellow heart",
            version: "1.0"
        },
        {
            emoji: "💚",
            category: 0,
            name: "green heart",
            version: "1.0"
        },
        {
            emoji: "💙",
            category: 0,
            name: "blue heart",
            version: "1.0"
        },
        {
            emoji: "💜",
            category: 0,
            name: "purple heart",
            version: "1.0"
        },
        {
            emoji: "🤎",
            category: 0,
            name: "brown heart",
            version: "12.0"
        },
        {
            emoji: "🖤",
            category: 0,
            name: "black heart",
            version: "3.0"
        },
        {
            emoji: "🤍",
            category: 0,
            name: "white heart",
            version: "12.0"
        },
        {
            emoji: "💯",
            category: 0,
            name: "hundred points",
            version: "1.0"
        },
        {
            emoji: "💢",
            category: 0,
            name: "anger symbol",
            version: "1.0"
        },
        {
            emoji: "💥",
            category: 0,
            name: "collision",
            version: "1.0"
        },
        {
            emoji: "💫",
            category: 0,
            name: "dizzy",
            version: "1.0"
        },
        {
            emoji: "💦",
            category: 0,
            name: "sweat droplets",
            version: "1.0"
        },
        {
            emoji: "💨",
            category: 0,
            name: "dashing away",
            version: "1.0"
        },
        {
            emoji: "🕳️",
            category: 0,
            name: "hole",
            version: "1.0"
        },
        {
            emoji: "💣",
            category: 0,
            name: "bomb",
            version: "1.0"
        },
        {
            emoji: "💬",
            category: 0,
            name: "speech balloon",
            version: "1.0"
        },
        {
            emoji: "👁️‍🗨️",
            category: 0,
            name: "eye in speech bubble",
            version: "2.0"
        },
        {
            emoji: "🗨️",
            category: 0,
            name: "left speech bubble",
            version: "2.0"
        },
        {
            emoji: "🗯️",
            category: 0,
            name: "right anger bubble",
            version: "1.0"
        },
        {
            emoji: "💭",
            category: 0,
            name: "thought balloon",
            version: "1.0"
        },
        {
            emoji: "💤",
            category: 0,
            name: "zzz",
            version: "1.0"
        },
        {
            emoji: "👋",
            category: 1,
            name: "waving hand",
            variations: [
                "👋🏻",
                "👋🏼",
                "👋🏽",
                "👋🏾",
                "👋🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🤚",
            category: 1,
            name: "raised back of hand",
            variations: [
                "🤚🏻",
                "🤚🏼",
                "🤚🏽",
                "🤚🏾",
                "🤚🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "🖐️",
            category: 1,
            name: "hand with fingers splayed",
            variations: [
                "🖐🏻",
                "🖐🏼",
                "🖐🏽",
                "🖐🏾",
                "🖐🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "✋",
            category: 1,
            name: "raised hand",
            variations: [
                "✋🏻",
                "✋🏼",
                "✋🏽",
                "✋🏾",
                "✋🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🖖",
            category: 1,
            name: "vulcan salute",
            variations: [
                "🖖🏻",
                "🖖🏼",
                "🖖🏽",
                "🖖🏾",
                "🖖🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👌",
            category: 1,
            name: "OK hand",
            variations: [
                "👌🏻",
                "👌🏼",
                "👌🏽",
                "👌🏾",
                "👌🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🤌",
            category: 1,
            name: "pinched fingers",
            variations: [
                "🤌🏻",
                "🤌🏼",
                "🤌🏽",
                "🤌🏾",
                "🤌🏿"
            ],
            version: "13.0"
        },
        {
            emoji: "🤏",
            category: 1,
            name: "pinching hand",
            variations: [
                "🤏🏻",
                "🤏🏼",
                "🤏🏽",
                "🤏🏾",
                "🤏🏿"
            ],
            version: "12.0"
        },
        {
            emoji: "✌️",
            category: 1,
            name: "victory hand",
            variations: [
                "✌🏻",
                "✌🏼",
                "✌🏽",
                "✌🏾",
                "✌🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🤞",
            category: 1,
            name: "crossed fingers",
            variations: [
                "🤞🏻",
                "🤞🏼",
                "🤞🏽",
                "🤞🏾",
                "🤞🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "🤟",
            category: 1,
            name: "love-you gesture",
            variations: [
                "🤟🏻",
                "🤟🏼",
                "🤟🏽",
                "🤟🏾",
                "🤟🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "🤘",
            category: 1,
            name: "sign of the horns",
            variations: [
                "🤘🏻",
                "🤘🏼",
                "🤘🏽",
                "🤘🏾",
                "🤘🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🤙",
            category: 1,
            name: "call me hand",
            variations: [
                "🤙🏻",
                "🤙🏼",
                "🤙🏽",
                "🤙🏾",
                "🤙🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "👈",
            category: 1,
            name: "backhand index pointing left",
            variations: [
                "👈🏻",
                "👈🏼",
                "👈🏽",
                "👈🏾",
                "👈🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👉",
            category: 1,
            name: "backhand index pointing right",
            variations: [
                "👉🏻",
                "👉🏼",
                "👉🏽",
                "👉🏾",
                "👉🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👆",
            category: 1,
            name: "backhand index pointing up",
            variations: [
                "👆🏻",
                "👆🏼",
                "👆🏽",
                "👆🏾",
                "👆🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🖕",
            category: 1,
            name: "middle finger",
            variations: [
                "🖕🏻",
                "🖕🏼",
                "🖕🏽",
                "🖕🏾",
                "🖕🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👇",
            category: 1,
            name: "backhand index pointing down",
            variations: [
                "👇🏻",
                "👇🏼",
                "👇🏽",
                "👇🏾",
                "👇🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "☝️",
            category: 1,
            name: "index pointing up",
            variations: [
                "☝🏻",
                "☝🏼",
                "☝🏽",
                "☝🏾",
                "☝🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👍",
            category: 1,
            name: "thumbs up",
            variations: [
                "👍🏻",
                "👍🏼",
                "👍🏽",
                "👍🏾",
                "👍🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👎",
            category: 1,
            name: "thumbs down",
            variations: [
                "👎🏻",
                "👎🏼",
                "👎🏽",
                "👎🏾",
                "👎🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "✊",
            category: 1,
            name: "raised fist",
            variations: [
                "✊🏻",
                "✊🏼",
                "✊🏽",
                "✊🏾",
                "✊🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👊",
            category: 1,
            name: "oncoming fist",
            variations: [
                "👊🏻",
                "👊🏼",
                "👊🏽",
                "👊🏾",
                "👊🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🤛",
            category: 1,
            name: "left-facing fist",
            variations: [
                "🤛🏻",
                "🤛🏼",
                "🤛🏽",
                "🤛🏾",
                "🤛🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "🤜",
            category: 1,
            name: "right-facing fist",
            variations: [
                "🤜🏻",
                "🤜🏼",
                "🤜🏽",
                "🤜🏾",
                "🤜🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "👏",
            category: 1,
            name: "clapping hands",
            variations: [
                "👏🏻",
                "👏🏼",
                "👏🏽",
                "👏🏾",
                "👏🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🙌",
            category: 1,
            name: "raising hands",
            variations: [
                "🙌🏻",
                "🙌🏼",
                "🙌🏽",
                "🙌🏾",
                "🙌🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👐",
            category: 1,
            name: "open hands",
            variations: [
                "👐🏻",
                "👐🏼",
                "👐🏽",
                "👐🏾",
                "👐🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🤲",
            category: 1,
            name: "palms up together",
            variations: [
                "🤲🏻",
                "🤲🏼",
                "🤲🏽",
                "🤲🏾",
                "🤲🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "🤝",
            category: 1,
            name: "handshake",
            version: "3.0"
        },
        {
            emoji: "🙏",
            category: 1,
            name: "folded hands",
            variations: [
                "🙏🏻",
                "🙏🏼",
                "🙏🏽",
                "🙏🏾",
                "🙏🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "✍️",
            category: 1,
            name: "writing hand",
            variations: [
                "✍🏻",
                "✍🏼",
                "✍🏽",
                "✍🏾",
                "✍🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "💅",
            category: 1,
            name: "nail polish",
            variations: [
                "💅🏻",
                "💅🏼",
                "💅🏽",
                "💅🏾",
                "💅🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🤳",
            category: 1,
            name: "selfie",
            variations: [
                "🤳🏻",
                "🤳🏼",
                "🤳🏽",
                "🤳🏾",
                "🤳🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "💪",
            category: 1,
            name: "flexed biceps",
            variations: [
                "💪🏻",
                "💪🏼",
                "💪🏽",
                "💪🏾",
                "💪🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🦾",
            category: 1,
            name: "mechanical arm",
            version: "12.0"
        },
        {
            emoji: "🦿",
            category: 1,
            name: "mechanical leg",
            version: "12.0"
        },
        {
            emoji: "🦵",
            category: 1,
            name: "leg",
            variations: [
                "🦵🏻",
                "🦵🏼",
                "🦵🏽",
                "🦵🏾",
                "🦵🏿"
            ],
            version: "11.0"
        },
        {
            emoji: "🦶",
            category: 1,
            name: "foot",
            variations: [
                "🦶🏻",
                "🦶🏼",
                "🦶🏽",
                "🦶🏾",
                "🦶🏿"
            ],
            version: "11.0"
        },
        {
            emoji: "👂",
            category: 1,
            name: "ear",
            variations: [
                "👂🏻",
                "👂🏼",
                "👂🏽",
                "👂🏾",
                "👂🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🦻",
            category: 1,
            name: "ear with hearing aid",
            variations: [
                "🦻🏻",
                "🦻🏼",
                "🦻🏽",
                "🦻🏾",
                "🦻🏿"
            ],
            version: "12.0"
        },
        {
            emoji: "👃",
            category: 1,
            name: "nose",
            variations: [
                "👃🏻",
                "👃🏼",
                "👃🏽",
                "👃🏾",
                "👃🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🧠",
            category: 1,
            name: "brain",
            version: "5.0"
        },
        {
            emoji: "🫀",
            category: 1,
            name: "anatomical heart",
            version: "13.0"
        },
        {
            emoji: "🫁",
            category: 1,
            name: "lungs",
            version: "13.0"
        },
        {
            emoji: "🦷",
            category: 1,
            name: "tooth",
            version: "11.0"
        },
        {
            emoji: "🦴",
            category: 1,
            name: "bone",
            version: "11.0"
        },
        {
            emoji: "👀",
            category: 1,
            name: "eyes",
            version: "1.0"
        },
        {
            emoji: "👁️",
            category: 1,
            name: "eye",
            version: "1.0"
        },
        {
            emoji: "👅",
            category: 1,
            name: "tongue",
            version: "1.0"
        },
        {
            emoji: "👄",
            category: 1,
            name: "mouth",
            version: "1.0"
        },
        {
            emoji: "👶",
            category: 1,
            name: "baby",
            variations: [
                "👶🏻",
                "👶🏼",
                "👶🏽",
                "👶🏾",
                "👶🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🧒",
            category: 1,
            name: "child",
            variations: [
                "🧒🏻",
                "🧒🏼",
                "🧒🏽",
                "🧒🏾",
                "🧒🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "👦",
            category: 1,
            name: "boy",
            variations: [
                "👦🏻",
                "👦🏼",
                "👦🏽",
                "👦🏾",
                "👦🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👧",
            category: 1,
            name: "girl",
            variations: [
                "👧🏻",
                "👧🏼",
                "👧🏽",
                "👧🏾",
                "👧🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🧑",
            category: 1,
            name: "person",
            variations: [
                "🧑🏻",
                "🧑🏼",
                "🧑🏽",
                "🧑🏾",
                "🧑🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "👱",
            category: 1,
            name: "person with blond hair",
            variations: [
                "👱🏻",
                "👱🏼",
                "👱🏽",
                "👱🏾",
                "👱🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👨",
            category: 1,
            name: "man",
            variations: [
                "👨🏻",
                "👨🏼",
                "👨🏽",
                "👨🏾",
                "👨🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🧔",
            category: 1,
            name: "man with beard",
            variations: [
                "🧔🏻",
                "🧔🏼",
                "🧔🏽",
                "🧔🏾",
                "🧔🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "👨‍🦰",
            category: 1,
            name: "man with red hair",
            variations: [
                "👨🏻‍🦰",
                "👨🏼‍🦰",
                "👨🏽‍🦰",
                "👨🏾‍🦰",
                "👨🏿‍🦰"
            ],
            version: "11.0"
        },
        {
            emoji: "👨‍🦱",
            category: 1,
            name: "man with curly hair",
            variations: [
                "👨🏻‍🦱",
                "👨🏼‍🦱",
                "👨🏽‍🦱",
                "👨🏾‍🦱",
                "👨🏿‍🦱"
            ],
            version: "11.0"
        },
        {
            emoji: "👨‍🦳",
            category: 1,
            name: "man with white hair",
            variations: [
                "👨🏻‍🦳",
                "👨🏼‍🦳",
                "👨🏽‍🦳",
                "👨🏾‍🦳",
                "👨🏿‍🦳"
            ],
            version: "11.0"
        },
        {
            emoji: "👨‍🦲",
            category: 1,
            name: "man with no hair",
            variations: [
                "👨🏻‍🦲",
                "👨🏼‍🦲",
                "👨🏽‍🦲",
                "👨🏾‍🦲",
                "👨🏿‍🦲"
            ],
            version: "11.0"
        },
        {
            emoji: "👩",
            category: 1,
            name: "woman",
            variations: [
                "👩🏻",
                "👩🏼",
                "👩🏽",
                "👩🏾",
                "👩🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👩‍🦰",
            category: 1,
            name: "woman with red hair",
            variations: [
                "👩🏻‍🦰",
                "👩🏼‍🦰",
                "👩🏽‍🦰",
                "👩🏾‍🦰",
                "👩🏿‍🦰"
            ],
            version: "11.0"
        },
        {
            emoji: "🧑‍🦰",
            category: 1,
            name: "person with red hair",
            variations: [
                "🧑🏻‍🦰",
                "🧑🏼‍🦰",
                "🧑🏽‍🦰",
                "🧑🏾‍🦰",
                "🧑🏿‍🦰"
            ],
            version: "12.1"
        },
        {
            emoji: "👩‍🦱",
            category: 1,
            name: "woman with curly hair",
            variations: [
                "👩🏻‍🦱",
                "👩🏼‍🦱",
                "👩🏽‍🦱",
                "👩🏾‍🦱",
                "👩🏿‍🦱"
            ],
            version: "11.0"
        },
        {
            emoji: "🧑‍🦱",
            category: 1,
            name: "person with curly hair",
            variations: [
                "🧑🏻‍🦱",
                "🧑🏼‍🦱",
                "🧑🏽‍🦱",
                "🧑🏾‍🦱",
                "🧑🏿‍🦱"
            ],
            version: "12.1"
        },
        {
            emoji: "👩‍🦳",
            category: 1,
            name: "woman with white hair",
            variations: [
                "👩🏻‍🦳",
                "👩🏼‍🦳",
                "👩🏽‍🦳",
                "👩🏾‍🦳",
                "👩🏿‍🦳"
            ],
            version: "11.0"
        },
        {
            emoji: "🧑‍🦳",
            category: 1,
            name: "person with white hair",
            variations: [
                "🧑🏻‍🦳",
                "🧑🏼‍🦳",
                "🧑🏽‍🦳",
                "🧑🏾‍🦳",
                "🧑🏿‍🦳"
            ],
            version: "12.1"
        },
        {
            emoji: "👩‍🦲",
            category: 1,
            name: "woman with no hair",
            variations: [
                "👩🏻‍🦲",
                "👩🏼‍🦲",
                "👩🏽‍🦲",
                "👩🏾‍🦲",
                "👩🏿‍🦲"
            ],
            version: "11.0"
        },
        {
            emoji: "🧑‍🦲",
            category: 1,
            name: "person with no hair",
            variations: [
                "🧑🏻‍🦲",
                "🧑🏼‍🦲",
                "🧑🏽‍🦲",
                "🧑🏾‍🦲",
                "🧑🏿‍🦲"
            ],
            version: "12.1"
        },
        {
            emoji: "👱‍♀️",
            category: 1,
            name: "woman with blond hair",
            variations: [
                "👱🏻‍♀️",
                "👱🏼‍♀️",
                "👱🏽‍♀️",
                "👱🏾‍♀️",
                "👱🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "👱‍♂️",
            category: 1,
            name: "man with blond hair",
            variations: [
                "👱🏻‍♂️",
                "👱🏼‍♂️",
                "👱🏽‍♂️",
                "👱🏾‍♂️",
                "👱🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🧓",
            category: 1,
            name: "older person",
            variations: [
                "🧓🏻",
                "🧓🏼",
                "🧓🏽",
                "🧓🏾",
                "🧓🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "👴",
            category: 1,
            name: "old man",
            variations: [
                "👴🏻",
                "👴🏼",
                "👴🏽",
                "👴🏾",
                "👴🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👵",
            category: 1,
            name: "old woman",
            variations: [
                "👵🏻",
                "👵🏼",
                "👵🏽",
                "👵🏾",
                "👵🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🙍",
            category: 1,
            name: "person frowning",
            variations: [
                "🙍🏻",
                "🙍🏼",
                "🙍🏽",
                "🙍🏾",
                "🙍🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🙍‍♂️",
            category: 1,
            name: "man frowning",
            variations: [
                "🙍🏻‍♂️",
                "🙍🏼‍♂️",
                "🙍🏽‍♂️",
                "🙍🏾‍♂️",
                "🙍🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🙍‍♀️",
            category: 1,
            name: "woman frowning",
            variations: [
                "🙍🏻‍♀️",
                "🙍🏼‍♀️",
                "🙍🏽‍♀️",
                "🙍🏾‍♀️",
                "🙍🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🙎",
            category: 1,
            name: "person pouting",
            variations: [
                "🙎🏻",
                "🙎🏼",
                "🙎🏽",
                "🙎🏾",
                "🙎🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🙎‍♂️",
            category: 1,
            name: "man pouting",
            variations: [
                "🙎🏻‍♂️",
                "🙎🏼‍♂️",
                "🙎🏽‍♂️",
                "🙎🏾‍♂️",
                "🙎🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🙎‍♀️",
            category: 1,
            name: "woman pouting",
            variations: [
                "🙎🏻‍♀️",
                "🙎🏼‍♀️",
                "🙎🏽‍♀️",
                "🙎🏾‍♀️",
                "🙎🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🙅",
            category: 1,
            name: "person gesturing NO",
            variations: [
                "🙅🏻",
                "🙅🏼",
                "🙅🏽",
                "🙅🏾",
                "🙅🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🙅‍♂️",
            category: 1,
            name: "man gesturing NO",
            variations: [
                "🙅🏻‍♂️",
                "🙅🏼‍♂️",
                "🙅🏽‍♂️",
                "🙅🏾‍♂️",
                "🙅🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🙅‍♀️",
            category: 1,
            name: "woman gesturing NO",
            variations: [
                "🙅🏻‍♀️",
                "🙅🏼‍♀️",
                "🙅🏽‍♀️",
                "🙅🏾‍♀️",
                "🙅🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🙆",
            category: 1,
            name: "person gesturing OK",
            variations: [
                "🙆🏻",
                "🙆🏼",
                "🙆🏽",
                "🙆🏾",
                "🙆🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🙆‍♂️",
            category: 1,
            name: "man gesturing OK",
            variations: [
                "🙆🏻‍♂️",
                "🙆🏼‍♂️",
                "🙆🏽‍♂️",
                "🙆🏾‍♂️",
                "🙆🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🙆‍♀️",
            category: 1,
            name: "woman gesturing OK",
            variations: [
                "🙆🏻‍♀️",
                "🙆🏼‍♀️",
                "🙆🏽‍♀️",
                "🙆🏾‍♀️",
                "🙆🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "💁",
            category: 1,
            name: "person tipping hand",
            variations: [
                "💁🏻",
                "💁🏼",
                "💁🏽",
                "💁🏾",
                "💁🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "💁‍♂️",
            category: 1,
            name: "man tipping hand",
            variations: [
                "💁🏻‍♂️",
                "💁🏼‍♂️",
                "💁🏽‍♂️",
                "💁🏾‍♂️",
                "💁🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "💁‍♀️",
            category: 1,
            name: "woman tipping hand",
            variations: [
                "💁🏻‍♀️",
                "💁🏼‍♀️",
                "💁🏽‍♀️",
                "💁🏾‍♀️",
                "💁🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🙋",
            category: 1,
            name: "person raising hand",
            variations: [
                "🙋🏻",
                "🙋🏼",
                "🙋🏽",
                "🙋🏾",
                "🙋🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🙋‍♂️",
            category: 1,
            name: "man raising hand",
            variations: [
                "🙋🏻‍♂️",
                "🙋🏼‍♂️",
                "🙋🏽‍♂️",
                "🙋🏾‍♂️",
                "🙋🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🙋‍♀️",
            category: 1,
            name: "woman raising hand",
            variations: [
                "🙋🏻‍♀️",
                "🙋🏼‍♀️",
                "🙋🏽‍♀️",
                "🙋🏾‍♀️",
                "🙋🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🧏",
            category: 1,
            name: "deaf person",
            variations: [
                "🧏🏻",
                "🧏🏼",
                "🧏🏽",
                "🧏🏾",
                "🧏🏿"
            ],
            version: "12.0"
        },
        {
            emoji: "🧏‍♂️",
            category: 1,
            name: "deaf man",
            variations: [
                "🧏🏻‍♂️",
                "🧏🏼‍♂️",
                "🧏🏽‍♂️",
                "🧏🏾‍♂️",
                "🧏🏿‍♂️"
            ],
            version: "12.0"
        },
        {
            emoji: "🧏‍♀️",
            category: 1,
            name: "deaf woman",
            variations: [
                "🧏🏻‍♀️",
                "🧏🏼‍♀️",
                "🧏🏽‍♀️",
                "🧏🏾‍♀️",
                "🧏🏿‍♀️"
            ],
            version: "12.0"
        },
        {
            emoji: "🙇",
            category: 1,
            name: "person bowing",
            variations: [
                "🙇🏻",
                "🙇🏼",
                "🙇🏽",
                "🙇🏾",
                "🙇🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🙇‍♂️",
            category: 1,
            name: "man bowing",
            variations: [
                "🙇🏻‍♂️",
                "🙇🏼‍♂️",
                "🙇🏽‍♂️",
                "🙇🏾‍♂️",
                "🙇🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🙇‍♀️",
            category: 1,
            name: "woman bowing",
            variations: [
                "🙇🏻‍♀️",
                "🙇🏼‍♀️",
                "🙇🏽‍♀️",
                "🙇🏾‍♀️",
                "🙇🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🤦",
            category: 1,
            name: "person facepalming",
            variations: [
                "🤦🏻",
                "🤦🏼",
                "🤦🏽",
                "🤦🏾",
                "🤦🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "🤦‍♂️",
            category: 1,
            name: "man facepalming",
            variations: [
                "🤦🏻‍♂️",
                "🤦🏼‍♂️",
                "🤦🏽‍♂️",
                "🤦🏾‍♂️",
                "🤦🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🤦‍♀️",
            category: 1,
            name: "woman facepalming",
            variations: [
                "🤦🏻‍♀️",
                "🤦🏼‍♀️",
                "🤦🏽‍♀️",
                "🤦🏾‍♀️",
                "🤦🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🤷",
            category: 1,
            name: "person shrugging",
            variations: [
                "🤷🏻",
                "🤷🏼",
                "🤷🏽",
                "🤷🏾",
                "🤷🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "🤷‍♂️",
            category: 1,
            name: "man shrugging",
            variations: [
                "🤷🏻‍♂️",
                "🤷🏼‍♂️",
                "🤷🏽‍♂️",
                "🤷🏾‍♂️",
                "🤷🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🤷‍♀️",
            category: 1,
            name: "woman shrugging",
            variations: [
                "🤷🏻‍♀️",
                "🤷🏼‍♀️",
                "🤷🏽‍♀️",
                "🤷🏾‍♀️",
                "🤷🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍⚕️",
            category: 1,
            name: "health worker",
            variations: [
                "🧑🏻‍⚕️",
                "🧑🏼‍⚕️",
                "🧑🏽‍⚕️",
                "🧑🏾‍⚕️",
                "🧑🏿‍⚕️"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍⚕️",
            category: 1,
            name: "man health worker",
            variations: [
                "👨🏻‍⚕️",
                "👨🏼‍⚕️",
                "👨🏽‍⚕️",
                "👨🏾‍⚕️",
                "👨🏿‍⚕️"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍⚕️",
            category: 1,
            name: "woman health worker",
            variations: [
                "👩🏻‍⚕️",
                "👩🏼‍⚕️",
                "👩🏽‍⚕️",
                "👩🏾‍⚕️",
                "👩🏿‍⚕️"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍🎓",
            category: 1,
            name: "student",
            variations: [
                "🧑🏻‍🎓",
                "🧑🏼‍🎓",
                "🧑🏽‍🎓",
                "🧑🏾‍🎓",
                "🧑🏿‍🎓"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍🎓",
            category: 1,
            name: "man student",
            variations: [
                "👨🏻‍🎓",
                "👨🏼‍🎓",
                "👨🏽‍🎓",
                "👨🏾‍🎓",
                "👨🏿‍🎓"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍🎓",
            category: 1,
            name: "woman student",
            variations: [
                "👩🏻‍🎓",
                "👩🏼‍🎓",
                "👩🏽‍🎓",
                "👩🏾‍🎓",
                "👩🏿‍🎓"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍🏫",
            category: 1,
            name: "teacher",
            variations: [
                "🧑🏻‍🏫",
                "🧑🏼‍🏫",
                "🧑🏽‍🏫",
                "🧑🏾‍🏫",
                "🧑🏿‍🏫"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍🏫",
            category: 1,
            name: "man teacher",
            variations: [
                "👨🏻‍🏫",
                "👨🏼‍🏫",
                "👨🏽‍🏫",
                "👨🏾‍🏫",
                "👨🏿‍🏫"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍🏫",
            category: 1,
            name: "woman teacher",
            variations: [
                "👩🏻‍🏫",
                "👩🏼‍🏫",
                "👩🏽‍🏫",
                "👩🏾‍🏫",
                "👩🏿‍🏫"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍⚖️",
            category: 1,
            name: "judge",
            variations: [
                "🧑🏻‍⚖️",
                "🧑🏼‍⚖️",
                "🧑🏽‍⚖️",
                "🧑🏾‍⚖️",
                "🧑🏿‍⚖️"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍⚖️",
            category: 1,
            name: "man judge",
            variations: [
                "👨🏻‍⚖️",
                "👨🏼‍⚖️",
                "👨🏽‍⚖️",
                "👨🏾‍⚖️",
                "👨🏿‍⚖️"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍⚖️",
            category: 1,
            name: "woman judge",
            variations: [
                "👩🏻‍⚖️",
                "👩🏼‍⚖️",
                "👩🏽‍⚖️",
                "👩🏾‍⚖️",
                "👩🏿‍⚖️"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍🌾",
            category: 1,
            name: "farmer",
            variations: [
                "🧑🏻‍🌾",
                "🧑🏼‍🌾",
                "🧑🏽‍🌾",
                "🧑🏾‍🌾",
                "🧑🏿‍🌾"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍🌾",
            category: 1,
            name: "man farmer",
            variations: [
                "👨🏻‍🌾",
                "👨🏼‍🌾",
                "👨🏽‍🌾",
                "👨🏾‍🌾",
                "👨🏿‍🌾"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍🌾",
            category: 1,
            name: "woman farmer",
            variations: [
                "👩🏻‍🌾",
                "👩🏼‍🌾",
                "👩🏽‍🌾",
                "👩🏾‍🌾",
                "👩🏿‍🌾"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍🍳",
            category: 1,
            name: "cook",
            variations: [
                "🧑🏻‍🍳",
                "🧑🏼‍🍳",
                "🧑🏽‍🍳",
                "🧑🏾‍🍳",
                "🧑🏿‍🍳"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍🍳",
            category: 1,
            name: "man cook",
            variations: [
                "👨🏻‍🍳",
                "👨🏼‍🍳",
                "👨🏽‍🍳",
                "👨🏾‍🍳",
                "👨🏿‍🍳"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍🍳",
            category: 1,
            name: "woman cook",
            variations: [
                "👩🏻‍🍳",
                "👩🏼‍🍳",
                "👩🏽‍🍳",
                "👩🏾‍🍳",
                "👩🏿‍🍳"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍🔧",
            category: 1,
            name: "mechanic",
            variations: [
                "🧑🏻‍🔧",
                "🧑🏼‍🔧",
                "🧑🏽‍🔧",
                "🧑🏾‍🔧",
                "🧑🏿‍🔧"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍🔧",
            category: 1,
            name: "man mechanic",
            variations: [
                "👨🏻‍🔧",
                "👨🏼‍🔧",
                "👨🏽‍🔧",
                "👨🏾‍🔧",
                "👨🏿‍🔧"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍🔧",
            category: 1,
            name: "woman mechanic",
            variations: [
                "👩🏻‍🔧",
                "👩🏼‍🔧",
                "👩🏽‍🔧",
                "👩🏾‍🔧",
                "👩🏿‍🔧"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍🏭",
            category: 1,
            name: "factory worker",
            variations: [
                "🧑🏻‍🏭",
                "🧑🏼‍🏭",
                "🧑🏽‍🏭",
                "🧑🏾‍🏭",
                "🧑🏿‍🏭"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍🏭",
            category: 1,
            name: "man factory worker",
            variations: [
                "👨🏻‍🏭",
                "👨🏼‍🏭",
                "👨🏽‍🏭",
                "👨🏾‍🏭",
                "👨🏿‍🏭"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍🏭",
            category: 1,
            name: "woman factory worker",
            variations: [
                "👩🏻‍🏭",
                "👩🏼‍🏭",
                "👩🏽‍🏭",
                "👩🏾‍🏭",
                "👩🏿‍🏭"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍💼",
            category: 1,
            name: "office worker",
            variations: [
                "🧑🏻‍💼",
                "🧑🏼‍💼",
                "🧑🏽‍💼",
                "🧑🏾‍💼",
                "🧑🏿‍💼"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍💼",
            category: 1,
            name: "man office worker",
            variations: [
                "👨🏻‍💼",
                "👨🏼‍💼",
                "👨🏽‍💼",
                "👨🏾‍💼",
                "👨🏿‍💼"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍💼",
            category: 1,
            name: "woman office worker",
            variations: [
                "👩🏻‍💼",
                "👩🏼‍💼",
                "👩🏽‍💼",
                "👩🏾‍💼",
                "👩🏿‍💼"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍🔬",
            category: 1,
            name: "scientist",
            variations: [
                "🧑🏻‍🔬",
                "🧑🏼‍🔬",
                "🧑🏽‍🔬",
                "🧑🏾‍🔬",
                "🧑🏿‍🔬"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍🔬",
            category: 1,
            name: "man scientist",
            variations: [
                "👨🏻‍🔬",
                "👨🏼‍🔬",
                "👨🏽‍🔬",
                "👨🏾‍🔬",
                "👨🏿‍🔬"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍🔬",
            category: 1,
            name: "woman scientist",
            variations: [
                "👩🏻‍🔬",
                "👩🏼‍🔬",
                "👩🏽‍🔬",
                "👩🏾‍🔬",
                "👩🏿‍🔬"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍💻",
            category: 1,
            name: "technologist",
            variations: [
                "🧑🏻‍💻",
                "🧑🏼‍💻",
                "🧑🏽‍💻",
                "🧑🏾‍💻",
                "🧑🏿‍💻"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍💻",
            category: 1,
            name: "man technologist",
            variations: [
                "👨🏻‍💻",
                "👨🏼‍💻",
                "👨🏽‍💻",
                "👨🏾‍💻",
                "👨🏿‍💻"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍💻",
            category: 1,
            name: "woman technologist",
            variations: [
                "👩🏻‍💻",
                "👩🏼‍💻",
                "👩🏽‍💻",
                "👩🏾‍💻",
                "👩🏿‍💻"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍🎤",
            category: 1,
            name: "singer",
            variations: [
                "🧑🏻‍🎤",
                "🧑🏼‍🎤",
                "🧑🏽‍🎤",
                "🧑🏾‍🎤",
                "🧑🏿‍🎤"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍🎤",
            category: 1,
            name: "man singer",
            variations: [
                "👨🏻‍🎤",
                "👨🏼‍🎤",
                "👨🏽‍🎤",
                "👨🏾‍🎤",
                "👨🏿‍🎤"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍🎤",
            category: 1,
            name: "woman singer",
            variations: [
                "👩🏻‍🎤",
                "👩🏼‍🎤",
                "👩🏽‍🎤",
                "👩🏾‍🎤",
                "👩🏿‍🎤"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍🎨",
            category: 1,
            name: "artist",
            variations: [
                "🧑🏻‍🎨",
                "🧑🏼‍🎨",
                "🧑🏽‍🎨",
                "🧑🏾‍🎨",
                "🧑🏿‍🎨"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍🎨",
            category: 1,
            name: "man artist",
            variations: [
                "👨🏻‍🎨",
                "👨🏼‍🎨",
                "👨🏽‍🎨",
                "👨🏾‍🎨",
                "👨🏿‍🎨"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍🎨",
            category: 1,
            name: "woman artist",
            variations: [
                "👩🏻‍🎨",
                "👩🏼‍🎨",
                "👩🏽‍🎨",
                "👩🏾‍🎨",
                "👩🏿‍🎨"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍✈️",
            category: 1,
            name: "pilot",
            variations: [
                "🧑🏻‍✈️",
                "🧑🏼‍✈️",
                "🧑🏽‍✈️",
                "🧑🏾‍✈️",
                "🧑🏿‍✈️"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍✈️",
            category: 1,
            name: "man pilot",
            variations: [
                "👨🏻‍✈️",
                "👨🏼‍✈️",
                "👨🏽‍✈️",
                "👨🏾‍✈️",
                "👨🏿‍✈️"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍✈️",
            category: 1,
            name: "woman pilot",
            variations: [
                "👩🏻‍✈️",
                "👩🏼‍✈️",
                "👩🏽‍✈️",
                "👩🏾‍✈️",
                "👩🏿‍✈️"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍🚀",
            category: 1,
            name: "astronaut",
            variations: [
                "🧑🏻‍🚀",
                "🧑🏼‍🚀",
                "🧑🏽‍🚀",
                "🧑🏾‍🚀",
                "🧑🏿‍🚀"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍🚀",
            category: 1,
            name: "man astronaut",
            variations: [
                "👨🏻‍🚀",
                "👨🏼‍🚀",
                "👨🏽‍🚀",
                "👨🏾‍🚀",
                "👨🏿‍🚀"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍🚀",
            category: 1,
            name: "woman astronaut",
            variations: [
                "👩🏻‍🚀",
                "👩🏼‍🚀",
                "👩🏽‍🚀",
                "👩🏾‍🚀",
                "👩🏿‍🚀"
            ],
            version: "4.0"
        },
        {
            emoji: "🧑‍🚒",
            category: 1,
            name: "firefighter",
            variations: [
                "🧑🏻‍🚒",
                "🧑🏼‍🚒",
                "🧑🏽‍🚒",
                "🧑🏾‍🚒",
                "🧑🏿‍🚒"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍🚒",
            category: 1,
            name: "man firefighter",
            variations: [
                "👨🏻‍🚒",
                "👨🏼‍🚒",
                "👨🏽‍🚒",
                "👨🏾‍🚒",
                "👨🏿‍🚒"
            ],
            version: "4.0"
        },
        {
            emoji: "👩‍🚒",
            category: 1,
            name: "woman firefighter",
            variations: [
                "👩🏻‍🚒",
                "👩🏼‍🚒",
                "👩🏽‍🚒",
                "👩🏾‍🚒",
                "👩🏿‍🚒"
            ],
            version: "4.0"
        },
        {
            emoji: "👮",
            category: 1,
            name: "police officer",
            variations: [
                "👮🏻",
                "👮🏼",
                "👮🏽",
                "👮🏾",
                "👮🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👮‍♂️",
            category: 1,
            name: "man police officer",
            variations: [
                "👮🏻‍♂️",
                "👮🏼‍♂️",
                "👮🏽‍♂️",
                "👮🏾‍♂️",
                "👮🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "👮‍♀️",
            category: 1,
            name: "woman police officer",
            variations: [
                "👮🏻‍♀️",
                "👮🏼‍♀️",
                "👮🏽‍♀️",
                "👮🏾‍♀️",
                "👮🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🕵️",
            category: 1,
            name: "detective",
            variations: [
                "🕵🏻",
                "🕵🏼",
                "🕵🏽",
                "🕵🏾",
                "🕵🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🕵️‍♂️",
            category: 1,
            name: "man detective",
            variations: [
                "🕵🏻‍♂️",
                "🕵🏼‍♂️",
                "🕵🏽‍♂️",
                "🕵🏾‍♂️",
                "🕵🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🕵️‍♀️",
            category: 1,
            name: "woman detective",
            variations: [
                "🕵🏻‍♀️",
                "🕵🏼‍♀️",
                "🕵🏽‍♀️",
                "🕵🏾‍♀️",
                "🕵🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "💂",
            category: 1,
            name: "guard",
            variations: [
                "💂🏻",
                "💂🏼",
                "💂🏽",
                "💂🏾",
                "💂🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "💂‍♂️",
            category: 1,
            name: "man guard",
            variations: [
                "💂🏻‍♂️",
                "💂🏼‍♂️",
                "💂🏽‍♂️",
                "💂🏾‍♂️",
                "💂🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "💂‍♀️",
            category: 1,
            name: "woman guard",
            variations: [
                "💂🏻‍♀️",
                "💂🏼‍♀️",
                "💂🏽‍♀️",
                "💂🏾‍♀️",
                "💂🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🥷",
            category: 1,
            name: "ninja",
            variations: [
                "🥷🏻",
                "🥷🏼",
                "🥷🏽",
                "🥷🏾",
                "🥷🏿"
            ],
            version: "13.0"
        },
        {
            emoji: "👷",
            category: 1,
            name: "construction worker",
            variations: [
                "👷🏻",
                "👷🏼",
                "👷🏽",
                "👷🏾",
                "👷🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👷‍♂️",
            category: 1,
            name: "man construction worker",
            variations: [
                "👷🏻‍♂️",
                "👷🏼‍♂️",
                "👷🏽‍♂️",
                "👷🏾‍♂️",
                "👷🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "👷‍♀️",
            category: 1,
            name: "woman construction worker",
            variations: [
                "👷🏻‍♀️",
                "👷🏼‍♀️",
                "👷🏽‍♀️",
                "👷🏾‍♀️",
                "👷🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🤴",
            category: 1,
            name: "prince",
            variations: [
                "🤴🏻",
                "🤴🏼",
                "🤴🏽",
                "🤴🏾",
                "🤴🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "👸",
            category: 1,
            name: "princess",
            variations: [
                "👸🏻",
                "👸🏼",
                "👸🏽",
                "👸🏾",
                "👸🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👳",
            category: 1,
            name: "person wearing turban",
            variations: [
                "👳🏻",
                "👳🏼",
                "👳🏽",
                "👳🏾",
                "👳🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👳‍♂️",
            category: 1,
            name: "man wearing turban",
            variations: [
                "👳🏻‍♂️",
                "👳🏼‍♂️",
                "👳🏽‍♂️",
                "👳🏾‍♂️",
                "👳🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "👳‍♀️",
            category: 1,
            name: "woman wearing turban",
            variations: [
                "👳🏻‍♀️",
                "👳🏼‍♀️",
                "👳🏽‍♀️",
                "👳🏾‍♀️",
                "👳🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "👲",
            category: 1,
            name: "person with skullcap",
            variations: [
                "👲🏻",
                "👲🏼",
                "👲🏽",
                "👲🏾",
                "👲🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🧕",
            category: 1,
            name: "woman with headscarf",
            variations: [
                "🧕🏻",
                "🧕🏼",
                "🧕🏽",
                "🧕🏾",
                "🧕🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "🤵",
            category: 1,
            name: "person in tuxedo",
            variations: [
                "🤵🏻",
                "🤵🏼",
                "🤵🏽",
                "🤵🏾",
                "🤵🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "🤵‍♂️",
            category: 1,
            name: "man in tuxedo",
            variations: [
                "🤵🏻‍♂️",
                "🤵🏼‍♂️",
                "🤵🏽‍♂️",
                "🤵🏾‍♂️",
                "🤵🏿‍♂️"
            ],
            version: "13.0"
        },
        {
            emoji: "🤵‍♀️",
            category: 1,
            name: "woman in tuxedo",
            variations: [
                "🤵🏻‍♀️",
                "🤵🏼‍♀️",
                "🤵🏽‍♀️",
                "🤵🏾‍♀️",
                "🤵🏿‍♀️"
            ],
            version: "13.0"
        },
        {
            emoji: "👰",
            category: 1,
            name: "person with veil",
            variations: [
                "👰🏻",
                "👰🏼",
                "👰🏽",
                "👰🏾",
                "👰🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👰‍♂️",
            category: 1,
            name: "man with veil",
            variations: [
                "👰🏻‍♂️",
                "👰🏼‍♂️",
                "👰🏽‍♂️",
                "👰🏾‍♂️",
                "👰🏿‍♂️"
            ],
            version: "13.0"
        },
        {
            emoji: "👰‍♀️",
            category: 1,
            name: "woman with veil",
            variations: [
                "👰🏻‍♀️",
                "👰🏼‍♀️",
                "👰🏽‍♀️",
                "👰🏾‍♀️",
                "👰🏿‍♀️"
            ],
            version: "13.0"
        },
        {
            emoji: "🤰",
            category: 1,
            name: "pregnant woman",
            variations: [
                "🤰🏻",
                "🤰🏼",
                "🤰🏽",
                "🤰🏾",
                "🤰🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "🤱",
            category: 1,
            name: "breast-feeding",
            variations: [
                "🤱🏻",
                "🤱🏼",
                "🤱🏽",
                "🤱🏾",
                "🤱🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "👩‍🍼",
            category: 1,
            name: "woman feeding baby",
            variations: [
                "👩🏻‍🍼",
                "👩🏼‍🍼",
                "👩🏽‍🍼",
                "👩🏾‍🍼",
                "👩🏿‍🍼"
            ],
            version: "13.0"
        },
        {
            emoji: "👨‍🍼",
            category: 1,
            name: "man feeding baby",
            variations: [
                "👨🏻‍🍼",
                "👨🏼‍🍼",
                "👨🏽‍🍼",
                "👨🏾‍🍼",
                "👨🏿‍🍼"
            ],
            version: "13.0"
        },
        {
            emoji: "🧑‍🍼",
            category: 1,
            name: "person feeding baby",
            variations: [
                "🧑🏻‍🍼",
                "🧑🏼‍🍼",
                "🧑🏽‍🍼",
                "🧑🏾‍🍼",
                "🧑🏿‍🍼"
            ],
            version: "13.0"
        },
        {
            emoji: "👼",
            category: 1,
            name: "baby angel",
            variations: [
                "👼🏻",
                "👼🏼",
                "👼🏽",
                "👼🏾",
                "👼🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🎅",
            category: 1,
            name: "Santa Claus",
            variations: [
                "🎅🏻",
                "🎅🏼",
                "🎅🏽",
                "🎅🏾",
                "🎅🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🤶",
            category: 1,
            name: "Mrs. Claus",
            variations: [
                "🤶🏻",
                "🤶🏼",
                "🤶🏽",
                "🤶🏾",
                "🤶🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "🧑‍🎄",
            category: 1,
            name: "mx claus",
            variations: [
                "🧑🏻‍🎄",
                "🧑🏼‍🎄",
                "🧑🏽‍🎄",
                "🧑🏾‍🎄",
                "🧑🏿‍🎄"
            ],
            version: "13.0"
        },
        {
            emoji: "🦸",
            category: 1,
            name: "superhero",
            variations: [
                "🦸🏻",
                "🦸🏼",
                "🦸🏽",
                "🦸🏾",
                "🦸🏿"
            ],
            version: "11.0"
        },
        {
            emoji: "🦸‍♂️",
            category: 1,
            name: "man superhero",
            variations: [
                "🦸🏻‍♂️",
                "🦸🏼‍♂️",
                "🦸🏽‍♂️",
                "🦸🏾‍♂️",
                "🦸🏿‍♂️"
            ],
            version: "11.0"
        },
        {
            emoji: "🦸‍♀️",
            category: 1,
            name: "woman superhero",
            variations: [
                "🦸🏻‍♀️",
                "🦸🏼‍♀️",
                "🦸🏽‍♀️",
                "🦸🏾‍♀️",
                "🦸🏿‍♀️"
            ],
            version: "11.0"
        },
        {
            emoji: "🦹",
            category: 1,
            name: "supervillain",
            variations: [
                "🦹🏻",
                "🦹🏼",
                "🦹🏽",
                "🦹🏾",
                "🦹🏿"
            ],
            version: "11.0"
        },
        {
            emoji: "🦹‍♂️",
            category: 1,
            name: "man supervillain",
            variations: [
                "🦹🏻‍♂️",
                "🦹🏼‍♂️",
                "🦹🏽‍♂️",
                "🦹🏾‍♂️",
                "🦹🏿‍♂️"
            ],
            version: "11.0"
        },
        {
            emoji: "🦹‍♀️",
            category: 1,
            name: "woman supervillain",
            variations: [
                "🦹🏻‍♀️",
                "🦹🏼‍♀️",
                "🦹🏽‍♀️",
                "🦹🏾‍♀️",
                "🦹🏿‍♀️"
            ],
            version: "11.0"
        },
        {
            emoji: "🧙",
            category: 1,
            name: "mage",
            variations: [
                "🧙🏻",
                "🧙🏼",
                "🧙🏽",
                "🧙🏾",
                "🧙🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "🧙‍♂️",
            category: 1,
            name: "man mage",
            variations: [
                "🧙🏻‍♂️",
                "🧙🏼‍♂️",
                "🧙🏽‍♂️",
                "🧙🏾‍♂️",
                "🧙🏿‍♂️"
            ],
            version: "5.0"
        },
        {
            emoji: "🧙‍♀️",
            category: 1,
            name: "woman mage",
            variations: [
                "🧙🏻‍♀️",
                "🧙🏼‍♀️",
                "🧙🏽‍♀️",
                "🧙🏾‍♀️",
                "🧙🏿‍♀️"
            ],
            version: "5.0"
        },
        {
            emoji: "🧚",
            category: 1,
            name: "fairy",
            variations: [
                "🧚🏻",
                "🧚🏼",
                "🧚🏽",
                "🧚🏾",
                "🧚🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "🧚‍♂️",
            category: 1,
            name: "man fairy",
            variations: [
                "🧚🏻‍♂️",
                "🧚🏼‍♂️",
                "🧚🏽‍♂️",
                "🧚🏾‍♂️",
                "🧚🏿‍♂️"
            ],
            version: "5.0"
        },
        {
            emoji: "🧚‍♀️",
            category: 1,
            name: "woman fairy",
            variations: [
                "🧚🏻‍♀️",
                "🧚🏼‍♀️",
                "🧚🏽‍♀️",
                "🧚🏾‍♀️",
                "🧚🏿‍♀️"
            ],
            version: "5.0"
        },
        {
            emoji: "🧛",
            category: 1,
            name: "vampire",
            variations: [
                "🧛🏻",
                "🧛🏼",
                "🧛🏽",
                "🧛🏾",
                "🧛🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "🧛‍♂️",
            category: 1,
            name: "man vampire",
            variations: [
                "🧛🏻‍♂️",
                "🧛🏼‍♂️",
                "🧛🏽‍♂️",
                "🧛🏾‍♂️",
                "🧛🏿‍♂️"
            ],
            version: "5.0"
        },
        {
            emoji: "🧛‍♀️",
            category: 1,
            name: "woman vampire",
            variations: [
                "🧛🏻‍♀️",
                "🧛🏼‍♀️",
                "🧛🏽‍♀️",
                "🧛🏾‍♀️",
                "🧛🏿‍♀️"
            ],
            version: "5.0"
        },
        {
            emoji: "🧜",
            category: 1,
            name: "merperson",
            variations: [
                "🧜🏻",
                "🧜🏼",
                "🧜🏽",
                "🧜🏾",
                "🧜🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "🧜‍♂️",
            category: 1,
            name: "merman",
            variations: [
                "🧜🏻‍♂️",
                "🧜🏼‍♂️",
                "🧜🏽‍♂️",
                "🧜🏾‍♂️",
                "🧜🏿‍♂️"
            ],
            version: "5.0"
        },
        {
            emoji: "🧜‍♀️",
            category: 1,
            name: "mermaid",
            variations: [
                "🧜🏻‍♀️",
                "🧜🏼‍♀️",
                "🧜🏽‍♀️",
                "🧜🏾‍♀️",
                "🧜🏿‍♀️"
            ],
            version: "5.0"
        },
        {
            emoji: "🧝",
            category: 1,
            name: "elf",
            variations: [
                "🧝🏻",
                "🧝🏼",
                "🧝🏽",
                "🧝🏾",
                "🧝🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "🧝‍♂️",
            category: 1,
            name: "man elf",
            variations: [
                "🧝🏻‍♂️",
                "🧝🏼‍♂️",
                "🧝🏽‍♂️",
                "🧝🏾‍♂️",
                "🧝🏿‍♂️"
            ],
            version: "5.0"
        },
        {
            emoji: "🧝‍♀️",
            category: 1,
            name: "woman elf",
            variations: [
                "🧝🏻‍♀️",
                "🧝🏼‍♀️",
                "🧝🏽‍♀️",
                "🧝🏾‍♀️",
                "🧝🏿‍♀️"
            ],
            version: "5.0"
        },
        {
            emoji: "🧞",
            category: 1,
            name: "genie",
            version: "5.0"
        },
        {
            emoji: "🧞‍♂️",
            category: 1,
            name: "man genie",
            version: "5.0"
        },
        {
            emoji: "🧞‍♀️",
            category: 1,
            name: "woman genie",
            version: "5.0"
        },
        {
            emoji: "🧟",
            category: 1,
            name: "zombie",
            version: "5.0"
        },
        {
            emoji: "🧟‍♂️",
            category: 1,
            name: "man zombie",
            version: "5.0"
        },
        {
            emoji: "🧟‍♀️",
            category: 1,
            name: "woman zombie",
            version: "5.0"
        },
        {
            emoji: "💆",
            category: 1,
            name: "person getting massage",
            variations: [
                "💆🏻",
                "💆🏼",
                "💆🏽",
                "💆🏾",
                "💆🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "💆‍♂️",
            category: 1,
            name: "man getting massage",
            variations: [
                "💆🏻‍♂️",
                "💆🏼‍♂️",
                "💆🏽‍♂️",
                "💆🏾‍♂️",
                "💆🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "💆‍♀️",
            category: 1,
            name: "woman getting massage",
            variations: [
                "💆🏻‍♀️",
                "💆🏼‍♀️",
                "💆🏽‍♀️",
                "💆🏾‍♀️",
                "💆🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "💇",
            category: 1,
            name: "person getting haircut",
            variations: [
                "💇🏻",
                "💇🏼",
                "💇🏽",
                "💇🏾",
                "💇🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "💇‍♂️",
            category: 1,
            name: "man getting haircut",
            variations: [
                "💇🏻‍♂️",
                "💇🏼‍♂️",
                "💇🏽‍♂️",
                "💇🏾‍♂️",
                "💇🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "💇‍♀️",
            category: 1,
            name: "woman getting haircut",
            variations: [
                "💇🏻‍♀️",
                "💇🏼‍♀️",
                "💇🏽‍♀️",
                "💇🏾‍♀️",
                "💇🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🚶",
            category: 1,
            name: "person walking",
            variations: [
                "🚶🏻",
                "🚶🏼",
                "🚶🏽",
                "🚶🏾",
                "🚶🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🚶‍♂️",
            category: 1,
            name: "man walking",
            variations: [
                "🚶🏻‍♂️",
                "🚶🏼‍♂️",
                "🚶🏽‍♂️",
                "🚶🏾‍♂️",
                "🚶🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🚶‍♀️",
            category: 1,
            name: "woman walking",
            variations: [
                "🚶🏻‍♀️",
                "🚶🏼‍♀️",
                "🚶🏽‍♀️",
                "🚶🏾‍♀️",
                "🚶🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🧍",
            category: 1,
            name: "person standing",
            variations: [
                "🧍🏻",
                "🧍🏼",
                "🧍🏽",
                "🧍🏾",
                "🧍🏿"
            ],
            version: "12.0"
        },
        {
            emoji: "🧍‍♂️",
            category: 1,
            name: "man standing",
            variations: [
                "🧍🏻‍♂️",
                "🧍🏼‍♂️",
                "🧍🏽‍♂️",
                "🧍🏾‍♂️",
                "🧍🏿‍♂️"
            ],
            version: "12.0"
        },
        {
            emoji: "🧍‍♀️",
            category: 1,
            name: "woman standing",
            variations: [
                "🧍🏻‍♀️",
                "🧍🏼‍♀️",
                "🧍🏽‍♀️",
                "🧍🏾‍♀️",
                "🧍🏿‍♀️"
            ],
            version: "12.0"
        },
        {
            emoji: "🧎",
            category: 1,
            name: "person kneeling",
            variations: [
                "🧎🏻",
                "🧎🏼",
                "🧎🏽",
                "🧎🏾",
                "🧎🏿"
            ],
            version: "12.0"
        },
        {
            emoji: "🧎‍♂️",
            category: 1,
            name: "man kneeling",
            variations: [
                "🧎🏻‍♂️",
                "🧎🏼‍♂️",
                "🧎🏽‍♂️",
                "🧎🏾‍♂️",
                "🧎🏿‍♂️"
            ],
            version: "12.0"
        },
        {
            emoji: "🧎‍♀️",
            category: 1,
            name: "woman kneeling",
            variations: [
                "🧎🏻‍♀️",
                "🧎🏼‍♀️",
                "🧎🏽‍♀️",
                "🧎🏾‍♀️",
                "🧎🏿‍♀️"
            ],
            version: "12.0"
        },
        {
            emoji: "🧑‍🦯",
            category: 1,
            name: "person with white cane",
            variations: [
                "🧑🏻‍🦯",
                "🧑🏼‍🦯",
                "🧑🏽‍🦯",
                "🧑🏾‍🦯",
                "🧑🏿‍🦯"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍🦯",
            category: 1,
            name: "man with white cane",
            variations: [
                "👨🏻‍🦯",
                "👨🏼‍🦯",
                "👨🏽‍🦯",
                "👨🏾‍🦯",
                "👨🏿‍🦯"
            ],
            version: "12.0"
        },
        {
            emoji: "👩‍🦯",
            category: 1,
            name: "woman with white cane",
            variations: [
                "👩🏻‍🦯",
                "👩🏼‍🦯",
                "👩🏽‍🦯",
                "👩🏾‍🦯",
                "👩🏿‍🦯"
            ],
            version: "12.0"
        },
        {
            emoji: "🧑‍🦼",
            category: 1,
            name: "person in motorized wheelchair",
            variations: [
                "🧑🏻‍🦼",
                "🧑🏼‍🦼",
                "🧑🏽‍🦼",
                "🧑🏾‍🦼",
                "🧑🏿‍🦼"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍🦼",
            category: 1,
            name: "man in motorized wheelchair",
            variations: [
                "👨🏻‍🦼",
                "👨🏼‍🦼",
                "👨🏽‍🦼",
                "👨🏾‍🦼",
                "👨🏿‍🦼"
            ],
            version: "12.0"
        },
        {
            emoji: "👩‍🦼",
            category: 1,
            name: "woman in motorized wheelchair",
            variations: [
                "👩🏻‍🦼",
                "👩🏼‍🦼",
                "👩🏽‍🦼",
                "👩🏾‍🦼",
                "👩🏿‍🦼"
            ],
            version: "12.0"
        },
        {
            emoji: "🧑‍🦽",
            category: 1,
            name: "person in manual wheelchair",
            variations: [
                "🧑🏻‍🦽",
                "🧑🏼‍🦽",
                "🧑🏽‍🦽",
                "🧑🏾‍🦽",
                "🧑🏿‍🦽"
            ],
            version: "12.1"
        },
        {
            emoji: "👨‍🦽",
            category: 1,
            name: "man in manual wheelchair",
            variations: [
                "👨🏻‍🦽",
                "👨🏼‍🦽",
                "👨🏽‍🦽",
                "👨🏾‍🦽",
                "👨🏿‍🦽"
            ],
            version: "12.0"
        },
        {
            emoji: "👩‍🦽",
            category: 1,
            name: "woman in manual wheelchair",
            variations: [
                "👩🏻‍🦽",
                "👩🏼‍🦽",
                "👩🏽‍🦽",
                "👩🏾‍🦽",
                "👩🏿‍🦽"
            ],
            version: "12.0"
        },
        {
            emoji: "🏃",
            category: 1,
            name: "person running",
            variations: [
                "🏃🏻",
                "🏃🏼",
                "🏃🏽",
                "🏃🏾",
                "🏃🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🏃‍♂️",
            category: 1,
            name: "man running",
            variations: [
                "🏃🏻‍♂️",
                "🏃🏼‍♂️",
                "🏃🏽‍♂️",
                "🏃🏾‍♂️",
                "🏃🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🏃‍♀️",
            category: 1,
            name: "woman running",
            variations: [
                "🏃🏻‍♀️",
                "🏃🏼‍♀️",
                "🏃🏽‍♀️",
                "🏃🏾‍♀️",
                "🏃🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "💃",
            category: 1,
            name: "woman dancing",
            variations: [
                "💃🏻",
                "💃🏼",
                "💃🏽",
                "💃🏾",
                "💃🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🕺",
            category: 1,
            name: "man dancing",
            variations: [
                "🕺🏻",
                "🕺🏼",
                "🕺🏽",
                "🕺🏾",
                "🕺🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "🕴️",
            category: 1,
            name: "person in suit levitating",
            variations: [
                "🕴🏻",
                "🕴🏼",
                "🕴🏽",
                "🕴🏾",
                "🕴🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👯",
            category: 1,
            name: "people with bunny ears",
            version: "1.0"
        },
        {
            emoji: "👯‍♂️",
            category: 1,
            name: "men with bunny ears",
            version: "4.0"
        },
        {
            emoji: "👯‍♀️",
            category: 1,
            name: "women with bunny ears",
            version: "4.0"
        },
        {
            emoji: "🧖",
            category: 1,
            name: "person in steamy room",
            variations: [
                "🧖🏻",
                "🧖🏼",
                "🧖🏽",
                "🧖🏾",
                "🧖🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "🧖‍♂️",
            category: 1,
            name: "man in steamy room",
            variations: [
                "🧖🏻‍♂️",
                "🧖🏼‍♂️",
                "🧖🏽‍♂️",
                "🧖🏾‍♂️",
                "🧖🏿‍♂️"
            ],
            version: "5.0"
        },
        {
            emoji: "🧖‍♀️",
            category: 1,
            name: "woman in steamy room",
            variations: [
                "🧖🏻‍♀️",
                "🧖🏼‍♀️",
                "🧖🏽‍♀️",
                "🧖🏾‍♀️",
                "🧖🏿‍♀️"
            ],
            version: "5.0"
        },
        {
            emoji: "🧗",
            category: 1,
            name: "person climbing",
            variations: [
                "🧗🏻",
                "🧗🏼",
                "🧗🏽",
                "🧗🏾",
                "🧗🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "🧗‍♂️",
            category: 1,
            name: "man climbing",
            variations: [
                "🧗🏻‍♂️",
                "🧗🏼‍♂️",
                "🧗🏽‍♂️",
                "🧗🏾‍♂️",
                "🧗🏿‍♂️"
            ],
            version: "5.0"
        },
        {
            emoji: "🧗‍♀️",
            category: 1,
            name: "woman climbing",
            variations: [
                "🧗🏻‍♀️",
                "🧗🏼‍♀️",
                "🧗🏽‍♀️",
                "🧗🏾‍♀️",
                "🧗🏿‍♀️"
            ],
            version: "5.0"
        },
        {
            emoji: "🤺",
            category: 1,
            name: "person fencing",
            version: "3.0"
        },
        {
            emoji: "🏇",
            category: 1,
            name: "horse racing",
            variations: [
                "🏇🏻",
                "🏇🏼",
                "🏇🏽",
                "🏇🏾",
                "🏇🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "⛷️",
            category: 1,
            name: "skier",
            version: "1.0"
        },
        {
            emoji: "🏂",
            category: 1,
            name: "snowboarder",
            variations: [
                "🏂🏻",
                "🏂🏼",
                "🏂🏽",
                "🏂🏾",
                "🏂🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🏌️",
            category: 1,
            name: "person golfing",
            variations: [
                "🏌🏻",
                "🏌🏼",
                "🏌🏽",
                "🏌🏾",
                "🏌🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🏌️‍♂️",
            category: 1,
            name: "man golfing",
            variations: [
                "🏌🏻‍♂️",
                "🏌🏼‍♂️",
                "🏌🏽‍♂️",
                "🏌🏾‍♂️",
                "🏌🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🏌️‍♀️",
            category: 1,
            name: "woman golfing",
            variations: [
                "🏌🏻‍♀️",
                "🏌🏼‍♀️",
                "🏌🏽‍♀️",
                "🏌🏾‍♀️",
                "🏌🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🏄",
            category: 1,
            name: "person surfing",
            variations: [
                "🏄🏻",
                "🏄🏼",
                "🏄🏽",
                "🏄🏾",
                "🏄🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🏄‍♂️",
            category: 1,
            name: "man surfing",
            variations: [
                "🏄🏻‍♂️",
                "🏄🏼‍♂️",
                "🏄🏽‍♂️",
                "🏄🏾‍♂️",
                "🏄🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🏄‍♀️",
            category: 1,
            name: "woman surfing",
            variations: [
                "🏄🏻‍♀️",
                "🏄🏼‍♀️",
                "🏄🏽‍♀️",
                "🏄🏾‍♀️",
                "🏄🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🚣",
            category: 1,
            name: "person rowing boat",
            variations: [
                "🚣🏻",
                "🚣🏼",
                "🚣🏽",
                "🚣🏾",
                "🚣🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🚣‍♂️",
            category: 1,
            name: "man rowing boat",
            variations: [
                "🚣🏻‍♂️",
                "🚣🏼‍♂️",
                "🚣🏽‍♂️",
                "🚣🏾‍♂️",
                "🚣🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🚣‍♀️",
            category: 1,
            name: "woman rowing boat",
            variations: [
                "🚣🏻‍♀️",
                "🚣🏼‍♀️",
                "🚣🏽‍♀️",
                "🚣🏾‍♀️",
                "🚣🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🏊",
            category: 1,
            name: "person swimming",
            variations: [
                "🏊🏻",
                "🏊🏼",
                "🏊🏽",
                "🏊🏾",
                "🏊🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🏊‍♂️",
            category: 1,
            name: "man swimming",
            variations: [
                "🏊🏻‍♂️",
                "🏊🏼‍♂️",
                "🏊🏽‍♂️",
                "🏊🏾‍♂️",
                "🏊🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🏊‍♀️",
            category: 1,
            name: "woman swimming",
            variations: [
                "🏊🏻‍♀️",
                "🏊🏼‍♀️",
                "🏊🏽‍♀️",
                "🏊🏾‍♀️",
                "🏊🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "⛹️",
            category: 1,
            name: "person bouncing ball",
            variations: [
                "⛹🏻",
                "⛹🏼",
                "⛹🏽",
                "⛹🏾",
                "⛹🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "⛹️‍♂️",
            category: 1,
            name: "man bouncing ball",
            variations: [
                "⛹🏻‍♂️",
                "⛹🏼‍♂️",
                "⛹🏽‍♂️",
                "⛹🏾‍♂️",
                "⛹🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "⛹️‍♀️",
            category: 1,
            name: "woman bouncing ball",
            variations: [
                "⛹🏻‍♀️",
                "⛹🏼‍♀️",
                "⛹🏽‍♀️",
                "⛹🏾‍♀️",
                "⛹🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🏋️",
            category: 1,
            name: "person lifting weights",
            variations: [
                "🏋🏻",
                "🏋🏼",
                "🏋🏽",
                "🏋🏾",
                "🏋🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🏋️‍♂️",
            category: 1,
            name: "man lifting weights",
            variations: [
                "🏋🏻‍♂️",
                "🏋🏼‍♂️",
                "🏋🏽‍♂️",
                "🏋🏾‍♂️",
                "🏋🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🏋️‍♀️",
            category: 1,
            name: "woman lifting weights",
            variations: [
                "🏋🏻‍♀️",
                "🏋🏼‍♀️",
                "🏋🏽‍♀️",
                "🏋🏾‍♀️",
                "🏋🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🚴",
            category: 1,
            name: "person biking",
            variations: [
                "🚴🏻",
                "🚴🏼",
                "🚴🏽",
                "🚴🏾",
                "🚴🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🚴‍♂️",
            category: 1,
            name: "man biking",
            variations: [
                "🚴🏻‍♂️",
                "🚴🏼‍♂️",
                "🚴🏽‍♂️",
                "🚴🏾‍♂️",
                "🚴🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🚴‍♀️",
            category: 1,
            name: "woman biking",
            variations: [
                "🚴🏻‍♀️",
                "🚴🏼‍♀️",
                "🚴🏽‍♀️",
                "🚴🏾‍♀️",
                "🚴🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🚵",
            category: 1,
            name: "person mountain biking",
            variations: [
                "🚵🏻",
                "🚵🏼",
                "🚵🏽",
                "🚵🏾",
                "🚵🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🚵‍♂️",
            category: 1,
            name: "man mountain biking",
            variations: [
                "🚵🏻‍♂️",
                "🚵🏼‍♂️",
                "🚵🏽‍♂️",
                "🚵🏾‍♂️",
                "🚵🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🚵‍♀️",
            category: 1,
            name: "woman mountain biking",
            variations: [
                "🚵🏻‍♀️",
                "🚵🏼‍♀️",
                "🚵🏽‍♀️",
                "🚵🏾‍♀️",
                "🚵🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🤸",
            category: 1,
            name: "person cartwheeling",
            variations: [
                "🤸🏻",
                "🤸🏼",
                "🤸🏽",
                "🤸🏾",
                "🤸🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "🤸‍♂️",
            category: 1,
            name: "man cartwheeling",
            variations: [
                "🤸🏻‍♂️",
                "🤸🏼‍♂️",
                "🤸🏽‍♂️",
                "🤸🏾‍♂️",
                "🤸🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🤸‍♀️",
            category: 1,
            name: "woman cartwheeling",
            variations: [
                "🤸🏻‍♀️",
                "🤸🏼‍♀️",
                "🤸🏽‍♀️",
                "🤸🏾‍♀️",
                "🤸🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🤼",
            category: 1,
            name: "people wrestling",
            version: "3.0"
        },
        {
            emoji: "🤼‍♂️",
            category: 1,
            name: "men wrestling",
            version: "4.0"
        },
        {
            emoji: "🤼‍♀️",
            category: 1,
            name: "women wrestling",
            version: "4.0"
        },
        {
            emoji: "🤽",
            category: 1,
            name: "person playing water polo",
            variations: [
                "🤽🏻",
                "🤽🏼",
                "🤽🏽",
                "🤽🏾",
                "🤽🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "🤽‍♂️",
            category: 1,
            name: "man playing water polo",
            variations: [
                "🤽🏻‍♂️",
                "🤽🏼‍♂️",
                "🤽🏽‍♂️",
                "🤽🏾‍♂️",
                "🤽🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🤽‍♀️",
            category: 1,
            name: "woman playing water polo",
            variations: [
                "🤽🏻‍♀️",
                "🤽🏼‍♀️",
                "🤽🏽‍♀️",
                "🤽🏾‍♀️",
                "🤽🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🤾",
            category: 1,
            name: "person playing handball",
            variations: [
                "🤾🏻",
                "🤾🏼",
                "🤾🏽",
                "🤾🏾",
                "🤾🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "🤾‍♂️",
            category: 1,
            name: "man playing handball",
            variations: [
                "🤾🏻‍♂️",
                "🤾🏼‍♂️",
                "🤾🏽‍♂️",
                "🤾🏾‍♂️",
                "🤾🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🤾‍♀️",
            category: 1,
            name: "woman playing handball",
            variations: [
                "🤾🏻‍♀️",
                "🤾🏼‍♀️",
                "🤾🏽‍♀️",
                "🤾🏾‍♀️",
                "🤾🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🤹",
            category: 1,
            name: "person juggling",
            variations: [
                "🤹🏻",
                "🤹🏼",
                "🤹🏽",
                "🤹🏾",
                "🤹🏿"
            ],
            version: "3.0"
        },
        {
            emoji: "🤹‍♂️",
            category: 1,
            name: "man juggling",
            variations: [
                "🤹🏻‍♂️",
                "🤹🏼‍♂️",
                "🤹🏽‍♂️",
                "🤹🏾‍♂️",
                "🤹🏿‍♂️"
            ],
            version: "4.0"
        },
        {
            emoji: "🤹‍♀️",
            category: 1,
            name: "woman juggling",
            variations: [
                "🤹🏻‍♀️",
                "🤹🏼‍♀️",
                "🤹🏽‍♀️",
                "🤹🏾‍♀️",
                "🤹🏿‍♀️"
            ],
            version: "4.0"
        },
        {
            emoji: "🧘",
            category: 1,
            name: "person in lotus position",
            variations: [
                "🧘🏻",
                "🧘🏼",
                "🧘🏽",
                "🧘🏾",
                "🧘🏿"
            ],
            version: "5.0"
        },
        {
            emoji: "🧘‍♂️",
            category: 1,
            name: "man in lotus position",
            variations: [
                "🧘🏻‍♂️",
                "🧘🏼‍♂️",
                "🧘🏽‍♂️",
                "🧘🏾‍♂️",
                "🧘🏿‍♂️"
            ],
            version: "5.0"
        },
        {
            emoji: "🧘‍♀️",
            category: 1,
            name: "woman in lotus position",
            variations: [
                "🧘🏻‍♀️",
                "🧘🏼‍♀️",
                "🧘🏽‍♀️",
                "🧘🏾‍♀️",
                "🧘🏿‍♀️"
            ],
            version: "5.0"
        },
        {
            emoji: "🛀",
            category: 1,
            name: "person taking bath",
            variations: [
                "🛀🏻",
                "🛀🏼",
                "🛀🏽",
                "🛀🏾",
                "🛀🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🛌",
            category: 1,
            name: "person in bed",
            variations: [
                "🛌🏻",
                "🛌🏼",
                "🛌🏽",
                "🛌🏾",
                "🛌🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "🧑‍🤝‍🧑",
            category: 1,
            name: "people holding hands",
            variations: [
                "🧑🏻‍🤝‍🧑🏻",
                "🧑🏻‍🤝‍🧑🏼",
                "🧑🏻‍🤝‍🧑🏽",
                "🧑🏻‍🤝‍🧑🏾",
                "🧑🏻‍🤝‍🧑🏿",
                "🧑🏼‍🤝‍🧑🏻",
                "🧑🏼‍🤝‍🧑🏼",
                "🧑🏼‍🤝‍🧑🏽",
                "🧑🏼‍🤝‍🧑🏾",
                "🧑🏼‍🤝‍🧑🏿",
                "🧑🏽‍🤝‍🧑🏻",
                "🧑🏽‍🤝‍🧑🏼",
                "🧑🏽‍🤝‍🧑🏽",
                "🧑🏽‍🤝‍🧑🏾",
                "🧑🏽‍🤝‍🧑🏿",
                "🧑🏾‍🤝‍🧑🏻",
                "🧑🏾‍🤝‍🧑🏼",
                "🧑🏾‍🤝‍🧑🏽",
                "🧑🏾‍🤝‍🧑🏾",
                "🧑🏾‍🤝‍🧑🏿",
                "🧑🏿‍🤝‍🧑🏻",
                "🧑🏿‍🤝‍🧑🏼",
                "🧑🏿‍🤝‍🧑🏽",
                "🧑🏿‍🤝‍🧑🏾",
                "🧑🏿‍🤝‍🧑🏿"
            ],
            version: "12.0"
        },
        {
            emoji: "👭",
            category: 1,
            name: "women holding hands",
            variations: [
                "👭🏻",
                "👩🏻‍🤝‍👩🏼",
                "👩🏻‍🤝‍👩🏽",
                "👩🏻‍🤝‍👩🏾",
                "👩🏻‍🤝‍👩🏿",
                "👩🏼‍🤝‍👩🏻",
                "👭🏼",
                "👩🏼‍🤝‍👩🏽",
                "👩🏼‍🤝‍👩🏾",
                "👩🏼‍🤝‍👩🏿",
                "👩🏽‍🤝‍👩🏻",
                "👩🏽‍🤝‍👩🏼",
                "👭🏽",
                "👩🏽‍🤝‍👩🏾",
                "👩🏽‍🤝‍👩🏿",
                "👩🏾‍🤝‍👩🏻",
                "👩🏾‍🤝‍👩🏼",
                "👩🏾‍🤝‍👩🏽",
                "👭🏾",
                "👩🏾‍🤝‍👩🏿",
                "👩🏿‍🤝‍👩🏻",
                "👩🏿‍🤝‍👩🏼",
                "👩🏿‍🤝‍👩🏽",
                "👩🏿‍🤝‍👩🏾",
                "👭🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👫",
            category: 1,
            name: "woman and man holding hands",
            variations: [
                "👫🏻",
                "👩🏻‍🤝‍👨🏼",
                "👩🏻‍🤝‍👨🏽",
                "👩🏻‍🤝‍👨🏾",
                "👩🏻‍🤝‍👨🏿",
                "👩🏼‍🤝‍👨🏻",
                "👫🏼",
                "👩🏼‍🤝‍👨🏽",
                "👩🏼‍🤝‍👨🏾",
                "👩🏼‍🤝‍👨🏿",
                "👩🏽‍🤝‍👨🏻",
                "👩🏽‍🤝‍👨🏼",
                "👫🏽",
                "👩🏽‍🤝‍👨🏾",
                "👩🏽‍🤝‍👨🏿",
                "👩🏾‍🤝‍👨🏻",
                "👩🏾‍🤝‍👨🏼",
                "👩🏾‍🤝‍👨🏽",
                "👫🏾",
                "👩🏾‍🤝‍👨🏿",
                "👩🏿‍🤝‍👨🏻",
                "👩🏿‍🤝‍👨🏼",
                "👩🏿‍🤝‍👨🏽",
                "👩🏿‍🤝‍👨🏾",
                "👫🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "👬",
            category: 1,
            name: "men holding hands",
            variations: [
                "👬🏻",
                "👨🏻‍🤝‍👨🏼",
                "👨🏻‍🤝‍👨🏽",
                "👨🏻‍🤝‍👨🏾",
                "👨🏻‍🤝‍👨🏿",
                "👨🏼‍🤝‍👨🏻",
                "👬🏼",
                "👨🏼‍🤝‍👨🏽",
                "👨🏼‍🤝‍👨🏾",
                "👨🏼‍🤝‍👨🏿",
                "👨🏽‍🤝‍👨🏻",
                "👨🏽‍🤝‍👨🏼",
                "👬🏽",
                "👨🏽‍🤝‍👨🏾",
                "👨🏽‍🤝‍👨🏿",
                "👨🏾‍🤝‍👨🏻",
                "👨🏾‍🤝‍👨🏼",
                "👨🏾‍🤝‍👨🏽",
                "👬🏾",
                "👨🏾‍🤝‍👨🏿",
                "👨🏿‍🤝‍👨🏻",
                "👨🏿‍🤝‍👨🏼",
                "👨🏿‍🤝‍👨🏽",
                "👨🏿‍🤝‍👨🏾",
                "👬🏿"
            ],
            version: "1.0"
        },
        {
            emoji: "💏",
            category: 1,
            name: "kiss",
            variations: [
                "👩‍❤️‍💋‍👨",
                "👨‍❤️‍💋‍👨",
                "👩‍❤️‍💋‍👩"
            ],
            version: "1.0"
        },
        {
            emoji: "💑",
            category: 1,
            name: "couple with heart",
            variations: [
                "👩‍❤️‍👨",
                "👨‍❤️‍👨",
                "👩‍❤️‍👩"
            ],
            version: "1.0"
        },
        {
            emoji: "👪",
            category: 1,
            name: "family",
            version: "1.0"
        },
        {
            emoji: "👨‍👩‍👦",
            category: 1,
            name: "family: man, woman, boy",
            version: "2.0"
        },
        {
            emoji: "👨‍👩‍👧",
            category: 1,
            name: "family: man, woman, girl",
            version: "2.0"
        },
        {
            emoji: "👨‍👩‍👧‍👦",
            category: 1,
            name: "family: man, woman, girl, boy",
            version: "2.0"
        },
        {
            emoji: "👨‍👩‍👦‍👦",
            category: 1,
            name: "family: man, woman, boy, boy",
            version: "2.0"
        },
        {
            emoji: "👨‍👩‍👧‍👧",
            category: 1,
            name: "family: man, woman, girl, girl",
            version: "2.0"
        },
        {
            emoji: "👨‍👨‍👦",
            category: 1,
            name: "family: man, man, boy",
            version: "2.0"
        },
        {
            emoji: "👨‍👨‍👧",
            category: 1,
            name: "family: man, man, girl",
            version: "2.0"
        },
        {
            emoji: "👨‍👨‍👧‍👦",
            category: 1,
            name: "family: man, man, girl, boy",
            version: "2.0"
        },
        {
            emoji: "👨‍👨‍👦‍👦",
            category: 1,
            name: "family: man, man, boy, boy",
            version: "2.0"
        },
        {
            emoji: "👨‍👨‍👧‍👧",
            category: 1,
            name: "family: man, man, girl, girl",
            version: "2.0"
        },
        {
            emoji: "👩‍👩‍👦",
            category: 1,
            name: "family: woman, woman, boy",
            version: "2.0"
        },
        {
            emoji: "👩‍👩‍👧",
            category: 1,
            name: "family: woman, woman, girl",
            version: "2.0"
        },
        {
            emoji: "👩‍👩‍👧‍👦",
            category: 1,
            name: "family: woman, woman, girl, boy",
            version: "2.0"
        },
        {
            emoji: "👩‍👩‍👦‍👦",
            category: 1,
            name: "family: woman, woman, boy, boy",
            version: "2.0"
        },
        {
            emoji: "👩‍👩‍👧‍👧",
            category: 1,
            name: "family: woman, woman, girl, girl",
            version: "2.0"
        },
        {
            emoji: "👨‍👦",
            category: 1,
            name: "family: man, boy",
            version: "4.0"
        },
        {
            emoji: "👨‍👦‍👦",
            category: 1,
            name: "family: man, boy, boy",
            version: "4.0"
        },
        {
            emoji: "👨‍👧",
            category: 1,
            name: "family: man, girl",
            version: "4.0"
        },
        {
            emoji: "👨‍👧‍👦",
            category: 1,
            name: "family: man, girl, boy",
            version: "4.0"
        },
        {
            emoji: "👨‍👧‍👧",
            category: 1,
            name: "family: man, girl, girl",
            version: "4.0"
        },
        {
            emoji: "👩‍👦",
            category: 1,
            name: "family: woman, boy",
            version: "4.0"
        },
        {
            emoji: "👩‍👦‍👦",
            category: 1,
            name: "family: woman, boy, boy",
            version: "4.0"
        },
        {
            emoji: "👩‍👧",
            category: 1,
            name: "family: woman, girl",
            version: "4.0"
        },
        {
            emoji: "👩‍👧‍👦",
            category: 1,
            name: "family: woman, girl, boy",
            version: "4.0"
        },
        {
            emoji: "👩‍👧‍👧",
            category: 1,
            name: "family: woman, girl, girl",
            version: "4.0"
        },
        {
            emoji: "🗣️",
            category: 1,
            name: "speaking head",
            version: "1.0"
        },
        {
            emoji: "👤",
            category: 1,
            name: "bust in silhouette",
            version: "1.0"
        },
        {
            emoji: "👥",
            category: 1,
            name: "busts in silhouette",
            version: "1.0"
        },
        {
            emoji: "🫂",
            category: 1,
            name: "people hugging",
            version: "13.0"
        },
        {
            emoji: "👣",
            category: 1,
            name: "footprints",
            version: "1.0"
        },
        {
            emoji: "🐵",
            category: 2,
            name: "monkey face",
            version: "1.0"
        },
        {
            emoji: "🐒",
            category: 2,
            name: "monkey",
            version: "1.0"
        },
        {
            emoji: "🦍",
            category: 2,
            name: "gorilla",
            version: "3.0"
        },
        {
            emoji: "🦧",
            category: 2,
            name: "orangutan",
            version: "12.0"
        },
        {
            emoji: "🐶",
            category: 2,
            name: "dog face",
            version: "1.0"
        },
        {
            emoji: "🐕",
            category: 2,
            name: "dog",
            version: "1.0"
        },
        {
            emoji: "🦮",
            category: 2,
            name: "guide dog",
            version: "12.0"
        },
        {
            emoji: "🐕‍🦺",
            category: 2,
            name: "service dog",
            version: "12.0"
        },
        {
            emoji: "🐩",
            category: 2,
            name: "poodle",
            version: "1.0"
        },
        {
            emoji: "🐺",
            category: 2,
            name: "wolf",
            version: "1.0"
        },
        {
            emoji: "🦊",
            category: 2,
            name: "fox",
            version: "3.0"
        },
        {
            emoji: "🦝",
            category: 2,
            name: "raccoon",
            version: "11.0"
        },
        {
            emoji: "🐱",
            category: 2,
            name: "cat face",
            version: "1.0"
        },
        {
            emoji: "🐈",
            category: 2,
            name: "cat",
            version: "1.0"
        },
        {
            emoji: "🐈‍⬛",
            category: 2,
            name: "black cat",
            version: "13.0"
        },
        {
            emoji: "🦁",
            category: 2,
            name: "lion",
            version: "1.0"
        },
        {
            emoji: "🐯",
            category: 2,
            name: "tiger face",
            version: "1.0"
        },
        {
            emoji: "🐅",
            category: 2,
            name: "tiger",
            version: "1.0"
        },
        {
            emoji: "🐆",
            category: 2,
            name: "leopard",
            version: "1.0"
        },
        {
            emoji: "🐴",
            category: 2,
            name: "horse face",
            version: "1.0"
        },
        {
            emoji: "🐎",
            category: 2,
            name: "horse",
            version: "1.0"
        },
        {
            emoji: "🦄",
            category: 2,
            name: "unicorn",
            version: "1.0"
        },
        {
            emoji: "🦓",
            category: 2,
            name: "zebra",
            version: "5.0"
        },
        {
            emoji: "🦌",
            category: 2,
            name: "deer",
            version: "3.0"
        },
        {
            emoji: "🦬",
            category: 2,
            name: "bison",
            version: "13.0"
        },
        {
            emoji: "🐮",
            category: 2,
            name: "cow face",
            version: "1.0"
        },
        {
            emoji: "🐂",
            category: 2,
            name: "ox",
            version: "1.0"
        },
        {
            emoji: "🐃",
            category: 2,
            name: "water buffalo",
            version: "1.0"
        },
        {
            emoji: "🐄",
            category: 2,
            name: "cow",
            version: "1.0"
        },
        {
            emoji: "🐷",
            category: 2,
            name: "pig face",
            version: "1.0"
        },
        {
            emoji: "🐖",
            category: 2,
            name: "pig",
            version: "1.0"
        },
        {
            emoji: "🐗",
            category: 2,
            name: "boar",
            version: "1.0"
        },
        {
            emoji: "🐽",
            category: 2,
            name: "pig nose",
            version: "1.0"
        },
        {
            emoji: "🐏",
            category: 2,
            name: "ram",
            version: "1.0"
        },
        {
            emoji: "🐑",
            category: 2,
            name: "ewe",
            version: "1.0"
        },
        {
            emoji: "🐐",
            category: 2,
            name: "goat",
            version: "1.0"
        },
        {
            emoji: "🐪",
            category: 2,
            name: "camel",
            version: "1.0"
        },
        {
            emoji: "🐫",
            category: 2,
            name: "two-hump camel",
            version: "1.0"
        },
        {
            emoji: "🦙",
            category: 2,
            name: "llama",
            version: "11.0"
        },
        {
            emoji: "🦒",
            category: 2,
            name: "giraffe",
            version: "5.0"
        },
        {
            emoji: "🐘",
            category: 2,
            name: "elephant",
            version: "1.0"
        },
        {
            emoji: "🦣",
            category: 2,
            name: "mammoth",
            version: "13.0"
        },
        {
            emoji: "🦏",
            category: 2,
            name: "rhinoceros",
            version: "3.0"
        },
        {
            emoji: "🦛",
            category: 2,
            name: "hippopotamus",
            version: "11.0"
        },
        {
            emoji: "🐭",
            category: 2,
            name: "mouse face",
            version: "1.0"
        },
        {
            emoji: "🐁",
            category: 2,
            name: "mouse",
            version: "1.0"
        },
        {
            emoji: "🐀",
            category: 2,
            name: "rat",
            version: "1.0"
        },
        {
            emoji: "🐹",
            category: 2,
            name: "hamster",
            version: "1.0"
        },
        {
            emoji: "🐰",
            category: 2,
            name: "rabbit face",
            version: "1.0"
        },
        {
            emoji: "🐇",
            category: 2,
            name: "rabbit",
            version: "1.0"
        },
        {
            emoji: "🐿️",
            category: 2,
            name: "chipmunk",
            version: "1.0"
        },
        {
            emoji: "🦫",
            category: 2,
            name: "beaver",
            version: "13.0"
        },
        {
            emoji: "🦔",
            category: 2,
            name: "hedgehog",
            version: "5.0"
        },
        {
            emoji: "🦇",
            category: 2,
            name: "bat",
            version: "3.0"
        },
        {
            emoji: "🐻",
            category: 2,
            name: "bear",
            version: "1.0"
        },
        {
            emoji: "🐻‍❄️",
            category: 2,
            name: "polar bear",
            version: "13.0"
        },
        {
            emoji: "🐨",
            category: 2,
            name: "koala",
            version: "1.0"
        },
        {
            emoji: "🐼",
            category: 2,
            name: "panda",
            version: "1.0"
        },
        {
            emoji: "🦥",
            category: 2,
            name: "sloth",
            version: "12.0"
        },
        {
            emoji: "🦦",
            category: 2,
            name: "otter",
            version: "12.0"
        },
        {
            emoji: "🦨",
            category: 2,
            name: "skunk",
            version: "12.0"
        },
        {
            emoji: "🦘",
            category: 2,
            name: "kangaroo",
            version: "11.0"
        },
        {
            emoji: "🦡",
            category: 2,
            name: "badger",
            version: "11.0"
        },
        {
            emoji: "🐾",
            category: 2,
            name: "paw prints",
            version: "1.0"
        },
        {
            emoji: "🦃",
            category: 2,
            name: "turkey",
            version: "1.0"
        },
        {
            emoji: "🐔",
            category: 2,
            name: "chicken",
            version: "1.0"
        },
        {
            emoji: "🐓",
            category: 2,
            name: "rooster",
            version: "1.0"
        },
        {
            emoji: "🐣",
            category: 2,
            name: "hatching chick",
            version: "1.0"
        },
        {
            emoji: "🐤",
            category: 2,
            name: "baby chick",
            version: "1.0"
        },
        {
            emoji: "🐥",
            category: 2,
            name: "front-facing baby chick",
            version: "1.0"
        },
        {
            emoji: "🐦",
            category: 2,
            name: "bird",
            version: "1.0"
        },
        {
            emoji: "🐧",
            category: 2,
            name: "penguin",
            version: "1.0"
        },
        {
            emoji: "🕊️",
            category: 2,
            name: "dove",
            version: "1.0"
        },
        {
            emoji: "🦅",
            category: 2,
            name: "eagle",
            version: "3.0"
        },
        {
            emoji: "🦆",
            category: 2,
            name: "duck",
            version: "3.0"
        },
        {
            emoji: "🦢",
            category: 2,
            name: "swan",
            version: "11.0"
        },
        {
            emoji: "🦉",
            category: 2,
            name: "owl",
            version: "3.0"
        },
        {
            emoji: "🦤",
            category: 2,
            name: "dodo",
            version: "13.0"
        },
        {
            emoji: "🪶",
            category: 2,
            name: "feather",
            version: "13.0"
        },
        {
            emoji: "🦩",
            category: 2,
            name: "flamingo",
            version: "12.0"
        },
        {
            emoji: "🦚",
            category: 2,
            name: "peacock",
            version: "11.0"
        },
        {
            emoji: "🦜",
            category: 2,
            name: "parrot",
            version: "11.0"
        },
        {
            emoji: "🐸",
            category: 2,
            name: "frog",
            version: "1.0"
        },
        {
            emoji: "🐊",
            category: 2,
            name: "crocodile",
            version: "1.0"
        },
        {
            emoji: "🐢",
            category: 2,
            name: "turtle",
            version: "1.0"
        },
        {
            emoji: "🦎",
            category: 2,
            name: "lizard",
            version: "3.0"
        },
        {
            emoji: "🐍",
            category: 2,
            name: "snake",
            version: "1.0"
        },
        {
            emoji: "🐲",
            category: 2,
            name: "dragon face",
            version: "1.0"
        },
        {
            emoji: "🐉",
            category: 2,
            name: "dragon",
            version: "1.0"
        },
        {
            emoji: "🦕",
            category: 2,
            name: "sauropod",
            version: "5.0"
        },
        {
            emoji: "🦖",
            category: 2,
            name: "T-Rex",
            version: "5.0"
        },
        {
            emoji: "🐳",
            category: 2,
            name: "spouting whale",
            version: "1.0"
        },
        {
            emoji: "🐋",
            category: 2,
            name: "whale",
            version: "1.0"
        },
        {
            emoji: "🐬",
            category: 2,
            name: "dolphin",
            version: "1.0"
        },
        {
            emoji: "🦭",
            category: 2,
            name: "seal",
            version: "13.0"
        },
        {
            emoji: "🐟",
            category: 2,
            name: "fish",
            version: "1.0"
        },
        {
            emoji: "🐠",
            category: 2,
            name: "tropical fish",
            version: "1.0"
        },
        {
            emoji: "🐡",
            category: 2,
            name: "blowfish",
            version: "1.0"
        },
        {
            emoji: "🦈",
            category: 2,
            name: "shark",
            version: "3.0"
        },
        {
            emoji: "🐙",
            category: 2,
            name: "octopus",
            version: "1.0"
        },
        {
            emoji: "🐚",
            category: 2,
            name: "spiral shell",
            version: "1.0"
        },
        {
            emoji: "🐌",
            category: 2,
            name: "snail",
            version: "1.0"
        },
        {
            emoji: "🦋",
            category: 2,
            name: "butterfly",
            version: "3.0"
        },
        {
            emoji: "🐛",
            category: 2,
            name: "bug",
            version: "1.0"
        },
        {
            emoji: "🐜",
            category: 2,
            name: "ant",
            version: "1.0"
        },
        {
            emoji: "🐝",
            category: 2,
            name: "honeybee",
            version: "1.0"
        },
        {
            emoji: "🪲",
            category: 2,
            name: "beetle",
            version: "13.0"
        },
        {
            emoji: "🐞",
            category: 2,
            name: "lady beetle",
            version: "1.0"
        },
        {
            emoji: "🦗",
            category: 2,
            name: "cricket",
            version: "5.0"
        },
        {
            emoji: "🪳",
            category: 2,
            name: "cockroach",
            version: "13.0"
        },
        {
            emoji: "🕷️",
            category: 2,
            name: "spider",
            version: "1.0"
        },
        {
            emoji: "🕸️",
            category: 2,
            name: "spider web",
            version: "1.0"
        },
        {
            emoji: "🦂",
            category: 2,
            name: "scorpion",
            version: "1.0"
        },
        {
            emoji: "🦟",
            category: 2,
            name: "mosquito",
            version: "11.0"
        },
        {
            emoji: "🪰",
            category: 2,
            name: "fly",
            version: "13.0"
        },
        {
            emoji: "🪱",
            category: 2,
            name: "worm",
            version: "13.0"
        },
        {
            emoji: "🦠",
            category: 2,
            name: "microbe",
            version: "11.0"
        },
        {
            emoji: "💐",
            category: 2,
            name: "bouquet",
            version: "1.0"
        },
        {
            emoji: "🌸",
            category: 2,
            name: "cherry blossom",
            version: "1.0"
        },
        {
            emoji: "💮",
            category: 2,
            name: "white flower",
            version: "1.0"
        },
        {
            emoji: "🏵️",
            category: 2,
            name: "rosette",
            version: "1.0"
        },
        {
            emoji: "🌹",
            category: 2,
            name: "rose",
            version: "1.0"
        },
        {
            emoji: "🥀",
            category: 2,
            name: "wilted flower",
            version: "3.0"
        },
        {
            emoji: "🌺",
            category: 2,
            name: "hibiscus",
            version: "1.0"
        },
        {
            emoji: "🌻",
            category: 2,
            name: "sunflower",
            version: "1.0"
        },
        {
            emoji: "🌼",
            category: 2,
            name: "blossom",
            version: "1.0"
        },
        {
            emoji: "🌷",
            category: 2,
            name: "tulip",
            version: "1.0"
        },
        {
            emoji: "🌱",
            category: 2,
            name: "seedling",
            version: "1.0"
        },
        {
            emoji: "🪴",
            category: 2,
            name: "potted plant",
            version: "13.0"
        },
        {
            emoji: "🌲",
            category: 2,
            name: "evergreen tree",
            version: "1.0"
        },
        {
            emoji: "🌳",
            category: 2,
            name: "deciduous tree",
            version: "1.0"
        },
        {
            emoji: "🌴",
            category: 2,
            name: "palm tree",
            version: "1.0"
        },
        {
            emoji: "🌵",
            category: 2,
            name: "cactus",
            version: "1.0"
        },
        {
            emoji: "🌾",
            category: 2,
            name: "sheaf of rice",
            version: "1.0"
        },
        {
            emoji: "🌿",
            category: 2,
            name: "herb",
            version: "1.0"
        },
        {
            emoji: "☘️",
            category: 2,
            name: "shamrock",
            version: "1.0"
        },
        {
            emoji: "🍀",
            category: 2,
            name: "four leaf clover",
            version: "1.0"
        },
        {
            emoji: "🍁",
            category: 2,
            name: "maple leaf",
            version: "1.0"
        },
        {
            emoji: "🍂",
            category: 2,
            name: "fallen leaf",
            version: "1.0"
        },
        {
            emoji: "🍃",
            category: 2,
            name: "leaf fluttering in wind",
            version: "1.0"
        },
        {
            emoji: "🍇",
            category: 3,
            name: "grapes",
            version: "1.0"
        },
        {
            emoji: "🍈",
            category: 3,
            name: "melon",
            version: "1.0"
        },
        {
            emoji: "🍉",
            category: 3,
            name: "watermelon",
            version: "1.0"
        },
        {
            emoji: "🍊",
            category: 3,
            name: "tangerine",
            version: "1.0"
        },
        {
            emoji: "🍋",
            category: 3,
            name: "lemon",
            version: "1.0"
        },
        {
            emoji: "🍌",
            category: 3,
            name: "banana",
            version: "1.0"
        },
        {
            emoji: "🍍",
            category: 3,
            name: "pineapple",
            version: "1.0"
        },
        {
            emoji: "🥭",
            category: 3,
            name: "mango",
            version: "11.0"
        },
        {
            emoji: "🍎",
            category: 3,
            name: "red apple",
            version: "1.0"
        },
        {
            emoji: "🍏",
            category: 3,
            name: "green apple",
            version: "1.0"
        },
        {
            emoji: "🍐",
            category: 3,
            name: "pear",
            version: "1.0"
        },
        {
            emoji: "🍑",
            category: 3,
            name: "peach",
            version: "1.0"
        },
        {
            emoji: "🍒",
            category: 3,
            name: "cherries",
            version: "1.0"
        },
        {
            emoji: "🍓",
            category: 3,
            name: "strawberry",
            version: "1.0"
        },
        {
            emoji: "🫐",
            category: 3,
            name: "blueberries",
            version: "13.0"
        },
        {
            emoji: "🥝",
            category: 3,
            name: "kiwi fruit",
            version: "3.0"
        },
        {
            emoji: "🍅",
            category: 3,
            name: "tomato",
            version: "1.0"
        },
        {
            emoji: "🫒",
            category: 3,
            name: "olive",
            version: "13.0"
        },
        {
            emoji: "🥥",
            category: 3,
            name: "coconut",
            version: "5.0"
        },
        {
            emoji: "🥑",
            category: 3,
            name: "avocado",
            version: "3.0"
        },
        {
            emoji: "🍆",
            category: 3,
            name: "eggplant",
            version: "1.0"
        },
        {
            emoji: "🥔",
            category: 3,
            name: "potato",
            version: "3.0"
        },
        {
            emoji: "🥕",
            category: 3,
            name: "carrot",
            version: "3.0"
        },
        {
            emoji: "🌽",
            category: 3,
            name: "ear of corn",
            version: "1.0"
        },
        {
            emoji: "🌶️",
            category: 3,
            name: "hot pepper",
            version: "1.0"
        },
        {
            emoji: "🫑",
            category: 3,
            name: "bell pepper",
            version: "13.0"
        },
        {
            emoji: "🥒",
            category: 3,
            name: "cucumber",
            version: "3.0"
        },
        {
            emoji: "🥬",
            category: 3,
            name: "leafy green",
            version: "11.0"
        },
        {
            emoji: "🥦",
            category: 3,
            name: "broccoli",
            version: "5.0"
        },
        {
            emoji: "🧄",
            category: 3,
            name: "garlic",
            version: "12.0"
        },
        {
            emoji: "🧅",
            category: 3,
            name: "onion",
            version: "12.0"
        },
        {
            emoji: "🍄",
            category: 3,
            name: "mushroom",
            version: "1.0"
        },
        {
            emoji: "🥜",
            category: 3,
            name: "peanuts",
            version: "3.0"
        },
        {
            emoji: "🌰",
            category: 3,
            name: "chestnut",
            version: "1.0"
        },
        {
            emoji: "🍞",
            category: 3,
            name: "bread",
            version: "1.0"
        },
        {
            emoji: "🥐",
            category: 3,
            name: "croissant",
            version: "3.0"
        },
        {
            emoji: "🥖",
            category: 3,
            name: "baguette bread",
            version: "3.0"
        },
        {
            emoji: "🫓",
            category: 3,
            name: "flatbread",
            version: "13.0"
        },
        {
            emoji: "🥨",
            category: 3,
            name: "pretzel",
            version: "5.0"
        },
        {
            emoji: "🥯",
            category: 3,
            name: "bagel",
            version: "11.0"
        },
        {
            emoji: "🥞",
            category: 3,
            name: "pancakes",
            version: "3.0"
        },
        {
            emoji: "🧇",
            category: 3,
            name: "waffle",
            version: "12.0"
        },
        {
            emoji: "🧀",
            category: 3,
            name: "cheese wedge",
            version: "1.0"
        },
        {
            emoji: "🍖",
            category: 3,
            name: "meat on bone",
            version: "1.0"
        },
        {
            emoji: "🍗",
            category: 3,
            name: "poultry leg",
            version: "1.0"
        },
        {
            emoji: "🥩",
            category: 3,
            name: "cut of meat",
            version: "5.0"
        },
        {
            emoji: "🥓",
            category: 3,
            name: "bacon",
            version: "3.0"
        },
        {
            emoji: "🍔",
            category: 3,
            name: "hamburger",
            version: "1.0"
        },
        {
            emoji: "🍟",
            category: 3,
            name: "french fries",
            version: "1.0"
        },
        {
            emoji: "🍕",
            category: 3,
            name: "pizza",
            version: "1.0"
        },
        {
            emoji: "🌭",
            category: 3,
            name: "hot dog",
            version: "1.0"
        },
        {
            emoji: "🥪",
            category: 3,
            name: "sandwich",
            version: "5.0"
        },
        {
            emoji: "🌮",
            category: 3,
            name: "taco",
            version: "1.0"
        },
        {
            emoji: "🌯",
            category: 3,
            name: "burrito",
            version: "1.0"
        },
        {
            emoji: "🫔",
            category: 3,
            name: "tamale",
            version: "13.0"
        },
        {
            emoji: "🥙",
            category: 3,
            name: "stuffed flatbread",
            version: "3.0"
        },
        {
            emoji: "🧆",
            category: 3,
            name: "falafel",
            version: "12.0"
        },
        {
            emoji: "🥚",
            category: 3,
            name: "egg",
            version: "3.0"
        },
        {
            emoji: "🍳",
            category: 3,
            name: "cooking",
            version: "1.0"
        },
        {
            emoji: "🥘",
            category: 3,
            name: "shallow pan of food",
            version: "3.0"
        },
        {
            emoji: "🍲",
            category: 3,
            name: "pot of food",
            version: "1.0"
        },
        {
            emoji: "🫕",
            category: 3,
            name: "fondue",
            version: "13.0"
        },
        {
            emoji: "🥣",
            category: 3,
            name: "bowl with spoon",
            version: "5.0"
        },
        {
            emoji: "🥗",
            category: 3,
            name: "green salad",
            version: "3.0"
        },
        {
            emoji: "🍿",
            category: 3,
            name: "popcorn",
            version: "1.0"
        },
        {
            emoji: "🧈",
            category: 3,
            name: "butter",
            version: "12.0"
        },
        {
            emoji: "🧂",
            category: 3,
            name: "salt",
            version: "11.0"
        },
        {
            emoji: "🥫",
            category: 3,
            name: "canned food",
            version: "5.0"
        },
        {
            emoji: "🍱",
            category: 3,
            name: "bento box",
            version: "1.0"
        },
        {
            emoji: "🍘",
            category: 3,
            name: "rice cracker",
            version: "1.0"
        },
        {
            emoji: "🍙",
            category: 3,
            name: "rice ball",
            version: "1.0"
        },
        {
            emoji: "🍚",
            category: 3,
            name: "cooked rice",
            version: "1.0"
        },
        {
            emoji: "🍛",
            category: 3,
            name: "curry rice",
            version: "1.0"
        },
        {
            emoji: "🍜",
            category: 3,
            name: "steaming bowl",
            version: "1.0"
        },
        {
            emoji: "🍝",
            category: 3,
            name: "spaghetti",
            version: "1.0"
        },
        {
            emoji: "🍠",
            category: 3,
            name: "roasted sweet potato",
            version: "1.0"
        },
        {
            emoji: "🍢",
            category: 3,
            name: "oden",
            version: "1.0"
        },
        {
            emoji: "🍣",
            category: 3,
            name: "sushi",
            version: "1.0"
        },
        {
            emoji: "🍤",
            category: 3,
            name: "fried shrimp",
            version: "1.0"
        },
        {
            emoji: "🍥",
            category: 3,
            name: "fish cake with swirl",
            version: "1.0"
        },
        {
            emoji: "🥮",
            category: 3,
            name: "moon cake",
            version: "11.0"
        },
        {
            emoji: "🍡",
            category: 3,
            name: "dango",
            version: "1.0"
        },
        {
            emoji: "🥟",
            category: 3,
            name: "dumpling",
            version: "5.0"
        },
        {
            emoji: "🥠",
            category: 3,
            name: "fortune cookie",
            version: "5.0"
        },
        {
            emoji: "🥡",
            category: 3,
            name: "takeout box",
            version: "5.0"
        },
        {
            emoji: "🦀",
            category: 3,
            name: "crab",
            version: "1.0"
        },
        {
            emoji: "🦞",
            category: 3,
            name: "lobster",
            version: "11.0"
        },
        {
            emoji: "🦐",
            category: 3,
            name: "shrimp",
            version: "3.0"
        },
        {
            emoji: "🦑",
            category: 3,
            name: "squid",
            version: "3.0"
        },
        {
            emoji: "🦪",
            category: 3,
            name: "oyster",
            version: "12.0"
        },
        {
            emoji: "🍦",
            category: 3,
            name: "soft ice cream",
            version: "1.0"
        },
        {
            emoji: "🍧",
            category: 3,
            name: "shaved ice",
            version: "1.0"
        },
        {
            emoji: "🍨",
            category: 3,
            name: "ice cream",
            version: "1.0"
        },
        {
            emoji: "🍩",
            category: 3,
            name: "doughnut",
            version: "1.0"
        },
        {
            emoji: "🍪",
            category: 3,
            name: "cookie",
            version: "1.0"
        },
        {
            emoji: "🎂",
            category: 3,
            name: "birthday cake",
            version: "1.0"
        },
        {
            emoji: "🍰",
            category: 3,
            name: "shortcake",
            version: "1.0"
        },
        {
            emoji: "🧁",
            category: 3,
            name: "cupcake",
            version: "11.0"
        },
        {
            emoji: "🥧",
            category: 3,
            name: "pie",
            version: "5.0"
        },
        {
            emoji: "🍫",
            category: 3,
            name: "chocolate bar",
            version: "1.0"
        },
        {
            emoji: "🍬",
            category: 3,
            name: "candy",
            version: "1.0"
        },
        {
            emoji: "🍭",
            category: 3,
            name: "lollipop",
            version: "1.0"
        },
        {
            emoji: "🍮",
            category: 3,
            name: "custard",
            version: "1.0"
        },
        {
            emoji: "🍯",
            category: 3,
            name: "honey pot",
            version: "1.0"
        },
        {
            emoji: "🍼",
            category: 3,
            name: "baby bottle",
            version: "1.0"
        },
        {
            emoji: "🥛",
            category: 3,
            name: "glass of milk",
            version: "3.0"
        },
        {
            emoji: "☕",
            category: 3,
            name: "hot beverage",
            version: "1.0"
        },
        {
            emoji: "🫖",
            category: 3,
            name: "teapot",
            version: "13.0"
        },
        {
            emoji: "🍵",
            category: 3,
            name: "teacup without handle",
            version: "1.0"
        },
        {
            emoji: "🍶",
            category: 3,
            name: "sake",
            version: "1.0"
        },
        {
            emoji: "🍾",
            category: 3,
            name: "bottle with popping cork",
            version: "1.0"
        },
        {
            emoji: "🍷",
            category: 3,
            name: "wine glass",
            version: "1.0"
        },
        {
            emoji: "🍸",
            category: 3,
            name: "cocktail glass",
            version: "1.0"
        },
        {
            emoji: "🍹",
            category: 3,
            name: "tropical drink",
            version: "1.0"
        },
        {
            emoji: "🍺",
            category: 3,
            name: "beer mug",
            version: "1.0"
        },
        {
            emoji: "🍻",
            category: 3,
            name: "clinking beer mugs",
            version: "1.0"
        },
        {
            emoji: "🥂",
            category: 3,
            name: "clinking glasses",
            version: "3.0"
        },
        {
            emoji: "🥃",
            category: 3,
            name: "tumbler glass",
            version: "3.0"
        },
        {
            emoji: "🥤",
            category: 3,
            name: "cup with straw",
            version: "5.0"
        },
        {
            emoji: "🧋",
            category: 3,
            name: "bubble tea",
            version: "13.0"
        },
        {
            emoji: "🧃",
            category: 3,
            name: "beverage box",
            version: "12.0"
        },
        {
            emoji: "🧉",
            category: 3,
            name: "mate",
            version: "12.0"
        },
        {
            emoji: "🧊",
            category: 3,
            name: "ice",
            version: "12.0"
        },
        {
            emoji: "🥢",
            category: 3,
            name: "chopsticks",
            version: "5.0"
        },
        {
            emoji: "🍽️",
            category: 3,
            name: "fork and knife with plate",
            version: "1.0"
        },
        {
            emoji: "🍴",
            category: 3,
            name: "fork and knife",
            version: "1.0"
        },
        {
            emoji: "🥄",
            category: 3,
            name: "spoon",
            version: "3.0"
        },
        {
            emoji: "🔪",
            category: 3,
            name: "kitchen knife",
            version: "1.0"
        },
        {
            emoji: "🏺",
            category: 3,
            name: "amphora",
            version: "1.0"
        },
        {
            emoji: "🌍",
            category: 4,
            name: "globe showing Europe-Africa",
            version: "1.0"
        },
        {
            emoji: "🌎",
            category: 4,
            name: "globe showing Americas",
            version: "1.0"
        },
        {
            emoji: "🌏",
            category: 4,
            name: "globe showing Asia-Australia",
            version: "1.0"
        },
        {
            emoji: "🌐",
            category: 4,
            name: "globe with meridians",
            version: "1.0"
        },
        {
            emoji: "🗺️",
            category: 4,
            name: "world map",
            version: "1.0"
        },
        {
            emoji: "🗾",
            category: 4,
            name: "map of Japan",
            version: "1.0"
        },
        {
            emoji: "🧭",
            category: 4,
            name: "compass",
            version: "11.0"
        },
        {
            emoji: "🏔️",
            category: 4,
            name: "snow-capped mountain",
            version: "1.0"
        },
        {
            emoji: "⛰️",
            category: 4,
            name: "mountain",
            version: "1.0"
        },
        {
            emoji: "🌋",
            category: 4,
            name: "volcano",
            version: "1.0"
        },
        {
            emoji: "🗻",
            category: 4,
            name: "mount fuji",
            version: "1.0"
        },
        {
            emoji: "🏕️",
            category: 4,
            name: "camping",
            version: "1.0"
        },
        {
            emoji: "🏖️",
            category: 4,
            name: "beach with umbrella",
            version: "1.0"
        },
        {
            emoji: "🏜️",
            category: 4,
            name: "desert",
            version: "1.0"
        },
        {
            emoji: "🏝️",
            category: 4,
            name: "desert island",
            version: "1.0"
        },
        {
            emoji: "🏞️",
            category: 4,
            name: "national park",
            version: "1.0"
        },
        {
            emoji: "🏟️",
            category: 4,
            name: "stadium",
            version: "1.0"
        },
        {
            emoji: "🏛️",
            category: 4,
            name: "classical building",
            version: "1.0"
        },
        {
            emoji: "🏗️",
            category: 4,
            name: "building construction",
            version: "1.0"
        },
        {
            emoji: "🧱",
            category: 4,
            name: "brick",
            version: "11.0"
        },
        {
            emoji: "🪨",
            category: 4,
            name: "rock",
            version: "13.0"
        },
        {
            emoji: "🪵",
            category: 4,
            name: "wood",
            version: "13.0"
        },
        {
            emoji: "🛖",
            category: 4,
            name: "hut",
            version: "13.0"
        },
        {
            emoji: "🏘️",
            category: 4,
            name: "houses",
            version: "1.0"
        },
        {
            emoji: "🏚️",
            category: 4,
            name: "derelict house",
            version: "1.0"
        },
        {
            emoji: "🏠",
            category: 4,
            name: "house",
            version: "1.0"
        },
        {
            emoji: "🏡",
            category: 4,
            name: "house with garden",
            version: "1.0"
        },
        {
            emoji: "🏢",
            category: 4,
            name: "office building",
            version: "1.0"
        },
        {
            emoji: "🏣",
            category: 4,
            name: "Japanese post office",
            version: "1.0"
        },
        {
            emoji: "🏤",
            category: 4,
            name: "post office",
            version: "1.0"
        },
        {
            emoji: "🏥",
            category: 4,
            name: "hospital",
            version: "1.0"
        },
        {
            emoji: "🏦",
            category: 4,
            name: "bank",
            version: "1.0"
        },
        {
            emoji: "🏨",
            category: 4,
            name: "hotel",
            version: "1.0"
        },
        {
            emoji: "🏩",
            category: 4,
            name: "love hotel",
            version: "1.0"
        },
        {
            emoji: "🏪",
            category: 4,
            name: "convenience store",
            version: "1.0"
        },
        {
            emoji: "🏫",
            category: 4,
            name: "school",
            version: "1.0"
        },
        {
            emoji: "🏬",
            category: 4,
            name: "department store",
            version: "1.0"
        },
        {
            emoji: "🏭",
            category: 4,
            name: "factory",
            version: "1.0"
        },
        {
            emoji: "🏯",
            category: 4,
            name: "Japanese castle",
            version: "1.0"
        },
        {
            emoji: "🏰",
            category: 4,
            name: "castle",
            version: "1.0"
        },
        {
            emoji: "💒",
            category: 4,
            name: "wedding",
            version: "1.0"
        },
        {
            emoji: "🗼",
            category: 4,
            name: "Tokyo tower",
            version: "1.0"
        },
        {
            emoji: "🗽",
            category: 4,
            name: "Statue of Liberty",
            version: "1.0"
        },
        {
            emoji: "⛪",
            category: 4,
            name: "church",
            version: "1.0"
        },
        {
            emoji: "🕌",
            category: 4,
            name: "mosque",
            version: "1.0"
        },
        {
            emoji: "🛕",
            category: 4,
            name: "hindu temple",
            version: "12.0"
        },
        {
            emoji: "🕍",
            category: 4,
            name: "synagogue",
            version: "1.0"
        },
        {
            emoji: "⛩️",
            category: 4,
            name: "shinto shrine",
            version: "1.0"
        },
        {
            emoji: "🕋",
            category: 4,
            name: "kaaba",
            version: "1.0"
        },
        {
            emoji: "⛲",
            category: 4,
            name: "fountain",
            version: "1.0"
        },
        {
            emoji: "⛺",
            category: 4,
            name: "tent",
            version: "1.0"
        },
        {
            emoji: "🌁",
            category: 4,
            name: "foggy",
            version: "1.0"
        },
        {
            emoji: "🌃",
            category: 4,
            name: "night with stars",
            version: "1.0"
        },
        {
            emoji: "🏙️",
            category: 4,
            name: "cityscape",
            version: "1.0"
        },
        {
            emoji: "🌄",
            category: 4,
            name: "sunrise over mountains",
            version: "1.0"
        },
        {
            emoji: "🌅",
            category: 4,
            name: "sunrise",
            version: "1.0"
        },
        {
            emoji: "🌆",
            category: 4,
            name: "cityscape at dusk",
            version: "1.0"
        },
        {
            emoji: "🌇",
            category: 4,
            name: "sunset",
            version: "1.0"
        },
        {
            emoji: "🌉",
            category: 4,
            name: "bridge at night",
            version: "1.0"
        },
        {
            emoji: "♨️",
            category: 4,
            name: "hot springs",
            version: "1.0"
        },
        {
            emoji: "🎠",
            category: 4,
            name: "carousel horse",
            version: "1.0"
        },
        {
            emoji: "🎡",
            category: 4,
            name: "ferris wheel",
            version: "1.0"
        },
        {
            emoji: "🎢",
            category: 4,
            name: "roller coaster",
            version: "1.0"
        },
        {
            emoji: "💈",
            category: 4,
            name: "barber pole",
            version: "1.0"
        },
        {
            emoji: "🎪",
            category: 4,
            name: "circus tent",
            version: "1.0"
        },
        {
            emoji: "🚂",
            category: 4,
            name: "locomotive",
            version: "1.0"
        },
        {
            emoji: "🚃",
            category: 4,
            name: "railway car",
            version: "1.0"
        },
        {
            emoji: "🚄",
            category: 4,
            name: "high-speed train",
            version: "1.0"
        },
        {
            emoji: "🚅",
            category: 4,
            name: "bullet train",
            version: "1.0"
        },
        {
            emoji: "🚆",
            category: 4,
            name: "train",
            version: "1.0"
        },
        {
            emoji: "🚇",
            category: 4,
            name: "metro",
            version: "1.0"
        },
        {
            emoji: "🚈",
            category: 4,
            name: "light rail",
            version: "1.0"
        },
        {
            emoji: "🚉",
            category: 4,
            name: "station",
            version: "1.0"
        },
        {
            emoji: "🚊",
            category: 4,
            name: "tram",
            version: "1.0"
        },
        {
            emoji: "🚝",
            category: 4,
            name: "monorail",
            version: "1.0"
        },
        {
            emoji: "🚞",
            category: 4,
            name: "mountain railway",
            version: "1.0"
        },
        {
            emoji: "🚋",
            category: 4,
            name: "tram car",
            version: "1.0"
        },
        {
            emoji: "🚌",
            category: 4,
            name: "bus",
            version: "1.0"
        },
        {
            emoji: "🚍",
            category: 4,
            name: "oncoming bus",
            version: "1.0"
        },
        {
            emoji: "🚎",
            category: 4,
            name: "trolleybus",
            version: "1.0"
        },
        {
            emoji: "🚐",
            category: 4,
            name: "minibus",
            version: "1.0"
        },
        {
            emoji: "🚑",
            category: 4,
            name: "ambulance",
            version: "1.0"
        },
        {
            emoji: "🚒",
            category: 4,
            name: "fire engine",
            version: "1.0"
        },
        {
            emoji: "🚓",
            category: 4,
            name: "police car",
            version: "1.0"
        },
        {
            emoji: "🚔",
            category: 4,
            name: "oncoming police car",
            version: "1.0"
        },
        {
            emoji: "🚕",
            category: 4,
            name: "taxi",
            version: "1.0"
        },
        {
            emoji: "🚖",
            category: 4,
            name: "oncoming taxi",
            version: "1.0"
        },
        {
            emoji: "🚗",
            category: 4,
            name: "automobile",
            version: "1.0"
        },
        {
            emoji: "🚘",
            category: 4,
            name: "oncoming automobile",
            version: "1.0"
        },
        {
            emoji: "🚙",
            category: 4,
            name: "sport utility vehicle",
            version: "1.0"
        },
        {
            emoji: "🛻",
            category: 4,
            name: "pickup truck",
            version: "13.0"
        },
        {
            emoji: "🚚",
            category: 4,
            name: "delivery truck",
            version: "1.0"
        },
        {
            emoji: "🚛",
            category: 4,
            name: "articulated lorry",
            version: "1.0"
        },
        {
            emoji: "🚜",
            category: 4,
            name: "tractor",
            version: "1.0"
        },
        {
            emoji: "🏎️",
            category: 4,
            name: "racing car",
            version: "1.0"
        },
        {
            emoji: "🏍️",
            category: 4,
            name: "motorcycle",
            version: "1.0"
        },
        {
            emoji: "🛵",
            category: 4,
            name: "motor scooter",
            version: "3.0"
        },
        {
            emoji: "🦽",
            category: 4,
            name: "manual wheelchair",
            version: "12.0"
        },
        {
            emoji: "🦼",
            category: 4,
            name: "motorized wheelchair",
            version: "12.0"
        },
        {
            emoji: "🛺",
            category: 4,
            name: "auto rickshaw",
            version: "12.0"
        },
        {
            emoji: "🚲",
            category: 4,
            name: "bicycle",
            version: "1.0"
        },
        {
            emoji: "🛴",
            category: 4,
            name: "kick scooter",
            version: "3.0"
        },
        {
            emoji: "🛹",
            category: 4,
            name: "skateboard",
            version: "11.0"
        },
        {
            emoji: "🛼",
            category: 4,
            name: "roller skate",
            version: "13.0"
        },
        {
            emoji: "🚏",
            category: 4,
            name: "bus stop",
            version: "1.0"
        },
        {
            emoji: "🛣️",
            category: 4,
            name: "motorway",
            version: "1.0"
        },
        {
            emoji: "🛤️",
            category: 4,
            name: "railway track",
            version: "1.0"
        },
        {
            emoji: "🛢️",
            category: 4,
            name: "oil drum",
            version: "1.0"
        },
        {
            emoji: "⛽",
            category: 4,
            name: "fuel pump",
            version: "1.0"
        },
        {
            emoji: "🚨",
            category: 4,
            name: "police car light",
            version: "1.0"
        },
        {
            emoji: "🚥",
            category: 4,
            name: "horizontal traffic light",
            version: "1.0"
        },
        {
            emoji: "🚦",
            category: 4,
            name: "vertical traffic light",
            version: "1.0"
        },
        {
            emoji: "🛑",
            category: 4,
            name: "stop sign",
            version: "3.0"
        },
        {
            emoji: "🚧",
            category: 4,
            name: "construction",
            version: "1.0"
        },
        {
            emoji: "⚓",
            category: 4,
            name: "anchor",
            version: "1.0"
        },
        {
            emoji: "⛵",
            category: 4,
            name: "sailboat",
            version: "1.0"
        },
        {
            emoji: "🛶",
            category: 4,
            name: "canoe",
            version: "3.0"
        },
        {
            emoji: "🚤",
            category: 4,
            name: "speedboat",
            version: "1.0"
        },
        {
            emoji: "🛳️",
            category: 4,
            name: "passenger ship",
            version: "1.0"
        },
        {
            emoji: "⛴️",
            category: 4,
            name: "ferry",
            version: "1.0"
        },
        {
            emoji: "🛥️",
            category: 4,
            name: "motor boat",
            version: "1.0"
        },
        {
            emoji: "🚢",
            category: 4,
            name: "ship",
            version: "1.0"
        },
        {
            emoji: "✈️",
            category: 4,
            name: "airplane",
            version: "1.0"
        },
        {
            emoji: "🛩️",
            category: 4,
            name: "small airplane",
            version: "1.0"
        },
        {
            emoji: "🛫",
            category: 4,
            name: "airplane departure",
            version: "1.0"
        },
        {
            emoji: "🛬",
            category: 4,
            name: "airplane arrival",
            version: "1.0"
        },
        {
            emoji: "🪂",
            category: 4,
            name: "parachute",
            version: "12.0"
        },
        {
            emoji: "💺",
            category: 4,
            name: "seat",
            version: "1.0"
        },
        {
            emoji: "🚁",
            category: 4,
            name: "helicopter",
            version: "1.0"
        },
        {
            emoji: "🚟",
            category: 4,
            name: "suspension railway",
            version: "1.0"
        },
        {
            emoji: "🚠",
            category: 4,
            name: "mountain cableway",
            version: "1.0"
        },
        {
            emoji: "🚡",
            category: 4,
            name: "aerial tramway",
            version: "1.0"
        },
        {
            emoji: "🛰️",
            category: 4,
            name: "satellite",
            version: "1.0"
        },
        {
            emoji: "🚀",
            category: 4,
            name: "rocket",
            version: "1.0"
        },
        {
            emoji: "🛸",
            category: 4,
            name: "flying saucer",
            version: "5.0"
        },
        {
            emoji: "🛎️",
            category: 4,
            name: "bellhop bell",
            version: "1.0"
        },
        {
            emoji: "🧳",
            category: 4,
            name: "luggage",
            version: "11.0"
        },
        {
            emoji: "⌛",
            category: 4,
            name: "hourglass done",
            version: "1.0"
        },
        {
            emoji: "⏳",
            category: 4,
            name: "hourglass not done",
            version: "1.0"
        },
        {
            emoji: "⌚",
            category: 4,
            name: "watch",
            version: "1.0"
        },
        {
            emoji: "⏰",
            category: 4,
            name: "alarm clock",
            version: "1.0"
        },
        {
            emoji: "⏱️",
            category: 4,
            name: "stopwatch",
            version: "1.0"
        },
        {
            emoji: "⏲️",
            category: 4,
            name: "timer clock",
            version: "1.0"
        },
        {
            emoji: "🕰️",
            category: 4,
            name: "mantelpiece clock",
            version: "1.0"
        },
        {
            emoji: "🕛",
            category: 4,
            name: "twelve o’clock",
            version: "1.0"
        },
        {
            emoji: "🕧",
            category: 4,
            name: "twelve-thirty",
            version: "1.0"
        },
        {
            emoji: "🕐",
            category: 4,
            name: "one o’clock",
            version: "1.0"
        },
        {
            emoji: "🕜",
            category: 4,
            name: "one-thirty",
            version: "1.0"
        },
        {
            emoji: "🕑",
            category: 4,
            name: "two o’clock",
            version: "1.0"
        },
        {
            emoji: "🕝",
            category: 4,
            name: "two-thirty",
            version: "1.0"
        },
        {
            emoji: "🕒",
            category: 4,
            name: "three o’clock",
            version: "1.0"
        },
        {
            emoji: "🕞",
            category: 4,
            name: "three-thirty",
            version: "1.0"
        },
        {
            emoji: "🕓",
            category: 4,
            name: "four o’clock",
            version: "1.0"
        },
        {
            emoji: "🕟",
            category: 4,
            name: "four-thirty",
            version: "1.0"
        },
        {
            emoji: "🕔",
            category: 4,
            name: "five o’clock",
            version: "1.0"
        },
        {
            emoji: "🕠",
            category: 4,
            name: "five-thirty",
            version: "1.0"
        },
        {
            emoji: "🕕",
            category: 4,
            name: "six o’clock",
            version: "1.0"
        },
        {
            emoji: "🕡",
            category: 4,
            name: "six-thirty",
            version: "1.0"
        },
        {
            emoji: "🕖",
            category: 4,
            name: "seven o’clock",
            version: "1.0"
        },
        {
            emoji: "🕢",
            category: 4,
            name: "seven-thirty",
            version: "1.0"
        },
        {
            emoji: "🕗",
            category: 4,
            name: "eight o’clock",
            version: "1.0"
        },
        {
            emoji: "🕣",
            category: 4,
            name: "eight-thirty",
            version: "1.0"
        },
        {
            emoji: "🕘",
            category: 4,
            name: "nine o’clock",
            version: "1.0"
        },
        {
            emoji: "🕤",
            category: 4,
            name: "nine-thirty",
            version: "1.0"
        },
        {
            emoji: "🕙",
            category: 4,
            name: "ten o’clock",
            version: "1.0"
        },
        {
            emoji: "🕥",
            category: 4,
            name: "ten-thirty",
            version: "1.0"
        },
        {
            emoji: "🕚",
            category: 4,
            name: "eleven o’clock",
            version: "1.0"
        },
        {
            emoji: "🕦",
            category: 4,
            name: "eleven-thirty",
            version: "1.0"
        },
        {
            emoji: "🌑",
            category: 4,
            name: "new moon",
            version: "1.0"
        },
        {
            emoji: "🌒",
            category: 4,
            name: "waxing crescent moon",
            version: "1.0"
        },
        {
            emoji: "🌓",
            category: 4,
            name: "first quarter moon",
            version: "1.0"
        },
        {
            emoji: "🌔",
            category: 4,
            name: "waxing gibbous moon",
            version: "1.0"
        },
        {
            emoji: "🌕",
            category: 4,
            name: "full moon",
            version: "1.0"
        },
        {
            emoji: "🌖",
            category: 4,
            name: "waning gibbous moon",
            version: "1.0"
        },
        {
            emoji: "🌗",
            category: 4,
            name: "last quarter moon",
            version: "1.0"
        },
        {
            emoji: "🌘",
            category: 4,
            name: "waning crescent moon",
            version: "1.0"
        },
        {
            emoji: "🌙",
            category: 4,
            name: "crescent moon",
            version: "1.0"
        },
        {
            emoji: "🌚",
            category: 4,
            name: "new moon face",
            version: "1.0"
        },
        {
            emoji: "🌛",
            category: 4,
            name: "first quarter moon face",
            version: "1.0"
        },
        {
            emoji: "🌜",
            category: 4,
            name: "last quarter moon face",
            version: "1.0"
        },
        {
            emoji: "🌡️",
            category: 4,
            name: "thermometer",
            version: "1.0"
        },
        {
            emoji: "☀️",
            category: 4,
            name: "sun",
            version: "1.0"
        },
        {
            emoji: "🌝",
            category: 4,
            name: "full moon face",
            version: "1.0"
        },
        {
            emoji: "🌞",
            category: 4,
            name: "sun with face",
            version: "1.0"
        },
        {
            emoji: "🪐",
            category: 4,
            name: "ringed planet",
            version: "12.0"
        },
        {
            emoji: "⭐",
            category: 4,
            name: "star",
            version: "1.0"
        },
        {
            emoji: "🌟",
            category: 4,
            name: "glowing star",
            version: "1.0"
        },
        {
            emoji: "🌠",
            category: 4,
            name: "shooting star",
            version: "1.0"
        },
        {
            emoji: "🌌",
            category: 4,
            name: "milky way",
            version: "1.0"
        },
        {
            emoji: "☁️",
            category: 4,
            name: "cloud",
            version: "1.0"
        },
        {
            emoji: "⛅",
            category: 4,
            name: "sun behind cloud",
            version: "1.0"
        },
        {
            emoji: "⛈️",
            category: 4,
            name: "cloud with lightning and rain",
            version: "1.0"
        },
        {
            emoji: "🌤️",
            category: 4,
            name: "sun behind small cloud",
            version: "1.0"
        },
        {
            emoji: "🌥️",
            category: 4,
            name: "sun behind large cloud",
            version: "1.0"
        },
        {
            emoji: "🌦️",
            category: 4,
            name: "sun behind rain cloud",
            version: "1.0"
        },
        {
            emoji: "🌧️",
            category: 4,
            name: "cloud with rain",
            version: "1.0"
        },
        {
            emoji: "🌨️",
            category: 4,
            name: "cloud with snow",
            version: "1.0"
        },
        {
            emoji: "🌩️",
            category: 4,
            name: "cloud with lightning",
            version: "1.0"
        },
        {
            emoji: "🌪️",
            category: 4,
            name: "tornado",
            version: "1.0"
        },
        {
            emoji: "🌫️",
            category: 4,
            name: "fog",
            version: "1.0"
        },
        {
            emoji: "🌬️",
            category: 4,
            name: "wind face",
            version: "1.0"
        },
        {
            emoji: "🌀",
            category: 4,
            name: "cyclone",
            version: "1.0"
        },
        {
            emoji: "🌈",
            category: 4,
            name: "rainbow",
            version: "1.0"
        },
        {
            emoji: "🌂",
            category: 4,
            name: "closed umbrella",
            version: "1.0"
        },
        {
            emoji: "☂️",
            category: 4,
            name: "umbrella",
            version: "1.0"
        },
        {
            emoji: "☔",
            category: 4,
            name: "umbrella with rain drops",
            version: "1.0"
        },
        {
            emoji: "⛱️",
            category: 4,
            name: "umbrella on ground",
            version: "1.0"
        },
        {
            emoji: "⚡",
            category: 4,
            name: "high voltage",
            version: "1.0"
        },
        {
            emoji: "❄️",
            category: 4,
            name: "snowflake",
            version: "1.0"
        },
        {
            emoji: "☃️",
            category: 4,
            name: "snowman",
            version: "1.0"
        },
        {
            emoji: "⛄",
            category: 4,
            name: "snowman without snow",
            version: "1.0"
        },
        {
            emoji: "☄️",
            category: 4,
            name: "comet",
            version: "1.0"
        },
        {
            emoji: "🔥",
            category: 4,
            name: "fire",
            version: "1.0"
        },
        {
            emoji: "💧",
            category: 4,
            name: "droplet",
            version: "1.0"
        },
        {
            emoji: "🌊",
            category: 4,
            name: "water wave",
            version: "1.0"
        },
        {
            emoji: "🎃",
            category: 5,
            name: "jack-o-lantern",
            version: "1.0"
        },
        {
            emoji: "🎄",
            category: 5,
            name: "Christmas tree",
            version: "1.0"
        },
        {
            emoji: "🎆",
            category: 5,
            name: "fireworks",
            version: "1.0"
        },
        {
            emoji: "🎇",
            category: 5,
            name: "sparkler",
            version: "1.0"
        },
        {
            emoji: "🧨",
            category: 5,
            name: "firecracker",
            version: "11.0"
        },
        {
            emoji: "✨",
            category: 5,
            name: "sparkles",
            version: "1.0"
        },
        {
            emoji: "🎈",
            category: 5,
            name: "balloon",
            version: "1.0"
        },
        {
            emoji: "🎉",
            category: 5,
            name: "party popper",
            version: "1.0"
        },
        {
            emoji: "🎊",
            category: 5,
            name: "confetti ball",
            version: "1.0"
        },
        {
            emoji: "🎋",
            category: 5,
            name: "tanabata tree",
            version: "1.0"
        },
        {
            emoji: "🎍",
            category: 5,
            name: "pine decoration",
            version: "1.0"
        },
        {
            emoji: "🎎",
            category: 5,
            name: "Japanese dolls",
            version: "1.0"
        },
        {
            emoji: "🎏",
            category: 5,
            name: "carp streamer",
            version: "1.0"
        },
        {
            emoji: "🎐",
            category: 5,
            name: "wind chime",
            version: "1.0"
        },
        {
            emoji: "🎑",
            category: 5,
            name: "moon viewing ceremony",
            version: "1.0"
        },
        {
            emoji: "🧧",
            category: 5,
            name: "red envelope",
            version: "11.0"
        },
        {
            emoji: "🎀",
            category: 5,
            name: "ribbon",
            version: "1.0"
        },
        {
            emoji: "🎁",
            category: 5,
            name: "wrapped gift",
            version: "1.0"
        },
        {
            emoji: "🎗️",
            category: 5,
            name: "reminder ribbon",
            version: "1.0"
        },
        {
            emoji: "🎟️",
            category: 5,
            name: "admission tickets",
            version: "1.0"
        },
        {
            emoji: "🎫",
            category: 5,
            name: "ticket",
            version: "1.0"
        },
        {
            emoji: "🎖️",
            category: 5,
            name: "military medal",
            version: "1.0"
        },
        {
            emoji: "🏆",
            category: 5,
            name: "trophy",
            version: "1.0"
        },
        {
            emoji: "🏅",
            category: 5,
            name: "sports medal",
            version: "1.0"
        },
        {
            emoji: "🥇",
            category: 5,
            name: "1st place medal",
            version: "3.0"
        },
        {
            emoji: "🥈",
            category: 5,
            name: "2nd place medal",
            version: "3.0"
        },
        {
            emoji: "🥉",
            category: 5,
            name: "3rd place medal",
            version: "3.0"
        },
        {
            emoji: "⚽",
            category: 5,
            name: "soccer ball",
            version: "1.0"
        },
        {
            emoji: "⚾",
            category: 5,
            name: "baseball",
            version: "1.0"
        },
        {
            emoji: "🥎",
            category: 5,
            name: "softball",
            version: "11.0"
        },
        {
            emoji: "🏀",
            category: 5,
            name: "basketball",
            version: "1.0"
        },
        {
            emoji: "🏐",
            category: 5,
            name: "volleyball",
            version: "1.0"
        },
        {
            emoji: "🏈",
            category: 5,
            name: "american football",
            version: "1.0"
        },
        {
            emoji: "🏉",
            category: 5,
            name: "rugby football",
            version: "1.0"
        },
        {
            emoji: "🎾",
            category: 5,
            name: "tennis",
            version: "1.0"
        },
        {
            emoji: "🥏",
            category: 5,
            name: "flying disc",
            version: "11.0"
        },
        {
            emoji: "🎳",
            category: 5,
            name: "bowling",
            version: "1.0"
        },
        {
            emoji: "🏏",
            category: 5,
            name: "cricket game",
            version: "1.0"
        },
        {
            emoji: "🏑",
            category: 5,
            name: "field hockey",
            version: "1.0"
        },
        {
            emoji: "🏒",
            category: 5,
            name: "ice hockey",
            version: "1.0"
        },
        {
            emoji: "🥍",
            category: 5,
            name: "lacrosse",
            version: "11.0"
        },
        {
            emoji: "🏓",
            category: 5,
            name: "ping pong",
            version: "1.0"
        },
        {
            emoji: "🏸",
            category: 5,
            name: "badminton",
            version: "1.0"
        },
        {
            emoji: "🥊",
            category: 5,
            name: "boxing glove",
            version: "3.0"
        },
        {
            emoji: "🥋",
            category: 5,
            name: "martial arts uniform",
            version: "3.0"
        },
        {
            emoji: "🥅",
            category: 5,
            name: "goal net",
            version: "3.0"
        },
        {
            emoji: "⛳",
            category: 5,
            name: "flag in hole",
            version: "1.0"
        },
        {
            emoji: "⛸️",
            category: 5,
            name: "ice skate",
            version: "1.0"
        },
        {
            emoji: "🎣",
            category: 5,
            name: "fishing pole",
            version: "1.0"
        },
        {
            emoji: "🤿",
            category: 5,
            name: "diving mask",
            version: "12.0"
        },
        {
            emoji: "🎽",
            category: 5,
            name: "running shirt",
            version: "1.0"
        },
        {
            emoji: "🎿",
            category: 5,
            name: "skis",
            version: "1.0"
        },
        {
            emoji: "🛷",
            category: 5,
            name: "sled",
            version: "5.0"
        },
        {
            emoji: "🥌",
            category: 5,
            name: "curling stone",
            version: "5.0"
        },
        {
            emoji: "🎯",
            category: 5,
            name: "direct hit",
            version: "1.0"
        },
        {
            emoji: "🪀",
            category: 5,
            name: "yo-yo",
            version: "12.0"
        },
        {
            emoji: "🪁",
            category: 5,
            name: "kite",
            version: "12.0"
        },
        {
            emoji: "🎱",
            category: 5,
            name: "pool 8 ball",
            version: "1.0"
        },
        {
            emoji: "🔮",
            category: 5,
            name: "crystal ball",
            version: "1.0"
        },
        {
            emoji: "🪄",
            category: 5,
            name: "magic wand",
            version: "13.0"
        },
        {
            emoji: "🧿",
            category: 5,
            name: "nazar amulet",
            version: "11.0"
        },
        {
            emoji: "🎮",
            category: 5,
            name: "video game",
            version: "1.0"
        },
        {
            emoji: "🕹️",
            category: 5,
            name: "joystick",
            version: "1.0"
        },
        {
            emoji: "🎰",
            category: 5,
            name: "slot machine",
            version: "1.0"
        },
        {
            emoji: "🎲",
            category: 5,
            name: "game die",
            version: "1.0"
        },
        {
            emoji: "🧩",
            category: 5,
            name: "puzzle piece",
            version: "11.0"
        },
        {
            emoji: "🧸",
            category: 5,
            name: "teddy bear",
            version: "11.0"
        },
        {
            emoji: "🪅",
            category: 5,
            name: "piñata",
            version: "13.0"
        },
        {
            emoji: "🪆",
            category: 5,
            name: "nesting dolls",
            version: "13.0"
        },
        {
            emoji: "♠️",
            category: 5,
            name: "spade suit",
            version: "1.0"
        },
        {
            emoji: "♥️",
            category: 5,
            name: "heart suit",
            version: "1.0"
        },
        {
            emoji: "♦️",
            category: 5,
            name: "diamond suit",
            version: "1.0"
        },
        {
            emoji: "♣️",
            category: 5,
            name: "club suit",
            version: "1.0"
        },
        {
            emoji: "♟️",
            category: 5,
            name: "chess pawn",
            version: "11.0"
        },
        {
            emoji: "🃏",
            category: 5,
            name: "joker",
            version: "1.0"
        },
        {
            emoji: "🀄",
            category: 5,
            name: "mahjong red dragon",
            version: "1.0"
        },
        {
            emoji: "🎴",
            category: 5,
            name: "flower playing cards",
            version: "1.0"
        },
        {
            emoji: "🎭",
            category: 5,
            name: "performing arts",
            version: "1.0"
        },
        {
            emoji: "🖼️",
            category: 5,
            name: "framed picture",
            version: "1.0"
        },
        {
            emoji: "🎨",
            category: 5,
            name: "artist palette",
            version: "1.0"
        },
        {
            emoji: "🧵",
            category: 5,
            name: "thread",
            version: "11.0"
        },
        {
            emoji: "🪡",
            category: 5,
            name: "sewing needle",
            version: "13.0"
        },
        {
            emoji: "🧶",
            category: 5,
            name: "yarn",
            version: "11.0"
        },
        {
            emoji: "🪢",
            category: 5,
            name: "knot",
            version: "13.0"
        },
        {
            emoji: "👓",
            category: 6,
            name: "glasses",
            version: "1.0"
        },
        {
            emoji: "🕶️",
            category: 6,
            name: "sunglasses",
            version: "1.0"
        },
        {
            emoji: "🥽",
            category: 6,
            name: "goggles",
            version: "11.0"
        },
        {
            emoji: "🥼",
            category: 6,
            name: "lab coat",
            version: "11.0"
        },
        {
            emoji: "🦺",
            category: 6,
            name: "safety vest",
            version: "12.0"
        },
        {
            emoji: "👔",
            category: 6,
            name: "necktie",
            version: "1.0"
        },
        {
            emoji: "👕",
            category: 6,
            name: "t-shirt",
            version: "1.0"
        },
        {
            emoji: "👖",
            category: 6,
            name: "jeans",
            version: "1.0"
        },
        {
            emoji: "🧣",
            category: 6,
            name: "scarf",
            version: "5.0"
        },
        {
            emoji: "🧤",
            category: 6,
            name: "gloves",
            version: "5.0"
        },
        {
            emoji: "🧥",
            category: 6,
            name: "coat",
            version: "5.0"
        },
        {
            emoji: "🧦",
            category: 6,
            name: "socks",
            version: "5.0"
        },
        {
            emoji: "👗",
            category: 6,
            name: "dress",
            version: "1.0"
        },
        {
            emoji: "👘",
            category: 6,
            name: "kimono",
            version: "1.0"
        },
        {
            emoji: "🥻",
            category: 6,
            name: "sari",
            version: "12.0"
        },
        {
            emoji: "🩱",
            category: 6,
            name: "one-piece swimsuit",
            version: "12.0"
        },
        {
            emoji: "🩲",
            category: 6,
            name: "briefs",
            version: "12.0"
        },
        {
            emoji: "🩳",
            category: 6,
            name: "shorts",
            version: "12.0"
        },
        {
            emoji: "👙",
            category: 6,
            name: "bikini",
            version: "1.0"
        },
        {
            emoji: "👚",
            category: 6,
            name: "woman’s clothes",
            version: "1.0"
        },
        {
            emoji: "👛",
            category: 6,
            name: "purse",
            version: "1.0"
        },
        {
            emoji: "👜",
            category: 6,
            name: "handbag",
            version: "1.0"
        },
        {
            emoji: "👝",
            category: 6,
            name: "clutch bag",
            version: "1.0"
        },
        {
            emoji: "🛍️",
            category: 6,
            name: "shopping bags",
            version: "1.0"
        },
        {
            emoji: "🎒",
            category: 6,
            name: "backpack",
            version: "1.0"
        },
        {
            emoji: "🩴",
            category: 6,
            name: "thong sandal",
            version: "13.0"
        },
        {
            emoji: "👞",
            category: 6,
            name: "man’s shoe",
            version: "1.0"
        },
        {
            emoji: "👟",
            category: 6,
            name: "running shoe",
            version: "1.0"
        },
        {
            emoji: "🥾",
            category: 6,
            name: "hiking boot",
            version: "11.0"
        },
        {
            emoji: "🥿",
            category: 6,
            name: "flat shoe",
            version: "11.0"
        },
        {
            emoji: "👠",
            category: 6,
            name: "high-heeled shoe",
            version: "1.0"
        },
        {
            emoji: "👡",
            category: 6,
            name: "woman’s sandal",
            version: "1.0"
        },
        {
            emoji: "🩰",
            category: 6,
            name: "ballet shoes",
            version: "12.0"
        },
        {
            emoji: "👢",
            category: 6,
            name: "woman’s boot",
            version: "1.0"
        },
        {
            emoji: "👑",
            category: 6,
            name: "crown",
            version: "1.0"
        },
        {
            emoji: "👒",
            category: 6,
            name: "woman’s hat",
            version: "1.0"
        },
        {
            emoji: "🎩",
            category: 6,
            name: "top hat",
            version: "1.0"
        },
        {
            emoji: "🎓",
            category: 6,
            name: "graduation cap",
            version: "1.0"
        },
        {
            emoji: "🧢",
            category: 6,
            name: "billed cap",
            version: "5.0"
        },
        {
            emoji: "🪖",
            category: 6,
            name: "military helmet",
            version: "13.0"
        },
        {
            emoji: "⛑️",
            category: 6,
            name: "rescue worker’s helmet",
            version: "1.0"
        },
        {
            emoji: "📿",
            category: 6,
            name: "prayer beads",
            version: "1.0"
        },
        {
            emoji: "💄",
            category: 6,
            name: "lipstick",
            version: "1.0"
        },
        {
            emoji: "💍",
            category: 6,
            name: "ring",
            version: "1.0"
        },
        {
            emoji: "💎",
            category: 6,
            name: "gem stone",
            version: "1.0"
        },
        {
            emoji: "🔇",
            category: 6,
            name: "muted speaker",
            version: "1.0"
        },
        {
            emoji: "🔈",
            category: 6,
            name: "speaker low volume",
            version: "1.0"
        },
        {
            emoji: "🔉",
            category: 6,
            name: "speaker medium volume",
            version: "1.0"
        },
        {
            emoji: "🔊",
            category: 6,
            name: "speaker high volume",
            version: "1.0"
        },
        {
            emoji: "📢",
            category: 6,
            name: "loudspeaker",
            version: "1.0"
        },
        {
            emoji: "📣",
            category: 6,
            name: "megaphone",
            version: "1.0"
        },
        {
            emoji: "📯",
            category: 6,
            name: "postal horn",
            version: "1.0"
        },
        {
            emoji: "🔔",
            category: 6,
            name: "bell",
            version: "1.0"
        },
        {
            emoji: "🔕",
            category: 6,
            name: "bell with slash",
            version: "1.0"
        },
        {
            emoji: "🎼",
            category: 6,
            name: "musical score",
            version: "1.0"
        },
        {
            emoji: "🎵",
            category: 6,
            name: "musical note",
            version: "1.0"
        },
        {
            emoji: "🎶",
            category: 6,
            name: "musical notes",
            version: "1.0"
        },
        {
            emoji: "🎙️",
            category: 6,
            name: "studio microphone",
            version: "1.0"
        },
        {
            emoji: "🎚️",
            category: 6,
            name: "level slider",
            version: "1.0"
        },
        {
            emoji: "🎛️",
            category: 6,
            name: "control knobs",
            version: "1.0"
        },
        {
            emoji: "🎤",
            category: 6,
            name: "microphone",
            version: "1.0"
        },
        {
            emoji: "🎧",
            category: 6,
            name: "headphone",
            version: "1.0"
        },
        {
            emoji: "📻",
            category: 6,
            name: "radio",
            version: "1.0"
        },
        {
            emoji: "🎷",
            category: 6,
            name: "saxophone",
            version: "1.0"
        },
        {
            emoji: "🪗",
            category: 6,
            name: "accordion",
            version: "13.0"
        },
        {
            emoji: "🎸",
            category: 6,
            name: "guitar",
            version: "1.0"
        },
        {
            emoji: "🎹",
            category: 6,
            name: "musical keyboard",
            version: "1.0"
        },
        {
            emoji: "🎺",
            category: 6,
            name: "trumpet",
            version: "1.0"
        },
        {
            emoji: "🎻",
            category: 6,
            name: "violin",
            version: "1.0"
        },
        {
            emoji: "🪕",
            category: 6,
            name: "banjo",
            version: "12.0"
        },
        {
            emoji: "🥁",
            category: 6,
            name: "drum",
            version: "3.0"
        },
        {
            emoji: "🪘",
            category: 6,
            name: "long drum",
            version: "13.0"
        },
        {
            emoji: "📱",
            category: 6,
            name: "mobile phone",
            version: "1.0"
        },
        {
            emoji: "📲",
            category: 6,
            name: "mobile phone with arrow",
            version: "1.0"
        },
        {
            emoji: "☎️",
            category: 6,
            name: "telephone",
            version: "1.0"
        },
        {
            emoji: "📞",
            category: 6,
            name: "telephone receiver",
            version: "1.0"
        },
        {
            emoji: "📟",
            category: 6,
            name: "pager",
            version: "1.0"
        },
        {
            emoji: "📠",
            category: 6,
            name: "fax machine",
            version: "1.0"
        },
        {
            emoji: "🔋",
            category: 6,
            name: "battery",
            version: "1.0"
        },
        {
            emoji: "🔌",
            category: 6,
            name: "electric plug",
            version: "1.0"
        },
        {
            emoji: "💻",
            category: 6,
            name: "laptop",
            version: "1.0"
        },
        {
            emoji: "🖥️",
            category: 6,
            name: "desktop computer",
            version: "1.0"
        },
        {
            emoji: "🖨️",
            category: 6,
            name: "printer",
            version: "1.0"
        },
        {
            emoji: "⌨️",
            category: 6,
            name: "keyboard",
            version: "1.0"
        },
        {
            emoji: "🖱️",
            category: 6,
            name: "computer mouse",
            version: "1.0"
        },
        {
            emoji: "🖲️",
            category: 6,
            name: "trackball",
            version: "1.0"
        },
        {
            emoji: "💽",
            category: 6,
            name: "computer disk",
            version: "1.0"
        },
        {
            emoji: "💾",
            category: 6,
            name: "floppy disk",
            version: "1.0"
        },
        {
            emoji: "💿",
            category: 6,
            name: "optical disk",
            version: "1.0"
        },
        {
            emoji: "📀",
            category: 6,
            name: "dvd",
            version: "1.0"
        },
        {
            emoji: "🧮",
            category: 6,
            name: "abacus",
            version: "11.0"
        },
        {
            emoji: "🎥",
            category: 6,
            name: "movie camera",
            version: "1.0"
        },
        {
            emoji: "🎞️",
            category: 6,
            name: "film frames",
            version: "1.0"
        },
        {
            emoji: "📽️",
            category: 6,
            name: "film projector",
            version: "1.0"
        },
        {
            emoji: "🎬",
            category: 6,
            name: "clapper board",
            version: "1.0"
        },
        {
            emoji: "📺",
            category: 6,
            name: "television",
            version: "1.0"
        },
        {
            emoji: "📷",
            category: 6,
            name: "camera",
            version: "1.0"
        },
        {
            emoji: "📸",
            category: 6,
            name: "camera with flash",
            version: "1.0"
        },
        {
            emoji: "📹",
            category: 6,
            name: "video camera",
            version: "1.0"
        },
        {
            emoji: "📼",
            category: 6,
            name: "videocassette",
            version: "1.0"
        },
        {
            emoji: "🔍",
            category: 6,
            name: "magnifying glass tilted left",
            version: "1.0"
        },
        {
            emoji: "🔎",
            category: 6,
            name: "magnifying glass tilted right",
            version: "1.0"
        },
        {
            emoji: "🕯️",
            category: 6,
            name: "candle",
            version: "1.0"
        },
        {
            emoji: "💡",
            category: 6,
            name: "light bulb",
            version: "1.0"
        },
        {
            emoji: "🔦",
            category: 6,
            name: "flashlight",
            version: "1.0"
        },
        {
            emoji: "🏮",
            category: 6,
            name: "red paper lantern",
            version: "1.0"
        },
        {
            emoji: "🪔",
            category: 6,
            name: "diya lamp",
            version: "12.0"
        },
        {
            emoji: "📔",
            category: 6,
            name: "notebook with decorative cover",
            version: "1.0"
        },
        {
            emoji: "📕",
            category: 6,
            name: "closed book",
            version: "1.0"
        },
        {
            emoji: "📖",
            category: 6,
            name: "open book",
            version: "1.0"
        },
        {
            emoji: "📗",
            category: 6,
            name: "green book",
            version: "1.0"
        },
        {
            emoji: "📘",
            category: 6,
            name: "blue book",
            version: "1.0"
        },
        {
            emoji: "📙",
            category: 6,
            name: "orange book",
            version: "1.0"
        },
        {
            emoji: "📚",
            category: 6,
            name: "books",
            version: "1.0"
        },
        {
            emoji: "📓",
            category: 6,
            name: "notebook",
            version: "1.0"
        },
        {
            emoji: "📒",
            category: 6,
            name: "ledger",
            version: "1.0"
        },
        {
            emoji: "📃",
            category: 6,
            name: "page with curl",
            version: "1.0"
        },
        {
            emoji: "📜",
            category: 6,
            name: "scroll",
            version: "1.0"
        },
        {
            emoji: "📄",
            category: 6,
            name: "page facing up",
            version: "1.0"
        },
        {
            emoji: "📰",
            category: 6,
            name: "newspaper",
            version: "1.0"
        },
        {
            emoji: "🗞️",
            category: 6,
            name: "rolled-up newspaper",
            version: "1.0"
        },
        {
            emoji: "📑",
            category: 6,
            name: "bookmark tabs",
            version: "1.0"
        },
        {
            emoji: "🔖",
            category: 6,
            name: "bookmark",
            version: "1.0"
        },
        {
            emoji: "🏷️",
            category: 6,
            name: "label",
            version: "1.0"
        },
        {
            emoji: "💰",
            category: 6,
            name: "money bag",
            version: "1.0"
        },
        {
            emoji: "🪙",
            category: 6,
            name: "coin",
            version: "13.0"
        },
        {
            emoji: "💴",
            category: 6,
            name: "yen banknote",
            version: "1.0"
        },
        {
            emoji: "💵",
            category: 6,
            name: "dollar banknote",
            version: "1.0"
        },
        {
            emoji: "💶",
            category: 6,
            name: "euro banknote",
            version: "1.0"
        },
        {
            emoji: "💷",
            category: 6,
            name: "pound banknote",
            version: "1.0"
        },
        {
            emoji: "💸",
            category: 6,
            name: "money with wings",
            version: "1.0"
        },
        {
            emoji: "💳",
            category: 6,
            name: "credit card",
            version: "1.0"
        },
        {
            emoji: "🧾",
            category: 6,
            name: "receipt",
            version: "11.0"
        },
        {
            emoji: "💹",
            category: 6,
            name: "chart increasing with yen",
            version: "1.0"
        },
        {
            emoji: "✉️",
            category: 6,
            name: "envelope",
            version: "1.0"
        },
        {
            emoji: "📧",
            category: 6,
            name: "e-mail",
            version: "1.0"
        },
        {
            emoji: "📨",
            category: 6,
            name: "incoming envelope",
            version: "1.0"
        },
        {
            emoji: "📩",
            category: 6,
            name: "envelope with arrow",
            version: "1.0"
        },
        {
            emoji: "📤",
            category: 6,
            name: "outbox tray",
            version: "1.0"
        },
        {
            emoji: "📥",
            category: 6,
            name: "inbox tray",
            version: "1.0"
        },
        {
            emoji: "📦",
            category: 6,
            name: "package",
            version: "1.0"
        },
        {
            emoji: "📫",
            category: 6,
            name: "closed mailbox with raised flag",
            version: "1.0"
        },
        {
            emoji: "📪",
            category: 6,
            name: "closed mailbox with lowered flag",
            version: "1.0"
        },
        {
            emoji: "📬",
            category: 6,
            name: "open mailbox with raised flag",
            version: "1.0"
        },
        {
            emoji: "📭",
            category: 6,
            name: "open mailbox with lowered flag",
            version: "1.0"
        },
        {
            emoji: "📮",
            category: 6,
            name: "postbox",
            version: "1.0"
        },
        {
            emoji: "🗳️",
            category: 6,
            name: "ballot box with ballot",
            version: "1.0"
        },
        {
            emoji: "✏️",
            category: 6,
            name: "pencil",
            version: "1.0"
        },
        {
            emoji: "✒️",
            category: 6,
            name: "black nib",
            version: "1.0"
        },
        {
            emoji: "🖋️",
            category: 6,
            name: "fountain pen",
            version: "1.0"
        },
        {
            emoji: "🖊️",
            category: 6,
            name: "pen",
            version: "1.0"
        },
        {
            emoji: "🖌️",
            category: 6,
            name: "paintbrush",
            version: "1.0"
        },
        {
            emoji: "🖍️",
            category: 6,
            name: "crayon",
            version: "1.0"
        },
        {
            emoji: "📝",
            category: 6,
            name: "memo",
            version: "1.0"
        },
        {
            emoji: "💼",
            category: 6,
            name: "briefcase",
            version: "1.0"
        },
        {
            emoji: "📁",
            category: 6,
            name: "file folder",
            version: "1.0"
        },
        {
            emoji: "📂",
            category: 6,
            name: "open file folder",
            version: "1.0"
        },
        {
            emoji: "🗂️",
            category: 6,
            name: "card index dividers",
            version: "1.0"
        },
        {
            emoji: "📅",
            category: 6,
            name: "calendar",
            version: "1.0"
        },
        {
            emoji: "📆",
            category: 6,
            name: "tear-off calendar",
            version: "1.0"
        },
        {
            emoji: "🗒️",
            category: 6,
            name: "spiral notepad",
            version: "1.0"
        },
        {
            emoji: "🗓️",
            category: 6,
            name: "spiral calendar",
            version: "1.0"
        },
        {
            emoji: "📇",
            category: 6,
            name: "card index",
            version: "1.0"
        },
        {
            emoji: "📈",
            category: 6,
            name: "chart increasing",
            version: "1.0"
        },
        {
            emoji: "📉",
            category: 6,
            name: "chart decreasing",
            version: "1.0"
        },
        {
            emoji: "📊",
            category: 6,
            name: "bar chart",
            version: "1.0"
        },
        {
            emoji: "📋",
            category: 6,
            name: "clipboard",
            version: "1.0"
        },
        {
            emoji: "📌",
            category: 6,
            name: "pushpin",
            version: "1.0"
        },
        {
            emoji: "📍",
            category: 6,
            name: "round pushpin",
            version: "1.0"
        },
        {
            emoji: "📎",
            category: 6,
            name: "paperclip",
            version: "1.0"
        },
        {
            emoji: "🖇️",
            category: 6,
            name: "linked paperclips",
            version: "1.0"
        },
        {
            emoji: "📏",
            category: 6,
            name: "straight ruler",
            version: "1.0"
        },
        {
            emoji: "📐",
            category: 6,
            name: "triangular ruler",
            version: "1.0"
        },
        {
            emoji: "✂️",
            category: 6,
            name: "scissors",
            version: "1.0"
        },
        {
            emoji: "🗃️",
            category: 6,
            name: "card file box",
            version: "1.0"
        },
        {
            emoji: "🗄️",
            category: 6,
            name: "file cabinet",
            version: "1.0"
        },
        {
            emoji: "🗑️",
            category: 6,
            name: "wastebasket",
            version: "1.0"
        },
        {
            emoji: "🔒",
            category: 6,
            name: "locked",
            version: "1.0"
        },
        {
            emoji: "🔓",
            category: 6,
            name: "unlocked",
            version: "1.0"
        },
        {
            emoji: "🔏",
            category: 6,
            name: "locked with pen",
            version: "1.0"
        },
        {
            emoji: "🔐",
            category: 6,
            name: "locked with key",
            version: "1.0"
        },
        {
            emoji: "🔑",
            category: 6,
            name: "key",
            version: "1.0"
        },
        {
            emoji: "🗝️",
            category: 6,
            name: "old key",
            version: "1.0"
        },
        {
            emoji: "🔨",
            category: 6,
            name: "hammer",
            version: "1.0"
        },
        {
            emoji: "🪓",
            category: 6,
            name: "axe",
            version: "12.0"
        },
        {
            emoji: "⛏️",
            category: 6,
            name: "pick",
            version: "1.0"
        },
        {
            emoji: "⚒️",
            category: 6,
            name: "hammer and pick",
            version: "1.0"
        },
        {
            emoji: "🛠️",
            category: 6,
            name: "hammer and wrench",
            version: "1.0"
        },
        {
            emoji: "🗡️",
            category: 6,
            name: "dagger",
            version: "1.0"
        },
        {
            emoji: "⚔️",
            category: 6,
            name: "crossed swords",
            version: "1.0"
        },
        {
            emoji: "🔫",
            category: 6,
            name: "pistol",
            version: "1.0"
        },
        {
            emoji: "🪃",
            category: 6,
            name: "boomerang",
            version: "13.0"
        },
        {
            emoji: "🏹",
            category: 6,
            name: "bow and arrow",
            version: "1.0"
        },
        {
            emoji: "🛡️",
            category: 6,
            name: "shield",
            version: "1.0"
        },
        {
            emoji: "🪚",
            category: 6,
            name: "carpentry saw",
            version: "13.0"
        },
        {
            emoji: "🔧",
            category: 6,
            name: "wrench",
            version: "1.0"
        },
        {
            emoji: "🪛",
            category: 6,
            name: "screwdriver",
            version: "13.0"
        },
        {
            emoji: "🔩",
            category: 6,
            name: "nut and bolt",
            version: "1.0"
        },
        {
            emoji: "⚙️",
            category: 6,
            name: "gear",
            version: "1.0"
        },
        {
            emoji: "🗜️",
            category: 6,
            name: "clamp",
            version: "1.0"
        },
        {
            emoji: "⚖️",
            category: 6,
            name: "balance scale",
            version: "1.0"
        },
        {
            emoji: "🦯",
            category: 6,
            name: "white cane",
            version: "12.0"
        },
        {
            emoji: "🔗",
            category: 6,
            name: "link",
            version: "1.0"
        },
        {
            emoji: "⛓️",
            category: 6,
            name: "chains",
            version: "1.0"
        },
        {
            emoji: "🪝",
            category: 6,
            name: "hook",
            version: "13.0"
        },
        {
            emoji: "🧰",
            category: 6,
            name: "toolbox",
            version: "11.0"
        },
        {
            emoji: "🧲",
            category: 6,
            name: "magnet",
            version: "11.0"
        },
        {
            emoji: "🪜",
            category: 6,
            name: "ladder",
            version: "13.0"
        },
        {
            emoji: "⚗️",
            category: 6,
            name: "alembic",
            version: "1.0"
        },
        {
            emoji: "🧪",
            category: 6,
            name: "test tube",
            version: "11.0"
        },
        {
            emoji: "🧫",
            category: 6,
            name: "petri dish",
            version: "11.0"
        },
        {
            emoji: "🧬",
            category: 6,
            name: "dna",
            version: "11.0"
        },
        {
            emoji: "🔬",
            category: 6,
            name: "microscope",
            version: "1.0"
        },
        {
            emoji: "🔭",
            category: 6,
            name: "telescope",
            version: "1.0"
        },
        {
            emoji: "📡",
            category: 6,
            name: "satellite antenna",
            version: "1.0"
        },
        {
            emoji: "💉",
            category: 6,
            name: "syringe",
            version: "1.0"
        },
        {
            emoji: "🩸",
            category: 6,
            name: "drop of blood",
            version: "12.0"
        },
        {
            emoji: "💊",
            category: 6,
            name: "pill",
            version: "1.0"
        },
        {
            emoji: "🩹",
            category: 6,
            name: "adhesive bandage",
            version: "12.0"
        },
        {
            emoji: "🩺",
            category: 6,
            name: "stethoscope",
            version: "12.0"
        },
        {
            emoji: "🚪",
            category: 6,
            name: "door",
            version: "1.0"
        },
        {
            emoji: "🛗",
            category: 6,
            name: "elevator",
            version: "13.0"
        },
        {
            emoji: "🪞",
            category: 6,
            name: "mirror",
            version: "13.0"
        },
        {
            emoji: "🪟",
            category: 6,
            name: "window",
            version: "13.0"
        },
        {
            emoji: "🛏️",
            category: 6,
            name: "bed",
            version: "1.0"
        },
        {
            emoji: "🛋️",
            category: 6,
            name: "couch and lamp",
            version: "1.0"
        },
        {
            emoji: "🪑",
            category: 6,
            name: "chair",
            version: "12.0"
        },
        {
            emoji: "🚽",
            category: 6,
            name: "toilet",
            version: "1.0"
        },
        {
            emoji: "🪠",
            category: 6,
            name: "plunger",
            version: "13.0"
        },
        {
            emoji: "🚿",
            category: 6,
            name: "shower",
            version: "1.0"
        },
        {
            emoji: "🛁",
            category: 6,
            name: "bathtub",
            version: "1.0"
        },
        {
            emoji: "🪤",
            category: 6,
            name: "mouse trap",
            version: "13.0"
        },
        {
            emoji: "🪒",
            category: 6,
            name: "razor",
            version: "12.0"
        },
        {
            emoji: "🧴",
            category: 6,
            name: "lotion bottle",
            version: "11.0"
        },
        {
            emoji: "🧷",
            category: 6,
            name: "safety pin",
            version: "11.0"
        },
        {
            emoji: "🧹",
            category: 6,
            name: "broom",
            version: "11.0"
        },
        {
            emoji: "🧺",
            category: 6,
            name: "basket",
            version: "11.0"
        },
        {
            emoji: "🧻",
            category: 6,
            name: "roll of paper",
            version: "11.0"
        },
        {
            emoji: "🪣",
            category: 6,
            name: "bucket",
            version: "13.0"
        },
        {
            emoji: "🧼",
            category: 6,
            name: "soap",
            version: "11.0"
        },
        {
            emoji: "🪥",
            category: 6,
            name: "toothbrush",
            version: "13.0"
        },
        {
            emoji: "🧽",
            category: 6,
            name: "sponge",
            version: "11.0"
        },
        {
            emoji: "🧯",
            category: 6,
            name: "fire extinguisher",
            version: "11.0"
        },
        {
            emoji: "🛒",
            category: 6,
            name: "shopping cart",
            version: "3.0"
        },
        {
            emoji: "🚬",
            category: 6,
            name: "cigarette",
            version: "1.0"
        },
        {
            emoji: "⚰️",
            category: 6,
            name: "coffin",
            version: "1.0"
        },
        {
            emoji: "🪦",
            category: 6,
            name: "headstone",
            version: "13.0"
        },
        {
            emoji: "⚱️",
            category: 6,
            name: "funeral urn",
            version: "1.0"
        },
        {
            emoji: "🗿",
            category: 6,
            name: "moai",
            version: "1.0"
        },
        {
            emoji: "🪧",
            category: 6,
            name: "placard",
            version: "13.0"
        },
        {
            emoji: "🏧",
            category: 7,
            name: "ATM sign",
            version: "1.0"
        },
        {
            emoji: "🚮",
            category: 7,
            name: "litter in bin sign",
            version: "1.0"
        },
        {
            emoji: "🚰",
            category: 7,
            name: "potable water",
            version: "1.0"
        },
        {
            emoji: "♿",
            category: 7,
            name: "wheelchair symbol",
            version: "1.0"
        },
        {
            emoji: "🚹",
            category: 7,
            name: "men’s room",
            version: "1.0"
        },
        {
            emoji: "🚺",
            category: 7,
            name: "women’s room",
            version: "1.0"
        },
        {
            emoji: "🚻",
            category: 7,
            name: "restroom",
            version: "1.0"
        },
        {
            emoji: "🚼",
            category: 7,
            name: "baby symbol",
            version: "1.0"
        },
        {
            emoji: "🚾",
            category: 7,
            name: "water closet",
            version: "1.0"
        },
        {
            emoji: "🛂",
            category: 7,
            name: "passport control",
            version: "1.0"
        },
        {
            emoji: "🛃",
            category: 7,
            name: "customs",
            version: "1.0"
        },
        {
            emoji: "🛄",
            category: 7,
            name: "baggage claim",
            version: "1.0"
        },
        {
            emoji: "🛅",
            category: 7,
            name: "left luggage",
            version: "1.0"
        },
        {
            emoji: "⚠️",
            category: 7,
            name: "warning",
            version: "1.0"
        },
        {
            emoji: "🚸",
            category: 7,
            name: "children crossing",
            version: "1.0"
        },
        {
            emoji: "⛔",
            category: 7,
            name: "no entry",
            version: "1.0"
        },
        {
            emoji: "🚫",
            category: 7,
            name: "prohibited",
            version: "1.0"
        },
        {
            emoji: "🚳",
            category: 7,
            name: "no bicycles",
            version: "1.0"
        },
        {
            emoji: "🚭",
            category: 7,
            name: "no smoking",
            version: "1.0"
        },
        {
            emoji: "🚯",
            category: 7,
            name: "no littering",
            version: "1.0"
        },
        {
            emoji: "🚱",
            category: 7,
            name: "non-potable water",
            version: "1.0"
        },
        {
            emoji: "🚷",
            category: 7,
            name: "no pedestrians",
            version: "1.0"
        },
        {
            emoji: "📵",
            category: 7,
            name: "no mobile phones",
            version: "1.0"
        },
        {
            emoji: "🔞",
            category: 7,
            name: "no one under eighteen",
            version: "1.0"
        },
        {
            emoji: "☢️",
            category: 7,
            name: "radioactive",
            version: "1.0"
        },
        {
            emoji: "☣️",
            category: 7,
            name: "biohazard",
            version: "1.0"
        },
        {
            emoji: "⬆️",
            category: 7,
            name: "up arrow",
            version: "1.0"
        },
        {
            emoji: "↗️",
            category: 7,
            name: "up-right arrow",
            version: "1.0"
        },
        {
            emoji: "➡️",
            category: 7,
            name: "right arrow",
            version: "1.0"
        },
        {
            emoji: "↘️",
            category: 7,
            name: "down-right arrow",
            version: "1.0"
        },
        {
            emoji: "⬇️",
            category: 7,
            name: "down arrow",
            version: "1.0"
        },
        {
            emoji: "↙️",
            category: 7,
            name: "down-left arrow",
            version: "1.0"
        },
        {
            emoji: "⬅️",
            category: 7,
            name: "left arrow",
            version: "1.0"
        },
        {
            emoji: "↖️",
            category: 7,
            name: "up-left arrow",
            version: "1.0"
        },
        {
            emoji: "↕️",
            category: 7,
            name: "up-down arrow",
            version: "1.0"
        },
        {
            emoji: "↔️",
            category: 7,
            name: "left-right arrow",
            version: "1.0"
        },
        {
            emoji: "↩️",
            category: 7,
            name: "right arrow curving left",
            version: "1.0"
        },
        {
            emoji: "↪️",
            category: 7,
            name: "left arrow curving right",
            version: "1.0"
        },
        {
            emoji: "⤴️",
            category: 7,
            name: "right arrow curving up",
            version: "1.0"
        },
        {
            emoji: "⤵️",
            category: 7,
            name: "right arrow curving down",
            version: "1.0"
        },
        {
            emoji: "🔃",
            category: 7,
            name: "clockwise vertical arrows",
            version: "1.0"
        },
        {
            emoji: "🔄",
            category: 7,
            name: "counterclockwise arrows button",
            version: "1.0"
        },
        {
            emoji: "🔙",
            category: 7,
            name: "BACK arrow",
            version: "1.0"
        },
        {
            emoji: "🔚",
            category: 7,
            name: "END arrow",
            version: "1.0"
        },
        {
            emoji: "🔛",
            category: 7,
            name: "ON! arrow",
            version: "1.0"
        },
        {
            emoji: "🔜",
            category: 7,
            name: "SOON arrow",
            version: "1.0"
        },
        {
            emoji: "🔝",
            category: 7,
            name: "TOP arrow",
            version: "1.0"
        },
        {
            emoji: "🛐",
            category: 7,
            name: "place of worship",
            version: "1.0"
        },
        {
            emoji: "⚛️",
            category: 7,
            name: "atom symbol",
            version: "1.0"
        },
        {
            emoji: "🕉️",
            category: 7,
            name: "om",
            version: "1.0"
        },
        {
            emoji: "✡️",
            category: 7,
            name: "star of David",
            version: "1.0"
        },
        {
            emoji: "☸️",
            category: 7,
            name: "wheel of dharma",
            version: "1.0"
        },
        {
            emoji: "☯️",
            category: 7,
            name: "yin yang",
            version: "1.0"
        },
        {
            emoji: "✝️",
            category: 7,
            name: "latin cross",
            version: "1.0"
        },
        {
            emoji: "☦️",
            category: 7,
            name: "orthodox cross",
            version: "1.0"
        },
        {
            emoji: "☪️",
            category: 7,
            name: "star and crescent",
            version: "1.0"
        },
        {
            emoji: "☮️",
            category: 7,
            name: "peace symbol",
            version: "1.0"
        },
        {
            emoji: "🕎",
            category: 7,
            name: "menorah",
            version: "1.0"
        },
        {
            emoji: "🔯",
            category: 7,
            name: "dotted six-pointed star",
            version: "1.0"
        },
        {
            emoji: "♈",
            category: 7,
            name: "Aries",
            version: "1.0"
        },
        {
            emoji: "♉",
            category: 7,
            name: "Taurus",
            version: "1.0"
        },
        {
            emoji: "♊",
            category: 7,
            name: "Gemini",
            version: "1.0"
        },
        {
            emoji: "♋",
            category: 7,
            name: "Cancer",
            version: "1.0"
        },
        {
            emoji: "♌",
            category: 7,
            name: "Leo",
            version: "1.0"
        },
        {
            emoji: "♍",
            category: 7,
            name: "Virgo",
            version: "1.0"
        },
        {
            emoji: "♎",
            category: 7,
            name: "Libra",
            version: "1.0"
        },
        {
            emoji: "♏",
            category: 7,
            name: "Scorpio",
            version: "1.0"
        },
        {
            emoji: "♐",
            category: 7,
            name: "Sagittarius",
            version: "1.0"
        },
        {
            emoji: "♑",
            category: 7,
            name: "Capricorn",
            version: "1.0"
        },
        {
            emoji: "♒",
            category: 7,
            name: "Aquarius",
            version: "1.0"
        },
        {
            emoji: "♓",
            category: 7,
            name: "Pisces",
            version: "1.0"
        },
        {
            emoji: "⛎",
            category: 7,
            name: "Ophiuchus",
            version: "1.0"
        },
        {
            emoji: "🔀",
            category: 7,
            name: "shuffle tracks button",
            version: "1.0"
        },
        {
            emoji: "🔁",
            category: 7,
            name: "repeat button",
            version: "1.0"
        },
        {
            emoji: "🔂",
            category: 7,
            name: "repeat single button",
            version: "1.0"
        },
        {
            emoji: "▶️",
            category: 7,
            name: "play button",
            version: "1.0"
        },
        {
            emoji: "⏩",
            category: 7,
            name: "fast-forward button",
            version: "1.0"
        },
        {
            emoji: "⏭️",
            category: 7,
            name: "next track button",
            version: "1.0"
        },
        {
            emoji: "⏯️",
            category: 7,
            name: "play or pause button",
            version: "1.0"
        },
        {
            emoji: "◀️",
            category: 7,
            name: "reverse button",
            version: "1.0"
        },
        {
            emoji: "⏪",
            category: 7,
            name: "fast reverse button",
            version: "1.0"
        },
        {
            emoji: "⏮️",
            category: 7,
            name: "last track button",
            version: "1.0"
        },
        {
            emoji: "🔼",
            category: 7,
            name: "upwards button",
            version: "1.0"
        },
        {
            emoji: "⏫",
            category: 7,
            name: "fast up button",
            version: "1.0"
        },
        {
            emoji: "🔽",
            category: 7,
            name: "downwards button",
            version: "1.0"
        },
        {
            emoji: "⏬",
            category: 7,
            name: "fast down button",
            version: "1.0"
        },
        {
            emoji: "⏸️",
            category: 7,
            name: "pause button",
            version: "1.0"
        },
        {
            emoji: "⏹️",
            category: 7,
            name: "stop button",
            version: "1.0"
        },
        {
            emoji: "⏺️",
            category: 7,
            name: "record button",
            version: "1.0"
        },
        {
            emoji: "⏏️",
            category: 7,
            name: "eject button",
            version: "1.0"
        },
        {
            emoji: "🎦",
            category: 7,
            name: "cinema",
            version: "1.0"
        },
        {
            emoji: "🔅",
            category: 7,
            name: "dim button",
            version: "1.0"
        },
        {
            emoji: "🔆",
            category: 7,
            name: "bright button",
            version: "1.0"
        },
        {
            emoji: "📶",
            category: 7,
            name: "antenna bars",
            version: "1.0"
        },
        {
            emoji: "📳",
            category: 7,
            name: "vibration mode",
            version: "1.0"
        },
        {
            emoji: "📴",
            category: 7,
            name: "mobile phone off",
            version: "1.0"
        },
        {
            emoji: "♀️",
            category: 7,
            name: "female sign",
            version: "4.0"
        },
        {
            emoji: "♂️",
            category: 7,
            name: "male sign",
            version: "4.0"
        },
        {
            emoji: "⚧️",
            category: 7,
            name: "transgender symbol",
            version: "13.0"
        },
        {
            emoji: "✖️",
            category: 7,
            name: "multiply",
            version: "1.0"
        },
        {
            emoji: "➕",
            category: 7,
            name: "plus",
            version: "1.0"
        },
        {
            emoji: "➖",
            category: 7,
            name: "minus",
            version: "1.0"
        },
        {
            emoji: "➗",
            category: 7,
            name: "divide",
            version: "1.0"
        },
        {
            emoji: "♾️",
            category: 7,
            name: "infinity",
            version: "11.0"
        },
        {
            emoji: "‼️",
            category: 7,
            name: "double exclamation mark",
            version: "1.0"
        },
        {
            emoji: "⁉️",
            category: 7,
            name: "exclamation question mark",
            version: "1.0"
        },
        {
            emoji: "❓",
            category: 7,
            name: "question mark",
            version: "1.0"
        },
        {
            emoji: "❔",
            category: 7,
            name: "white question mark",
            version: "1.0"
        },
        {
            emoji: "❕",
            category: 7,
            name: "white exclamation mark",
            version: "1.0"
        },
        {
            emoji: "❗",
            category: 7,
            name: "exclamation mark",
            version: "1.0"
        },
        {
            emoji: "〰️",
            category: 7,
            name: "wavy dash",
            version: "1.0"
        },
        {
            emoji: "💱",
            category: 7,
            name: "currency exchange",
            version: "1.0"
        },
        {
            emoji: "💲",
            category: 7,
            name: "heavy dollar sign",
            version: "1.0"
        },
        {
            emoji: "⚕️",
            category: 7,
            name: "medical symbol",
            version: "4.0"
        },
        {
            emoji: "♻️",
            category: 7,
            name: "recycling symbol",
            version: "1.0"
        },
        {
            emoji: "⚜️",
            category: 7,
            name: "fleur-de-lis",
            version: "1.0"
        },
        {
            emoji: "🔱",
            category: 7,
            name: "trident emblem",
            version: "1.0"
        },
        {
            emoji: "📛",
            category: 7,
            name: "name badge",
            version: "1.0"
        },
        {
            emoji: "🔰",
            category: 7,
            name: "Japanese symbol for beginner",
            version: "1.0"
        },
        {
            emoji: "⭕",
            category: 7,
            name: "hollow red circle",
            version: "1.0"
        },
        {
            emoji: "✅",
            category: 7,
            name: "check mark button",
            version: "1.0"
        },
        {
            emoji: "☑️",
            category: 7,
            name: "check box with check",
            version: "1.0"
        },
        {
            emoji: "✔️",
            category: 7,
            name: "check mark",
            version: "1.0"
        },
        {
            emoji: "❌",
            category: 7,
            name: "cross mark",
            version: "1.0"
        },
        {
            emoji: "❎",
            category: 7,
            name: "cross mark button",
            version: "1.0"
        },
        {
            emoji: "➰",
            category: 7,
            name: "curly loop",
            version: "1.0"
        },
        {
            emoji: "➿",
            category: 7,
            name: "double curly loop",
            version: "1.0"
        },
        {
            emoji: "〽️",
            category: 7,
            name: "part alternation mark",
            version: "1.0"
        },
        {
            emoji: "✳️",
            category: 7,
            name: "eight-spoked asterisk",
            version: "1.0"
        },
        {
            emoji: "✴️",
            category: 7,
            name: "eight-pointed star",
            version: "1.0"
        },
        {
            emoji: "❇️",
            category: 7,
            name: "sparkle",
            version: "1.0"
        },
        {
            emoji: "©️",
            category: 7,
            name: "copyright",
            version: "1.0"
        },
        {
            emoji: "®️",
            category: 7,
            name: "registered",
            version: "1.0"
        },
        {
            emoji: "™️",
            category: 7,
            name: "trade mark",
            version: "1.0"
        },
        {
            emoji: "#️⃣",
            category: 7,
            name: "keycap: #",
            version: "1.0"
        },
        {
            emoji: "*️⃣",
            category: 7,
            name: "keycap: *",
            version: "2.0"
        },
        {
            emoji: "0️⃣",
            category: 7,
            name: "keycap: 0",
            version: "1.0"
        },
        {
            emoji: "1️⃣",
            category: 7,
            name: "keycap: 1",
            version: "1.0"
        },
        {
            emoji: "2️⃣",
            category: 7,
            name: "keycap: 2",
            version: "1.0"
        },
        {
            emoji: "3️⃣",
            category: 7,
            name: "keycap: 3",
            version: "1.0"
        },
        {
            emoji: "4️⃣",
            category: 7,
            name: "keycap: 4",
            version: "1.0"
        },
        {
            emoji: "5️⃣",
            category: 7,
            name: "keycap: 5",
            version: "1.0"
        },
        {
            emoji: "6️⃣",
            category: 7,
            name: "keycap: 6",
            version: "1.0"
        },
        {
            emoji: "7️⃣",
            category: 7,
            name: "keycap: 7",
            version: "1.0"
        },
        {
            emoji: "8️⃣",
            category: 7,
            name: "keycap: 8",
            version: "1.0"
        },
        {
            emoji: "9️⃣",
            category: 7,
            name: "keycap: 9",
            version: "1.0"
        },
        {
            emoji: "🔟",
            category: 7,
            name: "keycap: 10",
            version: "1.0"
        },
        {
            emoji: "🔠",
            category: 7,
            name: "input latin uppercase",
            version: "1.0"
        },
        {
            emoji: "🔡",
            category: 7,
            name: "input latin lowercase",
            version: "1.0"
        },
        {
            emoji: "🔢",
            category: 7,
            name: "input numbers",
            version: "1.0"
        },
        {
            emoji: "🔣",
            category: 7,
            name: "input symbols",
            version: "1.0"
        },
        {
            emoji: "🔤",
            category: 7,
            name: "input latin letters",
            version: "1.0"
        },
        {
            emoji: "🅰️",
            category: 7,
            name: "A button (blood type)",
            version: "1.0"
        },
        {
            emoji: "🆎",
            category: 7,
            name: "AB button (blood type)",
            version: "1.0"
        },
        {
            emoji: "🅱️",
            category: 7,
            name: "B button (blood type)",
            version: "1.0"
        },
        {
            emoji: "🆑",
            category: 7,
            name: "CL button",
            version: "1.0"
        },
        {
            emoji: "🆒",
            category: 7,
            name: "COOL button",
            version: "1.0"
        },
        {
            emoji: "🆓",
            category: 7,
            name: "FREE button",
            version: "1.0"
        },
        {
            emoji: "ℹ️",
            category: 7,
            name: "information",
            version: "1.0"
        },
        {
            emoji: "🆔",
            category: 7,
            name: "ID button",
            version: "1.0"
        },
        {
            emoji: "Ⓜ️",
            category: 7,
            name: "circled M",
            version: "1.0"
        },
        {
            emoji: "🆕",
            category: 7,
            name: "NEW button",
            version: "1.0"
        },
        {
            emoji: "🆖",
            category: 7,
            name: "NG button",
            version: "1.0"
        },
        {
            emoji: "🅾️",
            category: 7,
            name: "O button (blood type)",
            version: "1.0"
        },
        {
            emoji: "🆗",
            category: 7,
            name: "OK button",
            version: "1.0"
        },
        {
            emoji: "🅿️",
            category: 7,
            name: "P button",
            version: "1.0"
        },
        {
            emoji: "🆘",
            category: 7,
            name: "SOS button",
            version: "1.0"
        },
        {
            emoji: "🆙",
            category: 7,
            name: "UP! button",
            version: "1.0"
        },
        {
            emoji: "🆚",
            category: 7,
            name: "VS button",
            version: "1.0"
        },
        {
            emoji: "🈁",
            category: 7,
            name: "Japanese “here” button",
            version: "1.0"
        },
        {
            emoji: "🈂️",
            category: 7,
            name: "Japanese “service charge” button",
            version: "1.0"
        },
        {
            emoji: "🈷️",
            category: 7,
            name: "Japanese “monthly amount” button",
            version: "1.0"
        },
        {
            emoji: "🈶",
            category: 7,
            name: "Japanese “not free of charge” button",
            version: "1.0"
        },
        {
            emoji: "🈯",
            category: 7,
            name: "Japanese “reserved” button",
            version: "1.0"
        },
        {
            emoji: "🉐",
            category: 7,
            name: "Japanese “bargain” button",
            version: "1.0"
        },
        {
            emoji: "🈹",
            category: 7,
            name: "Japanese “discount” button",
            version: "1.0"
        },
        {
            emoji: "🈚",
            category: 7,
            name: "Japanese “free of charge” button",
            version: "1.0"
        },
        {
            emoji: "🈲",
            category: 7,
            name: "Japanese “prohibited” button",
            version: "1.0"
        },
        {
            emoji: "🉑",
            category: 7,
            name: "Japanese “acceptable” button",
            version: "1.0"
        },
        {
            emoji: "🈸",
            category: 7,
            name: "Japanese “application” button",
            version: "1.0"
        },
        {
            emoji: "🈴",
            category: 7,
            name: "Japanese “passing grade” button",
            version: "1.0"
        },
        {
            emoji: "🈳",
            category: 7,
            name: "Japanese “vacancy” button",
            version: "1.0"
        },
        {
            emoji: "㊗️",
            category: 7,
            name: "Japanese “congratulations” button",
            version: "1.0"
        },
        {
            emoji: "㊙️",
            category: 7,
            name: "Japanese “secret” button",
            version: "1.0"
        },
        {
            emoji: "🈺",
            category: 7,
            name: "Japanese “open for business” button",
            version: "1.0"
        },
        {
            emoji: "🈵",
            category: 7,
            name: "Japanese “no vacancy” button",
            version: "1.0"
        },
        {
            emoji: "🔴",
            category: 7,
            name: "red circle",
            version: "1.0"
        },
        {
            emoji: "🟠",
            category: 7,
            name: "orange circle",
            version: "12.0"
        },
        {
            emoji: "🟡",
            category: 7,
            name: "yellow circle",
            version: "12.0"
        },
        {
            emoji: "🟢",
            category: 7,
            name: "green circle",
            version: "12.0"
        },
        {
            emoji: "🔵",
            category: 7,
            name: "blue circle",
            version: "1.0"
        },
        {
            emoji: "🟣",
            category: 7,
            name: "purple circle",
            version: "12.0"
        },
        {
            emoji: "🟤",
            category: 7,
            name: "brown circle",
            version: "12.0"
        },
        {
            emoji: "⚫",
            category: 7,
            name: "black circle",
            version: "1.0"
        },
        {
            emoji: "⚪",
            category: 7,
            name: "white circle",
            version: "1.0"
        },
        {
            emoji: "🟥",
            category: 7,
            name: "red square",
            version: "12.0"
        },
        {
            emoji: "🟧",
            category: 7,
            name: "orange square",
            version: "12.0"
        },
        {
            emoji: "🟨",
            category: 7,
            name: "yellow square",
            version: "12.0"
        },
        {
            emoji: "🟩",
            category: 7,
            name: "green square",
            version: "12.0"
        },
        {
            emoji: "🟦",
            category: 7,
            name: "blue square",
            version: "12.0"
        },
        {
            emoji: "🟪",
            category: 7,
            name: "purple square",
            version: "12.0"
        },
        {
            emoji: "🟫",
            category: 7,
            name: "brown square",
            version: "12.0"
        },
        {
            emoji: "⬛",
            category: 7,
            name: "black large square",
            version: "1.0"
        },
        {
            emoji: "⬜",
            category: 7,
            name: "white large square",
            version: "1.0"
        },
        {
            emoji: "◼️",
            category: 7,
            name: "black medium square",
            version: "1.0"
        },
        {
            emoji: "◻️",
            category: 7,
            name: "white medium square",
            version: "1.0"
        },
        {
            emoji: "◾",
            category: 7,
            name: "black medium-small square",
            version: "1.0"
        },
        {
            emoji: "◽",
            category: 7,
            name: "white medium-small square",
            version: "1.0"
        },
        {
            emoji: "▪️",
            category: 7,
            name: "black small square",
            version: "1.0"
        },
        {
            emoji: "▫️",
            category: 7,
            name: "white small square",
            version: "1.0"
        },
        {
            emoji: "🔶",
            category: 7,
            name: "large orange diamond",
            version: "1.0"
        },
        {
            emoji: "🔷",
            category: 7,
            name: "large blue diamond",
            version: "1.0"
        },
        {
            emoji: "🔸",
            category: 7,
            name: "small orange diamond",
            version: "1.0"
        },
        {
            emoji: "🔹",
            category: 7,
            name: "small blue diamond",
            version: "1.0"
        },
        {
            emoji: "🔺",
            category: 7,
            name: "red triangle pointed up",
            version: "1.0"
        },
        {
            emoji: "🔻",
            category: 7,
            name: "red triangle pointed down",
            version: "1.0"
        },
        {
            emoji: "💠",
            category: 7,
            name: "diamond with a dot",
            version: "1.0"
        },
        {
            emoji: "🔘",
            category: 7,
            name: "radio button",
            version: "1.0"
        },
        {
            emoji: "🔳",
            category: 7,
            name: "white square button",
            version: "1.0"
        },
        {
            emoji: "🔲",
            category: 7,
            name: "black square button",
            version: "1.0"
        },
        {
            emoji: "🏁",
            category: 8,
            name: "chequered flag",
            version: "1.0"
        },
        {
            emoji: "🚩",
            category: 8,
            name: "triangular flag",
            version: "1.0"
        },
        {
            emoji: "🎌",
            category: 8,
            name: "crossed flags",
            version: "1.0"
        },
        {
            emoji: "🏴",
            category: 8,
            name: "black flag",
            version: "1.0"
        },
        {
            emoji: "🏳️",
            category: 8,
            name: "white flag",
            version: "1.0"
        },
        {
            emoji: "🏳️‍🌈",
            category: 8,
            name: "rainbow flag",
            version: "4.0"
        },
        {
            emoji: "🏳️‍⚧️",
            category: 8,
            name: "transgender flag",
            version: "13.0"
        },
        {
            emoji: "🏴‍☠️",
            category: 8,
            name: "pirate flag",
            version: "11.0"
        },
        {
            emoji: "🇦🇨",
            category: 8,
            name: "flag: Ascension Island",
            version: "2.0"
        },
        {
            emoji: "🇦🇩",
            category: 8,
            name: "flag: Andorra",
            version: "2.0"
        },
        {
            emoji: "🇦🇪",
            category: 8,
            name: "flag: United Arab Emirates",
            version: "2.0"
        },
        {
            emoji: "🇦🇫",
            category: 8,
            name: "flag: Afghanistan",
            version: "2.0"
        },
        {
            emoji: "🇦🇬",
            category: 8,
            name: "flag: Antigua & Barbuda",
            version: "2.0"
        },
        {
            emoji: "🇦🇮",
            category: 8,
            name: "flag: Anguilla",
            version: "2.0"
        },
        {
            emoji: "🇦🇱",
            category: 8,
            name: "flag: Albania",
            version: "2.0"
        },
        {
            emoji: "🇦🇲",
            category: 8,
            name: "flag: Armenia",
            version: "2.0"
        },
        {
            emoji: "🇦🇴",
            category: 8,
            name: "flag: Angola",
            version: "2.0"
        },
        {
            emoji: "🇦🇶",
            category: 8,
            name: "flag: Antarctica",
            version: "2.0"
        },
        {
            emoji: "🇦🇷",
            category: 8,
            name: "flag: Argentina",
            version: "2.0"
        },
        {
            emoji: "🇦🇸",
            category: 8,
            name: "flag: American Samoa",
            version: "2.0"
        },
        {
            emoji: "🇦🇹",
            category: 8,
            name: "flag: Austria",
            version: "2.0"
        },
        {
            emoji: "🇦🇺",
            category: 8,
            name: "flag: Australia",
            version: "2.0"
        },
        {
            emoji: "🇦🇼",
            category: 8,
            name: "flag: Aruba",
            version: "2.0"
        },
        {
            emoji: "🇦🇽",
            category: 8,
            name: "flag: Åland Islands",
            version: "2.0"
        },
        {
            emoji: "🇦🇿",
            category: 8,
            name: "flag: Azerbaijan",
            version: "2.0"
        },
        {
            emoji: "🇧🇦",
            category: 8,
            name: "flag: Bosnia & Herzegovina",
            version: "2.0"
        },
        {
            emoji: "🇧🇧",
            category: 8,
            name: "flag: Barbados",
            version: "2.0"
        },
        {
            emoji: "🇧🇩",
            category: 8,
            name: "flag: Bangladesh",
            version: "2.0"
        },
        {
            emoji: "🇧🇪",
            category: 8,
            name: "flag: Belgium",
            version: "2.0"
        },
        {
            emoji: "🇧🇫",
            category: 8,
            name: "flag: Burkina Faso",
            version: "2.0"
        },
        {
            emoji: "🇧🇬",
            category: 8,
            name: "flag: Bulgaria",
            version: "2.0"
        },
        {
            emoji: "🇧🇭",
            category: 8,
            name: "flag: Bahrain",
            version: "2.0"
        },
        {
            emoji: "🇧🇮",
            category: 8,
            name: "flag: Burundi",
            version: "2.0"
        },
        {
            emoji: "🇧🇯",
            category: 8,
            name: "flag: Benin",
            version: "2.0"
        },
        {
            emoji: "🇧🇱",
            category: 8,
            name: "flag: St. Barthélemy",
            version: "2.0"
        },
        {
            emoji: "🇧🇲",
            category: 8,
            name: "flag: Bermuda",
            version: "2.0"
        },
        {
            emoji: "🇧🇳",
            category: 8,
            name: "flag: Brunei",
            version: "2.0"
        },
        {
            emoji: "🇧🇴",
            category: 8,
            name: "flag: Bolivia",
            version: "2.0"
        },
        {
            emoji: "🇧🇶",
            category: 8,
            name: "flag: Caribbean Netherlands",
            version: "2.0"
        },
        {
            emoji: "🇧🇷",
            category: 8,
            name: "flag: Brazil",
            version: "2.0"
        },
        {
            emoji: "🇧🇸",
            category: 8,
            name: "flag: Bahamas",
            version: "2.0"
        },
        {
            emoji: "🇧🇹",
            category: 8,
            name: "flag: Bhutan",
            version: "2.0"
        },
        {
            emoji: "🇧🇻",
            category: 8,
            name: "flag: Bouvet Island",
            version: "2.0"
        },
        {
            emoji: "🇧🇼",
            category: 8,
            name: "flag: Botswana",
            version: "2.0"
        },
        {
            emoji: "🇧🇾",
            category: 8,
            name: "flag: Belarus",
            version: "2.0"
        },
        {
            emoji: "🇧🇿",
            category: 8,
            name: "flag: Belize",
            version: "2.0"
        },
        {
            emoji: "🇨🇦",
            category: 8,
            name: "flag: Canada",
            version: "2.0"
        },
        {
            emoji: "🇨🇨",
            category: 8,
            name: "flag: Cocos (Keeling) Islands",
            version: "2.0"
        },
        {
            emoji: "🇨🇩",
            category: 8,
            name: "flag: Congo - Kinshasa",
            version: "2.0"
        },
        {
            emoji: "🇨🇫",
            category: 8,
            name: "flag: Central African Republic",
            version: "2.0"
        },
        {
            emoji: "🇨🇬",
            category: 8,
            name: "flag: Congo - Brazzaville",
            version: "2.0"
        },
        {
            emoji: "🇨🇭",
            category: 8,
            name: "flag: Switzerland",
            version: "2.0"
        },
        {
            emoji: "🇨🇮",
            category: 8,
            name: "flag: Côte d’Ivoire",
            version: "2.0"
        },
        {
            emoji: "🇨🇰",
            category: 8,
            name: "flag: Cook Islands",
            version: "2.0"
        },
        {
            emoji: "🇨🇱",
            category: 8,
            name: "flag: Chile",
            version: "2.0"
        },
        {
            emoji: "🇨🇲",
            category: 8,
            name: "flag: Cameroon",
            version: "2.0"
        },
        {
            emoji: "🇨🇳",
            category: 8,
            name: "flag: China",
            version: "1.0"
        },
        {
            emoji: "🇨🇴",
            category: 8,
            name: "flag: Colombia",
            version: "2.0"
        },
        {
            emoji: "🇨🇵",
            category: 8,
            name: "flag: Clipperton Island",
            version: "2.0"
        },
        {
            emoji: "🇨🇷",
            category: 8,
            name: "flag: Costa Rica",
            version: "2.0"
        },
        {
            emoji: "🇨🇺",
            category: 8,
            name: "flag: Cuba",
            version: "2.0"
        },
        {
            emoji: "🇨🇻",
            category: 8,
            name: "flag: Cape Verde",
            version: "2.0"
        },
        {
            emoji: "🇨🇼",
            category: 8,
            name: "flag: Curaçao",
            version: "2.0"
        },
        {
            emoji: "🇨🇽",
            category: 8,
            name: "flag: Christmas Island",
            version: "2.0"
        },
        {
            emoji: "🇨🇾",
            category: 8,
            name: "flag: Cyprus",
            version: "2.0"
        },
        {
            emoji: "🇨🇿",
            category: 8,
            name: "flag: Czechia",
            version: "2.0"
        },
        {
            emoji: "🇩🇪",
            category: 8,
            name: "flag: Germany",
            version: "1.0"
        },
        {
            emoji: "🇩🇬",
            category: 8,
            name: "flag: Diego Garcia",
            version: "2.0"
        },
        {
            emoji: "🇩🇯",
            category: 8,
            name: "flag: Djibouti",
            version: "2.0"
        },
        {
            emoji: "🇩🇰",
            category: 8,
            name: "flag: Denmark",
            version: "2.0"
        },
        {
            emoji: "🇩🇲",
            category: 8,
            name: "flag: Dominica",
            version: "2.0"
        },
        {
            emoji: "🇩🇴",
            category: 8,
            name: "flag: Dominican Republic",
            version: "2.0"
        },
        {
            emoji: "🇩🇿",
            category: 8,
            name: "flag: Algeria",
            version: "2.0"
        },
        {
            emoji: "🇪🇦",
            category: 8,
            name: "flag: Ceuta & Melilla",
            version: "2.0"
        },
        {
            emoji: "🇪🇨",
            category: 8,
            name: "flag: Ecuador",
            version: "2.0"
        },
        {
            emoji: "🇪🇪",
            category: 8,
            name: "flag: Estonia",
            version: "2.0"
        },
        {
            emoji: "🇪🇬",
            category: 8,
            name: "flag: Egypt",
            version: "2.0"
        },
        {
            emoji: "🇪🇭",
            category: 8,
            name: "flag: Western Sahara",
            version: "2.0"
        },
        {
            emoji: "🇪🇷",
            category: 8,
            name: "flag: Eritrea",
            version: "2.0"
        },
        {
            emoji: "🇪🇸",
            category: 8,
            name: "flag: Spain",
            version: "1.0"
        },
        {
            emoji: "🇪🇹",
            category: 8,
            name: "flag: Ethiopia",
            version: "2.0"
        },
        {
            emoji: "🇪🇺",
            category: 8,
            name: "flag: European Union",
            version: "2.0"
        },
        {
            emoji: "🇫🇮",
            category: 8,
            name: "flag: Finland",
            version: "2.0"
        },
        {
            emoji: "🇫🇯",
            category: 8,
            name: "flag: Fiji",
            version: "2.0"
        },
        {
            emoji: "🇫🇰",
            category: 8,
            name: "flag: Falkland Islands",
            version: "2.0"
        },
        {
            emoji: "🇫🇲",
            category: 8,
            name: "flag: Micronesia",
            version: "2.0"
        },
        {
            emoji: "🇫🇴",
            category: 8,
            name: "flag: Faroe Islands",
            version: "2.0"
        },
        {
            emoji: "🇫🇷",
            category: 8,
            name: "flag: France",
            version: "1.0"
        },
        {
            emoji: "🇬🇦",
            category: 8,
            name: "flag: Gabon",
            version: "2.0"
        },
        {
            emoji: "🇬🇧",
            category: 8,
            name: "flag: United Kingdom",
            version: "1.0"
        },
        {
            emoji: "🇬🇩",
            category: 8,
            name: "flag: Grenada",
            version: "2.0"
        },
        {
            emoji: "🇬🇪",
            category: 8,
            name: "flag: Georgia",
            version: "2.0"
        },
        {
            emoji: "🇬🇫",
            category: 8,
            name: "flag: French Guiana",
            version: "2.0"
        },
        {
            emoji: "🇬🇬",
            category: 8,
            name: "flag: Guernsey",
            version: "2.0"
        },
        {
            emoji: "🇬🇭",
            category: 8,
            name: "flag: Ghana",
            version: "2.0"
        },
        {
            emoji: "🇬🇮",
            category: 8,
            name: "flag: Gibraltar",
            version: "2.0"
        },
        {
            emoji: "🇬🇱",
            category: 8,
            name: "flag: Greenland",
            version: "2.0"
        },
        {
            emoji: "🇬🇲",
            category: 8,
            name: "flag: Gambia",
            version: "2.0"
        },
        {
            emoji: "🇬🇳",
            category: 8,
            name: "flag: Guinea",
            version: "2.0"
        },
        {
            emoji: "🇬🇵",
            category: 8,
            name: "flag: Guadeloupe",
            version: "2.0"
        },
        {
            emoji: "🇬🇶",
            category: 8,
            name: "flag: Equatorial Guinea",
            version: "2.0"
        },
        {
            emoji: "🇬🇷",
            category: 8,
            name: "flag: Greece",
            version: "2.0"
        },
        {
            emoji: "🇬🇸",
            category: 8,
            name: "flag: South Georgia & South Sandwich Islands",
            version: "2.0"
        },
        {
            emoji: "🇬🇹",
            category: 8,
            name: "flag: Guatemala",
            version: "2.0"
        },
        {
            emoji: "🇬🇺",
            category: 8,
            name: "flag: Guam",
            version: "2.0"
        },
        {
            emoji: "🇬🇼",
            category: 8,
            name: "flag: Guinea-Bissau",
            version: "2.0"
        },
        {
            emoji: "🇬🇾",
            category: 8,
            name: "flag: Guyana",
            version: "2.0"
        },
        {
            emoji: "🇭🇰",
            category: 8,
            name: "flag: Hong Kong SAR China",
            version: "2.0"
        },
        {
            emoji: "🇭🇲",
            category: 8,
            name: "flag: Heard & McDonald Islands",
            version: "2.0"
        },
        {
            emoji: "🇭🇳",
            category: 8,
            name: "flag: Honduras",
            version: "2.0"
        },
        {
            emoji: "🇭🇷",
            category: 8,
            name: "flag: Croatia",
            version: "2.0"
        },
        {
            emoji: "🇭🇹",
            category: 8,
            name: "flag: Haiti",
            version: "2.0"
        },
        {
            emoji: "🇭🇺",
            category: 8,
            name: "flag: Hungary",
            version: "2.0"
        },
        {
            emoji: "🇮🇨",
            category: 8,
            name: "flag: Canary Islands",
            version: "2.0"
        },
        {
            emoji: "🇮🇩",
            category: 8,
            name: "flag: Indonesia",
            version: "2.0"
        },
        {
            emoji: "🇮🇪",
            category: 8,
            name: "flag: Ireland",
            version: "2.0"
        },
        {
            emoji: "🇮🇱",
            category: 8,
            name: "flag: Israel",
            version: "2.0"
        },
        {
            emoji: "🇮🇲",
            category: 8,
            name: "flag: Isle of Man",
            version: "2.0"
        },
        {
            emoji: "🇮🇳",
            category: 8,
            name: "flag: India",
            version: "2.0"
        },
        {
            emoji: "🇮🇴",
            category: 8,
            name: "flag: British Indian Ocean Territory",
            version: "2.0"
        },
        {
            emoji: "🇮🇶",
            category: 8,
            name: "flag: Iraq",
            version: "2.0"
        },
        {
            emoji: "🇮🇷",
            category: 8,
            name: "flag: Iran",
            version: "2.0"
        },
        {
            emoji: "🇮🇸",
            category: 8,
            name: "flag: Iceland",
            version: "2.0"
        },
        {
            emoji: "🇮🇹",
            category: 8,
            name: "flag: Italy",
            version: "1.0"
        },
        {
            emoji: "🇯🇪",
            category: 8,
            name: "flag: Jersey",
            version: "2.0"
        },
        {
            emoji: "🇯🇲",
            category: 8,
            name: "flag: Jamaica",
            version: "2.0"
        },
        {
            emoji: "🇯🇴",
            category: 8,
            name: "flag: Jordan",
            version: "2.0"
        },
        {
            emoji: "🇯🇵",
            category: 8,
            name: "flag: Japan",
            version: "1.0"
        },
        {
            emoji: "🇰🇪",
            category: 8,
            name: "flag: Kenya",
            version: "2.0"
        },
        {
            emoji: "🇰🇬",
            category: 8,
            name: "flag: Kyrgyzstan",
            version: "2.0"
        },
        {
            emoji: "🇰🇭",
            category: 8,
            name: "flag: Cambodia",
            version: "2.0"
        },
        {
            emoji: "🇰🇮",
            category: 8,
            name: "flag: Kiribati",
            version: "2.0"
        },
        {
            emoji: "🇰🇲",
            category: 8,
            name: "flag: Comoros",
            version: "2.0"
        },
        {
            emoji: "🇰🇳",
            category: 8,
            name: "flag: St. Kitts & Nevis",
            version: "2.0"
        },
        {
            emoji: "🇰🇵",
            category: 8,
            name: "flag: North Korea",
            version: "2.0"
        },
        {
            emoji: "🇰🇷",
            category: 8,
            name: "flag: South Korea",
            version: "1.0"
        },
        {
            emoji: "🇰🇼",
            category: 8,
            name: "flag: Kuwait",
            version: "2.0"
        },
        {
            emoji: "🇰🇾",
            category: 8,
            name: "flag: Cayman Islands",
            version: "2.0"
        },
        {
            emoji: "🇰🇿",
            category: 8,
            name: "flag: Kazakhstan",
            version: "2.0"
        },
        {
            emoji: "🇱🇦",
            category: 8,
            name: "flag: Laos",
            version: "2.0"
        },
        {
            emoji: "🇱🇧",
            category: 8,
            name: "flag: Lebanon",
            version: "2.0"
        },
        {
            emoji: "🇱🇨",
            category: 8,
            name: "flag: St. Lucia",
            version: "2.0"
        },
        {
            emoji: "🇱🇮",
            category: 8,
            name: "flag: Liechtenstein",
            version: "2.0"
        },
        {
            emoji: "🇱🇰",
            category: 8,
            name: "flag: Sri Lanka",
            version: "2.0"
        },
        {
            emoji: "🇱🇷",
            category: 8,
            name: "flag: Liberia",
            version: "2.0"
        },
        {
            emoji: "🇱🇸",
            category: 8,
            name: "flag: Lesotho",
            version: "2.0"
        },
        {
            emoji: "🇱🇹",
            category: 8,
            name: "flag: Lithuania",
            version: "2.0"
        },
        {
            emoji: "🇱🇺",
            category: 8,
            name: "flag: Luxembourg",
            version: "2.0"
        },
        {
            emoji: "🇱🇻",
            category: 8,
            name: "flag: Latvia",
            version: "2.0"
        },
        {
            emoji: "🇱🇾",
            category: 8,
            name: "flag: Libya",
            version: "2.0"
        },
        {
            emoji: "🇲🇦",
            category: 8,
            name: "flag: Morocco",
            version: "2.0"
        },
        {
            emoji: "🇲🇨",
            category: 8,
            name: "flag: Monaco",
            version: "2.0"
        },
        {
            emoji: "🇲🇩",
            category: 8,
            name: "flag: Moldova",
            version: "2.0"
        },
        {
            emoji: "🇲🇪",
            category: 8,
            name: "flag: Montenegro",
            version: "2.0"
        },
        {
            emoji: "🇲🇫",
            category: 8,
            name: "flag: St. Martin",
            version: "2.0"
        },
        {
            emoji: "🇲🇬",
            category: 8,
            name: "flag: Madagascar",
            version: "2.0"
        },
        {
            emoji: "🇲🇭",
            category: 8,
            name: "flag: Marshall Islands",
            version: "2.0"
        },
        {
            emoji: "🇲🇰",
            category: 8,
            name: "flag: North Macedonia",
            version: "2.0"
        },
        {
            emoji: "🇲🇱",
            category: 8,
            name: "flag: Mali",
            version: "2.0"
        },
        {
            emoji: "🇲🇲",
            category: 8,
            name: "flag: Myanmar (Burma)",
            version: "2.0"
        },
        {
            emoji: "🇲🇳",
            category: 8,
            name: "flag: Mongolia",
            version: "2.0"
        },
        {
            emoji: "🇲🇴",
            category: 8,
            name: "flag: Macao SAR China",
            version: "2.0"
        },
        {
            emoji: "🇲🇵",
            category: 8,
            name: "flag: Northern Mariana Islands",
            version: "2.0"
        },
        {
            emoji: "🇲🇶",
            category: 8,
            name: "flag: Martinique",
            version: "2.0"
        },
        {
            emoji: "🇲🇷",
            category: 8,
            name: "flag: Mauritania",
            version: "2.0"
        },
        {
            emoji: "🇲🇸",
            category: 8,
            name: "flag: Montserrat",
            version: "2.0"
        },
        {
            emoji: "🇲🇹",
            category: 8,
            name: "flag: Malta",
            version: "2.0"
        },
        {
            emoji: "🇲🇺",
            category: 8,
            name: "flag: Mauritius",
            version: "2.0"
        },
        {
            emoji: "🇲🇻",
            category: 8,
            name: "flag: Maldives",
            version: "2.0"
        },
        {
            emoji: "🇲🇼",
            category: 8,
            name: "flag: Malawi",
            version: "2.0"
        },
        {
            emoji: "🇲🇽",
            category: 8,
            name: "flag: Mexico",
            version: "2.0"
        },
        {
            emoji: "🇲🇾",
            category: 8,
            name: "flag: Malaysia",
            version: "2.0"
        },
        {
            emoji: "🇲🇿",
            category: 8,
            name: "flag: Mozambique",
            version: "2.0"
        },
        {
            emoji: "🇳🇦",
            category: 8,
            name: "flag: Namibia",
            version: "2.0"
        },
        {
            emoji: "🇳🇨",
            category: 8,
            name: "flag: New Caledonia",
            version: "2.0"
        },
        {
            emoji: "🇳🇪",
            category: 8,
            name: "flag: Niger",
            version: "2.0"
        },
        {
            emoji: "🇳🇫",
            category: 8,
            name: "flag: Norfolk Island",
            version: "2.0"
        },
        {
            emoji: "🇳🇬",
            category: 8,
            name: "flag: Nigeria",
            version: "2.0"
        },
        {
            emoji: "🇳🇮",
            category: 8,
            name: "flag: Nicaragua",
            version: "2.0"
        },
        {
            emoji: "🇳🇱",
            category: 8,
            name: "flag: Netherlands",
            version: "2.0"
        },
        {
            emoji: "🇳🇴",
            category: 8,
            name: "flag: Norway",
            version: "2.0"
        },
        {
            emoji: "🇳🇵",
            category: 8,
            name: "flag: Nepal",
            version: "2.0"
        },
        {
            emoji: "🇳🇷",
            category: 8,
            name: "flag: Nauru",
            version: "2.0"
        },
        {
            emoji: "🇳🇺",
            category: 8,
            name: "flag: Niue",
            version: "2.0"
        },
        {
            emoji: "🇳🇿",
            category: 8,
            name: "flag: New Zealand",
            version: "2.0"
        },
        {
            emoji: "🇴🇲",
            category: 8,
            name: "flag: Oman",
            version: "2.0"
        },
        {
            emoji: "🇵🇦",
            category: 8,
            name: "flag: Panama",
            version: "2.0"
        },
        {
            emoji: "🇵🇪",
            category: 8,
            name: "flag: Peru",
            version: "2.0"
        },
        {
            emoji: "🇵🇫",
            category: 8,
            name: "flag: French Polynesia",
            version: "2.0"
        },
        {
            emoji: "🇵🇬",
            category: 8,
            name: "flag: Papua New Guinea",
            version: "2.0"
        },
        {
            emoji: "🇵🇭",
            category: 8,
            name: "flag: Philippines",
            version: "2.0"
        },
        {
            emoji: "🇵🇰",
            category: 8,
            name: "flag: Pakistan",
            version: "2.0"
        },
        {
            emoji: "🇵🇱",
            category: 8,
            name: "flag: Poland",
            version: "2.0"
        },
        {
            emoji: "🇵🇲",
            category: 8,
            name: "flag: St. Pierre & Miquelon",
            version: "2.0"
        },
        {
            emoji: "🇵🇳",
            category: 8,
            name: "flag: Pitcairn Islands",
            version: "2.0"
        },
        {
            emoji: "🇵🇷",
            category: 8,
            name: "flag: Puerto Rico",
            version: "2.0"
        },
        {
            emoji: "🇵🇸",
            category: 8,
            name: "flag: Palestinian Territories",
            version: "2.0"
        },
        {
            emoji: "🇵🇹",
            category: 8,
            name: "flag: Portugal",
            version: "2.0"
        },
        {
            emoji: "🇵🇼",
            category: 8,
            name: "flag: Palau",
            version: "2.0"
        },
        {
            emoji: "🇵🇾",
            category: 8,
            name: "flag: Paraguay",
            version: "2.0"
        },
        {
            emoji: "🇶🇦",
            category: 8,
            name: "flag: Qatar",
            version: "2.0"
        },
        {
            emoji: "🇷🇪",
            category: 8,
            name: "flag: Réunion",
            version: "2.0"
        },
        {
            emoji: "🇷🇴",
            category: 8,
            name: "flag: Romania",
            version: "2.0"
        },
        {
            emoji: "🇷🇸",
            category: 8,
            name: "flag: Serbia",
            version: "2.0"
        },
        {
            emoji: "🇷🇺",
            category: 8,
            name: "flag: Russia",
            version: "1.0"
        },
        {
            emoji: "🇷🇼",
            category: 8,
            name: "flag: Rwanda",
            version: "2.0"
        },
        {
            emoji: "🇸🇦",
            category: 8,
            name: "flag: Saudi Arabia",
            version: "2.0"
        },
        {
            emoji: "🇸🇧",
            category: 8,
            name: "flag: Solomon Islands",
            version: "2.0"
        },
        {
            emoji: "🇸🇨",
            category: 8,
            name: "flag: Seychelles",
            version: "2.0"
        },
        {
            emoji: "🇸🇩",
            category: 8,
            name: "flag: Sudan",
            version: "2.0"
        },
        {
            emoji: "🇸🇪",
            category: 8,
            name: "flag: Sweden",
            version: "2.0"
        },
        {
            emoji: "🇸🇬",
            category: 8,
            name: "flag: Singapore",
            version: "2.0"
        },
        {
            emoji: "🇸🇭",
            category: 8,
            name: "flag: St. Helena",
            version: "2.0"
        },
        {
            emoji: "🇸🇮",
            category: 8,
            name: "flag: Slovenia",
            version: "2.0"
        },
        {
            emoji: "🇸🇯",
            category: 8,
            name: "flag: Svalbard & Jan Mayen",
            version: "2.0"
        },
        {
            emoji: "🇸🇰",
            category: 8,
            name: "flag: Slovakia",
            version: "2.0"
        },
        {
            emoji: "🇸🇱",
            category: 8,
            name: "flag: Sierra Leone",
            version: "2.0"
        },
        {
            emoji: "🇸🇲",
            category: 8,
            name: "flag: San Marino",
            version: "2.0"
        },
        {
            emoji: "🇸🇳",
            category: 8,
            name: "flag: Senegal",
            version: "2.0"
        },
        {
            emoji: "🇸🇴",
            category: 8,
            name: "flag: Somalia",
            version: "2.0"
        },
        {
            emoji: "🇸🇷",
            category: 8,
            name: "flag: Suriname",
            version: "2.0"
        },
        {
            emoji: "🇸🇸",
            category: 8,
            name: "flag: South Sudan",
            version: "2.0"
        },
        {
            emoji: "🇸🇹",
            category: 8,
            name: "flag: São Tomé & Príncipe",
            version: "2.0"
        },
        {
            emoji: "🇸🇻",
            category: 8,
            name: "flag: El Salvador",
            version: "2.0"
        },
        {
            emoji: "🇸🇽",
            category: 8,
            name: "flag: Sint Maarten",
            version: "2.0"
        },
        {
            emoji: "🇸🇾",
            category: 8,
            name: "flag: Syria",
            version: "2.0"
        },
        {
            emoji: "🇸🇿",
            category: 8,
            name: "flag: Eswatini",
            version: "2.0"
        },
        {
            emoji: "🇹🇦",
            category: 8,
            name: "flag: Tristan da Cunha",
            version: "2.0"
        },
        {
            emoji: "🇹🇨",
            category: 8,
            name: "flag: Turks & Caicos Islands",
            version: "2.0"
        },
        {
            emoji: "🇹🇩",
            category: 8,
            name: "flag: Chad",
            version: "2.0"
        },
        {
            emoji: "🇹🇫",
            category: 8,
            name: "flag: French Southern Territories",
            version: "2.0"
        },
        {
            emoji: "🇹🇬",
            category: 8,
            name: "flag: Togo",
            version: "2.0"
        },
        {
            emoji: "🇹🇭",
            category: 8,
            name: "flag: Thailand",
            version: "2.0"
        },
        {
            emoji: "🇹🇯",
            category: 8,
            name: "flag: Tajikistan",
            version: "2.0"
        },
        {
            emoji: "🇹🇰",
            category: 8,
            name: "flag: Tokelau",
            version: "2.0"
        },
        {
            emoji: "🇹🇱",
            category: 8,
            name: "flag: Timor-Leste",
            version: "2.0"
        },
        {
            emoji: "🇹🇲",
            category: 8,
            name: "flag: Turkmenistan",
            version: "2.0"
        },
        {
            emoji: "🇹🇳",
            category: 8,
            name: "flag: Tunisia",
            version: "2.0"
        },
        {
            emoji: "🇹🇴",
            category: 8,
            name: "flag: Tonga",
            version: "2.0"
        },
        {
            emoji: "🇹🇷",
            category: 8,
            name: "flag: Turkey",
            version: "2.0"
        },
        {
            emoji: "🇹🇹",
            category: 8,
            name: "flag: Trinidad & Tobago",
            version: "2.0"
        },
        {
            emoji: "🇹🇻",
            category: 8,
            name: "flag: Tuvalu",
            version: "2.0"
        },
        {
            emoji: "🇹🇼",
            category: 8,
            name: "flag: Taiwan",
            version: "2.0"
        },
        {
            emoji: "🇹🇿",
            category: 8,
            name: "flag: Tanzania",
            version: "2.0"
        },
        {
            emoji: "🇺🇦",
            category: 8,
            name: "flag: Ukraine",
            version: "2.0"
        },
        {
            emoji: "🇺🇬",
            category: 8,
            name: "flag: Uganda",
            version: "2.0"
        },
        {
            emoji: "🇺🇲",
            category: 8,
            name: "flag: U.S. Outlying Islands",
            version: "2.0"
        },
        {
            emoji: "🇺🇳",
            category: 8,
            name: "flag: United Nations",
            version: "4.0"
        },
        {
            emoji: "🇺🇸",
            category: 8,
            name: "flag: United States",
            version: "1.0"
        },
        {
            emoji: "🇺🇾",
            category: 8,
            name: "flag: Uruguay",
            version: "2.0"
        },
        {
            emoji: "🇺🇿",
            category: 8,
            name: "flag: Uzbekistan",
            version: "2.0"
        },
        {
            emoji: "🇻🇦",
            category: 8,
            name: "flag: Vatican City",
            version: "2.0"
        },
        {
            emoji: "🇻🇨",
            category: 8,
            name: "flag: St. Vincent & Grenadines",
            version: "2.0"
        },
        {
            emoji: "🇻🇪",
            category: 8,
            name: "flag: Venezuela",
            version: "2.0"
        },
        {
            emoji: "🇻🇬",
            category: 8,
            name: "flag: British Virgin Islands",
            version: "2.0"
        },
        {
            emoji: "🇻🇮",
            category: 8,
            name: "flag: U.S. Virgin Islands",
            version: "2.0"
        },
        {
            emoji: "🇻🇳",
            category: 8,
            name: "flag: Vietnam",
            version: "2.0"
        },
        {
            emoji: "🇻🇺",
            category: 8,
            name: "flag: Vanuatu",
            version: "2.0"
        },
        {
            emoji: "🇼🇫",
            category: 8,
            name: "flag: Wallis & Futuna",
            version: "2.0"
        },
        {
            emoji: "🇼🇸",
            category: 8,
            name: "flag: Samoa",
            version: "2.0"
        },
        {
            emoji: "🇽🇰",
            category: 8,
            name: "flag: Kosovo",
            version: "2.0"
        },
        {
            emoji: "🇾🇪",
            category: 8,
            name: "flag: Yemen",
            version: "2.0"
        },
        {
            emoji: "🇾🇹",
            category: 8,
            name: "flag: Mayotte",
            version: "2.0"
        },
        {
            emoji: "🇿🇦",
            category: 8,
            name: "flag: South Africa",
            version: "2.0"
        },
        {
            emoji: "🇿🇲",
            category: 8,
            name: "flag: Zambia",
            version: "2.0"
        },
        {
            emoji: "🇿🇼",
            category: 8,
            name: "flag: Zimbabwe",
            version: "2.0"
        },
        {
            emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
            category: 8,
            name: "flag: England",
            version: "5.0"
        },
        {
            emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
            category: 8,
            name: "flag: Scotland",
            version: "5.0"
        },
        {
            emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
            category: 8,
            name: "flag: Wales",
            version: "5.0"
        }
    ]
};
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */ var Ce = /["'&<>]/, Ee = function(e153) {
    var o84, n56 = "" + e153, i42 = Ce.exec(n56);
    if (!i42) return n56;
    var a41 = "", r29 = 0, t29 = 0;
    for(r29 = i42.index; r29 < n56.length; r29++){
        switch(n56.charCodeAt(r29)){
            case 34:
                o84 = "&quot;";
                break;
            case 38:
                o84 = "&amp;";
                break;
            case 39:
                o84 = "&#39;";
                break;
            case 60:
                o84 = "&lt;";
                break;
            case 62:
                o84 = "&gt;";
                break;
            default:
                continue;
        }
        t29 !== r29 && (a41 += n56.substring(t29, r29)), t29 = r29 + 1, a41 += o84;
    }
    return t29 !== r29 ? a41 + n56.substring(t29, r29) : a41;
};
const _e = "emoji-picker__emoji";
function ze(e154, o85) {
    const n57 = document.createElement(e154);
    return o85 && (n57.className = o85), n57;
}
function Oe(e155) {
    for(; e155.firstChild;)e155.removeChild(e155.firstChild);
}
function Ie(e156, o86) {
    e156.dataset.loaded || (e156.dataset.custom ? (function(e157) {
        const o87 = ze("img", "emoji-picker__custom-emoji");
        e157.dataset.emoji && (o87.src = Ee(e157.dataset.emoji), e157.innerText = "", e157.appendChild(o87));
    })(e156) : "twemoji" === o86.style && (function(e158, o88) {
        e158.dataset.emoji && (e158.innerHTML = ke.parse(e158.dataset.emoji, o88.twemojiOptions));
    })(e156, o86), e156.dataset.loaded = "true", e156.style.opacity = "1");
}
class Se {
    constructor(e159, o89){
        this.events = e159, this.options = o89;
    }
    render() {
        const e160 = ze("div", "emoji-picker__preview");
        return this.emoji = ze("div", "emoji-picker__preview-emoji"), e160.appendChild(this.emoji), this.name = ze("div", "emoji-picker__preview-name"), e160.appendChild(this.name), this.events.on("showPreview", (e161)=>this.showPreview(e161)
        ), this.events.on("hidePreview", ()=>this.hidePreview()
        ), e160;
    }
    showPreview(e162) {
        let o90 = e162.emoji;
        e162.custom ? o90 = `<img class="emoji-picker__custom-emoji" src="${Ee(e162.emoji)}">` : "twemoji" === this.options.style && (o90 = ke.parse(e162.emoji, this.options.twemojiOptions)), this.emoji.innerHTML = o90, this.name.innerHTML = Ee(e162.name);
    }
    hidePreview() {
        this.emoji.innerHTML = "", this.name.innerHTML = "";
    }
}
function Pe(e163, o91) {
    for(var n58 = 0; n58 < o91.length; n58++){
        var i43 = o91[n58];
        i43.enumerable = i43.enumerable || !1, i43.configurable = !0, "value" in i43 && (i43.writable = !0), Object.defineProperty(e163, i43.key, i43);
    }
}
function Me(e164, o92, n59) {
    return o92 in e164 ? Object.defineProperty(e164, o92, {
        value: n59,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e164[o92] = n59, e164;
}
function Ae(e165) {
    for(var o93 = 1; o93 < arguments.length; o93++){
        var n60 = null != arguments[o93] ? arguments[o93] : {
        }, i44 = Object.keys(n60);
        "function" == typeof Object.getOwnPropertySymbols && (i44 = i44.concat(Object.getOwnPropertySymbols(n60).filter(function(e166) {
            return Object.getOwnPropertyDescriptor(n60, e166).enumerable;
        }))), i44.forEach(function(o94) {
            Me(e165, o94, n60[o94]);
        });
    }
    return e165;
}
function Le(e167, o95) {
    return (function(e168) {
        if (Array.isArray(e168)) return e168;
    })(e167) || (function(e169, o96) {
        var n61 = [], i45 = !0, a42 = !1, r30 = void 0;
        try {
            for(var t30, s22 = e169[Symbol.iterator](); !(i45 = (t30 = s22.next()).done) && (n61.push(t30.value), !o96 || n61.length !== o96); i45 = !0);
        } catch (e170) {
            a42 = !0, r30 = e170;
        } finally{
            try {
                i45 || null == s22.return || s22.return();
            } finally{
                if (a42) throw r30;
            }
        }
        return n61;
    })(e167, o95) || (function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    })();
}
var Te = function() {
}, Ne = {
}, Fe = {
}, Be = {
    mark: Te,
    measure: Te
};
try {
    "undefined" != typeof window && (Ne = window), "undefined" != typeof document && (Fe = document), "undefined" != typeof performance && (Be = performance);
} catch (e171) {
}
var De = (Ne.navigator || {
}).userAgent, Re = void 0 === De ? "" : De, qe = Ne, Ve = Fe, He = Be, Ue = (qe.document, !!Ve.documentElement && !!Ve.head && "function" == typeof Ve.addEventListener && "function" == typeof Ve.createElement), We = (~Re.indexOf("MSIE") || Re.indexOf("Trident/"), "group"), Ke = "primary", Je = "secondary", Ge = qe.FontAwesomeConfig || {
};
if (Ve && "function" == typeof Ve.querySelector) [
    [
        "data-family-prefix",
        "familyPrefix"
    ],
    [
        "data-replacement-class",
        "replacementClass"
    ],
    [
        "data-auto-replace-svg",
        "autoReplaceSvg"
    ],
    [
        "data-auto-add-css",
        "autoAddCss"
    ],
    [
        "data-auto-a11y",
        "autoA11y"
    ],
    [
        "data-search-pseudo-elements",
        "searchPseudoElements"
    ],
    [
        "data-observe-mutations",
        "observeMutations"
    ],
    [
        "data-mutate-approach",
        "mutateApproach"
    ],
    [
        "data-keep-original-source",
        "keepOriginalSource"
    ],
    [
        "data-measure-performance",
        "measurePerformance"
    ],
    [
        "data-show-missing-icons",
        "showMissingIcons"
    ]
].forEach(function(e172) {
    var o97 = Le(e172, 2), n62 = o97[0], i = o97[1], a43 = function(e173) {
        return "" === e173 || "false" !== e173 && ("true" === e173 || e173);
    }(function(e174) {
        var o98 = Ve.querySelector("script[" + e174 + "]");
        if (o98) return o98.getAttribute(e174);
    }(n62));
    null != a43 && (Ge[i] = a43);
});
var Xe = Ae({
}, {
    familyPrefix: "fa",
    replacementClass: "svg-inline--fa",
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
}, Ge);
Xe.autoReplaceSvg || (Xe.observeMutations = !1);
var Ye = Ae({
}, Xe);
qe.FontAwesomeConfig = Ye;
var $e = qe || {
};
$e.___FONT_AWESOME___ || ($e.___FONT_AWESOME___ = {
}), $e.___FONT_AWESOME___.styles || ($e.___FONT_AWESOME___.styles = {
}), $e.___FONT_AWESOME___.hooks || ($e.___FONT_AWESOME___.hooks = {
}), $e.___FONT_AWESOME___.shims || ($e.___FONT_AWESOME___.shims = []);
var Ze = $e.___FONT_AWESOME___, Qe = [];
Ue && ((Ve.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ve.readyState) || Ve.addEventListener("DOMContentLoaded", function e175() {
    Ve.removeEventListener("DOMContentLoaded", e175), Qe.map(function(e176) {
        return e176();
    });
}));
"undefined" != typeof global && void 0 !== global.process && global.process.emit, "undefined";
var eo = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: !1,
    flipY: !1
};
function oo() {
    for(var e177 = 12, o99 = ""; e177-- > 0;)o99 += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62 * Math.random() | 0];
    return o99;
}
function no(e178) {
    return "".concat(e178).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function io(e179) {
    return Object.keys(e179 || {
    }).reduce(function(o100, n63) {
        return o100 + "".concat(n63, ": ").concat(e179[n63], ";");
    }, "");
}
function ao(e180) {
    return e180.size !== eo.size || e180.x !== eo.x || e180.y !== eo.y || e180.rotate !== eo.rotate || e180.flipX || e180.flipY;
}
function ro(e181) {
    var o101 = e181.transform, n64 = e181.containerWidth, i46 = e181.iconWidth, a44 = {
        transform: "translate(".concat(n64 / 2, " 256)")
    }, r31 = "translate(".concat(32 * o101.x, ", ").concat(32 * o101.y, ") "), t31 = "scale(".concat(o101.size / 16 * (o101.flipX ? -1 : 1), ", ").concat(o101.size / 16 * (o101.flipY ? -1 : 1), ") "), s23 = "rotate(".concat(o101.rotate, " 0 0)");
    return {
        outer: a44,
        inner: {
            transform: "".concat(r31, " ").concat(t31, " ").concat(s23)
        },
        path: {
            transform: "translate(".concat(i46 / 2 * -1, " -256)")
        }
    };
}
var to = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
};
function so(e182) {
    var o102 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return e182.attributes && (e182.attributes.fill || o102) && (e182.attributes.fill = "black"), e182;
}
function mo(e183) {
    var o103 = e183.icons, n65 = o103.main, i47 = o103.mask, a45 = e183.prefix, r32 = e183.iconName, t32 = e183.transform, s24 = e183.symbol, m16 = e183.title, c16 = e183.maskId, d12 = e183.titleId, g11 = e183.extra, u7 = e183.watchable, l8 = void 0 !== u7 && u7, v9 = i47.found ? i47 : n65, f9 = v9.width, y7 = v9.height, j8 = "fa-w-".concat(Math.ceil(f9 / y7 * 16)), h8 = [
        Ye.replacementClass,
        r32 ? "".concat(Ye.familyPrefix, "-").concat(r32) : "",
        j8
    ].filter(function(e184) {
        return -1 === g11.classes.indexOf(e184);
    }).concat(g11.classes).join(" "), p8 = {
        children: [],
        attributes: Ae({
        }, g11.attributes, {
            "data-prefix": a45,
            "data-icon": r32,
            class: h8,
            role: g11.attributes.role || "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 ".concat(f9, " ").concat(y7)
        })
    };
    l8 && (p8.attributes["data-fa-i2svg"] = ""), m16 && p8.children.push({
        tag: "title",
        attributes: {
            id: p8.attributes["aria-labelledby"] || "title-".concat(d12 || oo())
        },
        children: [
            m16
        ]
    });
    var b7 = Ae({
    }, p8, {
        prefix: a45,
        iconName: r32,
        main: n65,
        mask: i47,
        maskId: c16,
        transform: t32,
        symbol: s24,
        styles: g11.styles
    }), w4 = i47.found && n65.found ? function(e185) {
        var o104, n66 = e185.children, i48 = e185.attributes, a46 = e185.main, r33 = e185.mask, t33 = e185.maskId, s25 = e185.transform, m17 = a46.width, c17 = a46.icon, d13 = r33.width, g12 = r33.icon, u8 = ro({
            transform: s25,
            containerWidth: d13,
            iconWidth: m17
        }), l9 = {
            tag: "rect",
            attributes: Ae({
            }, to, {
                fill: "white"
            })
        }, v10 = c17.children ? {
            children: c17.children.map(so)
        } : {
        }, f10 = {
            tag: "g",
            attributes: Ae({
            }, u8.inner),
            children: [
                so(Ae({
                    tag: c17.tag,
                    attributes: Ae({
                    }, c17.attributes, u8.path)
                }, v10))
            ]
        }, y8 = {
            tag: "g",
            attributes: Ae({
            }, u8.outer),
            children: [
                f10
            ]
        }, j9 = "mask-".concat(t33 || oo()), h9 = "clip-".concat(t33 || oo()), p9 = {
            tag: "mask",
            attributes: Ae({
            }, to, {
                id: j9,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse"
            }),
            children: [
                l9,
                y8
            ]
        }, b8 = {
            tag: "defs",
            children: [
                {
                    tag: "clipPath",
                    attributes: {
                        id: h9
                    },
                    children: (o104 = g12, "g" === o104.tag ? o104.children : [
                        o104
                    ])
                },
                p9
            ]
        };
        return n66.push(b8, {
            tag: "rect",
            attributes: Ae({
                fill: "currentColor",
                "clip-path": "url(#".concat(h9, ")"),
                mask: "url(#".concat(j9, ")")
            }, to)
        }), {
            children: n66,
            attributes: i48
        };
    }(b7) : function(e186) {
        var o105 = e186.children, n67 = e186.attributes, i49 = e186.main, a47 = e186.transform, r34 = io(e186.styles);
        if (r34.length > 0 && (n67.style = r34), ao(a47)) {
            var t34 = ro({
                transform: a47,
                containerWidth: i49.width,
                iconWidth: i49.width
            });
            o105.push({
                tag: "g",
                attributes: Ae({
                }, t34.outer),
                children: [
                    {
                        tag: "g",
                        attributes: Ae({
                        }, t34.inner),
                        children: [
                            {
                                tag: i49.icon.tag,
                                children: i49.icon.children,
                                attributes: Ae({
                                }, i49.icon.attributes, t34.path)
                            }
                        ]
                    }
                ]
            });
        } else o105.push(i49.icon);
        return {
            children: o105,
            attributes: n67
        };
    }(b7), k5 = w4.children, x4 = w4.attributes;
    return b7.children = k5, b7.attributes = x4, s24 ? (function(e187) {
        var o106 = e187.prefix, n68 = e187.iconName, i50 = e187.children, a48 = e187.attributes, r35 = e187.symbol;
        return [
            {
                tag: "svg",
                attributes: {
                    style: "display: none;"
                },
                children: [
                    {
                        tag: "symbol",
                        attributes: Ae({
                        }, a48, {
                            id: !0 === r35 ? "".concat(o106, "-").concat(Ye.familyPrefix, "-").concat(n68) : r35
                        }),
                        children: i50
                    }
                ]
            }
        ];
    })(b7) : (function(e188) {
        var o107 = e188.children, n69 = e188.main, i51 = e188.mask, a49 = e188.attributes, r36 = e188.styles, t35 = e188.transform;
        if (ao(t35) && n69.found && !i51.found) {
            var s26 = {
                x: n69.width / n69.height / 2,
                y: 0.5
            };
            a49.style = io(Ae({
            }, r36, {
                "transform-origin": "".concat(s26.x + t35.x / 16, "em ").concat(s26.y + t35.y / 16, "em")
            }));
        }
        return [
            {
                tag: "svg",
                attributes: a49,
                children: o107
            }
        ];
    })(b7);
}
var co = function() {
}, go = (Ye.measurePerformance && He && He.mark && He.measure, function(e189, o108, n70, i52) {
    var a50, r37, t36, s27 = Object.keys(e189), m18 = s27.length, c18 = void 0 !== i52 ? function(e190, o109) {
        return function(n71, i53, a51, r38) {
            return e190.call(o109, n71, i53, a51, r38);
        };
    }(o108, i52) : o108;
    for(void 0 === n70 ? (a50 = 1, t36 = e189[s27[0]]) : (a50 = 0, t36 = n70); a50 < m18; a50++)t36 = c18(t36, e189[r37 = s27[a50]], r37, e189);
    return t36;
});
function uo(e191, o110) {
    var n72 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    }, i54 = n72.skipHooks, a52 = void 0 !== i54 && i54, r39 = Object.keys(o110).reduce(function(e192, n) {
        var i55 = o110[n];
        return !!i55.icon ? e192[i55.iconName] = i55.icon : e192[n] = i55, e192;
    }, {
    });
    "function" != typeof Ze.hooks.addPack || a52 ? Ze.styles[e191] = Ae({
    }, Ze.styles[e191] || {
    }, r39) : Ze.hooks.addPack(e191, r39), "fas" === e191 && uo("fa", o110);
}
var lo = Ze.styles, vo = Ze.shims, fo = function() {
    var e193 = function(e194) {
        return go(lo, function(o112, n73, i) {
            return o112[i] = go(n73, e194, {
            }), o112;
        }, {
        });
    };
    e193(function(e195, o113, n74) {
        return o113[3] && (e195[o113[3]] = n74), e195;
    }), e193(function(e196, o114, n75) {
        var i56 = o114[2];
        return e196[n75] = n75, i56.forEach(function(o) {
            e196[o] = n75;
        }), e196;
    });
    var o111 = "far" in lo;
    go(vo, function(e197, n76) {
        var i = n76[0], a53 = n76[1], r40 = n76[2];
        return "far" !== a53 || o111 || (a53 = "fas"), e197[i] = {
            prefix: a53,
            iconName: r40
        }, e197;
    }, {
    });
};
fo();
Ze.styles;
function yo(e198, o115, n77) {
    if (e198 && e198[o115] && e198[o115][n77]) return {
        prefix: o115,
        iconName: n77,
        icon: e198[o115][n77]
    };
}
function jo(e199) {
    var o116 = e199.tag, n78 = e199.attributes, i57 = void 0 === n78 ? {
    } : n78, a54 = e199.children, r41 = void 0 === a54 ? [] : a54;
    return "string" == typeof e199 ? no(e199) : "<".concat(o116, " ").concat(function(e200) {
        return Object.keys(e200 || {
        }).reduce(function(o117, n79) {
            return o117 + "".concat(n79, '="').concat(no(e200[n79]), '" ');
        }, "").trim();
    }(i57), ">").concat(r41.map(jo).join(""), "</").concat(o116, ">");
}
function ho(e201) {
    this.name = "MissingIcon", this.message = e201 || "Icon unavailable", this.stack = (new Error).stack;
}
ho.prototype = Object.create(Error.prototype), ho.prototype.constructor = ho;
var po = {
    fill: "currentColor"
}, bo = {
    attributeType: "XML",
    repeatCount: "indefinite",
    dur: "2s"
}, wo = (Ae({
}, po, {
    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
}), Ae({
}, bo, {
    attributeName: "opacity"
}));
Ae({
}, po, {
    cx: "256",
    cy: "364",
    r: "28"
}), Ae({
}, bo, {
    attributeName: "r",
    values: "28;14;28;28;14;28;"
}), Ae({
}, wo, {
    values: "1;0;1;1;0;1;"
}), Ae({
}, po, {
    opacity: "1",
    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
}), Ae({
}, wo, {
    values: "1;0;0;0;0;1;"
}), Ae({
}, po, {
    opacity: "0",
    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
}), Ae({
}, wo, {
    values: "0;0;1;1;0;0;"
}), Ze.styles;
function ko(e202) {
    var o118 = e202[0], n80 = e202[1], i58 = Le(e202.slice(4), 1)[0];
    return {
        found: !0,
        width: o118,
        height: n80,
        icon: Array.isArray(i58) ? {
            tag: "g",
            attributes: {
                class: "".concat(Ye.familyPrefix, "-").concat(We)
            },
            children: [
                {
                    tag: "path",
                    attributes: {
                        class: "".concat(Ye.familyPrefix, "-").concat(Je),
                        fill: "currentColor",
                        d: i58[0]
                    }
                },
                {
                    tag: "path",
                    attributes: {
                        class: "".concat(Ye.familyPrefix, "-").concat(Ke),
                        fill: "currentColor",
                        d: i58[1]
                    }
                }
            ]
        } : {
            tag: "path",
            attributes: {
                fill: "currentColor",
                d: i58
            }
        }
    };
}
Ze.styles;
function xo() {
    Ye.autoAddCss && !Oo && (!function(e203) {
        if (e203 && Ue) {
            var o119 = Ve.createElement("style");
            o119.setAttribute("type", "text/css"), o119.innerHTML = e203;
            for(var n81 = Ve.head.childNodes, i59 = null, a55 = n81.length - 1; a55 > -1; a55--){
                var r42 = n81[a55], t37 = (r42.tagName || "").toUpperCase();
                [
                    "STYLE",
                    "LINK"
                ].indexOf(t37) > -1 && (i59 = r42);
            }
            Ve.head.insertBefore(o119, i59);
        }
    }(function() {
        var e204 = "fa", o120 = "svg-inline--fa", n82 = Ye.familyPrefix, i60 = Ye.replacementClass, a56 = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
        if (n82 !== e204 || i60 !== o120) {
            var r43 = new RegExp("\\.".concat(e204, "\\-"), "g"), t38 = new RegExp("\\--".concat(e204, "\\-"), "g"), s28 = new RegExp("\\.".concat(o120), "g");
            a56 = a56.replace(r43, ".".concat(n82, "-")).replace(t38, "--".concat(n82, "-")).replace(s28, ".".concat(i60));
        }
        return a56;
    }()), Oo = !0);
}
function Co(e205, o121) {
    return Object.defineProperty(e205, "abstract", {
        get: o121
    }), Object.defineProperty(e205, "html", {
        get: function() {
            return e205.abstract.map(function(e206) {
                return jo(e206);
            });
        }
    }), Object.defineProperty(e205, "node", {
        get: function() {
            if (Ue) {
                var o122 = Ve.createElement("div");
                return o122.innerHTML = e205.html, o122.children;
            }
        }
    }), e205;
}
function Eo(e207) {
    var o123 = e207.prefix, n83 = void 0 === o123 ? "fa" : o123, i61 = e207.iconName;
    if (i61) return yo(zo.definitions, n83, i61) || yo(Ze.styles, n83, i61);
}
var _o, zo = new (function() {
    function e208() {
        !function(e209, o125) {
            if (!(e209 instanceof o125)) throw new TypeError("Cannot call a class as a function");
        }(this, e208), this.definitions = {
        };
    }
    var o124, n84, i62;
    return o124 = e208, n84 = [
        {
            key: "add",
            value: function() {
                for(var e210 = this, o126 = arguments.length, n85 = new Array(o126), i63 = 0; i63 < o126; i63++)n85[i63] = arguments[i63];
                var a57 = n85.reduce(this._pullDefinitions, {
                });
                Object.keys(a57).forEach(function(o127) {
                    e210.definitions[o127] = Ae({
                    }, e210.definitions[o127] || {
                    }, a57[o127]), uo(o127, a57[o127]), fo();
                });
            }
        },
        {
            key: "reset",
            value: function() {
                this.definitions = {
                };
            }
        },
        {
            key: "_pullDefinitions",
            value: function(e211, o128) {
                var n86 = o128.prefix && o128.iconName && o128.icon ? {
                    0: o128
                } : o128;
                return Object.keys(n86).map(function(o) {
                    var i64 = n86[o], a = i64.prefix, r = i64.iconName, t39 = i64.icon;
                    e211[a] || (e211[a] = {
                    }), e211[a][r] = t39;
                }), e211;
            }
        }
    ], Pe(o124.prototype, n84), i62 && Pe(o124, i62), e208;
}()), Oo = !1, Io = (_o = function(e212) {
    var o129 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    }, n87 = o129.transform, i65 = void 0 === n87 ? eo : n87, a58 = o129.symbol, r44 = void 0 !== a58 && a58, t40 = o129.mask, s29 = void 0 === t40 ? null : t40, m19 = o129.maskId, c19 = void 0 === m19 ? null : m19, d14 = o129.title, g13 = void 0 === d14 ? null : d14, u9 = o129.titleId, l10 = void 0 === u9 ? null : u9, v11 = o129.classes, f11 = void 0 === v11 ? [] : v11, y9 = o129.attributes, j10 = void 0 === y9 ? {
    } : y9, h10 = o129.styles, p10 = void 0 === h10 ? {
    } : h10;
    if (e212) {
        var b9 = e212.prefix, w5 = e212.iconName, k6 = e212.icon;
        return Co(Ae({
            type: "icon"
        }, e212), function() {
            return xo(), Ye.autoA11y && (g13 ? j10["aria-labelledby"] = "".concat(Ye.replacementClass, "-title-").concat(l10 || oo()) : (j10["aria-hidden"] = "true", j10.focusable = "false")), mo({
                icons: {
                    main: ko(k6),
                    mask: s29 ? ko(s29.icon) : {
                        found: !1,
                        width: null,
                        height: null,
                        icon: {
                        }
                    }
                },
                prefix: b9,
                iconName: w5,
                transform: Ae({
                }, eo, i65),
                symbol: r44,
                title: g13,
                maskId: c19,
                titleId: l10,
                extra: {
                    attributes: j10,
                    styles: p10,
                    classes: f11
                }
            });
        });
    }
}, function(e213) {
    var o130 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    }, n88 = (e213 || {
    }).icon ? e213 : Eo(e213 || {
    }), i66 = o130.mask;
    return i66 && (i66 = (i66 || {
    }).icon ? i66 : Eo(i66 || {
    })), _o(n88, Ae({
    }, o130, {
        mask: i66
    }));
});
zo.add({
    prefix: "far",
    iconName: "building",
    icon: [
        448,
        512,
        [],
        "f1ad",
        "M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"
    ]
}, {
    prefix: "fas",
    iconName: "cat",
    icon: [
        512,
        512,
        [],
        "f6be",
        "M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"
    ]
}, {
    prefix: "fas",
    iconName: "coffee",
    icon: [
        640,
        512,
        [],
        "f0f4",
        "M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"
    ]
}, {
    prefix: "far",
    iconName: "flag",
    icon: [
        512,
        512,
        [],
        "f024",
        "M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"
    ]
}, {
    prefix: "far",
    iconName: "frown",
    icon: [
        496,
        512,
        [],
        "f119",
        "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z"
    ]
}, {
    prefix: "fas",
    iconName: "futbol",
    icon: [
        512,
        512,
        [],
        "f1e3",
        "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"
    ]
}, {
    prefix: "fas",
    iconName: "history",
    icon: [
        512,
        512,
        [],
        "f1da",
        "M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"
    ]
}, {
    prefix: "fas",
    iconName: "icons",
    icon: [
        512,
        512,
        [],
        "f86d",
        "M116.65 219.35a15.68 15.68 0 0 0 22.65 0l96.75-99.83c28.15-29 26.5-77.1-4.91-103.88C203.75-7.7 163-3.5 137.86 22.44L128 32.58l-9.85-10.14C93.05-3.5 52.25-7.7 24.86 15.64c-31.41 26.78-33 74.85-5 103.88zm143.92 100.49h-48l-7.08-14.24a27.39 27.39 0 0 0-25.66-17.78h-71.71a27.39 27.39 0 0 0-25.66 17.78l-7 14.24h-48A27.45 27.45 0 0 0 0 347.3v137.25A27.44 27.44 0 0 0 27.43 512h233.14A27.45 27.45 0 0 0 288 484.55V347.3a27.45 27.45 0 0 0-27.43-27.46zM144 468a52 52 0 1 1 52-52 52 52 0 0 1-52 52zm355.4-115.9h-60.58l22.36-50.75c2.1-6.65-3.93-13.21-12.18-13.21h-75.59c-6.3 0-11.66 3.9-12.5 9.1l-16.8 106.93c-1 6.3 4.88 11.89 12.5 11.89h62.31l-24.2 83c-1.89 6.65 4.2 12.9 12.23 12.9a13.26 13.26 0 0 0 10.92-5.25l92.4-138.91c4.88-6.91-1.16-15.7-10.87-15.7zM478.08.33L329.51 23.17C314.87 25.42 304 38.92 304 54.83V161.6a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V99.66l112-17.22v47.18a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V32c0-19.48-16-34.42-33.92-31.67z"
    ]
}, {
    prefix: "far",
    iconName: "lightbulb",
    icon: [
        352,
        512,
        [],
        "f0eb",
        "M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"
    ]
}, {
    prefix: "fas",
    iconName: "music",
    icon: [
        512,
        512,
        [],
        "f001",
        "M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"
    ]
}, {
    prefix: "fas",
    iconName: "search",
    icon: [
        512,
        512,
        [],
        "f002",
        "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
    ]
}, {
    prefix: "far",
    iconName: "smile",
    icon: [
        496,
        512,
        [],
        "f118",
        "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"
    ]
}, {
    prefix: "fas",
    iconName: "times",
    icon: [
        352,
        512,
        [],
        "f00d",
        "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
    ]
}, {
    prefix: "fas",
    iconName: "user",
    icon: [
        448,
        512,
        [],
        "f007",
        "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
    ]
});
const So = Io({
    prefix: "far",
    iconName: "building"
}).html[0], Po = Io({
    prefix: "fas",
    iconName: "cat"
}).html[0], Mo = Io({
    prefix: "fas",
    iconName: "coffee"
}).html[0], Ao = Io({
    prefix: "far",
    iconName: "flag"
}).html[0], Lo = Io({
    prefix: "fas",
    iconName: "futbol"
}).html[0], To = Io({
    prefix: "far",
    iconName: "frown"
}).html[0], No = Io({
    prefix: "fas",
    iconName: "history"
}).html[0], Fo = Io({
    prefix: "fas",
    iconName: "icons"
}).html[0], Bo = Io({
    prefix: "far",
    iconName: "lightbulb"
}).html[0], Do = Io({
    prefix: "fas",
    iconName: "music"
}).html[0], Ro = Io({
    prefix: "fas",
    iconName: "search"
}).html[0], qo = Io({
    prefix: "far",
    iconName: "smile"
}).html[0], Vo = Io({
    prefix: "fas",
    iconName: "times"
}).html[0], Ho = Io({
    prefix: "fas",
    iconName: "user"
}).html[0];
function Uo(e214) {
    const o131 = document.createElement("img");
    return o131.src = e214, o131;
}
function Wo() {
    const e215 = localStorage.getItem("emojiPicker.recent");
    return (e215 ? JSON.parse(e215) : []).filter((e216)=>!!e216.emoji
    );
}
class Ko {
    constructor(e217, o132, n89, i67, a59, r45 = !0){
        this.emoji = e217, this.showVariants = o132, this.showPreview = n89, this.events = i67, this.options = a59, this.lazy = r45;
    }
    render() {
        this.emojiButton = ze("button", _e);
        let e218 = this.emoji.emoji;
        return this.emoji.custom ? e218 = this.lazy ? qo : `<img class="emoji-picker__custom-emoji" src="${Ee(this.emoji.emoji)}">` : "twemoji" === this.options.style && (e218 = this.lazy ? qo : ke.parse(this.emoji.emoji, this.options.twemojiOptions)), this.emojiButton.innerHTML = e218, this.emojiButton.tabIndex = -1, this.emojiButton.dataset.emoji = this.emoji.emoji, this.emoji.custom && (this.emojiButton.dataset.custom = "true"), this.emojiButton.title = this.emoji.name, this.emojiButton.addEventListener("focus", ()=>this.onEmojiHover()
        ), this.emojiButton.addEventListener("blur", ()=>this.onEmojiLeave()
        ), this.emojiButton.addEventListener("click", ()=>this.onEmojiClick()
        ), this.emojiButton.addEventListener("mouseover", ()=>this.onEmojiHover()
        ), this.emojiButton.addEventListener("mouseout", ()=>this.onEmojiLeave()
        ), "twemoji" === this.options.style && this.lazy && (this.emojiButton.style.opacity = "0.25"), this.emojiButton;
    }
    onEmojiClick() {
        this.emoji.variations && this.showVariants && this.options.showVariants || !this.options.showRecents || (function(e219, o133) {
            const n90 = Wo(), i68 = {
                emoji: e219.emoji,
                name: e219.name,
                key: e219.key || e219.name,
                custom: e219.custom
            };
            localStorage.setItem("emojiPicker.recent", JSON.stringify([
                i68,
                ...n90.filter((e220)=>!!e220.emoji && e220.key !== i68.key
                )
            ].slice(0, o133.recentsCount)));
        })(this.emoji, this.options), this.events.emit("emoji", {
            emoji: this.emoji,
            showVariants: this.showVariants,
            button: this.emojiButton
        });
    }
    onEmojiHover() {
        this.showPreview && this.events.emit("showPreview", this.emoji);
    }
    onEmojiLeave() {
        this.showPreview && this.events.emit("hidePreview");
    }
}
class Jo {
    constructor(e221, o134, n91, i69, a60 = !0){
        this.showVariants = o134, this.events = n91, this.options = i69, this.lazy = a60, this.emojis = e221.filter((e222)=>!e222.version || parseFloat(e222.version) <= parseFloat(i69.emojiVersion)
        );
    }
    render() {
        const e223 = ze("div", "emoji-picker__container");
        return this.emojis.forEach((o135)=>e223.appendChild(new Ko(o135, this.showVariants, !0, this.events, this.options, this.lazy).render())
        ), e223;
    }
}
var Go = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {
};
var Xo, Yo = (function(e224) {
    var o136, n92;
    o136 = Go, n92 = function() {
        var e225 = "undefined" == typeof window, o137 = new Map, n93 = new Map, i70 = [];
        i70.total = 0;
        var a61 = [], r46 = [];
        function t41() {
            o137.clear(), n93.clear(), a61 = [], r46 = [];
        }
        function s30(e226) {
            for(var o138 = -9007199254740991, n94 = e226.length - 1; n94 >= 0; --n94){
                var i71 = e226[n94];
                if (null !== i71) {
                    var a62 = i71.score;
                    a62 > o138 && (o138 = a62);
                }
            }
            return -9007199254740991 === o138 ? null : o138;
        }
        function m20(e227, o139) {
            var n95 = e227[o139];
            if (void 0 !== n95) return n95;
            var i72 = o139;
            Array.isArray(o139) || (i72 = o139.split("."));
            for(var a63 = i72.length, r47 = -1; e227 && ++r47 < a63;)e227 = e227[i72[r47]];
            return e227;
        }
        function c20(e228) {
            return "object" == typeof e228;
        }
        var d15 = function() {
            var e229 = [], o140 = 0, n96 = {
            };
            function i73() {
                for(var n97 = 0, i74 = e229[n97], a64 = 1; a64 < o140;){
                    var r48 = a64 + 1;
                    n97 = a64, r48 < o140 && e229[r48].score < e229[a64].score && (n97 = r48), e229[n97 - 1 >> 1] = e229[n97], a64 = 1 + (n97 << 1);
                }
                for(var t42 = n97 - 1 >> 1; n97 > 0 && i74.score < e229[t42].score; t42 = (n97 = t42) - 1 >> 1)e229[n97] = e229[t42];
                e229[n97] = i74;
            }
            return n96.add = function(n98) {
                var i75 = o140;
                e229[o140++] = n98;
                for(var a65 = i75 - 1 >> 1; i75 > 0 && n98.score < e229[a65].score; a65 = (i75 = a65) - 1 >> 1)e229[i75] = e229[a65];
                e229[i75] = n98;
            }, n96.poll = function() {
                if (0 !== o140) {
                    var n99 = e229[0];
                    return e229[0] = e229[--o140], i73(), n99;
                }
            }, n96.peek = function(n) {
                if (0 !== o140) return e229[0];
            }, n96.replaceTop = function(o141) {
                e229[0] = o141, i73();
            }, n96;
        }, g14 = d15();
        return (function u10(l11) {
            var v12 = {
                single: function(e230, o142, n100) {
                    return e230 ? (c20(e230) || (e230 = v12.getPreparedSearch(e230)), o142 ? (c20(o142) || (o142 = v12.getPrepared(o142)), ((n100 && void 0 !== n100.allowTypo ? n100.allowTypo : !l11 || void 0 === l11.allowTypo || l11.allowTypo) ? v12.algorithm : v12.algorithmNoTypo)(e230, o142, e230[0])) : null) : null;
                },
                go: function(e231, o143, n101) {
                    if (!e231) return i70;
                    var a66 = (e231 = v12.prepareSearch(e231))[0], r49 = n101 && n101.threshold || l11 && l11.threshold || -9007199254740991, t43 = n101 && n101.limit || l11 && l11.limit || 9007199254740991, d16 = (n101 && void 0 !== n101.allowTypo ? n101.allowTypo : !l11 || void 0 === l11.allowTypo || l11.allowTypo) ? v12.algorithm : v12.algorithmNoTypo, u11 = 0, f12 = 0, y10 = o143.length;
                    if (n101 && n101.keys) for(var j11 = n101.scoreFn || s30, h11 = n101.keys, p11 = h11.length, b10 = y10 - 1; b10 >= 0; --b10){
                        for(var w6 = o143[b10], k7 = new Array(p11), x5 = p11 - 1; x5 >= 0; --x5)(_4 = m20(w6, E4 = h11[x5])) ? (c20(_4) || (_4 = v12.getPrepared(_4)), k7[x5] = d16(e231, _4, a66)) : k7[x5] = null;
                        k7.obj = w6;
                        var C3 = j11(k7);
                        null !== C3 && (C3 < r49 || (k7.score = C3, u11 < t43 ? (g14.add(k7), ++u11) : (++f12, C3 > g14.peek().score && g14.replaceTop(k7))));
                    }
                    else if (n101 && n101.key) {
                        var E4 = n101.key;
                        for(b10 = y10 - 1; b10 >= 0; --b10)(_4 = m20(w6 = o143[b10], E4)) && (c20(_4) || (_4 = v12.getPrepared(_4)), null !== (z2 = d16(e231, _4, a66)) && (z2.score < r49 || (z2 = {
                            target: z2.target,
                            _targetLowerCodes: null,
                            _nextBeginningIndexes: null,
                            score: z2.score,
                            indexes: z2.indexes,
                            obj: w6
                        }, u11 < t43 ? (g14.add(z2), ++u11) : (++f12, z2.score > g14.peek().score && g14.replaceTop(z2)))));
                    } else for(b10 = y10 - 1; b10 >= 0; --b10){
                        var _4, z2;
                        (_4 = o143[b10]) && (c20(_4) || (_4 = v12.getPrepared(_4)), null !== (z2 = d16(e231, _4, a66)) && (z2.score < r49 || (u11 < t43 ? (g14.add(z2), ++u11) : (++f12, z2.score > g14.peek().score && g14.replaceTop(z2)))));
                    }
                    if (0 === u11) return i70;
                    var O3 = new Array(u11);
                    for(b10 = u11 - 1; b10 >= 0; --b10)O3[b10] = g14.poll();
                    return O3.total = u11 + f12, O3;
                },
                goAsync: function(o144, n102, a67) {
                    var r50 = !1, t44 = new Promise(function(t45, g15) {
                        if (!o144) return t45(i70);
                        var u12 = (o144 = v12.prepareSearch(o144))[0], f13 = d15(), y11 = n102.length - 1, j12 = a67 && a67.threshold || l11 && l11.threshold || -9007199254740991, h12 = a67 && a67.limit || l11 && l11.limit || 9007199254740991, p12 = (a67 && void 0 !== a67.allowTypo ? a67.allowTypo : !l11 || void 0 === l11.allowTypo || l11.allowTypo) ? v12.algorithm : v12.algorithmNoTypo, b11 = 0, w7 = 0;
                        function k8() {
                            if (r50) return g15("canceled");
                            var d17 = Date.now();
                            if (a67 && a67.keys) for(var l12 = a67.scoreFn || s30, x6 = a67.keys, C4 = x6.length; y11 >= 0; --y11){
                                for(var E5 = n102[y11], _5 = new Array(C4), z3 = C4 - 1; z3 >= 0; --z3)(S3 = m20(E5, I3 = x6[z3])) ? (c20(S3) || (S3 = v12.getPrepared(S3)), _5[z3] = p12(o144, S3, u12)) : _5[z3] = null;
                                _5.obj = E5;
                                var O4 = l12(_5);
                                if (null !== O4 && !(O4 < j12) && (_5.score = O4, b11 < h12 ? (f13.add(_5), ++b11) : (++w7, O4 > f13.peek().score && f13.replaceTop(_5)), y11 % 1000 == 0 && Date.now() - d17 >= 10)) return void (e225 ? setImmediate(k8) : setTimeout(k8));
                            }
                            else if (a67 && a67.key) {
                                for(var I3 = a67.key; y11 >= 0; --y11)if ((S3 = m20(E5 = n102[y11], I3)) && (c20(S3) || (S3 = v12.getPrepared(S3)), null !== (P3 = p12(o144, S3, u12)) && !(P3.score < j12) && (P3 = {
                                    target: P3.target,
                                    _targetLowerCodes: null,
                                    _nextBeginningIndexes: null,
                                    score: P3.score,
                                    indexes: P3.indexes,
                                    obj: E5
                                }, b11 < h12 ? (f13.add(P3), ++b11) : (++w7, P3.score > f13.peek().score && f13.replaceTop(P3)), y11 % 1000 == 0 && Date.now() - d17 >= 10))) return void (e225 ? setImmediate(k8) : setTimeout(k8));
                            } else for(; y11 >= 0; --y11){
                                var S3, P3;
                                if ((S3 = n102[y11]) && (c20(S3) || (S3 = v12.getPrepared(S3)), null !== (P3 = p12(o144, S3, u12)) && !(P3.score < j12) && (b11 < h12 ? (f13.add(P3), ++b11) : (++w7, P3.score > f13.peek().score && f13.replaceTop(P3)), y11 % 1000 == 0 && Date.now() - d17 >= 10))) return void (e225 ? setImmediate(k8) : setTimeout(k8));
                            }
                            if (0 === b11) return t45(i70);
                            for(var M2 = new Array(b11), A2 = b11 - 1; A2 >= 0; --A2)M2[A2] = f13.poll();
                            M2.total = b11 + w7, t45(M2);
                        }
                        e225 ? setImmediate(k8) : k8();
                    });
                    return t44.cancel = function() {
                        r50 = !0;
                    }, t44;
                },
                highlight: function(e232, o145, n103) {
                    if (null === e232) return null;
                    void 0 === o145 && (o145 = "<b>"), void 0 === n103 && (n103 = "</b>");
                    for(var i76 = "", a68 = 0, r51 = !1, t46 = e232.target, s31 = t46.length, m21 = e232.indexes, c21 = 0; c21 < s31; ++c21){
                        var d18 = t46[c21];
                        if (m21[a68] === c21) {
                            if (r51 || (r51 = !0, i76 += o145), ++a68 === m21.length) {
                                i76 += d18 + n103 + t46.substr(c21 + 1);
                                break;
                            }
                        } else r51 && (r51 = !1, i76 += n103);
                        i76 += d18;
                    }
                    return i76;
                },
                prepare: function(e233) {
                    if (e233) return {
                        target: e233,
                        _targetLowerCodes: v12.prepareLowerCodes(e233),
                        _nextBeginningIndexes: null,
                        score: null,
                        indexes: null,
                        obj: null
                    };
                },
                prepareSlow: function(e234) {
                    if (e234) return {
                        target: e234,
                        _targetLowerCodes: v12.prepareLowerCodes(e234),
                        _nextBeginningIndexes: v12.prepareNextBeginningIndexes(e234),
                        score: null,
                        indexes: null,
                        obj: null
                    };
                },
                prepareSearch: function(e235) {
                    if (e235) return v12.prepareLowerCodes(e235);
                },
                getPrepared: function(e236) {
                    if (e236.length > 999) return v12.prepare(e236);
                    var n104 = o137.get(e236);
                    return void 0 !== n104 || (n104 = v12.prepare(e236), o137.set(e236, n104)), n104;
                },
                getPreparedSearch: function(e237) {
                    if (e237.length > 999) return v12.prepareSearch(e237);
                    var o146 = n93.get(e237);
                    return void 0 !== o146 || (o146 = v12.prepareSearch(e237), n93.set(e237, o146)), o146;
                },
                algorithm: function(e238, o147, n105) {
                    for(var i77 = o147._targetLowerCodes, t47 = e238.length, s32 = i77.length, m22 = 0, c22 = 0, d19 = 0, g16 = 0;;){
                        if (n105 === i77[c22]) {
                            if (a61[g16++] = c22, ++m22 === t47) break;
                            n105 = e238[0 === d19 ? m22 : d19 === m22 ? m22 + 1 : d19 === m22 - 1 ? m22 - 1 : m22];
                        }
                        if (++c22 >= s32) for(;;){
                            if (m22 <= 1) return null;
                            if (0 === d19) {
                                if (n105 === e238[--m22]) continue;
                                d19 = m22;
                            } else {
                                if (1 === d19) return null;
                                if ((n105 = e238[1 + (m22 = --d19)]) === e238[m22]) continue;
                            }
                            c22 = a61[(g16 = m22) - 1] + 1;
                            break;
                        }
                    }
                    m22 = 0;
                    var u13 = 0, l13 = !1, f14 = 0, y12 = o147._nextBeginningIndexes;
                    null === y12 && (y12 = o147._nextBeginningIndexes = v12.prepareNextBeginningIndexes(o147.target));
                    var j13 = c22 = 0 === a61[0] ? 0 : y12[a61[0] - 1];
                    if (c22 !== s32) for(;;)if (c22 >= s32) {
                        if (m22 <= 0) {
                            if (++u13 > t47 - 2) break;
                            if (e238[u13] === e238[u13 + 1]) continue;
                            c22 = j13;
                            continue;
                        }
                        --m22, c22 = y12[r46[--f14]];
                    } else if (e238[0 === u13 ? m22 : u13 === m22 ? m22 + 1 : u13 === m22 - 1 ? m22 - 1 : m22] === i77[c22]) {
                        if (r46[f14++] = c22, ++m22 === t47) {
                            l13 = !0;
                            break;
                        }
                        ++c22;
                    } else c22 = y12[c22];
                    if (l13) var h13 = r46, p13 = f14;
                    else h13 = a61, p13 = g16;
                    for(var b12 = 0, w8 = -1, k9 = 0; k9 < t47; ++k9)w8 !== (c22 = h13[k9]) - 1 && (b12 -= c22), w8 = c22;
                    for(l13 ? 0 !== u13 && (b12 += -20) : (b12 *= 1000, 0 !== d19 && (b12 += -20)), b12 -= s32 - t47, o147.score = b12, o147.indexes = new Array(p13), k9 = p13 - 1; k9 >= 0; --k9)o147.indexes[k9] = h13[k9];
                    return o147;
                },
                algorithmNoTypo: function(e239, o148, n106) {
                    for(var i78 = o148._targetLowerCodes, t48 = e239.length, s33 = i78.length, m23 = 0, c23 = 0, d20 = 0;;){
                        if (n106 === i78[c23]) {
                            if (a61[d20++] = c23, ++m23 === t48) break;
                            n106 = e239[m23];
                        }
                        if (++c23 >= s33) return null;
                    }
                    m23 = 0;
                    var g17 = !1, u14 = 0, l14 = o148._nextBeginningIndexes;
                    if (null === l14 && (l14 = o148._nextBeginningIndexes = v12.prepareNextBeginningIndexes(o148.target)), (c23 = 0 === a61[0] ? 0 : l14[a61[0] - 1]) !== s33) for(;;)if (c23 >= s33) {
                        if (m23 <= 0) break;
                        --m23, c23 = l14[r46[--u14]];
                    } else if (e239[m23] === i78[c23]) {
                        if (r46[u14++] = c23, ++m23 === t48) {
                            g17 = !0;
                            break;
                        }
                        ++c23;
                    } else c23 = l14[c23];
                    if (g17) var f15 = r46, y13 = u14;
                    else f15 = a61, y13 = d20;
                    for(var j14 = 0, h14 = -1, p14 = 0; p14 < t48; ++p14)h14 !== (c23 = f15[p14]) - 1 && (j14 -= c23), h14 = c23;
                    for(g17 || (j14 *= 1000), j14 -= s33 - t48, o148.score = j14, o148.indexes = new Array(y13), p14 = y13 - 1; p14 >= 0; --p14)o148.indexes[p14] = f15[p14];
                    return o148;
                },
                prepareLowerCodes: function(e240) {
                    for(var o149 = e240.length, n107 = [], i79 = e240.toLowerCase(), a69 = 0; a69 < o149; ++a69)n107[a69] = i79.charCodeAt(a69);
                    return n107;
                },
                prepareBeginningIndexes: function(e241) {
                    for(var o150 = e241.length, n108 = [], i = 0, a70 = !1, r52 = !1, t49 = 0; t49 < o150; ++t49){
                        var s34 = e241.charCodeAt(t49), m24 = s34 >= 65 && s34 <= 90, c24 = m24 || s34 >= 97 && s34 <= 122 || s34 >= 48 && s34 <= 57, d21 = m24 && !a70 || !r52 || !c24;
                        a70 = m24, r52 = c24, d21 && (n108[i++] = t49);
                    }
                    return n108;
                },
                prepareNextBeginningIndexes: function(e242) {
                    for(var o151 = e242.length, n109 = v12.prepareBeginningIndexes(e242), i80 = [], a71 = n109[0], r = 0, t50 = 0; t50 < o151; ++t50)a71 > t50 ? i80[t50] = a71 : (a71 = n109[++r], i80[t50] = void 0 === a71 ? o151 : a71);
                    return i80;
                },
                cleanup: t41,
                new: u10
            };
            return v12;
        })();
    }, e224.exports ? e224.exports = n92() : o136.fuzzysort = n92();
}(Xo = {
    exports: {
    }
}, Xo.exports), Xo.exports);
class $o {
    constructor(e243, o152){
        this.message = e243, this.iconUrl = o152;
    }
    render() {
        const e244 = ze("div", "emoji-picker__search-not-found"), o153 = ze("div", "emoji-picker__search-not-found-icon");
        this.iconUrl ? o153.appendChild(Uo(this.iconUrl)) : o153.innerHTML = To, e244.appendChild(o153);
        const n110 = ze("h2");
        return n110.innerHTML = Ee(this.message), e244.appendChild(n110), e244;
    }
}
class Zo {
    constructor(e245, o154, n111, i81, a72){
        if (this.events = e245, this.i18n = o154, this.options = n111, this.focusedEmojiIndex = 0, this.emojisPerRow = this.options.emojisPerRow || 8, this.emojiData = i81.filter((e246)=>e246.version && parseFloat(e246.version) <= parseFloat(n111.emojiVersion) && void 0 !== e246.category && a72.indexOf(e246.category) >= 0
        ), this.options.custom) {
            const e247 = this.options.custom.map((e249)=>Object.assign(Object.assign({
                }, e249), {
                    custom: !0
                })
            );
            this.emojiData = [
                ...this.emojiData,
                ...e247
            ];
        }
        this.events.on("hideVariantPopup", ()=>{
            setTimeout(()=>this.setFocusedEmoji(this.focusedEmojiIndex)
            );
        });
    }
    render() {
        return this.searchContainer = ze("div", "emoji-picker__search-container"), this.searchField = ze("input", "emoji-picker__search"), this.searchField.placeholder = this.i18n.search, this.searchContainer.appendChild(this.searchField), this.searchIcon = ze("span", "emoji-picker__search-icon"), this.options.icons && this.options.icons.search ? this.searchIcon.appendChild(Uo(this.options.icons.search)) : this.searchIcon.innerHTML = Ro, this.searchIcon.addEventListener("click", (e250)=>this.onClearSearch(e250)
        ), this.searchContainer.appendChild(this.searchIcon), this.searchField.addEventListener("keydown", (e251)=>this.onKeyDown(e251)
        ), this.searchField.addEventListener("keyup", (e252)=>this.onKeyUp(e252)
        ), this.searchContainer;
    }
    clear() {
        this.searchField.value = "";
    }
    focus() {
        this.searchField.focus();
    }
    onClearSearch(e253) {
        e253.stopPropagation(), this.searchField.value && (this.searchField.value = "", this.resultsContainer = null, this.options.icons && this.options.icons.search ? (Oe(this.searchIcon), this.searchIcon.appendChild(Uo(this.options.icons.search))) : this.searchIcon.innerHTML = Ro, this.searchIcon.style.cursor = "default", this.events.emit("hideSearchResults"), setTimeout(()=>this.searchField.focus()
        ));
    }
    setFocusedEmoji(e254) {
        if (this.resultsContainer) {
            const o155 = this.resultsContainer.querySelectorAll("." + _e);
            o155[this.focusedEmojiIndex].tabIndex = -1, this.focusedEmojiIndex = e254;
            const n112 = o155[this.focusedEmojiIndex];
            n112.tabIndex = 0, n112.focus();
        }
    }
    handleResultsKeydown(e255) {
        if (this.resultsContainer) {
            const o156 = this.resultsContainer.querySelectorAll("." + _e);
            "ArrowRight" === e255.key ? this.setFocusedEmoji(Math.min(this.focusedEmojiIndex + 1, o156.length - 1)) : "ArrowLeft" === e255.key ? this.setFocusedEmoji(Math.max(0, this.focusedEmojiIndex - 1)) : "ArrowDown" === e255.key ? (e255.preventDefault(), this.focusedEmojiIndex < o156.length - this.emojisPerRow && this.setFocusedEmoji(this.focusedEmojiIndex + this.emojisPerRow)) : "ArrowUp" === e255.key ? (e255.preventDefault(), this.focusedEmojiIndex >= this.emojisPerRow && this.setFocusedEmoji(this.focusedEmojiIndex - this.emojisPerRow)) : "Escape" === e255.key && this.onClearSearch(e255);
        }
    }
    onKeyDown(e256) {
        "Escape" === e256.key && this.searchField.value && this.onClearSearch(e256);
    }
    onKeyUp(e257) {
        if ("Tab" !== e257.key && "Shift" !== e257.key) {
            if (this.searchField.value) {
                this.options.icons && this.options.icons.clearSearch ? (Oe(this.searchIcon), this.searchIcon.appendChild(Uo(this.options.icons.clearSearch))) : this.searchIcon.innerHTML = Vo, this.searchIcon.style.cursor = "pointer";
                const e258 = Yo.go(this.searchField.value, this.emojiData, {
                    allowTypo: !0,
                    limit: 100,
                    key: "name"
                }).map((e261)=>e261.obj
                );
                this.events.emit("hidePreview"), e258.length ? (this.resultsContainer = new Jo(e258, !0, this.events, this.options, !1).render(), this.resultsContainer && (this.resultsContainer.querySelector("." + _e).tabIndex = 0, this.focusedEmojiIndex = 0, this.resultsContainer.addEventListener("keydown", (e262)=>this.handleResultsKeydown(e262)
                ), this.events.emit("showSearchResults", this.resultsContainer))) : this.events.emit("showSearchResults", new $o(this.i18n.notFound, this.options.icons && this.options.icons.notFound).render());
            } else this.options.icons && this.options.icons.search ? (Oe(this.searchIcon), this.searchIcon.appendChild(Uo(this.options.icons.search))) : this.searchIcon.innerHTML = Ro, this.searchIcon.style.cursor = "default", this.events.emit("hideSearchResults");
        }
    }
}
class Qo {
    constructor(e263, o157, n113){
        this.events = e263, this.emoji = o157, this.options = n113, this.focusedEmojiIndex = 0;
    }
    getEmoji(e) {
        return this.popup.querySelectorAll("." + _e)[e];
    }
    setFocusedEmoji(e264) {
        this.getEmoji(this.focusedEmojiIndex).tabIndex = -1, this.focusedEmojiIndex = e264;
        const o158 = this.getEmoji(this.focusedEmojiIndex);
        o158.tabIndex = 0, o158.focus();
    }
    render() {
        this.popup = ze("div", "emoji-picker__variant-popup");
        const e265 = ze("div", "emoji-picker__variant-overlay");
        e265.addEventListener("click", (e266)=>{
            e266.stopPropagation(), this.popup.contains(e266.target) || this.events.emit("hideVariantPopup");
        }), this.popup.appendChild(new Ko(this.emoji, !1, !1, this.events, this.options, !1).render()), (this.emoji.variations || []).forEach((e267, o160)=>this.popup.appendChild(new Ko({
                name: this.emoji.name,
                emoji: e267,
                key: this.emoji.name + o160
            }, !1, !1, this.events, this.options, !1).render())
        );
        const o159 = this.popup.querySelector("." + _e);
        return this.focusedEmojiIndex = 0, o159.tabIndex = 0, setTimeout(()=>o159.focus()
        ), this.popup.addEventListener("keydown", (e268)=>{
            "ArrowRight" === e268.key ? this.setFocusedEmoji(Math.min(this.focusedEmojiIndex + 1, this.popup.querySelectorAll("." + _e).length - 1)) : "ArrowLeft" === e268.key ? this.setFocusedEmoji(Math.max(this.focusedEmojiIndex - 1, 0)) : "Escape" === e268.key && (e268.stopPropagation(), this.events.emit("hideVariantPopup"));
        }), e265.appendChild(this.popup), e265;
    }
}
const en = {
    search: "Search emojis...",
    categories: {
        recents: "Recent Emojis",
        smileys: "Smileys & Emotion",
        people: "People & Body",
        animals: "Animals & Nature",
        food: "Food & Drink",
        activities: "Activities",
        travel: "Travel & Places",
        objects: "Objects",
        symbols: "Symbols",
        flags: "Flags",
        custom: "Custom"
    },
    notFound: "No emojis found"
}, on = {
    recents: No,
    smileys: qo,
    people: Ho,
    animals: Po,
    food: Mo,
    activities: Lo,
    travel: So,
    objects: Bo,
    symbols: Do,
    flags: Ao,
    custom: Fo
};
class nn {
    constructor(e269, o161, n114){
        this.options = e269, this.events = o161, this.i18n = n114, this.activeButton = 0, this.buttons = [];
    }
    render() {
        var e270;
        const o162 = ze("div", "emoji-picker__category-buttons"), n115 = this.options.categories || (null === (e270 = this.options.emojiData) || void 0 === e270 ? void 0 : e270.categories) || xe.categories;
        let i82 = this.options.showRecents ? [
            "recents",
            ...n115
        ] : n115;
        return this.options.custom && (i82 = [
            ...i82,
            "custom"
        ]), i82.forEach((e271)=>{
            const n116 = ze("button", "emoji-picker__category-button");
            this.options.icons && this.options.icons.categories && this.options.icons.categories[e271] ? n116.appendChild(Uo(this.options.icons.categories[e271])) : n116.innerHTML = on[e271], n116.tabIndex = -1, n116.title = this.i18n.categories[e271], o162.appendChild(n116), this.buttons.push(n116), n116.addEventListener("click", ()=>{
                this.events.emit("categoryClicked", e271);
            });
        }), o162.addEventListener("keydown", (e272)=>{
            switch(e272.key){
                case "ArrowRight":
                    this.events.emit("categoryClicked", i82[(this.activeButton + 1) % this.buttons.length]);
                    break;
                case "ArrowLeft":
                    this.events.emit("categoryClicked", i82[0 === this.activeButton ? this.buttons.length - 1 : this.activeButton - 1]);
                    break;
                case "ArrowUp":
                case "ArrowDown":
                    e272.stopPropagation(), e272.preventDefault();
            }
        }), o162;
    }
    setActiveButton(e273, o163 = !0) {
        let n117 = this.buttons[this.activeButton];
        n117.classList.remove("active"), n117.tabIndex = -1, this.activeButton = e273, n117 = this.buttons[this.activeButton], n117.classList.add("active"), n117.tabIndex = 0, o163 && n117.focus();
    }
}
const an = [
    "recents",
    "smileys",
    "people",
    "animals",
    "food",
    "activities",
    "travel",
    "objects",
    "symbols",
    "flags",
    "custom"
];
class rn {
    constructor(e274, o164, n118, i83){
        var a73;
        this.events = e274, this.i18n = o164, this.options = n118, this.emojiCategories = i83, this.currentCategory = 0, this.headers = [], this.focusedIndex = 0, this.handleKeyDown = (e275)=>{
            switch(this.emojis.removeEventListener("scroll", this.highlightCategory), e275.key){
                case "ArrowRight":
                    this.focusedEmoji.tabIndex = -1, this.focusedIndex === this.currentEmojiCount - 1 && this.currentCategory < this.categories.length - 1 ? (this.options.showCategoryButtons && this.categoryButtons.setActiveButton(++this.currentCategory), this.setFocusedEmoji(0)) : this.focusedIndex < this.currentEmojiCount - 1 && this.setFocusedEmoji(this.focusedIndex + 1);
                    break;
                case "ArrowLeft":
                    this.focusedEmoji.tabIndex = -1, 0 === this.focusedIndex && this.currentCategory > 0 ? (this.options.showCategoryButtons && this.categoryButtons.setActiveButton(--this.currentCategory), this.setFocusedEmoji(this.currentEmojiCount - 1)) : this.setFocusedEmoji(Math.max(0, this.focusedIndex - 1));
                    break;
                case "ArrowDown":
                    e275.preventDefault(), this.focusedEmoji.tabIndex = -1, this.focusedIndex + this.emojisPerRow >= this.currentEmojiCount && this.currentCategory < this.categories.length - 1 ? (this.currentCategory++, this.options.showCategoryButtons && this.categoryButtons.setActiveButton(this.currentCategory), this.setFocusedEmoji(Math.min(this.focusedIndex % this.emojisPerRow, this.currentEmojiCount - 1))) : this.currentEmojiCount - this.focusedIndex > this.emojisPerRow && this.setFocusedEmoji(this.focusedIndex + this.emojisPerRow);
                    break;
                case "ArrowUp":
                    if (e275.preventDefault(), this.focusedEmoji.tabIndex = -1, this.focusedIndex < this.emojisPerRow && this.currentCategory > 0) {
                        const e276 = this.getEmojiCount(this.currentCategory - 1);
                        let o165 = e276 % this.emojisPerRow;
                        0 === o165 && (o165 = this.emojisPerRow);
                        const n119 = this.focusedIndex, i84 = n119 > o165 - 1 ? e276 - 1 : e276 - o165 + n119;
                        this.currentCategory--, this.options.showCategoryButtons && this.categoryButtons.setActiveButton(this.currentCategory), this.setFocusedEmoji(i84);
                    } else this.setFocusedEmoji(this.focusedIndex >= this.emojisPerRow ? this.focusedIndex - this.emojisPerRow : this.focusedIndex);
            }
            requestAnimationFrame(()=>this.emojis.addEventListener("scroll", this.highlightCategory)
            );
        }, this.addCategory = (e277, o166)=>{
            const n120 = ze("h2", "emoji-picker__category-name");
            n120.innerHTML = Ee(this.i18n.categories[e277] || en.categories[e277]), this.emojis.appendChild(n120), this.headers.push(n120), this.emojis.appendChild(new Jo(o166, !0, this.events, this.options, "recents" !== e277).render());
        }, this.selectCategory = (e278, o167 = !0)=>{
            this.emojis.removeEventListener("scroll", this.highlightCategory), this.focusedEmoji && (this.focusedEmoji.tabIndex = -1);
            const n121 = this.categories.indexOf(e278);
            this.currentCategory = n121, this.setFocusedEmoji(0, !1), this.options.showCategoryButtons && this.categoryButtons.setActiveButton(this.currentCategory, o167);
            const i85 = this.headerOffsets[n121];
            this.emojis.scrollTop = i85, requestAnimationFrame(()=>this.emojis.addEventListener("scroll", this.highlightCategory)
            );
        }, this.highlightCategory = ()=>{
            if (document.activeElement && document.activeElement.classList.contains("emoji-picker__emoji")) return;
            let e279 = this.headerOffsets.findIndex((e280)=>e280 >= Math.round(this.emojis.scrollTop)
            );
            this.emojis.scrollTop + this.emojis.offsetHeight === this.emojis.scrollHeight && (e279 = -1), 0 === e279 ? e279 = 1 : e279 < 0 && (e279 = this.headerOffsets.length), this.headerOffsets[e279] === this.emojis.scrollTop && e279++, this.currentCategory = e279 - 1, this.options.showCategoryButtons && this.categoryButtons.setActiveButton(this.currentCategory);
        }, this.emojisPerRow = n118.emojisPerRow || 8, this.categories = (null === (a73 = n118.emojiData) || void 0 === a73 ? void 0 : a73.categories) || n118.categories || xe.categories, n118.showRecents && (this.categories = [
            "recents",
            ...this.categories
        ]), n118.custom && (this.categories = [
            ...this.categories,
            "custom"
        ]), this.categories.sort((e281, o168)=>an.indexOf(e281) - an.indexOf(o168)
        );
    }
    updateRecents() {
        if (this.options.showRecents) {
            this.emojiCategories.recents = Wo();
            const e282 = this.emojis.querySelector(".emoji-picker__container");
            e282 && e282.parentNode && e282.parentNode.replaceChild(new Jo(this.emojiCategories.recents, !0, this.events, this.options, !1).render(), e282);
        }
    }
    render() {
        this.container = ze("div", "emoji-picker__emoji-area"), this.options.showCategoryButtons && (this.categoryButtons = new nn(this.options, this.events, this.i18n), this.container.appendChild(this.categoryButtons.render())), this.emojis = ze("div", "emoji-picker__emojis"), this.options.showRecents && (this.emojiCategories.recents = Wo()), this.options.custom && (this.emojiCategories.custom = this.options.custom.map((e283)=>Object.assign(Object.assign({
            }, e283), {
                custom: !0
            })
        )), this.categories.forEach((e284)=>this.addCategory(e284, this.emojiCategories[e284])
        ), requestAnimationFrame(()=>{
            setTimeout(()=>{
                setTimeout(()=>this.emojis.addEventListener("scroll", this.highlightCategory)
                );
            });
        }), this.emojis.addEventListener("keydown", this.handleKeyDown), this.events.on("categoryClicked", this.selectCategory), this.container.appendChild(this.emojis);
        return this.container.querySelectorAll("." + _e)[0].tabIndex = 0, this.container;
    }
    reset() {
        this.headerOffsets = Array.prototype.map.call(this.headers, (e285)=>e285.offsetTop
        ), this.selectCategory(this.options.initialCategory || "smileys", !1), this.currentCategory = this.categories.indexOf(this.options.initialCategory || "smileys"), this.options.showCategoryButtons && this.categoryButtons.setActiveButton(this.currentCategory, !1);
    }
    get currentCategoryEl() {
        return this.emojis.querySelectorAll(".emoji-picker__container")[this.currentCategory];
    }
    get focusedEmoji() {
        return this.currentCategoryEl.querySelectorAll("." + _e)[this.focusedIndex];
    }
    get currentEmojiCount() {
        return this.currentCategoryEl.querySelectorAll("." + _e).length;
    }
    getEmojiCount(e) {
        return this.emojis.querySelectorAll(".emoji-picker__container")[e].querySelectorAll("." + _e).length;
    }
    setFocusedEmoji(e286, o169 = !0) {
        this.focusedIndex = e286, this.focusedEmoji && (this.focusedEmoji.tabIndex = 0, o169 && this.focusedEmoji.focus());
    }
}
const tn = {
    position: "auto",
    autoHide: !0,
    autoFocusSearch: !0,
    showAnimation: !0,
    showPreview: !0,
    showSearch: !0,
    showRecents: !0,
    showVariants: !0,
    showCategoryButtons: !0,
    recentsCount: 50,
    emojiData: xe,
    emojiVersion: "12.1",
    theme: "light",
    categories: [
        "smileys",
        "people",
        "animals",
        "food",
        "activities",
        "travel",
        "objects",
        "symbols",
        "flags"
    ],
    style: "native",
    twemojiOptions: {
        ext: ".svg",
        folder: "svg"
    },
    emojisPerRow: 8,
    rows: 6,
    emojiSize: "1.8em",
    initialCategory: "smileys"
};
class sn {
    constructor(e287 = {
    }){
        this.events = new b, this.publicEvents = new b, this.pickerVisible = !1, this.options = Object.assign(Object.assign({
        }, tn), e287), this.options.rootElement || (this.options.rootElement = document.body), this.i18n = Object.assign(Object.assign({
        }, en), e287.i18n), this.onDocumentClick = this.onDocumentClick.bind(this), this.onDocumentKeydown = this.onDocumentKeydown.bind(this), this.theme = this.options.theme || "light", this.emojiCategories = (function(e288) {
            const o170 = {
            };
            return e288.emoji.forEach((n122)=>{
                let i86 = o170[e288.categories[n122.category || 0]];
                i86 || (i86 = o170[e288.categories[n122.category || 0]] = []), i86.push(n122);
            }), o170;
        })(this.options.emojiData || xe), this.buildPicker();
    }
    on(e289, o171) {
        this.publicEvents.on(e289, o171);
    }
    off(e290, o172) {
        this.publicEvents.off(e290, o172);
    }
    setStyleProperties() {
        this.options.showAnimation || this.pickerEl.style.setProperty("--animation-duration", "0s"), this.options.emojisPerRow && this.pickerEl.style.setProperty("--emoji-per-row", this.options.emojisPerRow.toString()), this.options.rows && this.pickerEl.style.setProperty("--row-count", this.options.rows.toString()), this.options.emojiSize && this.pickerEl.style.setProperty("--emoji-size", this.options.emojiSize), this.options.showCategoryButtons || this.pickerEl.style.setProperty("--category-button-height", "0"), this.options.styleProperties && Object.keys(this.options.styleProperties).forEach((e291)=>{
            this.options.styleProperties && this.pickerEl.style.setProperty(e291, this.options.styleProperties[e291]);
        });
    }
    showSearchResults(e292) {
        Oe(this.pickerContent), e292.classList.add("search-results"), this.pickerContent.appendChild(e292);
    }
    hideSearchResults() {
        this.pickerContent.firstChild !== this.emojiArea.container && (Oe(this.pickerContent), this.pickerContent.appendChild(this.emojiArea.container)), this.emojiArea.reset();
    }
    emitEmoji({ emoji: o173 , showVariants: n123  }) {
        return e(this, void 0, void 0, function*() {
            if (o173.variations && n123 && this.options.showVariants) this.showVariantPopup(o173);
            else {
                let e293;
                setTimeout(()=>this.emojiArea.updateRecents()
                ), e293 = o173.custom ? this.emitCustomEmoji(o173) : "twemoji" === this.options.style ? yield this.emitTwemoji(o173) : this.emitNativeEmoji(o173), this.publicEvents.emit("emoji", e293), this.options.autoHide && this.hidePicker();
            }
        });
    }
    emitNativeEmoji(e294) {
        return {
            emoji: e294.emoji,
            name: e294.name
        };
    }
    emitCustomEmoji(e295) {
        return {
            url: e295.emoji,
            name: e295.name,
            custom: !0
        };
    }
    emitTwemoji(e296) {
        return new Promise((o174)=>{
            ke.parse(e296.emoji, Object.assign(Object.assign({
            }, this.options.twemojiOptions), {
                callback: (n124, { base: i87 , size: a74 , ext: r53  })=>{
                    const t51 = `${i87}${a74}/${n124}${r53}`;
                    return o174({
                        url: t51,
                        emoji: e296.emoji,
                        name: e296.name
                    }), t51;
                }
            }));
        });
    }
    buildSearch() {
        var e297;
        this.options.showSearch && (this.search = new Zo(this.events, this.i18n, this.options, (null === (e297 = this.options.emojiData) || void 0 === e297 ? void 0 : e297.emoji) || xe.emoji, (this.options.categories || []).map((e298)=>(this.options.emojiData || xe).categories.indexOf(e298)
        )), this.pickerEl.appendChild(this.search.render()));
    }
    buildPreview() {
        this.options.showPreview && this.pickerEl.appendChild(new Se(this.events, this.options).render());
    }
    initPlugins() {
        if (this.options.plugins) {
            const e299 = ze("div", "emoji-picker__plugin-container");
            this.options.plugins.forEach((o175)=>{
                if (!o175.render) throw new Error('Emoji Button plugins must have a "render" function.');
                e299.appendChild(o175.render(this));
            }), this.pickerEl.appendChild(e299);
        }
    }
    initFocusTrap() {
        this.focusTrap = h(this.pickerEl, {
            clickOutsideDeactivates: !0,
            initialFocus: this.options.showSearch && this.options.autoFocusSearch ? ".emoji-picker__search" : '.emoji-picker__emoji[tabindex="0"]'
        });
    }
    buildPicker() {
        this.pickerEl = ze("div", "emoji-picker"), this.pickerEl.classList.add(this.theme), this.setStyleProperties(), this.initFocusTrap(), this.pickerContent = ze("div", "emoji-picker__content"), this.initPlugins(), this.buildSearch(), this.pickerEl.appendChild(this.pickerContent), this.emojiArea = new rn(this.events, this.i18n, this.options, this.emojiCategories), this.pickerContent.appendChild(this.emojiArea.render()), this.events.on("showSearchResults", this.showSearchResults.bind(this)), this.events.on("hideSearchResults", this.hideSearchResults.bind(this)), this.events.on("emoji", this.emitEmoji.bind(this)), this.buildPreview(), this.wrapper = ze("div", "emoji-picker__wrapper"), this.wrapper.appendChild(this.pickerEl), this.wrapper.style.display = "none", this.options.zIndex && (this.wrapper.style.zIndex = this.options.zIndex + ""), this.options.rootElement && this.options.rootElement.appendChild(this.wrapper), this.observeForLazyLoad();
    }
    showVariantPopup(e300) {
        const o176 = new Qo(this.events, e300, this.options).render();
        o176 && this.pickerEl.appendChild(o176), this.events.on("hideVariantPopup", ()=>{
            o176 && (o176.classList.add("hiding"), setTimeout(()=>{
                o176 && this.pickerEl.removeChild(o176);
            }, 175)), this.events.off("hideVariantPopup");
        });
    }
    observeForLazyLoad() {
        this.observer = new IntersectionObserver(this.handleIntersectionChange.bind(this), {
            root: this.emojiArea.emojis
        }), this.emojiArea.emojis.querySelectorAll("." + _e).forEach((e301)=>{
            this.shouldLazyLoad(e301) && this.observer.observe(e301);
        });
    }
    handleIntersectionChange(e302) {
        Array.prototype.filter.call(e302, (e303)=>e303.intersectionRatio > 0
        ).map((e304)=>e304.target
        ).forEach((e305)=>{
            Ie(e305, this.options);
        });
    }
    shouldLazyLoad(e306) {
        return "twemoji" === this.options.style || "true" === e306.dataset.custom;
    }
    onDocumentClick(e307) {
        this.pickerEl.contains(e307.target) || this.hidePicker();
    }
    destroyPicker() {
        this.events.off("emoji"), this.events.off("hideVariantPopup"), this.options.rootElement && (this.options.rootElement.removeChild(this.wrapper), this.popper && this.popper.destroy()), this.observer && this.observer.disconnect(), this.options.plugins && this.options.plugins.forEach((e308)=>{
            e308.destroy && e308.destroy();
        });
    }
    hidePicker() {
        this.hideInProgress = !0, this.focusTrap.deactivate(), this.pickerVisible = !1, this.overlay && (document.body.removeChild(this.overlay), this.overlay = void 0), this.emojiArea.emojis.removeEventListener("scroll", this.emojiArea.highlightCategory), this.pickerEl.classList.add("hiding"), setTimeout(()=>{
            this.wrapper.style.display = "none", this.pickerEl.classList.remove("hiding"), this.pickerContent.firstChild !== this.emojiArea.container && (Oe(this.pickerContent), this.pickerContent.appendChild(this.emojiArea.container)), this.search && this.search.clear(), this.events.emit("hideVariantPopup"), this.hideInProgress = !1, this.popper && this.popper.destroy(), this.publicEvents.emit("hidden");
        }, this.options.showAnimation ? 170 : 0), setTimeout(()=>{
            document.removeEventListener("click", this.onDocumentClick), document.removeEventListener("keydown", this.onDocumentKeydown);
        });
    }
    showPicker(e309) {
        this.hideInProgress ? setTimeout(()=>this.showPicker(e309)
        , 100) : (this.pickerVisible = !0, this.wrapper.style.display = "block", this.determineDisplay(e309), this.focusTrap.activate(), setTimeout(()=>{
            this.addEventListeners(), this.setInitialFocus();
        }), this.emojiArea.reset());
    }
    determineDisplay(e310) {
        window.matchMedia("screen and (max-width: 450px)").matches ? this.showMobileView() : "string" == typeof this.options.position ? this.setRelativePosition(e310) : this.setFixedPosition();
    }
    setInitialFocus() {
        this.pickerEl.querySelector(this.options.showSearch && this.options.autoFocusSearch ? ".emoji-picker__search" : `.${_e}[tabindex="0"]`).focus();
    }
    addEventListeners() {
        document.addEventListener("click", this.onDocumentClick), document.addEventListener("keydown", this.onDocumentKeydown);
    }
    setRelativePosition(e311) {
        this.popper = we(e311, this.wrapper, {
            placement: this.options.position
        });
    }
    setFixedPosition() {
        var e312;
        if (null === (e312 = this.options) || void 0 === e312 ? void 0 : e312.position) {
            this.wrapper.style.position = "fixed";
            const e313 = this.options.position;
            Object.keys(e313).forEach((o)=>{
                this.wrapper.style[o] = e313[o];
            });
        }
    }
    showMobileView() {
        const e314 = window.getComputedStyle(this.pickerEl), o177 = document.querySelector("html"), n125 = o177 && o177.clientHeight, i88 = o177 && o177.clientWidth, a75 = parseInt(e314.height), r54 = n125 ? n125 / 2 - a75 / 2 : 0, t52 = parseInt(e314.width), s35 = i88 ? i88 / 2 - t52 / 2 : 0;
        this.wrapper.style.position = "fixed", this.wrapper.style.top = r54 + "px", this.wrapper.style.left = s35 + "px", this.wrapper.style.zIndex = "5000", this.overlay = ze("div", "emoji-picker__overlay"), document.body.appendChild(this.overlay);
    }
    togglePicker(e315) {
        this.pickerVisible ? this.hidePicker() : this.showPicker(e315);
    }
    isPickerVisible() {
        return this.pickerVisible;
    }
    onDocumentKeydown(e316) {
        "Escape" === e316.key ? this.hidePicker() : "Tab" === e316.key ? this.pickerEl.classList.add("keyboard") : e316.key.match(/^[\w]$/) && this.search && this.search.focus();
    }
    setTheme(e317) {
        e317 !== this.theme && (this.pickerEl.classList.remove(this.theme), this.theme = e317, this.pickerEl.classList.add(e317));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eb2TY"}],"eb2TY":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["2j5dx","6rimH"], "6rimH", "parcelRequiref536")

//# sourceMappingURL=index.8cfc62b9.js.map
