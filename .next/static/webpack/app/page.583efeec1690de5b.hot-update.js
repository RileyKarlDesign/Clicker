"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\"use strict\";\n\nfunction Home() {\n    _s();\n    const [allData, setAllData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const addClick = async ()=>{\n        try {\n            const data = await fetch(\"/api/clicks\");\n            const responce = await data.json();\n            logData(responce.runningCount);\n            setAllData(responce.runningCount);\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    const logData = (e)=>{\n        console.log(\"data\", e);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"click\", ()=>{\n            addClick();\n        });\n        const fetchData = async ()=>{\n            try {\n                const data = await fetch(\"/api/clicks\");\n                const responce = await data.json();\n                logData(responce.runningCount);\n                setAllData(responce.runningCount);\n            } catch (e) {\n                console.log(e);\n            }\n        };\n        fetchData();\n    }, []);\n    if (!allData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/rileykarl/Documents/Work/Code/Study/clicks/clicks-counter/src/app/page.js\",\n            lineNumber: 50,\n            columnNumber: 12\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \" Running Count : \",\n                        allData[0].click_count,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rileykarl/Documents/Work/Code/Study/clicks/clicks-counter/src/app/page.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \" Last Click : \",\n                        allData[0].timestamp,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rileykarl/Documents/Work/Code/Study/clicks/clicks-counter/src/app/page.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rileykarl/Documents/Work/Code/Study/clicks/clicks-counter/src/app/page.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(Home, \"upnytrp6AOtYZ/xX5jMNYzp9Fzo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQUU0QztBQUU3QixTQUFTRTs7SUFFdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdILCtDQUFRQSxDQUFDO0lBR3ZDLE1BQU1JLFdBQVc7UUFDZixJQUFJO1lBQ0YsTUFBTUMsT0FBTyxNQUFNQyxNQUFNO1lBQ3pCLE1BQU1DLFdBQVcsTUFBTUYsS0FBS0csSUFBSTtZQUNoQ0MsUUFBUUYsU0FBU0csWUFBWTtZQUM3QlAsV0FBV0ksU0FBU0csWUFBWTtRQUNsQyxFQUFFLE9BQU9DLEdBQUc7WUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0Y7SUFFQSxNQUFNRixVQUFVLENBQUNFO1FBRWZDLFFBQVFDLEdBQUcsQ0FBQyxRQUFRRjtJQUV0QjtJQUlBWixnREFBU0EsQ0FBQztRQUVSZSxTQUFTQyxnQkFBZ0IsQ0FBQyxTQUFTO1lBQ2pDWDtRQUNGO1FBQ0EsTUFBTVksWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1YLE9BQU8sTUFBTUMsTUFBTTtnQkFDekIsTUFBTUMsV0FBVyxNQUFNRixLQUFLRyxJQUFJO2dCQUNoQ0MsUUFBUUYsU0FBU0csWUFBWTtnQkFDN0JQLFdBQVdJLFNBQVNHLFlBQVk7WUFDbEMsRUFBRSxPQUFPQyxHQUFHO2dCQUNWQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2Q7UUFDRjtRQUVBSztJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ2QsU0FBUztRQUNaLHFCQUFPLDhEQUFDZTtzQkFBSTs7Ozs7O0lBQ2QsT0FBTztRQUVMLHFCQUNFLDhEQUFDQTs7OEJBQ0MsOERBQUNDOzt3QkFBRTt3QkFBa0JoQixPQUFPLENBQUMsRUFBRSxDQUFDaUIsV0FBVzt3QkFBQzs7Ozs7Ozs4QkFDNUMsOERBQUNEOzt3QkFBRTt3QkFBZWhCLE9BQU8sQ0FBQyxFQUFFLENBQUNrQixTQUFTO3dCQUFDOzs7Ozs7Ozs7Ozs7O0lBRzdDO0FBQ0Y7R0F0RHdCbkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG4ndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFthbGxEYXRhLCBzZXRBbGxEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG5cblxuICBjb25zdCBhZGRDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFwiL2FwaS9jbGlja3NcIilcbiAgICAgIGNvbnN0IHJlc3BvbmNlID0gYXdhaXQgZGF0YS5qc29uKClcbiAgICAgIGxvZ0RhdGEocmVzcG9uY2UucnVubmluZ0NvdW50KVxuICAgICAgc2V0QWxsRGF0YShyZXNwb25jZS5ydW5uaW5nQ291bnQpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbG9nRGF0YSA9IChlKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZygnZGF0YScsIGUpXG5cbiAgfVxuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFkZENsaWNrKCk7XG4gICAgfSlcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NsaWNrc1wiKVxuICAgICAgICBjb25zdCByZXNwb25jZSA9IGF3YWl0IGRhdGEuanNvbigpXG4gICAgICAgIGxvZ0RhdGEocmVzcG9uY2UucnVubmluZ0NvdW50KVxuICAgICAgICBzZXRBbGxEYXRhKHJlc3BvbmNlLnJ1bm5pbmdDb3VudClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgaWYgKCFhbGxEYXRhKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICB9IGVsc2Uge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPiBSdW5uaW5nIENvdW50IDoge2FsbERhdGFbMF0uY2xpY2tfY291bnR9IDwvcD5cbiAgICAgICAgPHA+IExhc3QgQ2xpY2sgOiB7YWxsRGF0YVswXS50aW1lc3RhbXB9IDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwiYWxsRGF0YSIsInNldEFsbERhdGEiLCJhZGRDbGljayIsImRhdGEiLCJmZXRjaCIsInJlc3BvbmNlIiwianNvbiIsImxvZ0RhdGEiLCJydW5uaW5nQ291bnQiLCJlIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZldGNoRGF0YSIsImRpdiIsInAiLCJjbGlja19jb3VudCIsInRpbWVzdGFtcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});