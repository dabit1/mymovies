!function(e){function t(t){for(var r,i,u=t[0],s=t[1],l=t[2],f=0,d=[];f<u.length;f++)i=u[f],o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(t);d.length;)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/mymovies/";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=s;a.push([233,1]),n()}({190:function(e,t,n){"use strict";e.exports={basename:"",host:"http://localhost:8080",apiHost:"https://api.themoviedb.org/3",apiKey:"03e6756704801cf4432b3c7d3bbd3813"}},191:function(e,t,n){"use strict";e.exports={basename:"/mymovies",host:"https://www.somehost.com",apiHost:"https://api.themoviedb.org/3",apiKey:"03e6756704801cf4432b3c7d3bbd3813"}},192:function(e,t,n){"use strict";e.exports={basename:"",host:"https://www.sometesthost.com",apiHost:"https://api.themoviedb.org/3",apiKey:"03e6756704801cf4432b3c7d3bbd3813"}},193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(456),i=(r=a)&&r.__esModule?r:{default:r};var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default),o(t,[{key:"discover",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=new Date,r="/discover/movie?sort_by=popularity.desc&page="+e+"&primary_release_date.lte="+(n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate());return t&&t.length&&(r+="&with_genres="+t.join(",")),this.get(r)}},{key:"search",value:function(e){var t="/search/movie?page="+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1)+"&query="+e;return this.get(t)}},{key:"genres",value:function(){return this.get("/genre/movie/list")}}]),t}();t.default=u},227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){for(var n=[],r=0;r<e;r+=1)n.push(t(r));return n}},228:function(e,t,n){e.exports=n.p+"img/no-poster.fab1c512e87e20e628f0da6f06d0df3b.jpg"},233:function(e,t,n){n(234),e.exports=n(436)},436:function(e,t,n){"use strict";var r,o=f(n(2)),a=n(50),i=n(81),u=f(n(445)),s=f(n(451)),l=f(n(457)),c=f(n(504));function f(e){return e&&e.__esModule?e:{default:e}}n(636),(r=regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("app"),(0,a.render)(o.default.createElement(l.default,null),t),n=(0,u.default)(),e.next=5,(0,s.default)(n);case 5:r=n.getState().settings.envVars,(0,a.render)(o.default.createElement(i.Provider,{store:n},o.default.createElement(c.default,{basename:r.basename})),t);case 8:case"end":return e.stop()}},e,void 0)}),function(){var e=r.apply(this,arguments);return new Promise(function(t,n){return function r(o,a){try{var i=e[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});t(u)}("next")})})()},445:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(109),o=i(n(446)),a=i(n(447));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return(0,r.createStore)(a.default,(0,r.applyMiddleware)(o.default))}},447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(109),o=u(n(448)),a=u(n(449)),i=u(n(450));function u(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.combineReducers)({settings:o.default,movies:a.default,genres:i.default});t.default=s},448:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={envVars:{},site:{}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments[1];switch(t.type){case"FETCH_ENV_VARS":return{...e,envVars:{...t.envVars}};case"FETCH_SITE_SETTINGS":return{...e,site:{...t.site}};default:return e}}},449:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var o={items:[],isLoading:!1,error:null,page:0,filters:[],searchText:""};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case"FETCH_MOVIES_REQUEST":return{...e,isLoading:!0,error:null};case"FETCH_MOVIES_SUCCESS":return{...e,isLoading:!1,items:[].concat(r(e.items),r(t.movies)),page:e.page+1};case"FETCH_MOVIES_FAILURE":return{...e,isLoading:!1,error:t.error};case"RESET_PAGING":return{...e,page:0,items:[]};case"RESET_FILTERS":return{...e,filters:[]};case"ADD_FILTER":return{...e,filters:[].concat(r(e.filters),[t.filter])};case"REMOVE_FILTER":var n=[].concat(r(e.filters));return n.splice(n.indexOf(t.filter),1),{...e,filters:[].concat(r(n))};case"CHANGE_SEARCH_TEXT":return{...e,searchText:t.text};default:return e}}},450:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var o={items:[],isLoading:!1,error:null};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case"FETCH_GENRES_REQUEST":return{...e,isLoading:!0,error:null};case"FETCH_GENRES_SUCCESS":return{...e,isLoading:!1,items:[].concat(r(t.genres))};case"FETCH_GENRES_FAILURE":return{...e,isLoading:!1,error:t.error};default:return e}}},451:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(452),o=n(455),a=n(75);var i,u,s=(i=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch((0,r.fetchEnvVars)("production")),t.dispatch((0,r.fetchSiteSettings)()),e.next=4,t.dispatch((0,o.fetchGenres)());case 4:return e.next=6,t.dispatch((0,a.fetchMovies)());case 6:case"end":return e.stop()}},e,void 0)}),u=function(){var e=i.apply(this,arguments);return new Promise(function(t,n){return function r(o,a){try{var i=e[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});t(u)}("next")})},function(e){return u.apply(this,arguments)});t.default=s},452:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.fetchSiteSettings=function(){return function(e){return e({type:"FETCH_SITE_SETTINGS",site:n(453)})}},t.fetchEnvVars=function(e){return function(t){return t({type:"FETCH_ENV_VARS",envVars:n(454)("./"+e)})}}},453:function(e,t,n){"use strict";e.exports={language:"en-US"}},454:function(e,t,n){var r={"./development":190,"./development.js":190,"./production":191,"./production.js":191,"./testing":192,"./testing.js":192};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=454},455:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchGenres=t.fetchGenresFailure=t.fetchGenresSuccess=t.fetchGenresRequest=void 0;var r,o=n(193),a=(r=o)&&r.__esModule?r:{default:r};var i=t.fetchGenresRequest=function(){return{type:"FETCH_GENRES_REQUEST"}},u=t.fetchGenresSuccess=function(e){return{type:"FETCH_GENRES_SUCCESS",genres:e}},s=t.fetchGenresFailure=function(e){return{type:"FETCH_GENRES_FAILURE",error:e}};t.fetchGenres=function(){return function(e,t){e(i());var n=t().settings,r=n.envVars,o=n.site;return new a.default(r.apiHost,r.apiKey,o.language).genres().then(function(e){return e.json()}).then(function(t){return e(u(t.genres))}).catch(function(t){return e(s(t))})}}},456:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.host=t,this.apiKey=n,this.language=r}return r(e,[{key:"get",value:function(e){var t=""+this.host+e+(-1!==e.indexOf("?")?"&":"?")+"api_key="+this.apiKey+"&language="+this.language;return new Promise(function(e,n){fetch(t).then(function(t){return 200!==t.status?n(t):e(t)}).catch(function(e){return n(e)})})}}]),e}();t.default=o},457:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(2)),o=a(n(194));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement("div",{className:"c-initial-loading"},r.default.createElement(o.default,{size:80,thickness:5}))}},504:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n(2)),a=l(n(0)),i=n(229),u=l(n(506)),s=l(n(507));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.basename;return o.default.createElement(i.BrowserRouter,{basename:t},o.default.createElement(i.Route,{component:function(e){return o.default.createElement(u.default,r({},e,{routes:s.default}))}}))};c.propTypes={basename:a.default.string.isRequired},t.default=c},506:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),i=l(a),u=l(n(0)),s=n(229);function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.isModal()&&(n.previousLocation=n.getModalPreviousLocation()),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentWillUpdate",value:function(){this.previousLocation=this.props.location}},{key:"getModalPreviousLocation",value:function(){var e=this.props.location.pathname,t=null,n=function(t){return(0,s.matchPath)(e,t)};do{e=e.slice(0,e.lastIndexOf("/")),t=this.props.routes.find(n)}while(void 0===t&&e);return{pathname:e}}},{key:"isModal",value:function(){var e=this.props.location,t=this.props.routes.find(function(t){return(0,s.matchPath)(e.pathname,t)});return void 0!==t&&!0===t.modal}},{key:"render",value:function(){var e=this.isModal(),t=this.props.routes;return i.default.createElement("div",null,i.default.createElement(s.Switch,{location:e?this.previousLocation:this.props.location},t.map(function(e){return e.modal?null:i.default.createElement(s.Route,r({},e,{key:e.path+"key"}))})),e&&t.map(function(e){return e.modal?i.default.createElement(s.Route,r({},e,{key:e.path+"key"})):null}))}}]),t}();t.default=c,c.propTypes={routes:u.default.array.isRequired,location:u.default.object.isRequired}},507:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(508)),o=i(n(631)),a=i(n(635));function i(e){return e&&e.__esModule?e:{default:e}}var u=[{path:"/movie-details/:id",modal:!0,exact:!0,component:o.default},{path:"/",exact:!0,component:r.default},{component:a.default}];t.default=u},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),a=v(o),i=v(n(0)),u=n(509),s=v(n(513)),l=v(n(539)),c=v(n(545)),f=v(n(583)),d=v(n(588)),p=v(n(624));function v(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={mobileOpen:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"handleDrawerToggle",value:function(){this.setState({mobileOpen:!this.state.mobileOpen})}},{key:"closeDrawer",value:function(){this.setState({mobileOpen:!1})}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,r=t.history,o=a.default.createElement("div",null,a.default.createElement("div",{className:n.toolbar}),a.default.createElement(c.default,{onPressFilter:function(){return e.closeDrawer()}}));return a.default.createElement("div",{className:"c-home"},a.default.createElement(d.default,{handleDrawerToggle:function(){return e.handleDrawerToggle()}}),a.default.createElement(l.default,{mdUp:!0},a.default.createElement(s.default,{className:"c-drawer smdown",variant:"temporary",anchor:"left",open:this.state.mobileOpen,onClose:function(){return e.handleDrawerToggle()},classes:{paper:"c-drawer__paper"},ModalProps:{keepMounted:!0}},o)),a.default.createElement(l.default,{smDown:!0,implementation:"css"},a.default.createElement(s.default,{className:"c-drawer",variant:"permanent",classes:{paper:"c-drawer__paper"},open:!0},o)),a.default.createElement("main",{className:"content"},a.default.createElement("div",{className:n.toolbar}),a.default.createElement(p.default,null),a.default.createElement(f.default,{history:r})))}}]),t}();h.propTypes={history:i.default.object,classes:i.default.object.isRequired},h.defaultProps={history:null},t.default=(0,u.withStyles)(function(e){return{toolbar:e.mixins.toolbar}},{withTheme:!0})(h)},545:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(81),a=n(546),i=(r=a)&&r.__esModule?r:{default:r},u=n(75);t.default=(0,o.connect)(function(e){return{filters:e.genres.items,selectedFilters:e.movies.filters,isLoadingMovies:e.movies.isLoading||!!e.movies.searchText.trim()}},function(e){return{onChangeFilter:function(t,n){return e((0,u.setFilterAndFetchMoviesIfNeeded)(t,n))}}})(i.default)},546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),a=l(o),i=l(n(0)),u=l(n(547)),s=l(n(549));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"handleOnChange",value:function(e,t){this.props.onChangeFilter(t,e),this.props.onPressFilter()}},{key:"renderFilter",value:function(e){var t=this,n=this.props,r=n.selectedFilters,o=n.isLoadingMovies;return a.default.createElement(s.default,{key:e.id,id:e.id,onChange:function(n){return t.handleOnChange(n,e.id)},title:e.name,active:-1!==r.indexOf(e.id),disabled:o})}},{key:"render",value:function(){var e=this,t=this.props.filters;return a.default.createElement("div",{className:"c-movies-filters-list"},a.default.createElement(u.default,null,t.map(function(t){return e.renderFilter(t)})))}}]),t}();t.default=c,c.propTypes={onPressFilter:i.default.func,onChangeFilter:i.default.func,selectedFilters:i.default.arrayOf(i.default.number),filters:i.default.arrayOf(i.default.object).isRequired,isLoadingMovies:i.default.bool},c.defaultProps={onPressFilter:function(){},isLoadingMovies:!1,onChangeFilter:function(){},selectedFilters:[]}},549:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(2)),o=s(n(0)),a=s(n(550)),i=s(n(566)),u=s(n(569));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.title,n=e.onChange,o=e.active,s=e.disabled;return r.default.createElement("div",{className:s?"c-movies-filters-list-item disabled":"c-movies-filters-list-item"},r.default.createElement(a.default,{dense:!0,button:!s,onClick:function(){return!s&&n(!o)}},r.default.createElement(i.default,{primary:t}),r.default.createElement(u.default,{className:"c-movies-filters-list-item__checkbox",checked:o,disabled:s})))};l.propTypes={title:o.default.string.isRequired,onChange:o.default.func,active:o.default.bool,disabled:o.default.bool},l.defaultProps={onChange:function(){},active:!1,disabled:!1},t.default=l},583:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(81),a=n(584),i=(r=a)&&r.__esModule?r:{default:r},u=n(75);t.default=(0,o.connect)(function(e){return{movies:e.movies.items,apiPage:e.movies.page,isLoadingMovies:e.movies.isLoading}},function(e){return{onFetchMoreMovies:function(){return e((0,u.fetchMovies)())}}})(i.default)},584:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),a=f(o),i=f(n(0)),u=f(n(194)),s=f(n(585)),l=f(n(587)),c=f(n(228));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={page:1,hasMoreToFetch:!0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidUpdate",value:function(e){0!==e.apiPage&&0===this.props.apiPage&&this.setState({page:1}),e.apiPage===this.props.apiPage||this.state.hasMoreToFetch?e.isLoadingMovies&&!this.props.isLoadingMovies&&this.props.movies.length===e.movies.length&&this.state.hasMoreToFetch&&this.setState({hasMoreToFetch:!1}):this.setState({hasMoreToFetch:!0})}},{key:"onPressMovie",value:function(e){this.props.history.push("/movie-details/"+e.id,{modal:!0,movie:e})}},{key:"loadMore",value:function(e,t){t||(this.setState({page:e}),!(20*this.state.page<this.props.movies.length)&&this.state.hasMoreToFetch&&this.props.onFetchMoreMovies())}},{key:"renderMovie",value:function(e){var t=this,n=e.poster_path?"https://image.tmdb.org/t/p/w500/"+e.poster_path:c.default;return a.default.createElement(l.default,{id:e.id,releaseDate:e.release_date,popularity:e.popularity,title:e.title,voteAverage:e.vote_average,key:e.id,onPress:function(){return t.onPressMovie(e)},image:n})}},{key:"render",value:function(){var e=this,t=this.props,n=t.movies,r=t.isLoadingMovies;return a.default.createElement("div",{className:"c-movies-list"},a.default.createElement(s.default,{initialLoad:!1,pageStart:1,loadMore:function(){return e.loadMore(e.state.page+1,r)},hasMore:!0,loader:a.default.createElement("span",{key:0,style:{display:"none"}})},n.slice(0,20*this.state.page).map(function(t){return e.renderMovie(t)})),r&&a.default.createElement(u.default,{className:"c-movies-list__progress",size:40,thickness:5}))}}]),t}();t.default=d,d.propTypes={onFetchMoreMovies:i.default.func,isLoadingMovies:i.default.bool,movies:i.default.arrayOf(i.default.object).isRequired,history:i.default.object,apiPage:i.default.number.isRequired},d.defaultProps={onFetchMoreMovies:function(){},isLoadingMovies:!1,history:null}},587:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(2)),o=u(n(0)),a=u(n(226)),i=u(n(227));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t=e.title,n=e.voteAverage,o=e.releaseDate,u=e.onPress,s=e.image;return r.default.createElement("div",{className:"c-movies-list-item",onClick:u,onKeyPress:u,role:"button",tabIndex:"0"},r.default.createElement("img",{src:s,alt:""}),r.default.createElement("div",null,r.default.createElement("h2",{className:"c-movies-list-item__title"},t),r.default.createElement("em",{className:"c-movies-list-item__subtitle"},r.default.createElement("span",null,(0,i.default)(Math.round(n.toFixed(2)/2),function(e){return r.default.createElement(a.default,{style:{fontSize:"1.2em"},className:"c-movies-list-item__star-icon",key:e})})),new Date(o).getFullYear())))};s.propTypes={title:o.default.string.isRequired,voteAverage:o.default.number.isRequired,releaseDate:o.default.string.isRequired,onPress:o.default.func.isRequired,image:o.default.oneOfType([o.default.string,o.default.object])},s.defaultProps={image:""},t.default=s},588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(2)),o=f(n(0)),a=f(n(589)),i=f(n(591)),u=f(n(221)),s=f(n(152)),l=f(n(593)),c=f(n(594));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t=e.handleDrawerToggle;return r.default.createElement("div",{className:"c-header"},r.default.createElement(a.default,{position:"static"},r.default.createElement(i.default,null,r.default.createElement(s.default,{color:"inherit","aria-label":"open drawer",onClick:function(){return t()}},r.default.createElement(l.default,null)),r.default.createElement(u.default,{variant:"title",color:"inherit"},"My Movies"),r.default.createElement(c.default,null))))};d.propTypes={handleDrawerToggle:o.default.func.isRequired},t.default=d},594:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(81),a=n(595),i=(r=a)&&r.__esModule?r:{default:r},u=n(75);t.default=(0,o.connect)(function(e){return{value:e.movies.searchText}},function(e){return{onChangeText:function(t){return e((0,u.changeSearchText)(t))},onSubmit:function(){return e((0,u.searchMovie)())}}})(i.default)},595:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(2)),o=i(n(0)),a=i(n(596));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.value,n=e.onSubmit,o=e.onChangeText;return r.default.createElement("div",{className:"c-search-movie"},r.default.createElement(a.default,{onCancelSearch:function(){o(""),n()},onChange:function(e){o(e),e.trim()||n()},onRequestSearch:function(){return t.trim()&&n()},placeholder:"Search...",value:t,style:{margin:"0 auto",maxWidth:800}}))};u.propTypes={value:o.default.string,onSubmit:o.default.func,onChangeText:o.default.func},u.defaultProps={value:"",onSubmit:function(){},onChangeText:function(){}},t.default=u},624:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(81),a=n(625),i=(r=a)&&r.__esModule?r:{default:r},u=n(75);t.default=(0,o.connect)(function(e){return{selectedFilters:[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.movies.filters)).map(function(t){return e.genres.items.find(function(e){return e.id===t})}),isLoadingMovies:e.movies.isLoading||!!e.movies.searchText.trim()}},function(e){return{onDeleteFilter:function(t){return e((0,u.setFilterAndFetchMoviesIfNeeded)(t,!1))}}})(i.default)},625:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),a=l(o),i=l(n(0)),u=l(n(626)),s=l(n(108));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"handleDelete",value:function(e){this.props.isLoadingMovies||this.props.onDeleteFilter(e)}},{key:"render",value:function(){var e=this;return this.props.selectedFilters.length?a.default.createElement(s.default,{className:"c-filter-chips"},this.props.selectedFilters.map(function(t){return a.default.createElement(u.default,{key:t.id,label:t.name,onDelete:function(){return e.handleDelete(t.id)},className:"c-filter-chips__chip"})})):null}}]),t}();c.propTypes={isLoadingMovies:i.default.bool,onDeleteFilter:i.default.func,selectedFilters:i.default.arrayOf(i.default.object)},c.defaultProps={isLoadingMovies:!1,onDeleteFilter:function(){},selectedFilters:[]},t.default=c},631:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(2)),o=f(n(0)),a=f(n(214)),i=f(n(226)),u=f(n(632)),s=f(n(633)),l=f(n(227)),c=f(n(228));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t=e.location.state.movie,n=t.title,o=t.overview,f=t.poster_path,d=t.vote_average,p=f?"https://image.tmdb.org/t/p/w500/"+f:c.default;return r.default.createElement(a.default,{open:!0,onClose:function(){return e.history.goBack()}},r.default.createElement("div",{className:"c-movie-details"},r.default.createElement("div",null,r.default.createElement(s.default,{onClick:function(){return e.history.goBack()},className:"c-movie-details__close-btn",variant:"contained",color:"primary"},"Go back",r.default.createElement(u.default,null)),r.default.createElement("h1",{className:"c-movie-details__title"},n),r.default.createElement("em",null,(0,l.default)(Math.round(d.toFixed(2)/2),function(e){return r.default.createElement(i.default,{style:{fontSize:"1.2em"},className:"c-movies-list-item__star-icon",key:e})})),o&&r.default.createElement("p",{className:"c-movie-details__overview"},o)),r.default.createElement("img",{src:p,alt:n,className:"c-movie-details__img"})))};d.propTypes={location:o.default.object,history:o.default.object},d.defaultProps={location:null,history:null},t.default=d},635:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return a.default.createElement("div",{className:"c-no-match"},a.default.createElement("b",null,"This page does not exist"))}},636:function(e,t,n){},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeSearchText=t.searchMovie=t.setFilterAndFetchMoviesIfNeeded=t.removeFilter=t.addFilter=t.resetFilters=t.resetPaging=t.fetchMovies=t.fetchMoviesFailure=t.fetchMoviesSuccess=t.fetchMoviesRequest=void 0;var r,o=n(193),a=(r=o)&&r.__esModule?r:{default:r};var i=t.fetchMoviesRequest=function(){return{type:"FETCH_MOVIES_REQUEST"}},u=t.fetchMoviesSuccess=function(e){return{type:"FETCH_MOVIES_SUCCESS",movies:e}},s=t.fetchMoviesFailure=function(e){return{type:"FETCH_MOVIES_FAILURE",error:e}},l=t.fetchMovies=function(){return function(e,t){if(t().movies.isLoading)return Promise.resolve();e(i());var n=t().settings,r=n.envVars,o=n.site,l=t().movies.page+1;if(t().movies.searchText)return new a.default(r.apiHost,r.apiKey,o.language).search(t().movies.searchText,l).then(function(e){return e.json()}).then(function(t){return e(u(t.results))}).catch(function(t){return e(s(t))});var c=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t().movies.filters));return new a.default(r.apiHost,r.apiKey,o.language).discover(l,c).then(function(e){return e.json()}).then(function(t){return e(u(t.results))}).catch(function(t){return e(s(t))})}},c=t.resetPaging=function(){return{type:"RESET_PAGING"}},f=t.resetFilters=function(){return{type:"RESET_FILTERS"}},d=t.addFilter=function(e){return{type:"ADD_FILTER",filter:e}},p=t.removeFilter=function(e){return{type:"REMOVE_FILTER",filter:e}};t.setFilterAndFetchMoviesIfNeeded=function(e,t){return function(n,r){return t&&-1===r().movies.filters.indexOf(e)?(n(d(e)),n(c()),n(l())):t||-1===r().movies.filters.indexOf(e)?Promise.resolve():(n(p(e)),n(c()),n(l()))}},t.searchMovie=function(){return function(e){return e(c()),e(f()),e(l())}},t.changeSearchText=function(e){return{type:"CHANGE_SEARCH_TEXT",text:e}}}});