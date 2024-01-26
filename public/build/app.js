(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$":
/*!******************************************************!*\
  !*** ./assets/react/controllers/ sync \.(j%7Ct)sx?$ ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Dashboard.jsx": "./assets/react/controllers/Dashboard.jsx",
	"./Header.jsx": "./assets/react/controllers/Header.jsx",
	"./MyComponent.jsx": "./assets/react/controllers/MyComponent.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-react */ "./node_modules/@symfony/ux-react/dist/register_controller.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application
// import './bootstrap';
// assets/app.js


// Registers React controller components to allow loading them from Twig
//
// React controller components are components that are meant to be rendered
// from Twig. These component then rely on other components that won't be called
// directly from Twig.
//
// By putting only controller components in `react/controllers`, you ensure that
// internal components won't be automatically included in your JS built file if
// they are not necessary.
(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_1__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers sync recursive \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/react/controllers/Dashboard.jsx":
/*!************************************************!*\
  !*** ./assets/react/controllers/Dashboard.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", {
    className: "ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-8 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://images.unsplash.com/photo-1518737743670-3f217c4def4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: "",
    className: "w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
    // width={32}
    // height={32}
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "hidden mt-4 text-5xl font-semibold text-red-600 lg:block"
  }, props.fullName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hidden text-gray-400 lg:block"
  }, "Admin")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "space-y-2 tracking-wide mt-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/dashboard",
    "aria-label": "dashboard",
    className: "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "-ml-1 h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z",
    className: "fill-current text-cyan-400 dark:fill-slate-600"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z",
    className: "fill-current text-cyan-200 group-hover:text-cyan-300"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z",
    className: "fill-current group-hover:text-sky-300"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "-mr-1 font-medium"
  }, "XXX"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/dashboard/projects",
    className: "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fill-current text-gray-300 group-hover:text-cyan-300",
    fillRule: "evenodd",
    d: "M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fill-current text-gray-600 group-hover:text-cyan-600",
    d: "M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "group-hover:text-gray-700"
  }, "Projects"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    className: "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fill-current text-gray-600 group-hover:text-cyan-600",
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fill-current text-gray-300 group-hover:text-cyan-300",
    d: "M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "group-hover:text-gray-700"
  }, "Reports"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    className: "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fill-current text-gray-600 group-hover:text-cyan-600",
    d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fill-current text-gray-300 group-hover:text-cyan-300",
    d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "group-hover:text-gray-700"
  }, "Other data"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    className: "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fill-current text-gray-300 group-hover:text-cyan-300",
    d: "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fill-current text-gray-600 group-hover:text-cyan-600",
    fillRule: "evenodd",
    d: "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",
    clipRule: "evenodd"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "group-hover:text-gray-700"
  }, "Finance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/dashboard/settings",
    className: "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fill-current text-gray-300 group-hover:text-cyan-300",
    d: "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fill-current text-gray-600 group-hover:text-cyan-600",
    fillRule: "evenodd",
    d: "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",
    clipRule: "evenodd"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "group-hover:text-gray-700"
  }, "Settings"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-6 -mx-6 pt-4 flex justify-between items-center border-t"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "group-hover:text-gray-700"
  }, "Logout")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-6 flex items-center justify-between space-x-4 2xl:container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    hidden: true,
    className: "text-2xl text-gray-600 font-medium lg:block"
  }, "Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "w-12 h-16 -mr-2 border-r lg:hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6 my-auto",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 6h16M4 12h16M4 18h16"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex space-x-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    hidden: true,
    className: "md:block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex items-center text-gray-400 focus-within:text-cyan-400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://ww50w3.org/2000/svg",
    className: "w-4 fill-current",
    viewBox: "0 0 35.997 36.004"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    id: "Icon_awesome-search",
    "data-name": "search",
    d: "M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "search",
    name: "leadingIcon",
    id: "leadingIcon",
    placeholder: "Search here",
    className: "w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-label": "search",
    className: "w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://ww50w3.org/2000/svg",
    className: "w-4 mx-auto fill-current text-gray-600",
    viewBox: "0 0 35.997 36.004"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    id: "Icon_awesome-search",
    "data-name": "search",
    d: "M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-label": "chat",
    className: "w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 m-auto text-gray-600",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-label": "notification",
    className: "w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5 m-auto text-gray-600",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-6 pt-6 2xl:container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "md:col-span-2 lg:col-span-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-40 m-auto opacity-75",
    viewBox: "0 0 146 146",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M73.1866 5.7129C81.999 5.7129 90.725 7.44863 98.8666 10.821C107.008 14.1933 114.406 19.1363 120.637 25.3675C126.868 31.5988 131.811 38.9964 135.184 47.138C138.556 55.2796 140.292 64.0057 140.292 72.818C140.292 81.6304 138.556 90.3565 135.184 98.4981C131.811 106.64 126.868 114.037 120.637 120.269C114.406 126.5 107.008 131.443 98.8666 134.815C90.725 138.187 81.999 139.923 73.1866 139.923C64.3742 139.923 55.6481 138.187 47.5066 134.815C39.365 131.443 31.9674 126.5 25.7361 120.269C19.5048 114.037 14.5619 106.64 11.1895 98.4981C7.81717 90.3565 6.08144 81.6304 6.08144 72.818C6.08144 64.0057 7.81717 55.2796 11.1895 47.138C14.5619 38.9964 19.5048 31.5988 25.7361 25.3675C31.9674 19.1363 39.365 14.1933 47.5066 10.821C55.6481 7.44863 64.3742 5.7129 73.1866 5.7129L73.1866 5.7129Z",
    stroke: "#e4e4f2",
    strokeWidth: "4.89873"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M73.5 23.4494C79.9414 23.4494 86.3198 24.7181 92.2709 27.1831C98.222 29.6482 103.629 33.2612 108.184 37.816C112.739 42.3707 116.352 47.778 118.817 53.7291C121.282 59.6802 122.551 66.0586 122.551 72.5C122.551 78.9414 121.282 85.3198 118.817 91.2709C116.352 97.222 112.739 102.629 108.184 107.184C103.629 111.739 98.222 115.352 92.2709 117.817C86.3198 120.282 79.9414 121.551 73.5 121.551C67.0586 121.551 60.6802 120.282 54.7291 117.817C48.778 115.352 43.3707 111.739 38.816 107.184C34.2612 102.629 30.6481 97.222 28.1831 91.2709C25.7181 85.3198 24.4494 78.9414 24.4494 72.5C24.4494 66.0586 25.7181 59.6802 28.1831 53.7291C30.6481 47.778 34.2612 42.3707 38.816 37.816C43.3707 33.2612 48.778 29.6481 54.7291 27.1831C60.6802 24.7181 67.0586 23.4494 73.5 23.4494L73.5 23.4494Z",
    stroke: "#e4e4f2",
    strokeWidth: "4.89873"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M73 24C84.3364 24 95.3221 27.9307 104.085 35.1225C112.848 42.3142 118.847 52.322 121.058 63.4406C123.27 74.5592 121.558 86.1006 116.214 96.0984C110.87 106.096 102.225 113.932 91.7515 118.27C81.278 122.608 69.6243 123.181 58.7761 119.89C47.9278 116.599 38.5562 109.649 32.258 100.223C25.9598 90.7971 23.1248 79.479 24.2359 68.1972C25.3471 56.9153 30.3357 46.3678 38.3518 38.3518",
    stroke: "url(#paint0_linear_622:13617)",
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M73 5.00001C84.365 5.00001 95.5488 7.84852 105.529 13.2852C115.509 18.7218 123.968 26.5732 130.131 36.1217C136.295 45.6702 139.967 56.6112 140.812 67.9448C141.657 79.2783 139.648 90.6429 134.968 101C130.288 111.357 123.087 120.375 114.023 127.232C104.96 134.088 94.3218 138.563 83.0824 140.248C71.8431 141.933 60.3606 140.775 49.6845 136.878C39.0085 132.981 29.4793 126.471 21.9681 117.942",
    stroke: "url(#paint1_linear_622:13617)",
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9.60279 97.5926C6.37325 89.2671 4.81515 80.3871 5.01745 71.4595C5.21975 62.5319 7.1785 53.7316 10.7818 45.561C14.3852 37.3904 19.5626 30.0095 26.0184 23.8398C32.4742 17.6701 40.082 12.8323 48.4075 9.6028",
    stroke: "url(#paint2_linear_622:13617)",
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M73 5.00001C86.6504 5.00001 99.9849 9.10831 111.269 16.7904",
    stroke: "url(#paint3_linear_622:13617)",
    strokeWidth: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "73.5",
    cy: "72.5",
    r: "29",
    fill: "#e4e4f2",
    stroke: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M74 82.8332C68.0167 82.8332 63.1666 77.9831 63.1666 71.9998C63.1666 66.0166 68.0167 61.1665 74 61.1665C79.9832 61.1665 84.8333 66.0166 84.8333 71.9998C84.8333 77.9831 79.9832 82.8332 74 82.8332ZM74 80.6665C76.2985 80.6665 78.5029 79.7534 80.1282 78.1281C81.7535 76.5028 82.6666 74.2984 82.6666 71.9998C82.6666 69.7013 81.7535 67.4969 80.1282 65.8716C78.5029 64.2463 76.2985 63.3332 74 63.3332C71.7014 63.3332 69.497 64.2463 67.8717 65.8716C66.2464 67.4969 65.3333 69.7013 65.3333 71.9998C65.3333 74.2984 66.2464 76.5028 67.8717 78.1281C69.497 79.7534 71.7014 80.6665 74 80.6665ZM70.75 67.6665H77.25L79.9583 71.4582L74 77.4165L68.0416 71.4582L70.75 67.6665ZM71.8658 69.8332L70.8691 71.2307L74 74.3615L77.1308 71.2307L76.1341 69.8332H71.8658Z",
    fill: "#6A6A9F"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint0_linear_622:13617",
    x1: "45.9997",
    y1: "19",
    x2: "46.0897",
    y2: "124.308",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#E323FF"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#7517F8"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint1_linear_622:13617",
    x1: "1.74103e-06",
    y1: "8.70228e-06",
    x2: "6.34739e-08",
    y2: "140.677",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#4DFFDF"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#4DA1FF"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint2_linear_622:13617",
    x1: "36.4997",
    y1: "5.07257e-06",
    x2: "36.6213",
    y2: "142.36",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#FFD422"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#FF7D05"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint3_linear_622:13617",
    x1: "1.74103e-06",
    y1: "8.70228e-06",
    x2: "6.34739e-08",
    y2: "140.677",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#4DFFDF"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#4DA1FF"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "text-xl text-gray-600 text-center"
  }, "Global Activities"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 flex justify-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-3xl font-bold text-gray-700"
  }, "$23,988"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-end gap-1 text-green-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-3",
    viewBox: "0 0 12 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6.00001 0L12 8H-3.05176e-05L6.00001 0Z",
    fill: "currentColor"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "2%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block text-center text-gray-500"
  }, "Compared to last week $13,988")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "w-full text-gray-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "py-2"
  }, "Tailored ui"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "text-gray-500"
  }, "896"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-16 ml-auto",
    viewBox: "0 0 68 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "19",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "35",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "51",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5",
    stroke: "url(#paint0_linear_622:13631)",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint0_linear_622:13631",
    x1: "68",
    y1: "7.74997",
    x2: "1.69701",
    y2: "8.10029",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#E323FF"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#7517F8"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "py-2"
  }, "Customize"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "text-gray-500"
  }, "1200"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-16 ml-auto",
    viewBox: "0 0 68 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "19",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "35",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "51",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5",
    stroke: "url(#paint0_linear_622:13640)",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint0_linear_622:13640",
    x1: "34",
    y1: "5",
    x2: "34",
    y2: "15.9524",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#8AFF6C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#02C751"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "py-2"
  }, "Other"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "text-gray-500"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-16 ml-auto",
    viewBox: "0 0 68 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "19",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "35",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "51",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 6C8.62687 6 6.85075 12.75 17 12.75C27.1493 12.75 25.3731 9 34 9C42.6269 9 42.262 13.875 49 13.875C55.5398 13.875 58.3731 6 67 6",
    stroke: "url(#paint0_linear_622:13649)",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint0_linear_622:13649",
    x1: "67",
    y1: "7.96873",
    x2: "1.67368",
    y2: "8.44377",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#FFD422"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#FF7D05"
  })))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-full py-6 px-6 rounded-xl border border-gray-200 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "text-xl text-gray-700"
  }, "Downloads"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "my-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-5xl font-bold text-gray-800"
  }, "64,5%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-gray-500"
  }, "Compared to last week $13,988")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-full",
    viewBox: "0 0 218 69",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 67.5C27.8998 67.5 24.6002 15 52.5 15C80.3998 15 77.1002 29 105 29C132.9 29 128.6 52 156.5 52C184.4 52 189.127 63.8158 217.027 63.8158",
    stroke: "url(#paint0_linear_622:13664)",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 67.5C27.2601 67.5 30.7399 31 58 31C85.2601 31 80.7399 2 108 2C135.26 2 134.74 43 162 43C189.26 43 190.74 63.665 218 63.665",
    stroke: "url(#paint1_linear_622:13664)",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint0_linear_622:13664",
    x1: "217.027",
    y1: "15",
    x2: "7.91244",
    y2: "15",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#4DFFDF"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#4DA1FF"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint1_linear_622:13664",
    x1: "218",
    y1: "18.3748",
    x2: "5.4362",
    y2: "18.9795",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#E323FF"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#7517F8"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "mt-6 -mb-2 w-full text-gray-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "py-2"
  }, "From new users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "text-gray-500"
  }, "896"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-16 ml-auto",
    viewBox: "0 0 68 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "19",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "35",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "51",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5",
    stroke: "url(#paint0_linear_622:13631)",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint0_linear_622:13631",
    x1: "68",
    y1: "7.74997",
    x2: "1.69701",
    y2: "8.10029",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#E323FF"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#7517F8"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "py-2"
  }, "From old users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "text-gray-500"
  }, "1200"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-16 ml-auto",
    viewBox: "0 0 68 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "19",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "35",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "51",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5",
    stroke: "url(#paint0_linear_622:13640)",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint0_linear_622:13640",
    x1: "34",
    y1: "5",
    x2: "34",
    y2: "15.9524",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#8AFF6C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#02C751"
  })))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-40 m-auto",
    viewBox: "0 0 56 56",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M27.9985 2.84071C31.2849 2.84071 34.539 3.488 37.5752 4.74562C40.6113 6.00324 43.3701 7.84657 45.6938 10.1703C48.0176 12.4941 49.861 15.2529 51.1186 18.289C52.3762 21.3252 53.0235 24.5793 53.0235 27.8657C53.0235 31.152 52.3762 34.4061 51.1186 37.4423C49.861 40.4785 48.0176 43.2372 45.6938 45.561C43.3701 47.8848 40.6113 49.7281 37.5752 50.9857C34.539 52.2433 31.2849 52.8906 27.9985 52.8906C24.7122 52.8906 21.4581 52.2433 18.4219 50.9857C15.3857 49.7281 12.627 47.8848 10.3032 45.561C7.97943 43.2372 6.1361 40.4785 4.87848 37.4423C3.62086 34.4061 2.97357 31.152 2.97357 27.8657C2.97357 24.5793 3.62086 21.3252 4.87848 18.289C6.13611 15.2529 7.97943 12.4941 10.3032 10.1703C12.627 7.84656 15.3857 6.00324 18.4219 4.74562C21.4581 3.488 24.7122 2.84071 27.9985 2.84071L27.9985 2.84071Z",
    stroke: "#e4e4f2",
    strokeWidth: "3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M27.301 2.50958C33.0386 2.35225 38.6614 4.13522 43.26 7.57004C47.8585 11.0049 51.1637 15.8907 52.641 21.437C54.1182 26.9834 53.6811 32.8659 51.4002 38.133C49.1194 43.4001 45.1283 47.7437 40.0726 50.4611C35.0169 53.1785 29.1923 54.1108 23.541 53.1071C17.8897 52.1034 12.7423 49.2225 8.93145 44.9305C5.12062 40.6384 2.86926 35.1861 2.54159 29.4558C2.21391 23.7254 3.82909 18.0521 7.12582 13.3536",
    stroke: "url(#paint0_linear_622:13696)",
    strokeWidth: "5",
    strokeLinecap: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13.3279 30.7467C13.3912 29.48 13.8346 28.5047 14.6579 27.8207C15.4939 27.124 16.5896 26.7757 17.9449 26.7757C18.8696 26.7757 19.6612 26.9404 20.3199 27.2697C20.9786 27.5864 21.4726 28.0234 21.8019 28.5807C22.1439 29.1254 22.3149 29.746 22.3149 30.4427C22.3149 31.2407 22.1059 31.9184 21.6879 32.4757C21.2826 33.0204 20.7949 33.3877 20.2249 33.5777V33.6537C20.9596 33.8817 21.5296 34.287 21.9349 34.8697C22.3529 35.4524 22.5619 36.1997 22.5619 37.1117C22.5619 37.8717 22.3846 38.5494 22.0299 39.1447C21.6879 39.74 21.1749 40.2087 20.4909 40.5507C19.8196 40.88 19.0089 41.0447 18.0589 41.0447C16.6276 41.0447 15.4622 40.6837 14.5629 39.9617C13.6636 39.2397 13.1886 38.1757 13.1379 36.7697H15.7219C15.7472 37.3904 15.9562 37.8907 16.3489 38.2707C16.7542 38.638 17.3052 38.8217 18.0019 38.8217C18.6479 38.8217 19.1419 38.6444 19.4839 38.2897C19.8386 37.9224 20.0159 37.4537 20.0159 36.8837C20.0159 36.1237 19.7752 35.579 19.2939 35.2497C18.8126 34.9204 18.0652 34.7557 17.0519 34.7557H16.5009V32.5707H17.0519C18.8506 32.5707 19.7499 31.969 19.7499 30.7657C19.7499 30.221 19.5852 29.7967 19.2559 29.4927C18.9392 29.1887 18.4769 29.0367 17.8689 29.0367C17.2736 29.0367 16.8112 29.2014 16.4819 29.5307C16.1652 29.8474 15.9816 30.2527 15.9309 30.7467H13.3279ZM25.6499 37.9477C26.8659 36.9344 27.8349 36.092 28.5569 35.4207C29.2789 34.7367 29.8806 34.0274 30.3619 33.2927C30.8433 32.558 31.0839 31.836 31.0839 31.1267C31.0839 30.4807 30.9319 29.974 30.6279 29.6067C30.3239 29.2394 29.8553 29.0557 29.2219 29.0557C28.5886 29.0557 28.1009 29.271 27.7589 29.7017C27.4169 30.1197 27.2396 30.696 27.2269 31.4307H24.6429C24.6936 29.9107 25.1433 28.758 25.9919 27.9727C26.8533 27.1874 27.9426 26.7947 29.2599 26.7947C30.7039 26.7947 31.8123 27.181 32.5849 27.9537C33.3576 28.7137 33.7439 29.7207 33.7439 30.9747C33.7439 31.9627 33.4779 32.9064 32.9459 33.8057C32.4139 34.705 31.8059 35.4904 31.1219 36.1617C30.4379 36.8204 29.5449 37.6184 28.4429 38.5557H34.0479V40.7597H24.6619V38.7837L25.6499 37.9477Z",
    fill: "currentColor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M36.1948 28.8842C36.1948 29.4438 36.2557 29.8634 36.3775 30.1432C36.4992 30.423 36.6967 30.5628 36.9699 30.5628C37.5097 30.5628 37.7796 30.0033 37.7796 28.8842C37.7796 27.7717 37.5097 27.2155 36.9699 27.2155C36.6967 27.2155 36.4992 27.3537 36.3775 27.6302C36.2557 27.9067 36.1948 28.3247 36.1948 28.8842ZM38.456 28.8842C38.456 29.6347 38.3293 30.2024 38.0758 30.5875C37.8257 30.9693 37.457 31.1602 36.9699 31.1602C36.5091 31.1602 36.1504 30.9644 35.8936 30.5727C35.6402 30.181 35.5135 29.6182 35.5135 28.8842C35.5135 28.1371 35.6352 27.5742 35.8788 27.1957C36.1257 26.8172 36.4894 26.6279 36.9699 26.6279C37.4472 26.6279 37.8142 26.8238 38.0709 27.2155C38.3276 27.6071 38.456 28.1634 38.456 28.8842ZM40.5395 31.7774C40.5395 32.3402 40.6003 32.7615 40.7221 33.0413C40.8439 33.3178 41.043 33.456 41.3195 33.456C41.596 33.456 41.8001 33.3194 41.9317 33.0462C42.0634 32.7697 42.1292 32.3468 42.1292 31.7774C42.1292 31.2145 42.0634 30.7982 41.9317 30.5283C41.8001 30.2551 41.596 30.1185 41.3195 30.1185C41.043 30.1185 40.8439 30.2551 40.7221 30.5283C40.6003 30.7982 40.5395 31.2145 40.5395 31.7774ZM42.8056 31.7774C42.8056 32.5245 42.6789 33.0906 42.4254 33.4757C42.1753 33.8575 41.8067 34.0484 41.3195 34.0484C40.8521 34.0484 40.4917 33.8526 40.2383 33.4609C39.9881 33.0693 39.8631 32.5081 39.8631 31.7774C39.8631 31.0302 39.9849 30.4674 40.2284 30.0889C40.4753 29.7104 40.839 29.5211 41.3195 29.5211C41.7869 29.5211 42.1506 29.7153 42.4106 30.1037C42.6739 30.4888 42.8056 31.0467 42.8056 31.7774ZM41.5318 26.7316L37.5278 33.9497H36.8021L40.8061 26.7316H41.5318Z",
    fill: "white"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M23.5776 18.4198H25.5424V22.8407H23.5776V18.4198ZM30.4545 16.455H32.4193V22.8407H30.4545V16.455ZM27.0161 13.5078H28.9809V22.8407H27.0161V13.5078Z",
    fill: "#6A6A9F"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint0_linear_622:13696",
    x1: "5.54791e-07",
    y1: "42.0001",
    x2: "54.6039",
    y2: "41.9535",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#E323FF"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#7517F8"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "text-xl text-gray-700 text-center"
  }, "Ask to customize"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-2 flex justify-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-3xl font-bold text-gray-700"
  }, "28"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-end gap-1 text-green-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-3",
    viewBox: "0 0 12 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M6.00001 0L12 8H-3.05176e-05L6.00001 0Z",
    fill: "currentColor"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "2%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "block text-center text-gray-500"
  }, "Compared to last week 13")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "mt-6 -mb-2 w-full text-gray-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "py-2"
  }, "Tailored ui"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "text-gray-500"
  }, "896"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-16 ml-auto",
    viewBox: "0 0 68 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "19",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "35",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "51",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5",
    stroke: "url(#paint0_linear_622:13631)",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint0_linear_622:13631",
    x1: "68",
    y1: "7.74997",
    x2: "1.69701",
    y2: "8.10029",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#E323FF"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#7517F8"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "py-2"
  }, "Customize"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "text-gray-500"
  }, "1200"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-16 ml-auto",
    viewBox: "0 0 68 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "19",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "35",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "51",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5",
    stroke: "url(#paint0_linear_622:13640)",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint0_linear_622:13640",
    x1: "34",
    y1: "5",
    x2: "34",
    y2: "15.9524",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#8AFF6C"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#02C751"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "py-2"
  }, "Other"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "text-gray-500"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-16 ml-auto",
    viewBox: "0 0 68 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "19",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "35",
    width: "14",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    opacity: "0.4",
    x: "51",
    width: "17",
    height: "21",
    rx: "1",
    fill: "#e4e4f2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M0 6C8.62687 6 6.85075 12.75 17 12.75C27.1493 12.75 25.3731 9 34 9C42.6269 9 42.262 13.875 49 13.875C55.5398 13.875 58.3731 6 67 6",
    stroke: "url(#paint0_linear_622:13649)",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
    id: "paint0_linear_622:13649",
    x1: "67",
    y1: "7.96873",
    x2: "1.67368",
    y2: "8.44377",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    stopColor: "#FFD422"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "1",
    stopColor: "#FF7D05"
  }))))))))))))));
}
;

/***/ }),

