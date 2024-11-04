"use strict";var n,e=require("react"),r={exports:{}},t={};var o,a,i={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function s(){return o||(o=1,"production"!==process.env.NODE_ENV&&function(){var n=e,r=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen"),v=Symbol.iterator;var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function h(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];!function(n,e,r){var t=b.ReactDebugCurrentFrame,o=t.getStackAddendum();""!==o&&(e+="%s",r=r.concat([o]));var a=r.map((function(n){return String(n)}));a.unshift("Warning: "+e),Function.prototype.apply.call(console[n],console,a)}("error",n,r)}var g;function x(n){return n.displayName||"Context"}function w(n){if(null==n)return null;if("number"==typeof n.tag&&h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof n)return n.displayName||n.name||null;if("string"==typeof n)return n;switch(n){case o:return"Fragment";case t:return"Portal";case s:return"Profiler";case a:return"StrictMode";case d:return"Suspense";case p:return"SuspenseList"}if("object"==typeof n)switch(n.$$typeof){case l:return x(n)+".Consumer";case c:return x(n._context)+".Provider";case u:return function(n,e,r){var t=n.displayName;if(t)return t;var o=e.displayName||e.name||"";return""!==o?r+"("+o+")":r}(n,n.render,"ForwardRef");case f:var e=n.displayName||null;return null!==e?e:w(n.type)||"Memo";case y:var r=n,i=r._payload,m=r._init;try{return w(m(i))}catch(n){return null}}return null}g=Symbol.for("react.module.reference");var k,j,_,O,S,E,M,C=Object.assign,R=0;function N(){}N.__reactDisabledLog=!0;var T,z=b.ReactCurrentDispatcher;function P(n,e,r){if(void 0===T)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);T=t&&t[1]||""}return"\n"+T+n}var D,$=!1,F="function"==typeof WeakMap?WeakMap:Map;function I(n,e){if(!n||$)return"";var r,t=D.get(n);if(void 0!==t)return t;$=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=z.current,z.current=null,function(){if(0===R){k=console.log,j=console.info,_=console.warn,O=console.error,S=console.group,E=console.groupCollapsed,M=console.groupEnd;var n={configurable:!0,enumerable:!0,value:N,writable:!0};Object.defineProperties(console,{info:n,log:n,warn:n,error:n,group:n,groupCollapsed:n,groupEnd:n})}R++}();try{if(e){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(n){r=n}Reflect.construct(n,[],i)}else{try{i.call()}catch(n){r=n}n.call(i.prototype)}}else{try{throw Error()}catch(n){r=n}n()}}catch(e){if(e&&r&&"string"==typeof e.stack){for(var s=e.stack.split("\n"),c=r.stack.split("\n"),l=s.length-1,u=c.length-1;l>=1&&u>=0&&s[l]!==c[u];)u--;for(;l>=1&&u>=0;l--,u--)if(s[l]!==c[u]){if(1!==l||1!==u)do{if(l--,--u<0||s[l]!==c[u]){var d="\n"+s[l].replace(" at new "," at ");return n.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",n.displayName)),"function"==typeof n&&D.set(n,d),d}}while(l>=1&&u>=0);break}}}finally{$=!1,z.current=o,function(){if(0==--R){var n={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:C({},n,{value:k}),info:C({},n,{value:j}),warn:C({},n,{value:_}),error:C({},n,{value:O}),group:C({},n,{value:S}),groupCollapsed:C({},n,{value:E}),groupEnd:C({},n,{value:M})})}R<0&&h("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=n?n.displayName||n.name:"",f=p?P(p):"";return"function"==typeof n&&D.set(n,f),f}function A(n,e,r){if(null==n)return"";if("function"==typeof n)return I(n,!(!(t=n.prototype)||!t.isReactComponent));var t;if("string"==typeof n)return P(n);switch(n){case d:return P("Suspense");case p:return P("SuspenseList")}if("object"==typeof n)switch(n.$$typeof){case u:return I(n.render,!1);case f:return A(n.type,e,r);case y:var o=n,a=o._payload,i=o._init;try{return A(i(a),e,r)}catch(n){}}return""}D=new F;var B=Object.prototype.hasOwnProperty,Y={},L=b.ReactDebugCurrentFrame;function W(n){if(n){var e=n._owner,r=A(n.type,n._source,e?e.type:null);L.setExtraStackFrame(r)}else L.setExtraStackFrame(null)}var U=Array.isArray;function H(n){return U(n)}function V(n){return""+n}function q(n){if(function(n){try{return V(n),!1}catch(n){return!0}}(n))return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(n){return"function"==typeof Symbol&&Symbol.toStringTag&&n[Symbol.toStringTag]||n.constructor.name||"Object"}(n)),V(n)}var J,K,X,G=b.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};X={};function Z(n,e,t,o,a){var i,s={},c=null,l=null;for(i in void 0!==t&&(q(t),c=""+t),function(n){if(B.call(n,"key")){var e=Object.getOwnPropertyDescriptor(n,"key").get;if(e&&e.isReactWarning)return!1}return void 0!==n.key}(e)&&(q(e.key),c=""+e.key),function(n){if(B.call(n,"ref")){var e=Object.getOwnPropertyDescriptor(n,"ref").get;if(e&&e.isReactWarning)return!1}return void 0!==n.ref}(e)&&(l=e.ref,function(n,e){if("string"==typeof n.ref&&G.current&&e&&G.current.stateNode!==e){var r=w(G.current.type);X[r]||(h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',w(G.current.type),n.ref),X[r]=!0)}}(e,a)),e)B.call(e,i)&&!Q.hasOwnProperty(i)&&(s[i]=e[i]);if(n&&n.defaultProps){var u=n.defaultProps;for(i in u)void 0===s[i]&&(s[i]=u[i])}if(c||l){var d="function"==typeof n?n.displayName||n.name||"Unknown":n;c&&function(n,e){var r=function(){J||(J=!0,h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",e))};r.isReactWarning=!0,Object.defineProperty(n,"key",{get:r,configurable:!0})}(s,d),l&&function(n,e){var r=function(){K||(K=!0,h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",e))};r.isReactWarning=!0,Object.defineProperty(n,"ref",{get:r,configurable:!0})}(s,d)}return function(n,e,t,o,a,i,s){var c={$$typeof:r,type:n,key:e,ref:t,props:s,_owner:i,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c}(n,c,l,a,o,G.current,s)}var nn,en=b.ReactCurrentOwner,rn=b.ReactDebugCurrentFrame;function tn(n){if(n){var e=n._owner,r=A(n.type,n._source,e?e.type:null);rn.setExtraStackFrame(r)}else rn.setExtraStackFrame(null)}function on(n){return"object"==typeof n&&null!==n&&n.$$typeof===r}function an(){if(en.current){var n=w(en.current.type);if(n)return"\n\nCheck the render method of `"+n+"`."}return""}nn=!1;var sn={};function cn(n,e){if(n._store&&!n._store.validated&&null==n.key){n._store.validated=!0;var r=function(n){var e=an();if(!e){var r="string"==typeof n?n:n.displayName||n.name;r&&(e="\n\nCheck the top-level render call using <"+r+">.")}return e}(e);if(!sn[r]){sn[r]=!0;var t="";n&&n._owner&&n._owner!==en.current&&(t=" It was passed a child from "+w(n._owner.type)+"."),tn(n),h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,t),tn(null)}}}function ln(n,e){if("object"==typeof n)if(H(n))for(var r=0;r<n.length;r++){var t=n[r];on(t)&&cn(t,e)}else if(on(n))n._store&&(n._store.validated=!0);else if(n){var o=function(n){if(null===n||"object"!=typeof n)return null;var e=v&&n[v]||n["@@iterator"];return"function"==typeof e?e:null}(n);if("function"==typeof o&&o!==n.entries)for(var a,i=o.call(n);!(a=i.next()).done;)on(a.value)&&cn(a.value,e)}}function un(n){var e,r=n.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)e=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==u&&r.$$typeof!==f)return;e=r.propTypes}if(e){var t=w(r);!function(n,e,r,t,o){var a=Function.call.bind(B);for(var i in n)if(a(n,i)){var s=void 0;try{if("function"!=typeof n[i]){var c=Error((t||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof n[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}s=n[i](e,i,t,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(n){s=n}!s||s instanceof Error||(W(o),h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",t||"React class",r,i,typeof s),W(null)),s instanceof Error&&!(s.message in Y)&&(Y[s.message]=!0,W(o),h("Failed %s type: %s",r,s.message),W(null))}}(e,n.props,"prop",t,n)}else if(void 0!==r.PropTypes&&!nn){nn=!0,h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",w(r)||"Unknown")}"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var dn={};function pn(n,e,t,i,v,b){var x=function(n){return"string"==typeof n||"function"==typeof n||n===o||n===s||n===a||n===d||n===p||n===m||"object"==typeof n&&null!==n&&(n.$$typeof===y||n.$$typeof===f||n.$$typeof===c||n.$$typeof===l||n.$$typeof===u||n.$$typeof===g||void 0!==n.getModuleId)}(n);if(!x){var k="";(void 0===n||"object"==typeof n&&null!==n&&0===Object.keys(n).length)&&(k+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var j;k+=an(),null===n?j="null":H(n)?j="array":void 0!==n&&n.$$typeof===r?(j="<"+(w(n.type)||"Unknown")+" />",k=" Did you accidentally export a JSX literal instead of a component?"):j=typeof n,h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",j,k)}var _=Z(n,e,t,v,b);if(null==_)return _;if(x){var O=e.children;if(void 0!==O)if(i)if(H(O)){for(var S=0;S<O.length;S++)ln(O[S],n);Object.freeze&&Object.freeze(O)}else h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ln(O,n)}if(B.call(e,"key")){var E=w(n),M=Object.keys(e).filter((function(n){return"key"!==n})),C=M.length>0?"{key: someKey, "+M.join(": ..., ")+": ...}":"{key: someKey}";if(!dn[E+C])h('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',C,E,M.length>0?"{"+M.join(": ..., ")+": ...}":"{}",E),dn[E+C]=!0}return n===o?function(n){for(var e=Object.keys(n.props),r=0;r<e.length;r++){var t=e[r];if("children"!==t&&"key"!==t){tn(n),h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",t),tn(null);break}}null!==n.ref&&(tn(n),h("Invalid attribute `ref` supplied to `React.Fragment`."),tn(null))}(_):un(_),_}var fn=function(n,e,r){return pn(n,e,r,!1)},yn=function(n,e,r){return pn(n,e,r,!0)};i.Fragment=o,i.jsx=fn,i.jsxs=yn}()),i}var c=(a||(a=1,"production"===process.env.NODE_ENV?r.exports=function(){if(n)return t;n=1;var r=e,o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(n,e,r){var t,a={},l=null,u=null;for(t in void 0!==r&&(l=""+r),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(u=e.ref),e)i.call(e,t)&&!c.hasOwnProperty(t)&&(a[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===a[t]&&(a[t]=e[t]);return{$$typeof:o,type:n,key:l,ref:u,props:a,_owner:s.current}}return t.Fragment=a,t.jsx=l,t.jsxs=l,t}():r.exports=s()),r.exports);!function(n,e){void 0===e&&(e={});var r=e.insertAt;if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}(":root {\n  --overly-color: #000000cc;\n  --modal-color: #fff;\n  --primary-color: #000;\n  --secondary-color: #f5f5f5;\n  --success-color: #009f6b;\n  --error-color: #d70040;\n  --waring-color: #ff5733;\n  --info-color: #0047ab;\n  --title-font-size: 28px;\n  --description-font-size: 15px;\n  --btn-sm-font-size: 14px;\n  --btn-md-font-size: 16px;\n  --btn-lg-font-size: 18px;\n  --modal-border-radios: 8px;\n  --btn-sm-border-radios: 6px;\n  --btn-md-border-radios: 8px;\n  --btn-lg-border-radios: 12px;\n}\n\n.customModalOverly {\n  background-color: var(--overly-color);\n}\n\n.customModalContent {\n  position: relative;\n  padding: 24px;\n  border-radius: var(--modal-border-radios);\n  background: var(--modal-color);\n  max-height: 80vh;\n  overflow-y: auto;\n}\n\n.customModalIcon {\n  position: absolute;\n  top: 12px;\n  right: 16px;\n  cursor: pointer;\n  opacity: 0.7;\n}\n\n.customModalIcon:hover {\n  opacity: 1;\n}\n\n.customModalTitle {\n  font-size: var(--title-font-size);\n  font-weight: 700;\n  color: black;\n}\n\n.customModalDescription {\n  font-size: var(--description-font-size);\n  color: var(--overly-color);\n  padding: 20px 0px;\n  line-height: 18px;\n  max-height: 500px;\n  overflow-y: auto;\n  margin-bottom: 10px;\n  text-align: justify;\n  padding-right: 4px;\n}\n\n.customModalDescription::-webkit-scrollbar {\n  width: 8px;\n}\n\n.customModalDescription::-webkit-scrollbar-thumb {\n  background-color: lightgray;\n  border-radius: 4px;\n  padding-right: 10px;\n}\n\n.customModalDescription::-webkit-scrollbar-track {\n  background-color: #ecf0f1;\n}\n\n.customModalFooter {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.customModalCancelButton {\n  margin-right: 10px;\n}\n\n.customModalCancelButton:hover,\n.customModalSuccessButton:hover {\n  opacity: 0.9;\n}\n\n.customModalSuccessButton,\n.customModalCancelButton {\n  border: 1px solid rgb(231, 226, 226);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  transition: 0.3s ease-in-out;\n}\n\n.primary {\n  background-color: var(--primary-color);\n  color: white;\n}\n\n.primary:hover,\n.secondary:hover,\n.error:hover,\n.warning:hover,\n.info:hover {\n  opacity: 0.8;\n}\n\n.secondary {\n  background-color: var(--secondary-color);\n  color: black;\n}\n.error {\n  background-color: var(--error-color);\n  color: white;\n}\n\n.success {\n  background-color: var(--success-color);\n  color: white;\n}\n\n.warning {\n  background-color: var(--waring-color);\n  color: white;\n}\n.info {\n  background-color: var(--info-color);\n  color: white;\n}\n\n.btn-sm {\n  padding: 12px 20px;\n  font-size: var(--btn-sm-font-size);\n  font-weight: 600;\n  border-radius: var(--btn-sm-border-radios);\n}\n\n.btn-md {\n  padding: 14px 22px;\n  font-size: var(--btn-md-font-size);\n  font-weight: 600;\n  border-radius: var(--btn-md-border-radios);\n}\n\n.btn-lg {\n  padding: 16px 24px;\n  font-size: var(--btn-lg-font-size);\n  font-weight: 600;\n  border-radius: var(--btn-lg-border-radios);\n}\n\n.btn-hoverOnAnimation-fade:hover {\n  opacity: 0.9;\n}\n.btn-hoverOnAnimation-slide-up:hover {\n  transform: translateY(-2px);\n}\n.btn-hoverOnAnimation-slide-down:hover {\n  transform: translateY(2px);\n}\n.btn-hoverOnAnimation-zoom:hover {\n  transform: scale(1.1);\n}\n\n.btn-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: translateY(-2px);\n  transform: scale(1.1);\n  transform: translateY(2px);\n}\n\n.btn-disabled:hover {\n  opacity: 0.5;\n  transform: translateY(-2px);\n  transform: scale(1.1);\n  transform: translateY(2px);\n}\n\n.btn-loader {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #fff;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 1s linear infinite;\n}\n\n.btn-outline {\n  background-color: transparent;\n  color: var(--primary-color);\n}\n\n.btn-text {\n  background-color: transparent;\n  border: none;\n  color: var(--primary-color);\n}\n\n.btn-text:hover {\n  background-color: aliceblue;\n}\n\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.btn-start-icon,\n.btn-end-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.customModalDivider {\n  width: 100%;\n  height: 1px;\n  background-color: #e5e4e2;\n  margin: 8px 0px;\n \n}\n\n/* responsive design */\n@media (max-width: 1024px) {\n  .customModalContent {\n    width: 75vw !important;\n  }\n}\n\n@media (max-width: 550px) {\n  .customModalContent {\n    width: 80vw !important;\n    padding: 12px;\n    border-radius: 4px;\n  }\n  .customModalTitle {\n    font-size: 24px;\n  }\n  .customModalDescription {\n    padding: 4px 0px;\n    line-height: 16px;\n  }\n\n  .btn-sm {\n    padding: 8px 16px;\n    font-size: 12px;\n    font-weight: 600;\n    border-radius: var(--btn-sm-border-radios);\n  }\n\n  .btn-md {\n    padding: 10px 16px;\n    font-size: 14;\n    font-weight: 600;\n    border-radius: var(--btn-md-border-radios);\n  }\n\n  .btn-lg {\n    padding: 12px 20px;\n    font-size: 14;\n    font-weight: 600;\n    border-radius: var(--btn-lg-border-radios);\n  }\n}\n");var l=function(n,e){switch(n){case"fade":return"";case"slide-up":return e?"translateY(0%)":"translateY(-50%)";case"slide-down":return e?"translateY(0%)":"translateY(50%)";case"zoom":return e?"scale(1)":"scale(.7)";default:return"translateY(0%)"}},u=function(n){return"sm"===n?"25vw":"md"===n?"50vw":"75vw"},d=function(n){return n?{primary:"primary",secondary:"secondary",success:"success",error:"error",warning:"warning",info:"info"}[n]:"primary"},p=function(n){return n?{sm:"btn-sm",md:"btn-md",lg:"btn-lg"}[n]:"btn-sm"},f=function(n){switch(n){case"fade":return"btn-hoverOnAnimation-fade";case"slide-up":default:return"btn-hoverOnAnimation-slide-up";case"slide-down":return"btn-hoverOnAnimation-slide-down";case"zoom":return"btn-hoverOnAnimation-zoom"}},y=function(n){return{contained:"btn-contained",outline:"btn-outline",text:"btn-text",link:"btn-link"}[n]},m=function(n){var e=n.children,r=n.width,t=n.size,o=void 0===t?"sm":t,a=n.open,i=n.animationType,s=void 0===i?"fade":i;return c.jsx("div",{className:"customModalContent",style:{width:r||u(o),background:"white",transform:l(s,a),opacity:a?1:0,transition:"transform 0.3s ease-in-out, opacity 0.5s ease-in-out"},onClick:function(n){n.stopPropagation()},children:c.jsx("div",{children:e})})};exports.Modal=function(n){var r=n.open,t=n.onClose,o=n.children,a=n.size,i=void 0===a?"sm":a,s=n.animationType,l=void 0===s?"fade":s,u=n.width,d=n.disableBackdropClick;e.useEffect((function(){var n=function(n){"Escape"===n.key&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]);return c.jsx("div",{className:"customModalOverly",style:{width:"100%",height:"100vh",backdropFilter:"blur(2px)",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:0,left:0,opacity:r?1:0,visibility:r?"visible":"hidden",transition:"opacity 0.3s ease-in-out, visibility 0.3s ease-in-out"},onClick:function(){d||t()},children:c.jsxs("div",{style:{position:"relative"},children:[c.jsx(m,{size:i,children:o,open:r,animationType:l,width:u}),c.jsx("svg",{onClick:t,style:{opacity:r?1:0,visibility:r?"visible":"hidden",transition:"opacity 0.6s ease-in-out"},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:20,height:20,className:"customModalIcon",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})]})})},exports.ModalCancelButton=function(n){var e=n.children,r=n.color,t=void 0===r?"primary":r,o=n.size,a=void 0===o?"sm":o,i=n.animationOnHover,s=void 0===i?"slide-up":i,l=n.disabled,u=n.onClose,m=n.startIcon,v=n.endIcon,b=n.loading,h=n.variant,g=void 0===h?"contained":h;return c.jsxs("button",{onClick:u,disabled:l||b,className:"customModalCancelButton ".concat(d(t)," ").concat(p(a)," ").concat(f(s)," ").concat(l||b?"btn-disabled":""," ").concat(y(g)," "),children:[m&&c.jsx("span",{className:"btn-start-icon",children:m}),e,v&&c.jsx("span",{className:"btn-end-icon",children:v}),b&&c.jsx("span",{className:"btn-loader "})]})},exports.ModalDescription=function(n){var e=n.children,r=n.color,t=n.fontSize,o=n.textAlign,a=n.fontWidth;return c.jsx("div",{className:"customModalDescription",style:{fontSize:t,textAlign:o,color:r,fontWeight:a},children:e})},exports.ModalDivider=function(n){var e=n.color,r=n.height;return c.jsx("div",{className:"customModalDivider",style:{background:e,height:r}})},exports.ModalFooter=function(n){var e=n.children;return c.jsx("div",{className:"customModalFooter",children:e})},exports.ModalHeader=function(n){var e=n.children;return c.jsx("div",{className:"customModalHeader",children:e})},exports.ModalSuccessButton=function(n){var e=n.children,r=n.size,t=void 0===r?"sm":r,o=n.color,a=void 0===o?"primary":o,i=n.animationOnHover,s=void 0===i?"slide-up":i,l=n.disabled,u=n.startIcon,m=n.endIcon,v=n.loading,b=n.variant,h=void 0===b?"contained":b;return c.jsxs("button",{disabled:l||v,className:"customModalSuccessButton ".concat(d(a)," ").concat(p(t)," ").concat(f(s)," ").concat(l||v?"btn-disabled":""," ").concat(y(h)),children:[u&&c.jsx("span",{className:"btn-start-icon",children:u})," ",e,m&&c.jsx("span",{className:"btn-end-icon",children:m}),v&&c.jsx("span",{className:"btn-loader"})]})},exports.ModalTitle=function(n){var e=n.children,r=n.fontSize,t=n.textAlign,o=void 0===t?"left":t,a=n.color,i=n.fontWidth;return c.jsx("div",{className:"customModalTitle",style:{fontSize:r,textAlign:o,color:a,fontWeight:i},children:e})};
//# sourceMappingURL=index.js.map
