!function(e){var t={};function s(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){s(1),e.exports=s(6)},function(e,t,s){Nova.booting(function(e,t){e.component("nova-server-metrics",s(2))})},function(e,t,s){var n=s(3)(s(4),s(5),!1,null,null,null);e.exports=n.exports},function(e,t){e.exports=function(e,t,s,n,r,o){var i,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(i=e,a=e.default);var u,_="function"==typeof a?a.options:a;if(t&&(_.render=t.render,_.staticRenderFns=t.staticRenderFns,_._compiled=!0),s&&(_.functional=!0),r&&(_._scopeId=r),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},_._ssrRegister=u):n&&(u=n),u){var d=_.functional,l=d?_.render:_.beforeCreate;d?(_._injectStyles=u,_.render=function(e,t){return u.call(t),l(e,t)}):_.beforeCreate=l?[].concat(l,u):[u]}return{esModule:i,exports:a,options:_}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["card"],data:function(){return{initialLoading:!0,metrics:{}}},mounted:function(){this.fetchMetrics()},methods:{fetchMetrics:function(){var e=this;Nova.request().get("/nova-vendor/nova-server-metrics/metrics").then(function(t){e.initialLoading=!1,e.metrics=t.data,setTimeout(e.fetchMetrics,3e3)})},formatNumber:function(e){return e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "):0}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("card",{staticClass:"h-auto p-4"},[s("h2",{staticClass:"text-90 font-light mb-4"},[e._v("Server Metrics")]),e._v(" "),e.initialLoading?s("loader",{staticClass:"mb-4"}):e._e(),e._v(" "),e.initialLoading?e._e():s("table",{staticClass:"table w-full"},[s("tbody",[s("tr",[s("td",[s("span",{staticClass:"font-semibold"},[e._v("Disk Space")])]),e._v(" "),s("td",[s("span",[e._v(e._s(e.metrics.disk_usage.use_percentage)+"% Used ("+e._s(e.metrics.disk_usage.free_space)),s("span",{staticClass:"text-xs"},[e._v(e._s(e.metrics.disk_usage.unit.toLowerCase()))]),e._v(" / "+e._s(e.metrics.disk_usage.total_space)),s("span",{staticClass:"text-xs"},[e._v(e._s(e.metrics.disk_usage.unit.toLowerCase()))]),e._v(")")])])]),e._v(" "),s("tr",[s("td",[s("span",{staticClass:"font-semibold"},[e._v("Memory Usage")])]),e._v(" "),s("td",[s("span",[e._v(e._s(e.metrics.memory_usage.use_percentage)+"% Used ("+e._s(e.metrics.memory_usage.free_memory)),s("span",{staticClass:"text-xs"},[e._v(e._s(e.metrics.memory_usage.unit.toLowerCase()))]),e._v(" / "+e._s(e.metrics.memory_usage.total_memory)),s("span",{staticClass:"text-xs"},[e._v(e._s(e.metrics.memory_usage.unit.toLowerCase()))]),e._v(")")])])]),e._v(" "),s("tr",[s("td",[s("span",{staticClass:"font-semibold"},[e._v("CPU Usage")])]),e._v(" "),s("td",[s("span",[e._v(e._s(e.metrics.cpu_usage.use_percentage)+"% Used")])])])])])],1)},staticRenderFns:[]}},function(e,t){}]);