/***/ "./assets/react/controllers/Header.jsx":
/*!*********************************************!*\
  !*** ./assets/react/controllers/Header.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fixed w-full flex items-center justify-between h-14 text-white z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden",
    src: "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hidden md:block"
  }, "ADMIN")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "outline-none focus:outline-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-5 text-gray-600 h-5 cursor-pointer",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "search",
    name: "",
    id: "",
    placeholder: "Search",
    className: "w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "aria-hidden": "true"
    // @click="toggleTheme"
    ,
    className: "group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    "x-show": "isDark",
    width: "24",
    height: "24",
    className: "fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    "x-show": "!isDark",
    width: "24",
    height: "24",
    className: "fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/logout",
    className: "flex items-center mr-4 hover:text-blue-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inline-flex mr-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
  }))), "Logout")))));
}

/***/ }),

/***/ "./assets/react/controllers/MyComponent.jsx":
/*!**************************************************!*\
  !*** ./assets/react/controllers/MyComponent.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function MyComponent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Hi from MyComponent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This is my first JSX element."));
}

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_ux-react_dist_register_controller_js-node_modules_react_index_js"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdHMEI7QUFFWCxTQUFTNkIsV0FBV0EsQ0FBQSxFQUFHO0VBQ3BDLG9CQUNFeEMsMERBQUEsMkJBQ0VBLDBEQUFBLGFBQUkscUJBQW1CLENBQUssZUFDNUJBLDBEQUFBLFlBQUcsK0JBQTZCLENBQUksQ0FDaEM7QUFFVjs7Ozs7Ozs7Ozs7O0FDVEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgXFwuKGolN0N0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0Rhc2hib2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL015Q29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vRGFzaGJvYXJkLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL0Rhc2hib2FyZC5qc3hcIixcblx0XCIuL0hlYWRlci5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9IZWFkZXIuanN4XCIsXG5cdFwiLi9NeUNvbXBvbmVudC5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9NeUNvbXBvbmVudC5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbi8vIGltcG9ydCAnLi9ib290c3RyYXAnO1xuLy8gYXNzZXRzL2FwcC5qc1xuaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xuXG4vLyBSZWdpc3RlcnMgUmVhY3QgY29udHJvbGxlciBjb21wb25lbnRzIHRvIGFsbG93IGxvYWRpbmcgdGhlbSBmcm9tIFR3aWdcbi8vXG4vLyBSZWFjdCBjb250cm9sbGVyIGNvbXBvbmVudHMgYXJlIGNvbXBvbmVudHMgdGhhdCBhcmUgbWVhbnQgdG8gYmUgcmVuZGVyZWRcbi8vIGZyb20gVHdpZy4gVGhlc2UgY29tcG9uZW50IHRoZW4gcmVseSBvbiBvdGhlciBjb21wb25lbnRzIHRoYXQgd29uJ3QgYmUgY2FsbGVkXG4vLyBkaXJlY3RseSBmcm9tIFR3aWcuXG4vL1xuLy8gQnkgcHV0dGluZyBvbmx5IGNvbnRyb2xsZXIgY29tcG9uZW50cyBpbiBgcmVhY3QvY29udHJvbGxlcnNgLCB5b3UgZW5zdXJlIHRoYXRcbi8vIGludGVybmFsIGNvbXBvbmVudHMgd29uJ3QgYmUgYXV0b21hdGljYWxseSBpbmNsdWRlZCBpbiB5b3VyIEpTIGJ1aWx0IGZpbGUgaWZcbi8vIHRoZXkgYXJlIG5vdCBuZWNlc3NhcnkuXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJtbC1bLTEwMCVdIGZpeGVkIHotMTAgdG9wLTAgcGItMyBweC02IHctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBoLXNjcmVlbiBib3JkZXItciBiZy13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBtZDp3LTQvMTIgbGc6bWwtMCBsZzp3LVsyNSVdIHhsOnctWzIwJV0gMnhsOnctWzE1JV1cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiLW14LTYgcHgtNiBweS00XCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgdGl0bGU9XCJob21lXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTE5NTQ3NjY3ODYtMWY4OGY1M2ZiNTI4P2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TTN4OFluVm5mR1Z1ZkRCOGZEQjhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTUwMCZxPTYwXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMzJcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwidGFpbHVzIGxvZ29cIlxuICAgICAgICAgICAgICAgICAgLy8gd2lkdGg9ezMyfVxuICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PXszMn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxODczNzc0MzY3MC0zZjIxN2M0ZGVmNGE/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh6WldGeVkyaDhOSHg4WW5WbmZHVnVmREI4ZkRCOGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjBcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMCBoLTEwIG0tYXV0byByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyIGxnOnctMjggbGc6aC0yOFwiXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg9ezMyfVxuICAgICAgICAgICAgICAgIC8vIGhlaWdodD17MzJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJoaWRkZW4gbXQtNCB0ZXh0LTV4bCBmb250LXNlbWlib2xkIHRleHQtcmVkLTYwMCBsZzpibG9ja1wiPlxuICAgICAgICAgICAgICAgIHsvKiBDeW50aGlhIEouIFdhdHRzICovfVxuICAgICAgICAgICAgICAgIHtwcm9wcy5mdWxsTmFtZX1cbiAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtZ3JheS00MDAgbGc6YmxvY2tcIj5BZG1pbjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTIgdHJhY2tpbmctd2lkZSBtdC04XCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9kYXNoYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImRhc2hib2FyZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweC00IHB5LTMgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00IHJvdW5kZWQteGwgdGV4dC13aGl0ZSBiZy1ncmFkaWVudC10by1yIGZyb20tc2t5LTYwMCB0by1jeWFuLTQwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCItbWwtMSBoLTYgdy02XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk02IDhhMiAyIDAgMCAxIDItMmgxYTIgMiAwIDAgMSAyIDJ2MWEyIDIgMCAwIDEtMiAySDhhMiAyIDAgMCAxLTItMlY4Wk02IDE1YTIgMiAwIDAgMSAyLTJoMWEyIDIgMCAwIDEgMiAydjFhMiAyIDAgMCAxLTIgMkg4YTIgMiAwIDAgMS0yLTJ2LTFaXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1jeWFuLTQwMCBkYXJrOmZpbGwtc2xhdGUtNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzIDhhMiAyIDAgMCAxIDItMmgxYTIgMiAwIDAgMSAyIDJ2MWEyIDIgMCAwIDEtMiAyaC0xYTIgMiAwIDAgMS0yLTJWOFpcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LWN5YW4tMjAwIGdyb3VwLWhvdmVyOnRleHQtY3lhbi0zMDBcIlxuICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTMgMTVhMiAyIDAgMCAxIDItMmgxYTIgMiAwIDAgMSAyIDJ2MWEyIDIgMCAwIDEtMiAyaC0xYTIgMiAwIDAgMS0yLTJ2LTFaXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgZ3JvdXAtaG92ZXI6dGV4dC1za3ktMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiLW1yLTEgZm9udC1tZWRpdW1cIj5YWFg8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZGFzaGJvYXJkL3Byb2plY3RzXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgcm91bmRlZC1tZCB0ZXh0LWdyYXktNjAwIGdyb3VwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01XCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LWdyYXktMzAwIGdyb3VwLWhvdmVyOnRleHQtY3lhbi0zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yIDZhMiAyIDAgMDEyLTJoNGwyIDJoNGEyIDIgMCAwMTIgMnYxSDhhMyAzIDAgMDAtMyAzdjEuNWExLjUgMS41IDAgMDEtMyAwVjZ6XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LWdyYXktNjAwIGdyb3VwLWhvdmVyOnRleHQtY3lhbi02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNiAxMmEyIDIgMCAwMTItMmg4YTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAySDJoMmEyIDIgMCAwMDItMnYtMnpcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC1ob3Zlcjp0ZXh0LWdyYXktNzAwXCI+UHJvamVjdHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgcm91bmRlZC1tZCB0ZXh0LWdyYXktNjAwIGdyb3VwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01XCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LWdyYXktNjAwIGdyb3VwLWhvdmVyOnRleHQtY3lhbi02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yIDVhMiAyIDAgMDEyLTJoOGEyIDIgMCAwMTIgMnYxMGEyIDIgMCAwMDIgMkg0YTIgMiAwIDAxLTItMlY1em0zIDFoNnY0SDVWNnptNiA2SDV2Mmg2di0yelwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LTMwMCBncm91cC1ob3Zlcjp0ZXh0LWN5YW4tMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE1IDdoMWEyIDIgMCAwMTIgMnY1LjVhMS41IDEuNSAwIDAxLTMgMFY3elwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLWhvdmVyOnRleHQtZ3JheS03MDBcIj5SZXBvcnRzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTMgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00IHJvdW5kZWQtbWQgdGV4dC1ncmF5LTYwMCBncm91cFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNVwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LTYwMCBncm91cC1ob3Zlcjp0ZXh0LWN5YW4tNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIgMTBhOCA4IDAgMDE4LTh2OGg4YTggOCAwIDExLTE2IDB6XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LTMwMCBncm91cC1ob3Zlcjp0ZXh0LWN5YW4tMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyIDIuMjUyQTguMDE0IDguMDE0IDAgMDExNy43NDggOEgxMlYyLjI1MnpcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC1ob3Zlcjp0ZXh0LWdyYXktNzAwXCI+T3RoZXIgZGF0YTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0zIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNCByb3VuZGVkLW1kIHRleHQtZ3JheS02MDAgZ3JvdXBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTVcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtZ3JheS0zMDAgZ3JvdXAtaG92ZXI6dGV4dC1jeWFuLTMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk00IDRhMiAyIDAgMDAtMiAydjFoMTZWNmEyIDIgMCAwMC0yLTJINHpcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LWdyYXktNjAwIGdyb3VwLWhvdmVyOnRleHQtY3lhbi02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0xOCA5SDJ2NWEyIDIgMCAwMDIgMmgxMmEyIDIgMCAwMDItMlY5ek00IDEzYTEgMSAwIDAxMS0xaDFhMSAxIDAgMTEwIDJINWExIDEgMCAwMS0xLTF6bTUtMWExIDEgMCAxMDAgMmgxYTEgMSAwIDEwMC0ySDl6XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC1ob3Zlcjp0ZXh0LWdyYXktNzAwXCI+RmluYW5jZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZGFzaGJvYXJkL3NldHRpbmdzXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgcm91bmRlZC1tZCB0ZXh0LWdyYXktNjAwIGdyb3VwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01XCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LWdyYXktMzAwIGdyb3VwLWhvdmVyOnRleHQtY3lhbi0zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNCA0YTIgMiAwIDAwLTIgMnYxaDE2VjZhMiAyIDAgMDAtMi0ySDR6XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LTYwMCBncm91cC1ob3Zlcjp0ZXh0LWN5YW4tNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTggOUgydjVhMiAyIDAgMDAyIDJoMTJhMiAyIDAgMDAyLTJWOXpNNCAxM2ExIDEgMCAwMTEtMWgxYTEgMSAwIDExMCAySDVhMSAxIDAgMDEtMS0xem01LTFhMSAxIDAgMTAwIDJoMWExIDEgMCAxMDAtMkg5elwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTcwMFwiPlNldHRpbmdzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiAtbXgtNiBwdC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBib3JkZXItdFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC00IHB5LTMgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00IHJvdW5kZWQtbWQgdGV4dC1ncmF5LTYwMCBncm91cFwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTcgMTZsNC00bTAgMGwtNC00bTQgNEg3bTYgNHYxYTMgMyAwIDAxLTMgM0g2YTMgMyAwIDAxLTMtM1Y3YTMgMyAwIDAxMy0zaDRhMyAzIDAgMDEzIDN2MVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLWhvdmVyOnRleHQtZ3JheS03MDBcIj5Mb2dvdXQ8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvIG1iLTYgbGc6dy1bNzUlXSB4bDp3LVs4MCVdIDJ4bDp3LVs4NSVdXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgei0xMCB0b3AtMCBoLTE2IGJvcmRlci1iIGJnLXdoaXRlIGxnOnB5LTIuNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzcGFjZS14LTQgMnhsOmNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aDUgaGlkZGVuIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS02MDAgZm9udC1tZWRpdW0gbGc6YmxvY2tcIj5cbiAgICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEyIGgtMTYgLW1yLTIgYm9yZGVyLXIgbGc6aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IG15LWF1dG9cIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICB7LyogPCAvPiEtLXNlYXJjaCBiYXIgLS0+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgaGlkZGVuIGNsYXNzTmFtZT1cIm1kOmJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS00MDAgZm9jdXMtd2l0aGluOnRleHQtY3lhbi00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC00IGgtNiBmbGV4IGl0ZW1zLWNlbnRlciBwci0zIGJvcmRlci1yIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3NTB3My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00IGZpbGwtY3VycmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDM1Ljk5NyAzNi4wMDRcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiSWNvbl9hd2Vzb21lLXNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzUuNTA4LDMxLjEyN2wtNy4wMS03LjAxYTEuNjg2LDEuNjg2LDAsMCwwLTEuMi0uNDkySDI2LjE1NmExNC42MTgsMTQuNjE4LDAsMSwwLTIuNTMxLDIuNTMxVjI3LjNhMS42ODYsMS42ODYsMCwwLDAsLjQ5MiwxLjJsNy4wMSw3LjAxYTEuNjgxLDEuNjgxLDAsMCwwLDIuMzg0LDBsMS45OS0xLjk5YTEuNywxLjcsMCwwLDAsLjAwNy0yLjM5MVptLTIwLjg4My03LjVhOSw5LDAsMSwxLDktOUE4Ljk5NSw4Ljk5NSwwLDAsMSwxNC42MjUsMjMuNjI1WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsZWFkaW5nSWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsZWFkaW5nSWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHBsLTE0IHByLTQgcHktMi41IHJvdW5kZWQteGwgdGV4dC1zbSB0ZXh0LWdyYXktNjAwIG91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOmJvcmRlci1jeWFuLTMwMCB0cmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8IC8+IS0tL3NlYXJjaCBiYXIgLS0+ICovfVxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQteGwgYm9yZGVyIGJnLWdyYXktMTAwIGZvY3VzOmJnLWdyYXktMTAwIGFjdGl2ZTpiZy1ncmF5LTIwMCBtZDpoaWRkZW5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3c1MHczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBteC1hdXRvIGZpbGwtY3VycmVudCB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzNS45OTcgMzYuMDA0XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIkljb25fYXdlc29tZS1zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0zNS41MDgsMzEuMTI3bC03LjAxLTcuMDFhMS42ODYsMS42ODYsMCwwLDAtMS4yLS40OTJIMjYuMTU2YTE0LjYxOCwxNC42MTgsMCwxLDAtMi41MzEsMi41MzFWMjcuM2ExLjY4NiwxLjY4NiwwLDAsMCwuNDkyLDEuMmw3LjAxLDcuMDFhMS42ODEsMS42ODEsMCwwLDAsMi4zODQsMGwxLjk5LTEuOTlhMS43LDEuNywwLDAsMCwuMDA3LTIuMzkxWm0tMjAuODgzLTcuNWE5LDksMCwxLDEsOS05QTguOTk1LDguOTk1LDAsMCwxLDE0LjYyNSwyMy42MjVaXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjaGF0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLXhsIGJvcmRlciBiZy1ncmF5LTEwMCBmb2N1czpiZy1ncmF5LTEwMCBhY3RpdmU6YmctZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTUgbS1hdXRvIHRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTcgOGgxME03IDEyaDRtMSA4bC00LTRINWEyIDIgMCAwMS0yLTJWNmEyIDIgMCAwMTItMmgxNGEyIDIgMCAwMTIgMnY4YTIgMiAwIDAxLTIgMmgtM2wtNCA0elwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibm90aWZpY2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLXhsIGJvcmRlciBiZy1ncmF5LTEwMCBmb2N1czpiZy1ncmF5LTEwMCBhY3RpdmU6YmctZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTUgbS1hdXRvIHRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgMmE2IDYgMCAwMC02IDZ2My41ODZsLS43MDcuNzA3QTEgMSAwIDAwNCAxNGgxMmExIDEgMCAwMC43MDctMS43MDdMMTYgMTEuNTg2VjhhNiA2IDAgMDAtNi02ek0xMCAxOGEzIDMgMCAwMS0zLTNoNmEzIDMgMCAwMS0zIDN6XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHQtNiAyeGw6Y29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTYgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0yIGxnOmNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBweS04IHB4LTYgc3BhY2UteS02IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQwIG0tYXV0byBvcGFjaXR5LTc1XCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNDYgMTQ2XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTczLjE4NjYgNS43MTI5QzgxLjk5OSA1LjcxMjkgOTAuNzI1IDcuNDQ4NjMgOTguODY2NiAxMC44MjFDMTA3LjAwOCAxNC4xOTMzIDExNC40MDYgMTkuMTM2MyAxMjAuNjM3IDI1LjM2NzVDMTI2Ljg2OCAzMS41OTg4IDEzMS44MTEgMzguOTk2NCAxMzUuMTg0IDQ3LjEzOEMxMzguNTU2IDU1LjI3OTYgMTQwLjI5MiA2NC4wMDU3IDE0MC4yOTIgNzIuODE4QzE0MC4yOTIgODEuNjMwNCAxMzguNTU2IDkwLjM1NjUgMTM1LjE4NCA5OC40OTgxQzEzMS44MTEgMTA2LjY0IDEyNi44NjggMTE0LjAzNyAxMjAuNjM3IDEyMC4yNjlDMTE0LjQwNiAxMjYuNSAxMDcuMDA4IDEzMS40NDMgOTguODY2NiAxMzQuODE1QzkwLjcyNSAxMzguMTg3IDgxLjk5OSAxMzkuOTIzIDczLjE4NjYgMTM5LjkyM0M2NC4zNzQyIDEzOS45MjMgNTUuNjQ4MSAxMzguMTg3IDQ3LjUwNjYgMTM0LjgxNUMzOS4zNjUgMTMxLjQ0MyAzMS45Njc0IDEyNi41IDI1LjczNjEgMTIwLjI2OUMxOS41MDQ4IDExNC4wMzcgMTQuNTYxOSAxMDYuNjQgMTEuMTg5NSA5OC40OTgxQzcuODE3MTcgOTAuMzU2NSA2LjA4MTQ0IDgxLjYzMDQgNi4wODE0NCA3Mi44MThDNi4wODE0NCA2NC4wMDU3IDcuODE3MTcgNTUuMjc5NiAxMS4xODk1IDQ3LjEzOEMxNC41NjE5IDM4Ljk5NjQgMTkuNTA0OCAzMS41OTg4IDI1LjczNjEgMjUuMzY3NUMzMS45Njc0IDE5LjEzNjMgMzkuMzY1IDE0LjE5MzMgNDcuNTA2NiAxMC44MjFDNTUuNjQ4MSA3LjQ0ODYzIDY0LjM3NDIgNS43MTI5IDczLjE4NjYgNS43MTI5TDczLjE4NjYgNS43MTI5WlwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2U0ZTRmMlwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI0Ljg5ODczXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTczLjUgMjMuNDQ5NEM3OS45NDE0IDIzLjQ0OTQgODYuMzE5OCAyNC43MTgxIDkyLjI3MDkgMjcuMTgzMUM5OC4yMjIgMjkuNjQ4MiAxMDMuNjI5IDMzLjI2MTIgMTA4LjE4NCAzNy44MTZDMTEyLjczOSA0Mi4zNzA3IDExNi4zNTIgNDcuNzc4IDExOC44MTcgNTMuNzI5MUMxMjEuMjgyIDU5LjY4MDIgMTIyLjU1MSA2Ni4wNTg2IDEyMi41NTEgNzIuNUMxMjIuNTUxIDc4Ljk0MTQgMTIxLjI4MiA4NS4zMTk4IDExOC44MTcgOTEuMjcwOUMxMTYuMzUyIDk3LjIyMiAxMTIuNzM5IDEwMi42MjkgMTA4LjE4NCAxMDcuMTg0QzEwMy42MjkgMTExLjczOSA5OC4yMjIgMTE1LjM1MiA5Mi4yNzA5IDExNy44MTdDODYuMzE5OCAxMjAuMjgyIDc5Ljk0MTQgMTIxLjU1MSA3My41IDEyMS41NTFDNjcuMDU4NiAxMjEuNTUxIDYwLjY4MDIgMTIwLjI4MiA1NC43MjkxIDExNy44MTdDNDguNzc4IDExNS4zNTIgNDMuMzcwNyAxMTEuNzM5IDM4LjgxNiAxMDcuMTg0QzM0LjI2MTIgMTAyLjYyOSAzMC42NDgxIDk3LjIyMiAyOC4xODMxIDkxLjI3MDlDMjUuNzE4MSA4NS4zMTk4IDI0LjQ0OTQgNzguOTQxNCAyNC40NDk0IDcyLjVDMjQuNDQ5NCA2Ni4wNTg2IDI1LjcxODEgNTkuNjgwMiAyOC4xODMxIDUzLjcyOTFDMzAuNjQ4MSA0Ny43NzggMzQuMjYxMiA0Mi4zNzA3IDM4LjgxNiAzNy44MTZDNDMuMzcwNyAzMy4yNjEyIDQ4Ljc3OCAyOS42NDgxIDU0LjcyOTEgMjcuMTgzMUM2MC42ODAyIDI0LjcxODEgNjcuMDU4NiAyMy40NDk0IDczLjUgMjMuNDQ5NEw3My41IDIzLjQ0OTRaXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjZTRlNGYyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjQuODk4NzNcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNzMgMjRDODQuMzM2NCAyNCA5NS4zMjIxIDI3LjkzMDcgMTA0LjA4NSAzNS4xMjI1QzExMi44NDggNDIuMzE0MiAxMTguODQ3IDUyLjMyMiAxMjEuMDU4IDYzLjQ0MDZDMTIzLjI3IDc0LjU1OTIgMTIxLjU1OCA4Ni4xMDA2IDExNi4yMTQgOTYuMDk4NEMxMTAuODcgMTA2LjA5NiAxMDIuMjI1IDExMy45MzIgOTEuNzUxNSAxMTguMjdDODEuMjc4IDEyMi42MDggNjkuNjI0MyAxMjMuMTgxIDU4Ljc3NjEgMTE5Ljg5QzQ3LjkyNzggMTE2LjU5OSAzOC41NTYyIDEwOS42NDkgMzIuMjU4IDEwMC4yMjNDMjUuOTU5OCA5MC43OTcxIDIzLjEyNDggNzkuNDc5IDI0LjIzNTkgNjguMTk3MkMyNS4zNDcxIDU2LjkxNTMgMzAuMzM1NyA0Ni4zNjc4IDM4LjM1MTggMzguMzUxOFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDBfbGluZWFyXzYyMjoxMzYxNylcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk03MyA1LjAwMDAxQzg0LjM2NSA1LjAwMDAxIDk1LjU0ODggNy44NDg1MiAxMDUuNTI5IDEzLjI4NTJDMTE1LjUwOSAxOC43MjE4IDEyMy45NjggMjYuNTczMiAxMzAuMTMxIDM2LjEyMTdDMTM2LjI5NSA0NS42NzAyIDEzOS45NjcgNTYuNjExMiAxNDAuODEyIDY3Ljk0NDhDMTQxLjY1NyA3OS4yNzgzIDEzOS42NDggOTAuNjQyOSAxMzQuOTY4IDEwMUMxMzAuMjg4IDExMS4zNTcgMTIzLjA4NyAxMjAuMzc1IDExNC4wMjMgMTI3LjIzMkMxMDQuOTYgMTM0LjA4OCA5NC4zMjE4IDEzOC41NjMgODMuMDgyNCAxNDAuMjQ4QzcxLjg0MzEgMTQxLjkzMyA2MC4zNjA2IDE0MC43NzUgNDkuNjg0NSAxMzYuODc4QzM5LjAwODUgMTMyLjk4MSAyOS40NzkzIDEyNi40NzEgMjEuOTY4MSAxMTcuOTQyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MV9saW5lYXJfNjIyOjEzNjE3KVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTkuNjAyNzkgOTcuNTkyNkM2LjM3MzI1IDg5LjI2NzEgNC44MTUxNSA4MC4zODcxIDUuMDE3NDUgNzEuNDU5NUM1LjIxOTc1IDYyLjUzMTkgNy4xNzg1IDUzLjczMTYgMTAuNzgxOCA0NS41NjFDMTQuMzg1MiAzNy4zOTA0IDE5LjU2MjYgMzAuMDA5NSAyNi4wMTg0IDIzLjgzOThDMzIuNDc0MiAxNy42NzAxIDQwLjA4MiAxMi44MzIzIDQ4LjQwNzUgOS42MDI4XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50Ml9saW5lYXJfNjIyOjEzNjE3KVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTczIDUuMDAwMDFDODYuNjUwNCA1LjAwMDAxIDk5Ljk4NDkgOS4xMDgzMSAxMTEuMjY5IDE2Ljc5MDRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQzX2xpbmVhcl82MjI6MTM2MTcpXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgICAgY3g9XCI3My41XCJcbiAgICAgICAgICAgICAgICAgICAgICBjeT1cIjcyLjVcIlxuICAgICAgICAgICAgICAgICAgICAgIHI9XCIyOVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlNGU0ZjJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNlNGU0ZjJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNzQgODIuODMzMkM2OC4wMTY3IDgyLjgzMzIgNjMuMTY2NiA3Ny45ODMxIDYzLjE2NjYgNzEuOTk5OEM2My4xNjY2IDY2LjAxNjYgNjguMDE2NyA2MS4xNjY1IDc0IDYxLjE2NjVDNzkuOTgzMiA2MS4xNjY1IDg0LjgzMzMgNjYuMDE2NiA4NC44MzMzIDcxLjk5OThDODQuODMzMyA3Ny45ODMxIDc5Ljk4MzIgODIuODMzMiA3NCA4Mi44MzMyWk03NCA4MC42NjY1Qzc2LjI5ODUgODAuNjY2NSA3OC41MDI5IDc5Ljc1MzQgODAuMTI4MiA3OC4xMjgxQzgxLjc1MzUgNzYuNTAyOCA4Mi42NjY2IDc0LjI5ODQgODIuNjY2NiA3MS45OTk4QzgyLjY2NjYgNjkuNzAxMyA4MS43NTM1IDY3LjQ5NjkgODAuMTI4MiA2NS44NzE2Qzc4LjUwMjkgNjQuMjQ2MyA3Ni4yOTg1IDYzLjMzMzIgNzQgNjMuMzMzMkM3MS43MDE0IDYzLjMzMzIgNjkuNDk3IDY0LjI0NjMgNjcuODcxNyA2NS44NzE2QzY2LjI0NjQgNjcuNDk2OSA2NS4zMzMzIDY5LjcwMTMgNjUuMzMzMyA3MS45OTk4QzY1LjMzMzMgNzQuMjk4NCA2Ni4yNDY0IDc2LjUwMjggNjcuODcxNyA3OC4xMjgxQzY5LjQ5NyA3OS43NTM0IDcxLjcwMTQgODAuNjY2NSA3NCA4MC42NjY1Wk03MC43NSA2Ny42NjY1SDc3LjI1TDc5Ljk1ODMgNzEuNDU4Mkw3NCA3Ny40MTY1TDY4LjA0MTYgNzEuNDU4Mkw3MC43NSA2Ny42NjY1Wk03MS44NjU4IDY5LjgzMzJMNzAuODY5MSA3MS4yMzA3TDc0IDc0LjM2MTVMNzcuMTMwOCA3MS4yMzA3TDc2LjEzNDEgNjkuODMzMkg3MS44NjU4WlwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM2QTZBOUZcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFpbnQwX2xpbmVhcl82MjI6MTM2MTdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCI0NS45OTk3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiMTlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDI9XCI0Ni4wODk3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMTI0LjMwOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNFMzIzRkZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiM3NTE3RjhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MV9saW5lYXJfNjIyOjEzNjE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiMS43NDEwM2UtMDZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCI4LjcwMjI4ZS0wNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjYuMzQ3MzllLTA4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMTQwLjY3N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiM0REZGREZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiM0REExRkZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50Ml9saW5lYXJfNjIyOjEzNjE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiMzYuNDk5N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB5MT1cIjUuMDcyNTdlLTA2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiMzYuNjIxM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB5Mj1cIjE0Mi4zNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNGRkQ0MjJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNGRjdEMDVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50M19saW5lYXJfNjIyOjEzNjE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiMS43NDEwM2UtMDZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCI4LjcwMjI4ZS0wNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjYuMzQ3MzllLTA4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMTQwLjY3N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiM0REZGREZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiM0REExRkZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTYwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIEdsb2JhbCBBY3Rpdml0aWVzXG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBmbGV4IGp1c3RpZnktY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAkMjMsOTg4XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGdhcC0xIHRleHQtZ3JlZW4tNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTIgMTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNi4wMDAwMSAwTDEyIDhILTMuMDUxNzZlLTA1TDYuMDAwMDEgMFpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4yJTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtY2VudGVyIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICBDb21wYXJlZCB0byBsYXN0IHdlZWsgJDEzLDk4OFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTJcIj5UYWlsb3JlZCB1aTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPjg5NjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTE2IG1sLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjggMjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC40XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcng9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTRlNGYyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC40XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIxOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U0ZTRmMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PVwiMzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlNGU0ZjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjUxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcng9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTRlNGYyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTAgN0M4LjYyNjg3IDcgNy42MTE5NCAxNiAxNy43NjEyIDE2QzI3LjkxMDQgMTYgMjUuMzczMSA5IDM0IDlDNDIuNjI2OSA5IDQ0LjUxNTcgNSA1MS4yNTM3IDVDNTcuNzkzNiA1IDU5LjM3MzEgMTQuNSA2OCAxNC41XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQwX2xpbmVhcl82MjI6MTM2MzEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFpbnQwX2xpbmVhcl82MjI6MTM2MzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MT1cIjY4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCI3Ljc0OTk3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDI9XCIxLjY5NzAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTI9XCI4LjEwMDI5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0UzMjNGRlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjNzUxN0Y4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMlwiPkN1c3RvbWl6ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPjEyMDA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY4IDIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U0ZTRmMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PVwiMTlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlNGU0ZjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjM1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcng9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTRlNGYyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC40XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCI1MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U0ZTRmMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0wIDEyLjkyOUM4LjY5MDc3IDEyLjkyOSA3LjY2ODMzIDkuNDc1ODQgMTcuODkyOCA5LjQ3NTg0QzI4LjExNzIgOS40NzU4NCAyNS41NjExIDE1Ljk1MjQgMzQuMjUxOSAxNS45NTI0QzQyLjk0MjYgMTUuOTUyNCA0NC44NDU1IDEwLjkyOSA1MS42MzM0IDEwLjkyOUM1OC4yMjE3IDEwLjkyOSA1OS4zMDkyIDUgNjggNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MF9saW5lYXJfNjIyOjEzNjQwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJfNjIyOjEzNjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCIzNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiMzRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Mj1cIjE1Ljk1MjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjOEFGRjZDXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMwMkM3NTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0yXCI+T3RoZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj4xMjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTE2IG1sLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjggMjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC40XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcng9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTRlNGYyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC40XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIxOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U0ZTRmMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PVwiMzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlNGU0ZjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjUxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcng9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTRlNGYyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTAgNkM4LjYyNjg3IDYgNi44NTA3NSAxMi43NSAxNyAxMi43NUMyNy4xNDkzIDEyLjc1IDI1LjM3MzEgOSAzNCA5QzQyLjYyNjkgOSA0Mi4yNjIgMTMuODc1IDQ5IDEzLjg3NUM1NS41Mzk4IDEzLjg3NSA1OC4zNzMxIDYgNjcgNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MF9saW5lYXJfNjIyOjEzNjQ5KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJfNjIyOjEzNjQ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCI2N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiNy45Njg3M1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiMS42NzM2OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiOC40NDM3N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNGRkQ0MjJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0ZGN0QwNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBweS02IHB4LTYgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWdyYXktNzAwXCI+RG93bmxvYWRzPC9oNT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktOFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDBcIj42NCw1JTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICBDb21wYXJlZCB0byBsYXN0IHdlZWsgJDEzLDk4OFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMTggNjlcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMCA2Ny41QzI3Ljg5OTggNjcuNSAyNC42MDAyIDE1IDUyLjUgMTVDODAuMzk5OCAxNSA3Ny4xMDAyIDI5IDEwNSAyOUMxMzIuOSAyOSAxMjguNiA1MiAxNTYuNSA1MkMxODQuNCA1MiAxODkuMTI3IDYzLjgxNTggMjE3LjAyNyA2My44MTU4XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MF9saW5lYXJfNjIyOjEzNjY0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMCA2Ny41QzI3LjI2MDEgNjcuNSAzMC43Mzk5IDMxIDU4IDMxQzg1LjI2MDEgMzEgODAuNzM5OSAyIDEwOCAyQzEzNS4yNiAyIDEzNC43NCA0MyAxNjIgNDNDMTg5LjI2IDQzIDE5MC43NCA2My42NjUgMjE4IDYzLjY2NVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDFfbGluZWFyXzYyMjoxMzY2NClcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJfNjIyOjEzNjY0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiMjE3LjAyN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB5MT1cIjE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiNy45MTI0NFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB5Mj1cIjE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzRERkZERlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzREQTFGRlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFpbnQxX2xpbmVhcl82MjI6MTM2NjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCIyMThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCIxOC4zNzQ4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiNS40MzYyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMTguOTc5NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNFMzIzRkZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiM3NTE3RjhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm10LTYgLW1iLTIgdy1mdWxsIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0yXCI+RnJvbSBuZXcgdXNlcnM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj44OTY8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY4IDIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U0ZTRmMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PVwiMTlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlNGU0ZjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjM1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcng9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTRlNGYyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC40XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCI1MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U0ZTRmMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0wIDdDOC42MjY4NyA3IDcuNjExOTQgMTYgMTcuNzYxMiAxNkMyNy45MTA0IDE2IDI1LjM3MzEgOSAzNCA5QzQyLjYyNjkgOSA0NC41MTU3IDUgNTEuMjUzNyA1QzU3Ljc5MzYgNSA1OS4zNzMxIDE0LjUgNjggMTQuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MF9saW5lYXJfNjIyOjEzNjMxKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJfNjIyOjEzNjMxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCI2OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiNy43NDk5N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiMS42OTcwMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiOC4xMDAyOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNFMzIzRkZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzc1MTdGOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTJcIj5Gcm9tIG9sZCB1c2VyczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPjEyMDA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY4IDIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U0ZTRmMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PVwiMTlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlNGU0ZjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjM1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcng9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTRlNGYyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC40XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCI1MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U0ZTRmMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0wIDEyLjkyOUM4LjY5MDc3IDEyLjkyOSA3LjY2ODMzIDkuNDc1ODQgMTcuODkyOCA5LjQ3NTg0QzI4LjExNzIgOS40NzU4NCAyNS41NjExIDE1Ljk1MjQgMzQuMjUxOSAxNS45NTI0QzQyLjk0MjYgMTUuOTUyNCA0NC44NDU1IDEwLjkyOSA1MS42MzM0IDEwLjkyOUM1OC4yMjE3IDEwLjkyOSA1OS4zMDkyIDUgNjggNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MF9saW5lYXJfNjIyOjEzNjQwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJfNjIyOjEzNjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCIzNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiMzRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Mj1cIjE1Ljk1MjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjOEFGRjZDXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMwMkM3NTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpoLWZ1bGwgcHktOCBweC02IHRleHQtZ3JheS02MDAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNDAgbS1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1NiA1NlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yNy45OTg1IDIuODQwNzFDMzEuMjg0OSAyLjg0MDcxIDM0LjUzOSAzLjQ4OCAzNy41NzUyIDQuNzQ1NjJDNDAuNjExMyA2LjAwMzI0IDQzLjM3MDEgNy44NDY1NyA0NS42OTM4IDEwLjE3MDNDNDguMDE3NiAxMi40OTQxIDQ5Ljg2MSAxNS4yNTI5IDUxLjExODYgMTguMjg5QzUyLjM3NjIgMjEuMzI1MiA1My4wMjM1IDI0LjU3OTMgNTMuMDIzNSAyNy44NjU3QzUzLjAyMzUgMzEuMTUyIDUyLjM3NjIgMzQuNDA2MSA1MS4xMTg2IDM3LjQ0MjNDNDkuODYxIDQwLjQ3ODUgNDguMDE3NiA0My4yMzcyIDQ1LjY5MzggNDUuNTYxQzQzLjM3MDEgNDcuODg0OCA0MC42MTEzIDQ5LjcyODEgMzcuNTc1MiA1MC45ODU3QzM0LjUzOSA1Mi4yNDMzIDMxLjI4NDkgNTIuODkwNiAyNy45OTg1IDUyLjg5MDZDMjQuNzEyMiA1Mi44OTA2IDIxLjQ1ODEgNTIuMjQzMyAxOC40MjE5IDUwLjk4NTdDMTUuMzg1NyA0OS43MjgxIDEyLjYyNyA0Ny44ODQ4IDEwLjMwMzIgNDUuNTYxQzcuOTc5NDMgNDMuMjM3MiA2LjEzNjEgNDAuNDc4NSA0Ljg3ODQ4IDM3LjQ0MjNDMy42MjA4NiAzNC40MDYxIDIuOTczNTcgMzEuMTUyIDIuOTczNTcgMjcuODY1N0MyLjk3MzU3IDI0LjU3OTMgMy42MjA4NiAyMS4zMjUyIDQuODc4NDggMTguMjg5QzYuMTM2MTEgMTUuMjUyOSA3Ljk3OTQzIDEyLjQ5NDEgMTAuMzAzMiAxMC4xNzAzQzEyLjYyNyA3Ljg0NjU2IDE1LjM4NTcgNi4wMDMyNCAxOC40MjE5IDQuNzQ1NjJDMjEuNDU4MSAzLjQ4OCAyNC43MTIyIDIuODQwNzEgMjcuOTk4NSAyLjg0MDcxTDI3Ljk5ODUgMi44NDA3MVpcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNlNGU0ZjJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yNy4zMDEgMi41MDk1OEMzMy4wMzg2IDIuMzUyMjUgMzguNjYxNCA0LjEzNTIyIDQzLjI2IDcuNTcwMDRDNDcuODU4NSAxMS4wMDQ5IDUxLjE2MzcgMTUuODkwNyA1Mi42NDEgMjEuNDM3QzU0LjExODIgMjYuOTgzNCA1My42ODExIDMyLjg2NTkgNTEuNDAwMiAzOC4xMzNDNDkuMTE5NCA0My40MDAxIDQ1LjEyODMgNDcuNzQzNyA0MC4wNzI2IDUwLjQ2MTFDMzUuMDE2OSA1My4xNzg1IDI5LjE5MjMgNTQuMTEwOCAyMy41NDEgNTMuMTA3MUMxNy44ODk3IDUyLjEwMzQgMTIuNzQyMyA0OS4yMjI1IDguOTMxNDUgNDQuOTMwNUM1LjEyMDYyIDQwLjYzODQgMi44NjkyNiAzNS4xODYxIDIuNTQxNTkgMjkuNDU1OEMyLjIxMzkxIDIzLjcyNTQgMy44MjkwOSAxOC4wNTIxIDcuMTI1ODIgMTMuMzUzNlwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDBfbGluZWFyXzYyMjoxMzY5NilcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzLjMyNzkgMzAuNzQ2N0MxMy4zOTEyIDI5LjQ4IDEzLjgzNDYgMjguNTA0NyAxNC42NTc5IDI3LjgyMDdDMTUuNDkzOSAyNy4xMjQgMTYuNTg5NiAyNi43NzU3IDE3Ljk0NDkgMjYuNzc1N0MxOC44Njk2IDI2Ljc3NTcgMTkuNjYxMiAyNi45NDA0IDIwLjMxOTkgMjcuMjY5N0MyMC45Nzg2IDI3LjU4NjQgMjEuNDcyNiAyOC4wMjM0IDIxLjgwMTkgMjguNTgwN0MyMi4xNDM5IDI5LjEyNTQgMjIuMzE0OSAyOS43NDYgMjIuMzE0OSAzMC40NDI3QzIyLjMxNDkgMzEuMjQwNyAyMi4xMDU5IDMxLjkxODQgMjEuNjg3OSAzMi40NzU3QzIxLjI4MjYgMzMuMDIwNCAyMC43OTQ5IDMzLjM4NzcgMjAuMjI0OSAzMy41Nzc3VjMzLjY1MzdDMjAuOTU5NiAzMy44ODE3IDIxLjUyOTYgMzQuMjg3IDIxLjkzNDkgMzQuODY5N0MyMi4zNTI5IDM1LjQ1MjQgMjIuNTYxOSAzNi4xOTk3IDIyLjU2MTkgMzcuMTExN0MyMi41NjE5IDM3Ljg3MTcgMjIuMzg0NiAzOC41NDk0IDIyLjAyOTkgMzkuMTQ0N0MyMS42ODc5IDM5Ljc0IDIxLjE3NDkgNDAuMjA4NyAyMC40OTA5IDQwLjU1MDdDMTkuODE5NiA0MC44OCAxOS4wMDg5IDQxLjA0NDcgMTguMDU4OSA0MS4wNDQ3QzE2LjYyNzYgNDEuMDQ0NyAxNS40NjIyIDQwLjY4MzcgMTQuNTYyOSAzOS45NjE3QzEzLjY2MzYgMzkuMjM5NyAxMy4xODg2IDM4LjE3NTcgMTMuMTM3OSAzNi43Njk3SDE1LjcyMTlDMTUuNzQ3MiAzNy4zOTA0IDE1Ljk1NjIgMzcuODkwNyAxNi4zNDg5IDM4LjI3MDdDMTYuNzU0MiAzOC42MzggMTcuMzA1MiAzOC44MjE3IDE4LjAwMTkgMzguODIxN0MxOC42NDc5IDM4LjgyMTcgMTkuMTQxOSAzOC42NDQ0IDE5LjQ4MzkgMzguMjg5N0MxOS44Mzg2IDM3LjkyMjQgMjAuMDE1OSAzNy40NTM3IDIwLjAxNTkgMzYuODgzN0MyMC4wMTU5IDM2LjEyMzcgMTkuNzc1MiAzNS41NzkgMTkuMjkzOSAzNS4yNDk3QzE4LjgxMjYgMzQuOTIwNCAxOC4wNjUyIDM0Ljc1NTcgMTcuMDUxOSAzNC43NTU3SDE2LjUwMDlWMzIuNTcwN0gxNy4wNTE5QzE4Ljg1MDYgMzIuNTcwNyAxOS43NDk5IDMxLjk2OSAxOS43NDk5IDMwLjc2NTdDMTkuNzQ5OSAzMC4yMjEgMTkuNTg1MiAyOS43OTY3IDE5LjI1NTkgMjkuNDkyN0MxOC45MzkyIDI5LjE4ODcgMTguNDc2OSAyOS4wMzY3IDE3Ljg2ODkgMjkuMDM2N0MxNy4yNzM2IDI5LjAzNjcgMTYuODExMiAyOS4yMDE0IDE2LjQ4MTkgMjkuNTMwN0MxNi4xNjUyIDI5Ljg0NzQgMTUuOTgxNiAzMC4yNTI3IDE1LjkzMDkgMzAuNzQ2N0gxMy4zMjc5Wk0yNS42NDk5IDM3Ljk0NzdDMjYuODY1OSAzNi45MzQ0IDI3LjgzNDkgMzYuMDkyIDI4LjU1NjkgMzUuNDIwN0MyOS4yNzg5IDM0LjczNjcgMjkuODgwNiAzNC4wMjc0IDMwLjM2MTkgMzMuMjkyN0MzMC44NDMzIDMyLjU1OCAzMS4wODM5IDMxLjgzNiAzMS4wODM5IDMxLjEyNjdDMzEuMDgzOSAzMC40ODA3IDMwLjkzMTkgMjkuOTc0IDMwLjYyNzkgMjkuNjA2N0MzMC4zMjM5IDI5LjIzOTQgMjkuODU1MyAyOS4wNTU3IDI5LjIyMTkgMjkuMDU1N0MyOC41ODg2IDI5LjA1NTcgMjguMTAwOSAyOS4yNzEgMjcuNzU4OSAyOS43MDE3QzI3LjQxNjkgMzAuMTE5NyAyNy4yMzk2IDMwLjY5NiAyNy4yMjY5IDMxLjQzMDdIMjQuNjQyOUMyNC42OTM2IDI5LjkxMDcgMjUuMTQzMyAyOC43NTggMjUuOTkxOSAyNy45NzI3QzI2Ljg1MzMgMjcuMTg3NCAyNy45NDI2IDI2Ljc5NDcgMjkuMjU5OSAyNi43OTQ3QzMwLjcwMzkgMjYuNzk0NyAzMS44MTIzIDI3LjE4MSAzMi41ODQ5IDI3Ljk1MzdDMzMuMzU3NiAyOC43MTM3IDMzLjc0MzkgMjkuNzIwNyAzMy43NDM5IDMwLjk3NDdDMzMuNzQzOSAzMS45NjI3IDMzLjQ3NzkgMzIuOTA2NCAzMi45NDU5IDMzLjgwNTdDMzIuNDEzOSAzNC43MDUgMzEuODA1OSAzNS40OTA0IDMxLjEyMTkgMzYuMTYxN0MzMC40Mzc5IDM2LjgyMDQgMjkuNTQ0OSAzNy42MTg0IDI4LjQ0MjkgMzguNTU1N0gzNC4wNDc5VjQwLjc1OTdIMjQuNjYxOVYzOC43ODM3TDI1LjY0OTkgMzcuOTQ3N1pcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzYuMTk0OCAyOC44ODQyQzM2LjE5NDggMjkuNDQzOCAzNi4yNTU3IDI5Ljg2MzQgMzYuMzc3NSAzMC4xNDMyQzM2LjQ5OTIgMzAuNDIzIDM2LjY5NjcgMzAuNTYyOCAzNi45Njk5IDMwLjU2MjhDMzcuNTA5NyAzMC41NjI4IDM3Ljc3OTYgMzAuMDAzMyAzNy43Nzk2IDI4Ljg4NDJDMzcuNzc5NiAyNy43NzE3IDM3LjUwOTcgMjcuMjE1NSAzNi45Njk5IDI3LjIxNTVDMzYuNjk2NyAyNy4yMTU1IDM2LjQ5OTIgMjcuMzUzNyAzNi4zNzc1IDI3LjYzMDJDMzYuMjU1NyAyNy45MDY3IDM2LjE5NDggMjguMzI0NyAzNi4xOTQ4IDI4Ljg4NDJaTTM4LjQ1NiAyOC44ODQyQzM4LjQ1NiAyOS42MzQ3IDM4LjMyOTMgMzAuMjAyNCAzOC4wNzU4IDMwLjU4NzVDMzcuODI1NyAzMC45NjkzIDM3LjQ1NyAzMS4xNjAyIDM2Ljk2OTkgMzEuMTYwMkMzNi41MDkxIDMxLjE2MDIgMzYuMTUwNCAzMC45NjQ0IDM1Ljg5MzYgMzAuNTcyN0MzNS42NDAyIDMwLjE4MSAzNS41MTM1IDI5LjYxODIgMzUuNTEzNSAyOC44ODQyQzM1LjUxMzUgMjguMTM3MSAzNS42MzUyIDI3LjU3NDIgMzUuODc4OCAyNy4xOTU3QzM2LjEyNTcgMjYuODE3MiAzNi40ODk0IDI2LjYyNzkgMzYuOTY5OSAyNi42Mjc5QzM3LjQ0NzIgMjYuNjI3OSAzNy44MTQyIDI2LjgyMzggMzguMDcwOSAyNy4yMTU1QzM4LjMyNzYgMjcuNjA3MSAzOC40NTYgMjguMTYzNCAzOC40NTYgMjguODg0MlpNNDAuNTM5NSAzMS43Nzc0QzQwLjUzOTUgMzIuMzQwMiA0MC42MDAzIDMyLjc2MTUgNDAuNzIyMSAzMy4wNDEzQzQwLjg0MzkgMzMuMzE3OCA0MS4wNDMgMzMuNDU2IDQxLjMxOTUgMzMuNDU2QzQxLjU5NiAzMy40NTYgNDEuODAwMSAzMy4zMTk0IDQxLjkzMTcgMzMuMDQ2MkM0Mi4wNjM0IDMyLjc2OTcgNDIuMTI5MiAzMi4zNDY4IDQyLjEyOTIgMzEuNzc3NEM0Mi4xMjkyIDMxLjIxNDUgNDIuMDYzNCAzMC43OTgyIDQxLjkzMTcgMzAuNTI4M0M0MS44MDAxIDMwLjI1NTEgNDEuNTk2IDMwLjExODUgNDEuMzE5NSAzMC4xMTg1QzQxLjA0MyAzMC4xMTg1IDQwLjg0MzkgMzAuMjU1MSA0MC43MjIxIDMwLjUyODNDNDAuNjAwMyAzMC43OTgyIDQwLjUzOTUgMzEuMjE0NSA0MC41Mzk1IDMxLjc3NzRaTTQyLjgwNTYgMzEuNzc3NEM0Mi44MDU2IDMyLjUyNDUgNDIuNjc4OSAzMy4wOTA2IDQyLjQyNTQgMzMuNDc1N0M0Mi4xNzUzIDMzLjg1NzUgNDEuODA2NyAzNC4wNDg0IDQxLjMxOTUgMzQuMDQ4NEM0MC44NTIxIDM0LjA0ODQgNDAuNDkxNyAzMy44NTI2IDQwLjIzODMgMzMuNDYwOUMzOS45ODgxIDMzLjA2OTMgMzkuODYzMSAzMi41MDgxIDM5Ljg2MzEgMzEuNzc3NEMzOS44NjMxIDMxLjAzMDIgMzkuOTg0OSAzMC40Njc0IDQwLjIyODQgMzAuMDg4OUM0MC40NzUzIDI5LjcxMDQgNDAuODM5IDI5LjUyMTEgNDEuMzE5NSAyOS41MjExQzQxLjc4NjkgMjkuNTIxMSA0Mi4xNTA2IDI5LjcxNTMgNDIuNDEwNiAzMC4xMDM3QzQyLjY3MzkgMzAuNDg4OCA0Mi44MDU2IDMxLjA0NjcgNDIuODA1NiAzMS43Nzc0Wk00MS41MzE4IDI2LjczMTZMMzcuNTI3OCAzMy45NDk3SDM2LjgwMjFMNDAuODA2MSAyNi43MzE2SDQxLjUzMThaXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjMuNTc3NiAxOC40MTk4SDI1LjU0MjRWMjIuODQwN0gyMy41Nzc2VjE4LjQxOThaTTMwLjQ1NDUgMTYuNDU1SDMyLjQxOTNWMjIuODQwN0gzMC40NTQ1VjE2LjQ1NVpNMjcuMDE2MSAxMy41MDc4SDI4Ljk4MDlWMjIuODQwN0gyNy4wMTYxVjEzLjUwNzhaXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzZBNkE5RlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYWludDBfbGluZWFyXzYyMjoxMzY5NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4MT1cIjUuNTQ3OTFlLTA3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiNDIuMDAwMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjU0LjYwMzlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTI9XCI0MS45NTM1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0UzMjNGRlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzc1MTdGOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTcwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIEFzayB0byBjdXN0b21pemVcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JheS03MDBcIj4yODwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBnYXAtMSB0ZXh0LWdyZWVuLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEyIDE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTYuMDAwMDEgMEwxMiA4SC0zLjA1MTc2ZS0wNUw2LjAwMDAxIDBaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MiU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ29tcGFyZWQgdG8gbGFzdCB3ZWVrIDEzXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm10LTYgLW1iLTIgdy1mdWxsIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0yXCI+VGFpbG9yZWQgdWk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj44OTY8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY4IDIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U0ZTRmMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PVwiMTlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlNGU0ZjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjM1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcng9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTRlNGYyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC40XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCI1MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U0ZTRmMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0wIDdDOC42MjY4NyA3IDcuNjExOTQgMTYgMTcuNzYxMiAxNkMyNy45MTA0IDE2IDI1LjM3MzEgOSAzNCA5QzQyLjYyNjkgOSA0NC41MTU3IDUgNTEuMjUzNyA1QzU3Ljc5MzYgNSA1OS4zNzMxIDE0LjUgNjggMTQuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MF9saW5lYXJfNjIyOjEzNjMxKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJfNjIyOjEzNjMxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCI2OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiNy43NDk5N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiMS42OTcwMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiOC4xMDAyOVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNFMzIzRkZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzc1MTdGOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTJcIj5DdXN0b21pemU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj4xMjAwPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTYgbWwtYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2OCAyMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlNGU0ZjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjE5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcng9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTRlNGYyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC40XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCIzNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U0ZTRmMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PVwiNTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlNGU0ZjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMCAxMi45MjlDOC42OTA3NyAxMi45MjkgNy42NjgzMyA5LjQ3NTg0IDE3Ljg5MjggOS40NzU4NEMyOC4xMTcyIDkuNDc1ODQgMjUuNTYxMSAxNS45NTI0IDM0LjI1MTkgMTUuOTUyNEM0Mi45NDI2IDE1Ljk1MjQgNDQuODQ1NSAxMC45MjkgNTEuNjMzNCAxMC45MjlDNTguMjIxNyAxMC45MjkgNTkuMzA5MiA1IDY4IDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDBfbGluZWFyXzYyMjoxMzY0MClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYWludDBfbGluZWFyXzYyMjoxMzY0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiMzRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5MT1cIjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjM0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTI9XCIxNS45NTI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzhBRkY2Q1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMDJDNzUxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMlwiPk90aGVyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+MTI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY4IDIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U0ZTRmMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PVwiMTlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNlNGU0ZjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjM1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcng9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZTRlNGYyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC40XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9XCI1MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2U0ZTRmMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0wIDZDOC42MjY4NyA2IDYuODUwNzUgMTIuNzUgMTcgMTIuNzVDMjcuMTQ5MyAxMi43NSAyNS4zNzMxIDkgMzQgOUM0Mi42MjY5IDkgNDIuMjYyIDEzLjg3NSA0OSAxMy44NzVDNTUuNTM5OCAxMy44NzUgNTguMzczMSA2IDY3IDZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDBfbGluZWFyXzYyMjoxMzY0OSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYWludDBfbGluZWFyXzYyMjoxMzY0OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiNjdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5MT1cIjcuOTY4NzNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjEuNjczNjhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Mj1cIjguNDQzNzdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRkZENDIyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNGRjdEMDVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9O1xuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNCB0ZXh0LXdoaXRlIHotMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBtZDpqdXN0aWZ5LWNlbnRlciBwbC0zIHctMTQgbWQ6dy02NCBoLTE0IGJnLWJsdWUtODAwIGRhcms6YmctZ3JheS04MDAgYm9yZGVyLW5vbmVcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cInctNyBoLTcgbWQ6dy0xMCBtZDpoLTEwIG1yLTIgcm91bmRlZC1tZCBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vdGhlcm1pbmljMjAxOC5ldS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNy9kdW1teS1hdmF0YXIuanBnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+QURNSU48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGgtMTQgYmctYmx1ZS04MDAgZGFyazpiZy1ncmF5LTgwMCBoZWFkZXItcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkIGZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBtYXgtdy14bCBtci00IHAtMiBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgdGV4dC1ncmF5LTYwMCBoLTUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMSAyMWwtNi02bTItNWE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHpcIj48L3BhdGg+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgbmFtZT1cIlwiXG4gICAgICAgICAgICBpZD1cIlwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcGwtMyB0ZXh0LXNtIHRleHQtYmxhY2sgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBiZy10cmFuc3BhcmVudFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgLy8gQGNsaWNrPVwidG9nZ2xlVGhlbWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBwLTIgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHJvdW5kZWQtZnVsbCBzaGFkb3ctbWQgYmctYmx1ZS0yMDAgaG92ZXI6YmctYmx1ZS0yMDAgZGFyazpiZy1ncmF5LTUwIGRhcms6aG92ZXI6YmctZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeC1zaG93PVwiaXNEYXJrXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtZ3JheS03MDAgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTUwMCBncm91cC1mb2N1czp0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTcwMCBkYXJrOmdyb3VwLWhvdmVyOnRleHQtZ3JheS01MDAgZGFyazpncm91cC1mb2N1czp0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgZD1cIk0xMS4wNDkgMi45MjdjLjMtLjkyMSAxLjYwMy0uOTIxIDEuOTAyIDBsMS41MTkgNC42NzRhMSAxIDAgMDAuOTUuNjloNC45MTVjLjk2OSAwIDEuMzcxIDEuMjQuNTg4IDEuODFsLTMuOTc2IDIuODg4YTEgMSAwIDAwLS4zNjMgMS4xMThsMS41MTggNC42NzRjLjMuOTIyLS43NTUgMS42ODgtMS41MzggMS4xMThsLTMuOTc2LTIuODg4YTEgMSAwIDAwLTEuMTc2IDBsLTMuOTc2IDIuODg4Yy0uNzgzLjU3LTEuODM4LS4xOTctMS41MzgtMS4xMThsMS41MTgtNC42NzRhMSAxIDAgMDAtLjM2My0xLjExOGwtMy45NzYtMi44ODhjLS43ODQtLjU3LS4zOC0xLjgxLjU4OC0xLjgxaDQuOTE0YTEgMSAwIDAwLjk1MS0uNjlsMS41MTktNC42NzR6XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHgtc2hvdz1cIiFpc0RhcmtcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LTcwMCBncm91cC1ob3Zlcjp0ZXh0LWdyYXktNTAwIGdyb3VwLWZvY3VzOnRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNzAwIGRhcms6Z3JvdXAtaG92ZXI6dGV4dC1ncmF5LTUwMCBkYXJrOmdyb3VwLWZvY3VzOnRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTIwLjM1NCAxNS4zNTRBOSA5IDAgMDE4LjY0NiAzLjY0NiA5LjAwMyA5LjAwMyAwIDAwMTIgMjFhOS4wMDMgOS4wMDMgMCAwMDguMzU0LTUuNjQ2elwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgdy1weCBoLTYgbXgtMyBiZy1ncmF5LTQwMCBkYXJrOmJnLWdyYXktNzAwXCI+PC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiL2xvZ291dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1yLTQgaG92ZXI6dGV4dC1ibHVlLTEwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IG1yLTFcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTE3IDE2bDQtNG0wIDBsLTQtNG00IDRIN202IDR2MWEzIDMgMCAwMS0zIDNINmEzIDMgMCAwMS0zLTNWN2EzIDMgMCAwMTMtM2g0YTMgMyAwIDAxMyAzdjFcIlxuICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15Q29tcG9uZW50KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+SGkgZnJvbSBNeUNvbXBvbmVudDwvaDE+XG4gICAgICA8cD5UaGlzIGlzIG15IGZpcnN0IEpTWCBlbGVtZW50LjwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsIlJlYWN0IiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJmdWxsTmFtZSIsImhyZWYiLCJ2aWV3Qm94IiwiZmlsbCIsImQiLCJ4bWxucyIsImZpbGxSdWxlIiwiY2xpcFJ1bGUiLCJzdHJva2UiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImhpZGRlbiIsImlkIiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImN4IiwiY3kiLCJyIiwieDEiLCJ5MSIsIngyIiwieTIiLCJncmFkaWVudFVuaXRzIiwic3RvcENvbG9yIiwib2Zmc2V0Iiwib3BhY2l0eSIsIndpZHRoIiwiaGVpZ2h0IiwicngiLCJ4IiwiSGVhZGVyIiwiTXlDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9